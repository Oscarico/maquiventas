import { CardSucursales } from "@/components/CardSucursales"
import ContactForm from "@/components/ContactForm"


export const SucursalesPage = () => {
  return (
    <>
        <section className="py-10 px-6 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-[#6EC2E4]">
            Nuestras <span className="text-[#004f84]">Sucursales</span>
          </h2>

          <CardSucursales />
        </div>
      </section>

      <ContactForm />
    </>
  )
}
