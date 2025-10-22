import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpeg";
import Banner3 from "../assets/banner3.jpg";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full text-gray-800">
      {/* ===== SECCIÓN 1 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 bg-white">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {[Banner1, Banner2, Banner3].map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden rounded-2xl shadow-md">
                    <CardContent className="p-0">
                      <img
                        src={src}
                        alt={`Banner ${index + 1}`}
                        className="w-full h-56 md:h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* ===== SECCIÓN 2 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl text-center font-bold mb-4 text-[#004f84]">
            Tenemos los mejores equipos del mercado de la marca
          </h1>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://maquiventas.com/wp-content/uploads/2023/06/IMAQ-300.png"
            alt="imaq"
            className="max-w-md w-80"
          />
        </div>
      </section>

      {/* ===== SECCIÓN 3 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-white">
        <div
          className="md:w-1/2 mb-10 md:mb-0 py-10 px:64"
          style={{
            backgroundImage: `url("https://maquiventas.com/wp-content/uploads/2023/09/fondo-laser.jpg")`,
          }}
        >
          <p className="text-base text-center text-white mb-3">
            Máquina cortadora de lámina CNC de
          </p>
          <h2 className="text-4xl font-semibold text-center text-white mb-4 text-[#004f84]">
            Corte Láser de Fibra
          </h2>
          <p className="text-base text-center text-white mb-3">
            Se destaca en el corte preciso de complejos e intrincados contornos.
            Diseño de ingeniería industrial perfecto y más acorde con el
            hombre-máquina. Adapta para la industria del procesamiento de lámina
            metálica.
          </p>

          <Link
            to={"/cortadoras-laser"}
            className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Más Información
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://maquiventas.com/wp-content/uploads/2023/06/cortadora-laser-impresion-ok-300x300.png"
            alt=""
          />
        </div>
      </section>

      {/* ===== SECCIÓN 4 ===== */}
      <div className="flex flex-col w-full justify-center text-center text-gray-800 py-10">
        <h3 className="text-5xl text-[#004f84] font-semibold">
          Conoce lo nuevo que tenemos.
        </h3>
      </div>

      {/* ===== SECCIÓN 5 ===== */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between bg-gray-50 px-8 md:px-16 py-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold text-center mb-4 text-[#004f84]">
            ¡Súper Promoción!
          </h2>
          <p className="text-base text-center mb-3">
            Síguenos en nuestras redes sociales para conocer las súper ofertas
            que tenemos para ti
          </p>
          <h3 className="font-semibold text-center text-4xl mb-2 text-[#454546]">
            @maquiventas
          </h3>
          <p className="mb-4 text-base text-center">
            O puedes solicitar información a través de nuestro WhatsApp.
          </p>
          <Button className="flex items-center gap-2 bg-[#7e7e7e] hover:bg-green-500 text-white px-5 py-3 rounded-xl transition">
            <Icon
              icon="basil:whatsapp-solid"
              className="text-green-500 hover:text-white w-4 h-4"
            />
            WhatsApp
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://maquiventas.com/wp-content/uploads/2024/08/CAK6150B-X-1500_2-300x300.png"
            alt="cak"
            className="max-w-md w-80"
          />
        </div>
      </section>

      {/* ===== SECCIÓN 6 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 bg-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl text-[#004f85] text-center font-semibold mb-4">
            Visítanos
          </h2>
          <p className="text-lg text-center mb-4">
            Contamos con sucursales en el Estado de México y Querétaro.
          </p>
          <Link
            to={"/sucursales"}
            className="bg-transparent border-[#004f84] text-[#004f84] flex-1 px-6 py-3 rounded-xl hover:bg-[#2586c7] transition"
          >
            Ver Sucursales
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <iframe
            width={550}
            height={309}
            src="https://www.youtube.com/embed/mdMFcCiBU8w"
            title="MAQUIVENTAS"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>

      {/* ===== SECCIÓN 7 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-8 md:px-16 py-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl text-center text-[#2586c7] font-semibold mb-4">
            Empresa de <span className="text-[#005da9]">Calidad</span>
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col text-center relative">
          <h3 className="text-[#004f84] text-4xl font-bold text-center">
            100%
          </h3>
          <p className="text-[#6ec2e4] text-lg text-center font-semibold">
            Cobertura en todo México
          </p>
        </div>
      </section>

      {/* ===== SECCIÓN 8 ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 bg-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-semibold text-center text-[#004f84] mb-4">
            Descarga nuestro poster oficial
          </h2>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition">
            Descargar
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://maquiventas.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-31-at-4.44.27-PM-735x1024.jpeg"
            alt="flier"
            className="rounded-2xl shadow-xl max-w-md w-full"
          />
        </div>
      </section>

      {/* ===== SECCIÓN 9 ===== */}
      <section className="flex items-center justify-center px-4 md:px-16 py-16 bg-white min-h-screen">
        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
