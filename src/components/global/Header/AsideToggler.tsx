"use client";

import { useEffect } from "react";
import { CollapsedTogglerIcon, TogglerIcon } from "../../ui/icons";
import { useSidebarStore } from "@/store/use-sidebar-store";

export default function AsideToggler() {
  const { toggleSidebar, collapsed, setSidebarCollapsed } = useSidebarStore();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        // Fuerza el colapso si la ventana es menor que 768px
        setSidebarCollapsed(true);
      } else {
        // Opcional: Si quieres que se "descolapse" cuando la pantalla es >=768,
        // puedes forzar a false. O deja esta parte comentada si no deseas eso.
        // setSidebarCollapsed(false);
      }
    }

    // Llamamos a la función de inmediato al montar el componente
    handleResize();

    // Suscribimos a los cambios de tamaño
    window.addEventListener("resize", handleResize);
    return () => {
      // Limpiamos el listener al desmontar
      window.removeEventListener("resize", handleResize);
    };
  }, [setSidebarCollapsed]);

  return (
    <button
      onClick={toggleSidebar}
      className="flex items-center justify-center w-10 h-10 rounded-xl background-secondary cursor-pointer border-secondary hover:from-gray-600 hover:shadow-gray-400/30 hover:brightness-120 transition-all duration-200 max-[770px]:hidden"
    >
      {collapsed ? <CollapsedTogglerIcon /> : <TogglerIcon />}
    </button>
  );
}
