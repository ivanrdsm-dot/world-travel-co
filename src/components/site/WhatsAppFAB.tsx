"use client";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/utils";

export default function WhatsAppFAB() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <a
      href={waLink("Hola WTC, vi su sitio y me interesa cotizar un viaje.")}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp WTC"
      className={[
        "fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full pl-2 pr-5 py-2",
        "bg-[#25D366] text-white shadow-glow hover:scale-[1.03] transition-all",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      ].join(" ")}
    >
      <span className="h-10 w-10 rounded-full bg-white text-[#25D366] grid place-items-center">
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
          <path d="M19.11 17.55c-.27-.13-1.58-.78-1.83-.87-.25-.09-.43-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.25.27-.94.92-.94 2.25 0 1.33.97 2.6 1.11 2.78.13.18 1.9 2.9 4.6 3.94.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.06-.11-.24-.18-.51-.31zm-4.86 6.6h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0115.34-12.19 9.78 9.78 0 012.88 6.96 9.93 9.93 0 01-9.83 9.86zm8.39-18.25A11.86 11.86 0 0014.25 2C7.7 2 2.37 7.32 2.37 13.87c0 2.1.55 4.15 1.6 5.95L2.27 26l6.34-1.66a11.93 11.93 0 005.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 00-3.5-8.49z"/>
        </svg>
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-widest opacity-90">Cotiza ahora</span>
        <span className="text-sm font-semibold">WhatsApp WTC</span>
      </span>
    </a>
  );
}
