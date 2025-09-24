
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="text-lg font-bold">Forma parte del Mundo Navamuel</span>
            </div>
            <div className="mb-8">
              <p className="text-gray-600">
                Regístrate y pertenece a la comunidad Navamuel para tener acceso a funcionalidades y contenidos exclusivos.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Ubicación</h3>
                <div className="w-full h-64 rounded overflow-hidden border border-gray-300">
                  <iframe
                    title="Ubicación Baños Navamuel"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.2346246246246!2d-3.982345684534123!3d43.04812387914609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd48a1e2e2e2e2e2%3A0x123456789abcdef!2sBaños%20Navamuel!5e0!3m2!1ses!2ses!4v1695654321000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-600 text-sm">Calle Ejemplo 123, Baños Navamuel, Toledo, España</p>
              </div>
            </div>

          {/* Navigation Menus */}
          <div className="lg:col-span-3 lg:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Navamuel</h3>
                <ul className="space-y-2">
                  <li><Link to="/productos" className="text-gray-600 hover:text-black">Productos</Link></li>
                  <li><Link to="/colecciones" className="text-gray-600 hover:text-black">Colecciones</Link></li>
                  <li><Link to="/materiales" className="text-gray-600 hover:text-black">Materiales</Link></li>
                  <li><Link to="/disenadores" className="text-gray-600 hover:text-black">Diseñadores</Link></li>
                  <li><Link to="/inbanigreen" className="text-gray-600 hover:text-black">#navamuelgreen</Link></li>
                  <li><Link to="/outlet" className="text-gray-600 hover:text-black">Outlet</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Info</h3>
                <ul className="space-y-2">
                  <li><Link to="/contacto" className="text-gray-600 hover:text-black">Contacto</Link></li>
                  <li><Link to="/descargas" className="text-gray-600 hover:text-black">Descargas</Link></li>
                  <li><Link to="/nosotros" className="text-gray-600 hover:text-black">Nosotros</Link></li>
                  <li><Link to="/proyectos" className="text-gray-600 hover:text-black">Proyectos</Link></li>
                  <li><Link to="/calidad" className="text-gray-600 hover:text-black">Calidad</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Síguenos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="lg:col-span-12 mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <span className="text-sm text-gray-600">©2025 Baños Navamuel</span>
              <Link to="/politica-privacidad" className="text-sm text-gray-600 hover:text-black">Privacidad</Link>
              <Link to="/terminos-uso" className="text-sm text-gray-600 hover:text-black">Términos de uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
