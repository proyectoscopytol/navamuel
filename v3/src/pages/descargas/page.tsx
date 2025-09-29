
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import { catalogosData } from "./catalogosData";

export default function DescargasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 pt-32 pb-16">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight drop-shadow">Descarga nuestros catálogos</h1>
          <p className="mb-10 text-center text-lg text-gray-600 max-w-2xl mx-auto">Aquí puedes encontrar todos nuestros catálogos en PDF. Haz clic en el botón para descargar el que desees y descubre todas nuestras colecciones y novedades.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogosData.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center p-6 hover:shadow-2xl transition">
                <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img src={cat.portada} alt={cat.name} className="object-cover w-full h-full" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{cat.name}</h2>
                <p className="text-gray-600 text-center mb-4 text-sm">{cat.descripcion}</p>
                <a href={`/downloads/catalogos/${cat.file}`} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
                  </svg>
                  Descargar PDF
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
