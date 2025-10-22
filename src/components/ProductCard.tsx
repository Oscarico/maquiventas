import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  link: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center flex flex-col items-center justify-between h-full">
        <h3 className="text-lg font-semibold mb-3 text-[#004f84]">{title}</h3>
        <Link
          to={link}
          className="bg-[#004f84] text-white px-4 py-2 rounded-md hover:bg-[#0074cc] transition-colors"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};
