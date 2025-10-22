import { Icon } from "@iconify/react";
import { Input } from './ui/input';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <>
        {/* === Header principal: logo, búsqueda, sucursales, botón compra === */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link className="text-2xl font-bold text-gray-800" to="/">
            <img src="https://maquiventas.com/wp-content/uploads/2023/05/MAQUIVENTAS-600-300x241.png" alt="Logo" className='w-40' />
          </Link>

          {/* Buscador */}
          <div className="flex w-full md:w-1/2">
            <Input className='border-[#004F84] hover:border-[#2586c7] border-2 outline-2 outline-offset-2 outline-blue-500' type='text' placeholder='Buscar' />
          </div>

          {/* Icono sucursales + botón compra */}
          <div className="flex items-center gap-4">
            <Link to={"/sucursales"} className="flex items-center gap-1 text-sm hover:text-yellow-600">
              <Icon icon="fa-solid:map-marked-alt" className="text-[#6EC2E4] w-5 h-5" />
              <span className='text-base font-sans'>Sucursales</span>
            </Link>

            <button className="bg-[#004F84] hover:bg-[#2586c7] text-white font-medium px-4 py-2 rounded-md flex items-center gap-1">
              $0.00
              <Icon icon="tdesign:cart-filled" className="w-5 h-5 text-[#2586c7] hover:text-white" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
