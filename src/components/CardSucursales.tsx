import { Icon } from "@iconify/react";

const sucursales = [
  {
    nombre: "Matriz MAQUIVENTAS",
    direccion: "Gob. Lic. Carlos Castillo 58, Col. Granjas Valle de Guadalupe, Ecatepec de Morelos, EDOMEX",
    telefono: "(55) 3612 0522",
    whatsapp: "55 1042 8014",
    email: "varias@maquiventas.com",
    mapaSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.491808334695!2d-99.0536284241628!3d19.505169938358204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1faec27c1a943%3A0xde43e16e7e85e59f!2sMAQUIVENTAS!5e1!3m2!1ses-419!2smx!4v1759974737406!5m2!1ses-419!2smx",
  },
  {
    nombre: "Sucursal Querétaro",
    direccion: "Av. Industrial Moderna #2001 Col. El Cerrito, Santiago de Querétaro. Euro Business Park.Bodega #118",
    telefono: "(55) 3612 0523",
    whatsapp: "55 1043 8014",
    email: "varias@maquiventas.com",
    mapaSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4460.337780926044!2d-100.30870362414396!3d20.563798803584767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3437268ca1251%3A0x67e98292c0addfaa!2sMAQUIVENTAS%20SA%20DE%20CV!5e1!3m2!1ses-419!2smx!4v1759975185644!5m2!1ses-419!2smx",
  },
];

export const CardSucursales = () => {
  return (
    <>
        <div className="space-y-12">
          {sucursales.map((sucursal, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 grid md:grid-cols-2 gap-6 items-center"
            >
              {/* Mapa */}
              <div className="w-full h-72 rounded-xl overflow-hidden">
                <iframe
                  src={sucursal.mapaSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${sucursal.nombre}`}
                ></iframe>
              </div>

              {/* Información */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {sucursal.nombre}
                </h3>

                <div className="flex items-start gap-3">
                  <Icon
                    icon="mdi:map-marker"
                    className="text-blue-600 text-xl mt-1"
                  />
                  <p className="text-base">{sucursal.direccion}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Icon icon="mdi:phone" className="text-green-600 text-xl" />
                  <span className="text-base">{sucursal.telefono}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon icon="mdi:whatsapp" className="text-green-500 text-xl" />
                  <a
                    href={`https://wa.me/52${sucursal.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-base"
                  >
                    {sucursal.whatsapp}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Icon icon="mdi:email-outline" className="text-red-500 text-xl" />
                  <a
                    href={`mailto:${sucursal.email}`}
                    className="text-blue-600 hover:underline text-base"
                  >
                    {sucursal.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>    
  )
}
