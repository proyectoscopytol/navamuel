
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface WoodType {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  properties: string[];
  origin: string;
  finish: string;
  detailedDescription: string;
  care: string[];
  applications: string[];
}

const woodTypes: WoodType[] = [
  {
    id: 'roble-natural',
    name: 'Roble Natural',
    description: 'Madera de roble con acabado natural que conserva toda su belleza original',
    image: 'https://readdy.ai/api/search-image?query=Natural%20oak%20wood%20texture%20with%20beautiful%20grain%20patterns%2C%20warm%20brown%20tones%2C%20bathroom%20furniture%20material%2C%20high-quality%20wood%20finish%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=roble_natural&orientation=portrait',
    category: 'roble',
    properties: ['Grano visible', 'Resistente', 'Duradero', 'Cálido'],
    origin: 'Europa',
    finish: 'Natural',
    detailedDescription: 'El roble natural es una de las maderas más apreciadas en la ebanistería de alta gama. Su grano distintivo y su resistencia natural lo convierten en la elección perfecta para muebles de baño que deben soportar la humedad y el uso diario. El acabado natural preserva todas las características originales de la madera, incluyendo sus vetas únicas y su color cálido.',
    care: ['Limpiar con paño húmedo', 'Aplicar aceite protector cada 6 meses', 'Evitar productos químicos agresivos', 'Secar inmediatamente cualquier derrame'],
    applications: ['Muebles de baño', 'Encimeras', 'Estanterías', 'Elementos decorativos']
  },
  {
    id: 'roble-salvaje',
    name: 'Roble Salvaje S3',
    description: 'Roble con acabado salvaje que resalta las características naturales de la madera',
    image: 'https://readdy.ai/api/search-image?query=Wild%20oak%20wood%20with%20rustic%20natural%20finish%2C%20pronounced%20grain%20texture%2C%20bathroom%20furniture%20material%2C%20authentic%20wood%20appearance%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=roble_salvaje&orientation=portrait',
    category: 'roble',
    properties: ['Textura pronunciada', 'Auténtico', 'Rústico', 'Natural'],
    origin: 'Europa',
    finish: 'Salvaje',
    detailedDescription: 'El roble salvaje S3 representa la autenticidad en su máxima expresión. Este acabado especial resalta todas las imperfecciones naturales de la madera, creando piezas únicas con carácter propio. Las vetas, nudos y variaciones de color se mantienen visibles, ofreciendo una estética rústica pero sofisticada.',
    care: ['Cepillar suavemente en dirección del grano', 'Aplicar cera natural mensualmente', 'Proteger de la humedad excesiva', 'Lijar ligeramente si es necesario'],
    applications: ['Muebles rústicos', 'Elementos decorativos', 'Revestimientos', 'Accesorios de baño']
  },
  {
    id: 'roble-raw',
    name: 'Roble Raw S4',
    description: 'Roble con acabado raw, sin tratar, mostrando la madera en su estado más puro',
    image: 'https://readdy.ai/api/search-image?query=Raw%20untreated%20oak%20wood%20with%20natural%20unfinished%20surface%2C%20pure%20wood%20texture%2C%20bathroom%20furniture%20material%2C%20organic%20appearance%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=roble_raw&orientation=portrait',
    category: 'roble',
    properties: ['Sin tratar', 'Puro', 'Orgánico', 'Sostenible'],
    origin: 'Europa',
    finish: 'Raw',
    detailedDescription: 'El roble raw S4 es la expresión más pura de la madera natural. Sin ningún tipo de tratamiento químico, esta madera mantiene su estado original, desarrollando una pátina natural con el tiempo. Es la opción más sostenible y ecológica, perfecta para quienes buscan autenticidad absoluta.',
    care: ['Aceitar regularmente con aceites naturales', 'Evitar la humedad directa', 'Permitir que respire naturalmente', 'Limpiar solo con productos naturales'],
    applications: ['Proyectos ecológicos', 'Diseño sostenible', 'Elementos naturales', 'Muebles orgánicos']
  },
  {
    id: 'nogal-americano',
    name: 'Nogal Americano',
    description: 'Madera de nogal americano con tonos chocolate y vetas distintivas',
    image: 'https://readdy.ai/api/search-image?query=American%20walnut%20wood%20with%20chocolate%20brown%20tones%20and%20distinctive%20grain%2C%20luxury%20bathroom%20furniture%20material%2C%20rich%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=nogal_americano&orientation=portrait',
    category: 'nogal',
    properties: ['Tonos chocolate', 'Vetas distintivas', 'Lujoso', 'Elegante'],
    origin: 'América del Norte',
    finish: 'Natural',
    detailedDescription: 'El nogal americano es sinónimo de lujo y elegancia. Sus ricos tonos chocolate y sus vetas distintivas crean patrones únicos en cada pieza. Esta madera premium es altamente valorada por su belleza natural y su excelente trabajabilidad, siendo ideal para proyectos de alta gama.',
    care: ['Pulir con cera de alta calidad', 'Proteger de la luz solar directa', 'Mantener humedad controlada', 'Limpiar con productos específicos para nogal'],
    applications: ['Muebles de lujo', 'Paneles decorativos', 'Elementos premium', 'Proyectos exclusivos']
  },
  {
    id: 'nogal-europeo',
    name: 'Nogal Europeo',
    description: 'Nogal europeo con tonalidades más suaves y grano fino',
    image: 'https://readdy.ai/api/search-image?query=European%20walnut%20wood%20with%20soft%20brown%20tones%20and%20fine%20grain%2C%20bathroom%20furniture%20material%2C%20elegant%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=nogal_europeo&orientation=portrait',
    category: 'nogal',
    properties: ['Grano fino', 'Tonos suaves', 'Refinado', 'Clásico'],
    origin: 'Europa',
    finish: 'Natural',
    detailedDescription: 'El nogal europeo se caracteriza por su grano más fino y sus tonalidades más suaves que su contraparte americana. Esta madera ofrece una elegancia discreta y refinada, perfecta para diseños clásicos y contemporáneos que buscan sofisticación sin ostentación.',
    care: ['Aplicar aceites protectores regularmente', 'Evitar cambios bruscos de temperatura', 'Limpiar con paños suaves', 'Mantener alejado de fuentes de calor'],
    applications: ['Mobiliario clásico', 'Elementos refinados', 'Diseño europeo', 'Proyectos tradicionales']
  },
  {
    id: 'cerezo',
    name: 'Cerezo',
    description: 'Madera de cerezo con tonos rojizos cálidos y grano suave',
    image: 'https://readdy.ai/api/search-image?query=Cherry%20wood%20with%20warm%20reddish%20tones%20and%20smooth%20grain%2C%20bathroom%20furniture%20material%2C%20elegant%20wood%20finish%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=cerezo&orientation=portrait',
    category: 'cerezo',
    properties: ['Tonos rojizos', 'Grano suave', 'Cálido', 'Sofisticado'],
    origin: 'América del Norte',
    finish: 'Natural',
    detailedDescription: 'La madera de cerezo es reconocida por sus hermosos tonos rojizos que se intensifican con el tiempo y la exposición a la luz. Su grano suave y uniforme la hace ideal para acabados finos, mientras que su color cálido aporta calidez y sofisticación a cualquier espacio.',
    care: ['Proteger de la luz UV excesiva', 'Aplicar barnices protectores', 'Limpiar con productos suaves', 'Permitir el oscurecimiento natural'],
    applications: ['Muebles elegantes', 'Acabados finos', 'Elementos cálidos', 'Diseño sofisticado']
  },
  {
    id: 'teca',
    name: 'Teca',
    description: 'Madera de teca tropical, resistente al agua y con aceites naturales',
    image: 'https://readdy.ai/api/search-image?query=Teak%20wood%20with%20golden%20brown%20color%20and%20natural%20oils%2C%20water-resistant%20bathroom%20furniture%20material%2C%20tropical%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=teca&orientation=portrait',
    category: 'tropical',
    properties: ['Resistente al agua', 'Aceites naturales', 'Dorado', 'Tropical'],
    origin: 'Asia',
    finish: 'Natural',
    detailedDescription: 'La teca es la madera tropical por excelencia para ambientes húmedos. Sus aceites naturales la hacen naturalmente resistente al agua, los insectos y la putrefacción. Su color dorado y su resistencia excepcional la convierten en la elección perfecta para baños y espacios exteriores.',
    care: ['Limpiar con agua y jabón suave', 'Aplicar aceite de teca anualmente', 'No requiere tratamientos especiales', 'Resistente a la humedad natural'],
    applications: ['Muebles de baño', 'Elementos exteriores', 'Zonas húmedas', 'Proyectos marinos']
  },
  {
    id: 'bambú',
    name: 'Bambú',
    description: 'Bambú sostenible con crecimiento rápido y propiedades antibacterianas',
    image: 'https://readdy.ai/api/search-image?query=Bamboo%20wood%20with%20light%20natural%20color%20and%20sustainable%20properties%2C%20eco-friendly%20bathroom%20furniture%20material%2C%20modern%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=bambu&orientation=portrait',
    category: 'sostenible',
    properties: ['Sostenible', 'Antibacteriano', 'Ligero', 'Ecológico'],
    origin: 'Asia',
    finish: 'Natural',
    detailedDescription: 'El bambú representa el futuro de los materiales sostenibles. Con un crecimiento hasta 100 veces más rápido que las maderas tradicionales, ofrece propiedades antibacterianas naturales y una resistencia sorprendente. Es la opción perfecta para proyectos ecológicos sin comprometer la calidad.',
    care: ['Limpiar con productos naturales', 'Evitar la humedad excesiva', 'Aplicar aceites vegetales', 'Mantener ventilación adecuada'],
    applications: ['Proyectos sostenibles', 'Diseño ecológico', 'Elementos ligeros', 'Construcción verde']
  },
  {
    id: 'haya',
    name: 'Haya',
    description: 'Madera de haya europea con tonos claros y grano uniforme',
    image: 'https://readdy.ai/api/search-image?query=Beech%20wood%20with%20light%20tones%20and%20uniform%20grain%2C%20European%20bathroom%20furniture%20material%2C%20clean%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=haya&orientation=portrait',
    category: 'europea',
    properties: ['Tonos claros', 'Grano uniforme', 'Versátil', 'Limpio'],
    origin: 'Europa',
    finish: 'Natural',
    detailedDescription: 'La haya europea es valorada por su grano uniforme y sus tonos claros que aportan luminosidad a los espacios. Su versatilidad la hace ideal para una amplia gama de aplicaciones, desde muebles modernos hasta elementos clásicos. Su trabajabilidad excepcional permite acabados perfectos.',
    care: ['Proteger de la humedad', 'Aplicar selladores regularmente', 'Limpiar con productos suaves', 'Mantener estable la humedad ambiental'],
    applications: ['Muebles modernos', 'Elementos claros', 'Diseño minimalista', 'Proyectos versátiles']
  },
  {
    id: 'fresno',
    name: 'Fresno',
    description: 'Madera de fresno con vetas pronunciadas y gran resistencia',
    image: 'https://readdy.ai/api/search-image?query=Ash%20wood%20with%20pronounced%20grain%20and%20high%20strength%2C%20bathroom%20furniture%20material%2C%20durable%20wood%20texture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=fresno&orientation=portrait',
    category: 'resistente',
    properties: ['Vetas pronunciadas', 'Muy resistente', 'Flexible', 'Duradero'],
    origin: 'Europa/América',
    finish: 'Natural',
    detailedDescription: 'El fresno combina resistencia excepcional con flexibilidad, creando una madera ideal para aplicaciones que requieren durabilidad. Sus vetas pronunciadas crean patrones atractivos, mientras que su resistencia natural lo hace perfecto para muebles que deben soportar uso intensivo.',
    care: ['Aplicar protectores contra humedad', 'Limpiar regularmente', 'Proteger de impactos fuertes', 'Mantener acabados protectores'],
    applications: ['Muebles resistentes', 'Elementos estructurales', 'Proyectos duraderos', 'Uso intensivo']
  }
];

