import { Icon } from "@iconify/react";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#313031] text-gray-200 pt-10">
      {/* Sección principal */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Columna izquierda */}
        <div>
          <h2 className="font-semibold font-sans text-2xl mb-3">Tenemos lo que necesitas</h2>
          <p className="mb-2 font-sans text-base"><strong>MAQUIVENTAS®</strong> es una empresa 100% mexicana con más de <strong>20 años de experiencia</strong> que pone a tú disposición los mejores equipos.</p>
        </div>

        {/* Columna central */}
        <div>
          <h4 className="text-2xl font-semibold font-sans mb-3">Matriz</h4>
          <p className="mb-6 font-sans text-base">Gob. Lic. Carlos Castillo 58, Col. Granjas Valle de Guadalupe, Ecatepec de Morelos, Estado de México.</p>

          <h4 className="text-2xl font-semibold font-sans mb-3">Sucursal Querétaro</h4>
          <p className="mb-6 font-sans text-base">Av. Industrial Moderna #2001, Col. El Cerrito, Santiago de Querétaro, Querétaro, Euro Business Park bodega #118.</p>

          <h4 className="text-2xl font-semibold font-sans mb-3">Contacto</h4>
          <div className="flex items-center mb-2">
            <Icon icon="basil:whatsapp-solid" className="text-[#6EC2E4] w-5 h-5 mr-2" />
            <span className="text-base font-sans">Tel: (55) 1042 8014</span>
          </div>
          <div className="flex items-center mb-6">
            <Icon icon="mdi:email" className="text-[#6EC2E4] font-sans w-5 h-5 mr-2" />
            <span className="text-base font-sans">varias@maquiventas.com</span>
          </div>
        </div>

        {/* Columna derecha */}
        <div>
          <h4 className="text-2xl font-semibold font-sans mb-3 text-[#6EC2E4]">Suscríbete</h4>
          <p className="mb-4 text-base font-sans">Conoce nuestros equipos y promociones antes que nadie.</p>

          <form className="flex flex-col sm:flex-row gap-2 mb-4">
            <Input className="bg-white border-blue-500 border-2 inter-events-auto" type="email" placeholder="Correo electrónico"/>
          </form>
          <button
              type="submit"
              className="bg-[#004F84] hover:bg-[#2586c7] text-white-900 px-4 py-2 rounded-md font-medium max-w-30 min-w-30" 
            >
              Suscribir
            </button>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white mt-10"></div>

      {/* Sección inferior */}
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-gray-400 text-sm">© 2025 Maquiventas. Todos los derechos reservados.</p>

        <div className="flex items-center space-x-3 mt-3 sm:mt-0">
          <span className="text-white mr-2 text-xl">Síguenos:</span>
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
    </footer>
  );
}
