
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoUsuario: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Conta<em className="font-light">cto</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para ayudarte a crear el baño de tus sueños
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-light mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre *"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-sm"
                    />
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-sm"
                    />
                  </div>

                  <select
                    name="tipoUsuario"
                    value={formData.tipoUsuario}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 bg-white focus:outline-none focus:border-black text-sm cursor-pointer"
                  >
                    <option value="">Tipo de usuario *</option>
                    <option value="usuario-final">Usuario final</option>
                    <option value="profesional">Profesional</option>
                    <option value="distribuidor">Distribuidor</option>
                    <option value="prensa">Prensa</option>
                  </select>

                  <textarea
                    name="mensaje"
                    placeholder="Mensaje *"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-sm resize-vertical"
                  ></textarea>
                  
                  <div className="text-sm text-gray-500">
                    {formData.mensaje.length}/500 caracteres
                  </div>

                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required
                      className="mt-1" 
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      He leído y acepto la <a href="/politica-privacidad" className="underline hover:no-underline">política de privacidad</a> *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap w-full md:w-auto"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light mb-8">Información de contacto</h2>
                
                <div className="space-y-8">
                  {/* Office */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Oficina Central</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Calle del Diseño, 123</p>
                      <p>28001 Madrid, España</p>
                      <p>Tel: +34 91 123 45 67</p>
                      <p>Email: info@bañosnavamuel.com</p>
                    </div>
                  </div>

                  {/* Showroom */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Showroom</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Avenida de la Innovación, 456</p>
                      <p>28002 Madrid, España</p>
                      <p>Tel: +34 91 987 65 43</p>
                      <p>Email: showroom@bañosnavamuel.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Horarios</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Lunes - Viernes: 9:00 - 18:00</p>
                      <p>Sábados: 10:00 - 14:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Síguenos</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <i className="ri-instagram-line text-xl"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <i className="ri-facebook-line text-xl"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <i className="ri-pinterest-line text-xl"></i>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <i className="ri-linkedin-line text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-light mb-8 text-center">Encuéntranos</h2>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4849853881474!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287734e4a8a5%3A0x8b27b86826e5a3c4!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación Baños Navamuel"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              ¿Necesitas asesoramiento personalizado?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Nuestro equipo de expertos está disponible para ayudarte con tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/descargas" 
                className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Descargas técnicas
              </a>
              <a 
                href="/proyectos" 
                className="inline-block border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
