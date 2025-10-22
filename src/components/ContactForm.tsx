import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    setFormData({
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };
  
  return (
    <>
        <section className="py-14 px-6 bg-white text-gray-800">
    {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#004F84] mb-2">
            Contáctanos
          </h2>
          <p className="text-gray-600 text-xl">
            Escríbenos y nos pondremos en contacto de inmediato contigo
          </p>
        </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-gray-700"
          autoComplete="off"
        >
          {/* Nombre y Apellido */}
          <div>
            <label className="block mb-2 font-medium">Nombre / Apellido</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          {/* Empresa */}
          <div>
            <label className="block mb-2 font-medium">Empresa</label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Ej. Maquiventas S.A. de C.V."
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="correo@empresa.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block mb-2 font-medium">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="+52 55 1234 5678"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-2 font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {/* Botón */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#004F84] hover:bg-[#2586c7] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              <Icon icon="mdi:send" className="text-lg" />
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
