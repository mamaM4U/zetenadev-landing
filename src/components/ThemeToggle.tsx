import { useEffect, useState } from 'react';

type Theme = 'void' | 'prime';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('void');

  useEffect(() => {
    const saved = (localStorage.getItem('zetenadev-theme') as Theme | null) || 'void';
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  function toggle() {
    const next = theme === 'void' ? 'prime' : 'void';
    setTheme(next);
    localStorage.setItem('zetenadev-theme', next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle Void and Prime theme"
      className="theme-toggle group relative inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text)] transition hover:-translate-y-0.5"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-neon" />
      <span>{theme === 'void' ? 'Void' : 'Prime'}</span>
    </button>
  );
}
