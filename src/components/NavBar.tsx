import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

// 🌟 Nueva estructura jerárquica del menú
const menuData = [
  {
    title: "MAQUINARIA",
    items: [
      {
        title: "TORNOS CONVENCIONALES",
        options: [
          {
            title: "TORNOS CHICOS",
            description: "MINI - 2000 MM",
            to: "/tornos-chicos",
          },
          {
            title: "TORNOS GRANDES",
            description: "2200 - 6000 mm",
            to: "/tornos-grandes",
          },
          { title: "TORNOS PETROLEROS", to: "/tornos-petroleros" },
        ],
      },
      {
        title: "TORNOS CNC",
        options: [
          { title: "BANCADA PLANA", to: "/tornos-cnc-bancada-plana" },
          { title: "BANCADA INCLINADA", to: "/tornos-cnc-bancada-inclinada" },
          {
            title: "BANCADA INCLINADA CON HERRAMIENTA VIVA",
            to: "/tornos-cnc-bancada-inclinada-con-herramienta-viva",
          },
        ],
      },
      {
        title: "CENTROS DE MAQUINADO",
        options: [
          {
            title: "CENTROS DE MAQUINADO VERTICALES",
            to: "centros-de-maquinado-verticales",
          },
        ],
      },
      {
        title: "FRESADORAS",
        options: [
          { title: "VERTICAL", to: "/fresadoras-vertical" },
          {
            title: "HORIZONTAL - VERTICAL",
            to: "/fresadoras-horizontal-vertical",
          },
          { title: "UNIVERSALES", to: "/fresadoras-universales" },
          { title: "CNC", to: "/fresadoras-cnc" },
        ],
      },
      {
        title: "ESCOPLOS",
        options: [
          { title: "ESCOPLOS VERTICALES", to: "/escoplos-verticales" },
          {
            title: "ESCOPLOS PARA FRESADORAS",
            to: "/escoplos-para-fresadoras",
          },
        ],
      },
      {
        title: "TALADROS",
        options: [
          { title: "RADIALES", to: "/taladros-radiales" },
          { title: "FRESADORES", to: "/taladros-fresadores" },
          { title: "DE COLUMNA", to: "/taladros-de-columna" },
        ],
      },
      {
        title: "SIERRAS",
        options: [
          { title: "CINTA HORIZONTAL", to: "/sierras-cinta-horizontal" },
          {
            title: "CINTA HORIZONTAL - VERTICAL",
            to: "/sierras-cinta-horizontal-vertical",
          },
          { title: "COLUMNA", to: "/sierras-de-columna" },
          {
            title: "DISCO",
            description: "CORTADORA - TROZADORA",
            to: "/sierras-de-disco",
          },
        ],
      },
      {
        title: "RECTIFICADORAS",
        options: [
          {
            title: "SUPERFICIES PLANAS",
            to: "/rectificadoras-superficies-planas",
          },
          { title: "CILINDRICAS", to: "/rectificadoras-cilindricas" },
        ],
      },
      {
        title: "GENERADORA DE ENGRANES",
        to: "/generadora-de-engranes",
      },
      {
        title: "LAMINADORA DE CUERDAS",
        to: "/laminadora-de-cuerdas",
      },
    ],
  },
  {
    title: "LÁMINA",
    items: [
      {
        title: "CIZALLAS",
        options: [
          { title: "MECÁNICAS", to: "/cizallas-mecanicas" },
          { title: "HIDRÁULICAS", to: "/cizallas-hidraulicas" },
        ],
      },
      {
        title: "DOBLADORAS",
        options: [
          { title: "MECÁNICAS", to: "/dobladoras-mecanicas" },
          { title: "HIDRÁULICAS", to: "/dobladoras-hidraulicas" },
          { title: "DE TUBO", to: "/dobladoras-de-tubo" },
        ],
      },
      {
        title: "METALEROS",
        options: [{ title: "HIDRÁULICOS", to: "/metaleros-hidraulicos" }],
      },
      {
        title: "ROLADORAS",
        options: [
          { title: "PERFILES", to: "/roladoras-de-perfiles" },
          { title: "PLACA", to: "/roladoras-de-placa" },
        ],
      },
    ],
  },
  {
    title: "MÁQUINAS LÁSER",
    items: [
      {
        title: "CORTADORAS LÁSER",
        options: [
          { title: "CORTADORAS LÁSER", to: "/cortadoras-laser" },
          { title: "CORTADORAS DE TUBO", to: "/cortadoras-de-tubo" },
        ],
      },
      {
        title: "GRABADORAS LÁSER",
        options: [{ title: "GRABADORAS LÁSER", to: "/grabadoras-laser" }],
      },
      {
        title: "MÁQUINAS MANUAL",
        options: [
          { title: "MÁQUINAS MANUAL LÁSER", to: "/maquinas-manuales-laser" },
        ],
      },
    ],
  },
  {
    title: "MANEJO DE MATERIALES",
    items: [
      {
        title: "MONTACARGAS",
        options: [
          { title: "GAS / GASOLINA", to: "/montacargas-gas-gasolina" },
          { title: "DIESEL", to: "/montacargas-diesel" },
          { title: "ELÉCTRICOS", to: "/montacargas-electricos" },
        ],
      },
      {
        title: "GRÚAS ARTICULADAS",
        options: [{ title: "TIPO HIAB", to: "/gruas-articuladas-tipo-hiab" }],
      },
    ],
  },
  {
    title: "HERRAMIENTA",
    items: [
      {
        title: "ACCESORIOS",
        to: "/herramientas-accesorios",
      },
      {
        title: "CARBURO",
        to: "/herramientas-carburo",
      },
      {
        title: "CORTE",
        to: "/herramientas-corte",
      },
      {
        title: "MANEJO DE MATERIALES",
        to: "/manejo-de-materiales",
      },
      {
        title: "MEDICIÓN",
        to: "/herramientas-medicion",
      },
      {
        title: "SUJECIÓN",
        to: "/herramientas-sujecion",
      },
    ],
  },
  {
    title: "SEMINUEVOS",
    items: [
      {
        title: "TORNOS CONVENCIONALES",
        options: [
          {
            title: "TORNOS CHICOS",
            description: "1000 - 2000 MM",
            to: "/tornos-chicos-seminuevos",
          },
          {
            title: "TORNOS GRANDES",
            description: "2000 - 6000 MM",
            to: "/tornos-grandes-seminuevos",
          },
        ],
      },
      {
        title: "SIERRAS",
        options: [
          { title: "SIERRAS CINTA", to: "/sierras-de-cinta-seminuevos" },
          { title: "DISCO", to: "/sierras-de-disco-seminuevos" },
        ],
      },
      {
        title: "FRESADORAS",
        to: "/fresadoras-seminuevos",
      },
      {
        title: "RECTIFICADORAS",
        to: "/rectificadoras-seminuevos",
      },
      {
        title: "CIZZALLAS",
        to: "/cizallas-seminuevos",
      },
      {
        title: "TALADROS",
        to: "/taladros-seminuevos",
      },
      {
        title: "DOBLADORAS",
        to: "/dobladoras-seminuevos",
      },
      {
        title: "TROQUELADORAS",
        to: "/troqueladoras-seminuevos",
      },
      {
        title: "Montacargas",
        to: "/montacargas-seminuevos",
      },
      {
        title: "GENERADORA DE ENGRANES",
        to: "/generadora-de-engranes-seminuevos",
      },
    ],
  },
  {
    title: "NOSOTROS", 
    to: "/nosotros"
  },
];

