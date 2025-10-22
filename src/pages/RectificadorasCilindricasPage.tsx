import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ProductCard } from "@/components/ProductCard";

import Fresadora from "../assets/fresadora-vertical.png";
import Sierra from "../assets/sierra-cinta.png";
import Taladro from "../assets/taladro-de-columna.png";
import Torno from "../assets/torno.png";

interface Producto {
  image: string;
  title: string;
  link: string;
}

export const RectificadorasCilindricasPage = () => {

  const productos: Producto[] = [
    {
      image: Torno,
      title: "Torno Convencional",
      link: "/tornos-chicos",
    },
    {
      image: Fresadora,
      title: "Fresadora Vertical",
      link: "/fresadoras-vertical",
    },
    {
      image: Taladro,
      title: "Taladro de Columna",
      link: "/taladros-de-columna",
    },
    {
      image: Sierra,
      title: "Sierra de Cinta",
      link: "/sierras-cinta-horizontal",
    },
  ];

  return (
    <div className="flex flex-col w-full text-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-4 bg-white">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl text-center font-bold mb-4 text-[#004f84]">
            Rectificadoras Cilindricas
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-4 bg-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h3>Mostrando los 10 resultados totales</h3>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Defecto</SelectItem>
              <SelectItem value="dark">Popularidad</SelectItem>
              <SelectItem value="system">Calificación media</SelectItem>
              <SelectItem value="system">Ultimas subidas</SelectItem>
              <SelectItem value="system">Precio más bajo</SelectItem>
              <SelectItem value="system">Precio más alto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      {/* 🧩 Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map((p, index) => (
          <ProductCard key={index} image={p.image} title={p.title} link={p.link} />
        ))}
      </div>
    </section>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-8 py-8 bg-white">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
};
