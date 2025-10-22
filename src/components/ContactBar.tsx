import { Icon } from "@iconify/react";

export const ContactBar = () => {
  return (
    <>
      {/* === Barra superior: contacto y redes === */}
      <div className="bg-[#313031] text-gray-200 text-sm">
        <div className="container mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Icon icon="basil:whatsapp-solid" className="text-green-500 hover:text-white w-4 h-4" />
              <a
                    href={`https://wa.me/525510428014`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-base"
                  >
                    (55) 1042 8014
                  </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Icon icon="mdi:email" className="text-blue-400 hover:text-white w-4 h-4" />
              <a
                    href={`mailto:varias@maquiventas.com`}
                    className="text-white text-base"
                  >
                    varias@maquiventas.com
                  </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
            href="https://www.facebook.com/profile.php?id=100040504967854"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Icon icon="mdi:facebook" className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/maquiventasmx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <Icon icon="mdi:instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCq8fXn363S3bBxECfbPg98Q"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <Icon icon="mdi:youtube" className="w-5 h-5" />
          </a>
          </div>
        </div>
      </div>
    </>
  );
};
