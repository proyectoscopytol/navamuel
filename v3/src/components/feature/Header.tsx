
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="site-header fixed w-full top-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="site-branding">
            <Link to="/" className="block">
              <img 
                src="https://static.readdy.ai/image/5048a74b63e346cf9c347c972b1b1757/f26a18085bdb02c26475415cff1c9e10.png" 
                alt="Navamuel - Mobiliario de Baño" 
                className="h-15 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link hover:text-gray-600 transition-colors">
              <span>Inicio</span>
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('colecciones')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link hover:text-gray-600 transition-colors">
                <span>Colecciones</span>
              </button>
              {activeDropdown === 'colecciones' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border border-gray-100 rounded-sm py-2 z-50">
                  <Link to="/colecciones" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Todas las colecciones</Link>
                  <Link to="/collections/scala" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Scala</Link>
                  <Link to="/colecciones?coleccion=fuse" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Fuse</Link>
                  <Link to="/collections/edge" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Edge</Link>
                  <Link to="/colecciones?coleccion=strato" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Strato</Link>
                  <Link to="/colecciones?coleccion=ease" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Ease</Link>
                  <Link to="/colecciones?coleccion=heritage" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Heritage</Link>
                  <Link to="/colecciones?coleccion=grate" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Grate</Link>
                  <Link to="/colecciones?coleccion=arc" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Arc</Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('materiales')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link hover:text-gray-600 transition-colors">
                <span>Materiales</span>
              </button>
              {activeDropdown === 'materiales' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border border-gray-100 rounded-sm py-2 z-50">
                  <Link to="/materiales" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Todos los materiales</Link>
                  <Link to="/materiales?tipo=lacados" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Lacados</Link>
                  <Link to="/materiales?tipo=madera-s3" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Madera S3</Link>
                  <Link to="/materiales?tipo=madera-s4" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Madera S4</Link>
                  <Link to="/materiales?tipo=marmol" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Mármol</Link>
                  <Link to="/materiales?tipo=solidsurface" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Solidsurface</Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('frentes')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link hover:text-gray-600 transition-colors">
                <span>Frentes</span>
              </button>
              {activeDropdown === 'frentes' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border border-gray-100 rounded-sm py-2 z-50">
                  <Link to="/frentes" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Todos los diseños</Link>
                  <Link to="/frentes?tipo=minimalista" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Minimalista</Link>
                  <Link to="/frentes?tipo=texturizado" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Texturizado</Link>
                  <Link to="/frentes?tipo=geometrico" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Geométrico</Link>
                  <Link to="/frentes?tipo=clasico" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Clásico</Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('maderas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link hover:text-gray-600 transition-colors">
                <span>Maderas</span>
              </button>
              {activeDropdown === 'maderas' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg border border-gray-100 rounded-sm py-2 z-50">
                  <Link to="/maderas" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Todas las maderas</Link>
                  <Link to="/maderas?tipo=roble" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Roble</Link>
                  <Link to="/maderas?tipo=nogal" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Nogal</Link>
                  <Link to="/maderas?tipo=cerezo" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Cerezo</Link>
                  <Link to="/maderas?tipo=tropical" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Tropical</Link>
                  <Link to="/maderas?tipo=sostenible" className="block px-6 py-3 hover:bg-gray-50 transition-colors">Sostenible</Link>
                </div>
              )}
            </div>

            <Link to="/nosotros" className="nav-link hover:text-gray-600 transition-colors">
              <span>Nosotros</span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contacto" className="nav-link hover:text-gray-600 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-black transition-all"></span>
              <span className="w-full h-0.5 bg-black transition-all"></span>
              <span className="w-full h-0.5 bg-black transition-all"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <Link to="/" className="block py-2">Inicio</Link>
              <Link to="/colecciones" className="block py-2">Colecciones</Link>
              <Link to="/materiales" className="block py-2">Materiales</Link>
              <Link to="/frentes" className="block py-2">Frentes</Link>
              <Link to="/maderas" className="block py-2">Maderas</Link>
              <Link to="/nosotros" className="block py-2">Nosotros</Link>
              <Link to="/contacto" className="block py-2">Contacto</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
