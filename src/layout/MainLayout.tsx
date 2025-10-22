import Footer from "../components/Footer";

import { ContactBar } from "../components/ContactBar";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      
      <div>
        <ContactBar />
        <Header />
        <NavBar />
      </div>

      {/* === Contenido principal === */}
      <main className="w-full max-w-[1300px] mx-auto px-4 py-6 flex-1">
        <Outlet />
      </main>

      {/* === Footer === */}
      <Footer />
    </div>
  );
}
