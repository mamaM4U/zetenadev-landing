# 🪐 ZETENA-VOID: COMMAND CENTER & MANAGEMENT BLUEPRINT

**Node Hostname:** `zetena-void` (Singapore)
**SSH Alias:** `zetena-void`
**Main Goal:** Central Monitoring, Management Hub, & High-Resource Ops.

---

## 📂 1. Folder Structure "Peta" VPS

Semua layanan wajib berada di bawah root `~/docker-stack/` untuk mempermudah manajemen, navigasi, dan backup:

```text
~/docker-stack/
├── infra/                          # Core Services (Infrastruktur)
│   ├── beszel/                     # Central Monitoring Hub (Beszel Hub)
│   ├── caddy/                      # Reverse Proxy & Auto-SSL
│   ├── monitoring/                 # Uptime Kuma & Global Health Check
│   └── portainer/                  # Container Management UI
└── projects/                       # Management Layer (Internal Tools)
    └── [project-name]/             # Tools pendukung atau internal dev
        ├── app/                    # Web App Management Interface
        ├── landing/                # Internal Documentation/Landing
        ├── backend/                # Management API / Automation Services
        └── services/               # Microservices Root
            └── [service-name]/     # Spesifik Service (Misal: bot-notification, sync-service)

```

---

## 🏗️ 2. Pola Deployment

Zetena-Void mendukung dua pola deployment tergantung kondisi dan kebutuhan proyek.

---

### Pola A: Build-Export-Upload (BEU) — *Manual / Local Build*

Cocok untuk: deployment manual, build dari mesin lokal, proyek tanpa CI/CD.

**Step-by-Step Workflow:**

1. **Local Build**: Proses kompilasi berat dilakukan sepenuhnya di mesin lokal (Development Machine).
2. **Docker Save**: Image yang sudah jadi dikompresi menjadi file `.tar.gz` untuk efisiensi transfer antar-negara (Local to Singapore).
3. **Secure Upload**: File dikirim ke direktori `/tmp/` di VPS menggunakan perintah `scp`.
4. **Remote Load**: Image di-load ke Docker daemon VPS tanpa perlu melakukan proses build ulang di server.
5. **Clean & Up**: Menghapus container lama, menjalankan `docker compose up -d`, dan membersihkan *image junk* dengan `prune`.

---

### Pola B: Build-Containerize-Deploy (BCD) — *CI/CD via Woodpecker*

Cocok untuk: proyek dengan CI/CD otomatis, build di-trigger via Git push, Woodpecker agent berjalan di VPS yang sama.

> ⚠️ **Catatan**: Build terjadi di dalam **isolated container Woodpecker runner** (bukan bare host), sehingga tetap aman dan tidak membebani sistem secara langsung. VPS dengan RAM 8GB sangat cukup untuk pola ini.

**Step-by-Step Workflow:**

1. **Git Push**: Developer push ke branch `main` di GitHub/Gitea.
2. **Webhook Trigger**: Woodpecker CI menerima webhook dan menjalankan pipeline.
3. **CI Build**: Runner container (misal: `node:20-alpine`) menjalankan proses build (`npm ci && npm run build`) — menghasilkan static files atau artifact.
4. **Containerize**: Runner mengakses Docker socket host (`/var/run/docker.sock`) untuk `docker build` dan membuat image baru.
5. **Deploy**: Runner menjalankan `docker compose up -d --pull never` pada direktori project di VPS.
6. **Cleanup**: `docker image prune -f` untuk membuang image lama.

---

## 🚀 3. Tech-Stack Reference (Future Expansion)

Panduan penempatan folder berdasarkan kategori layanan untuk memudahkan skalabilitas:

| Category         | Folder Pattern                   | Deployment Logic                                          |
| ---------------- | -------------------------------- | --------------------------------------------------------- |
| **Web App**      | `projects/[name]/app`            | BEU: Local bundle build → Dockerize SWS.                  |
| **Landing Page** | `projects/[name]/landing`        | BCD: CI build (Next.js/React) → Dockerize SWS → Deploy.  |
| **Backend**      | `projects/[name]/backend`        | BEU: Local compile (Dart, Rust, Go, Java) → Docker load.  |
| **Microservice** | `projects/[name]/services/[svc]` | BEU: Individual Build-Export-Upload per service.          |

---

## 📝 4. Golden Rules for Zetena-Void

1. **No Bare Server Builds**: Jangan pernah menjalankan perintah build langsung di bare host VPS. Build boleh terjadi di VPS **hanya jika diisolasi dalam container CI/CD** (pola BCD).
2. **Shared Network**: Semua kontainer baru wajib menggunakan `network: infra-network` (external) agar otomatis dikenali dan di-proxy oleh Caddy.
3. **RAM Discipline**: Meskipun kapasitas lebih lega, pantau penggunaan RAM via Beszel agar tetap tersedia ruang untuk operasional berat di masa depan (misal: Local AI/Ollama).
4. **Absolute Paths**: Selalu gunakan path absolut (seperti `~/docker-stack/projects/...`) dalam semua skrip deployment untuk menghindari error direktori saat eksekusi remote.

---