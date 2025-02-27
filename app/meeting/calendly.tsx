"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "1000px" }}
      url="https://calendly.com/birdsoftware/meeting" />
    </div> );
    // ToDo: Add Calendly Link for Zetenadev
}
 
export default Calendly;