const categories = [
  { id: 'todas', name: 'Todas las maderas' },
  { id: 'roble', name: 'Roble' },
  { id: 'nogal', name: 'Nogal' },
  { id: 'cerezo', name: 'Cerezo' },
  { id: 'tropical', name: 'Tropical' },
  { id: 'sostenible', name: 'Sostenible' },
  { id: 'europea', name: 'Europea' },
  { id: 'resistente', name: 'Resistente' }
];

export default function MaderasPage() {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedWood, setSelectedWood] = useState<WoodType | null>(null);

  const filteredWoods = woodTypes.filter(wood => {
    return selectedCategory === 'todas' || wood.category === selectedCategory;
  });

  const openWoodModal = (wood: WoodType) => {
    setSelectedWood(wood);
    document.body.style.overflow = 'hidden';
  };

  const closeWoodModal = () => {
    setSelectedWood(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Made<em className="font-light">ras</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Selección premium de maderas naturales para tu baño
            </p>
            <div className="scroll-down hidden lg:block">
              <a href="#woods" className="inline-block text-sm">
                Explorar maderas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto px-4 py-3 pr-8 border border-gray-300 bg-white focus:outline-none focus:border-black text-sm cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">{filteredWoods.length}</span> madera/s
            </div>
          </div>
        </div>
      </section>

      {/* Woods Grid */}
      <section id="woods" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWoods.map(wood => (
              <div 
                key={wood.id} 
                className="wood-card bg-white border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openWoodModal(wood)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={wood.image}
                    alt={wood.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                    {wood.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {wood.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-800">Origen:</span>
                      <span className="text-gray-600">{wood.origin}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-800">Acabado:</span>
                      <span className="text-gray-600">{wood.finish}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-800">Propiedades:</h4>
                      <ul className="space-y-1">
                        {wood.properties.slice(0, 3).map((property, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                            {property}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-xs text-blue-600 hover:text-blue-800">
                        Clic para ver más detalles →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Modal */}
      {selectedWood && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-medium">{selectedWood.name}</h2>
              <button
                onClick={closeWoodModal}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={selectedWood.image}
                    alt={selectedWood.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Descripción</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedWood.detailedDescription}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Origen</h4>
                      <p className="text-gray-600">{selectedWood.origin}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Acabado</h4>
                      <p className="text-gray-600">{selectedWood.finish}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Propiedades</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedWood.properties.map((property, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {property}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Cuidado y Mantenimiento</h4>
                    <ul className="space-y-2">
                      {selectedWood.care.map((careItem, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                          {careItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Aplicaciones</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWood.applications.map((application, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/frentes" 
                  className="flex-1 bg-black text-white px-6 py-3 text-center hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ver diseños de frentes
                </a>
                <a 
                  href="/materiales" 
                  className="flex-1 border border-black text-black px-6 py-3 text-center hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Explorar materiales
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wood Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Wood%20care%20and%20maintenance%20for%20bathroom%20furniture%2C%20natural%20wood%20treatment%2C%20professional%20wood%20finishing%20process%2C%20craftsmanship%20details%2C%20professional%20photography%2C%20simple%20background&width=600&height=450&seq=wood_care&orientation=landscape"
                  alt="Cuidado de la Madera"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Cuidado y Mantenimiento
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestras maderas reciben tratamientos especiales para resistir la humedad 
                  del baño. Cada pieza está protegida con acabados que preservan su belleza 
                  natural durante años.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  El mantenimiento es mínimo: una limpieza suave con productos específicos 
                  para madera es suficiente para mantener su aspecto original.
                </p>
                <a 
                  href="/frentes" 
                  className="inline-block border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ver diseños de frentes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Categories Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Tipos de Madera
            </h2>
            <p className="text-lg text-gray-600">
              Cada tipo de madera aporta características únicas a tu baño
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* European Woods */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=European%20wood%20types%20including%20oak%20and%20beech%2C%20natural%20wood%20textures%2C%20bathroom%20furniture%20materials%2C%20traditional%20wood%20grains%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=european_woods&orientation=squarish"
                  alt="Maderas Europeas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Maderas Europeas</h3>
              <p className="text-gray-600 text-sm">
                Roble, haya y fresno con tradición y calidad garantizada
              </p>
            </div>

            {/* Exotic Woods */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Exotic%20wood%20types%20including%20walnut%20and%20cherry%2C%20luxury%20bathroom%20furniture%20materials%2C%20rich%20wood%20textures%20and%20colors%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=exotic_woods&orientation=squarish"
                  alt="Maderas Exóticas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Maderas Exóticas</h3>
              <p className="text-gray-600 text-sm">
                Nogal, cerezo y teca para espacios de lujo y distinción
              </p>
            </div>

            {/* Sustainable Woods */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Sustainable%20wood%20materials%20including%20bamboo%2C%20eco-friendly%20bathroom%20furniture%2C%20natural%20sustainable%20textures%2C%20environmental%20responsibility%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=sustainable_woods&orientation=squarish"
                  alt="Maderas Sostenibles"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Maderas Sostenibles</h3>
              <p className="text-gray-600 text-sm">
                Bambú y maderas certificadas para un futuro responsable
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
