

export const NosotrosPage = () => {
  return (
    <div className="flex flex-col w-full text-gray-800 bg-white">
      {/* 🟦 Encabezado principal */}
      <section className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-r from-[#004f84] to-[#0077b6] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
          Sobre Nosotros
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl opacity-90">
          Conoce más sobre nuestra historia, valores y compromiso con nuestros clientes.
        </p>
      </section>

      {/* 🟨 Contenido principal */}
      <section className="flex flex-col gap-12 px-6 md:px-16 py-12">
        {/* Nuestra Historia */}
        <div>
          <h2 className="text-2xl font-semibold text-[#004f84] mb-3">
            Nuestra Historia
          </h2>
          <p className="text-lg text-justify leading-relaxed">
            Desde nuestros inicios, nos hemos dedicado a ofrecer maquinaria de alta calidad
            para la industria metalmecánica. A lo largo de los años, hemos crecido junto a nuestros clientes,
            brindando soluciones innovadoras y un servicio técnico de confianza.
          </p>
        </div>

        {/* Nuestros Valores */}
        <div>
          <h2 className="text-2xl font-semibold text-[#004f84] mb-3">
            Nuestros Valores
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>Compromiso:</strong> trabajamos día a día para cumplir las expectativas de nuestros clientes.</li>
            <li><strong>Calidad:</strong> seleccionamos cuidadosamente nuestros productos y servicios.</li>
            <li><strong>Confianza:</strong> construimos relaciones duraderas basadas en la transparencia y el respeto.</li>
            <li><strong>Innovación:</strong> nos adaptamos constantemente a las nuevas tecnologías del mercado.</li>
          </ul>
        </div>

        {/* Sobre Nosotros */}
        <div>
          <h2 className="text-2xl font-semibold text-[#004f84] mb-3">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-justify leading-relaxed">
            Somos una empresa mexicana comprometida con el desarrollo industrial del país.
            Nuestro objetivo es ofrecer soluciones integrales en maquinaria y herramientas
            para ayudar a nuestros clientes a alcanzar su máximo potencial productivo.
          </p>
        </div>
      </section>
    </div>
  );
};