export const NavBar = () => {
  return (
    <nav className="w-full bg-gray-800 text-gray-100 text-sm z-50">
      <div className="container mx-auto px-6 py-3 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-4">
            {menuData.map((menu, idx) => (
              <NavigationMenuItem key={idx}>
                {menu.items ? (
                  // 🔹 Menús con submenús desplegables
                  <>
                    <NavigationMenuTrigger className="text-white bg-transparent hover:text-yellow-400">
                      {menu.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="bg-white text-gray-800 rounded-md shadow-lg p-6 max-h-[80vh] overflow-y-auto">
                      <div className="grid gap-4 md:w-[800px] lg:w-[1000px] md:grid-cols-4">
                        {menu.items?.map((section, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-gray-900 mb-2 border-b pb-1">
                              {section.title}
                            </h4>
                            {section.options ? (
                              <ul className="space-y-2">
                                {section.options.map((option, j) => (
                                  <li key={j}>
                                    <Link
                                      to={option.to}
                                      className="block p-2 rounded-md hover:bg-gray-100 transition"
                                    >
                                      <div className="font-medium text-gray-900 text-sm">
                                        {option.title}
                                      </div>
                                      {option.description && (
                                        <p className="text-gray-600 text-xs mt-1">
                                          {option.description}
                                        </p>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <Link
                                to={section.to}
                                className="block p-2 rounded-md hover:bg-gray-100 transition"
                              >
                                <div className="font-medium text-gray-900 text-sm">
                                  {section.title}
                                </div>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // 🔹 Menús simples (sin submenús)
                  <Link
                    to={menu.to}
                    className="text-white hover:text-yellow-400 px-4 py-2 transition"
                  >
                    {menu.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};