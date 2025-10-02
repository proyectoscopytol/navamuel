
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  properties: string[];
}

const materials: Material[] = [
  {
    id: 'lacados',
    name: 'Lacados',
    description: 'Acabados lacados de alta calidad con amplia gama cromática',
    image: 'https://readdy.ai/api/search-image?query=High-quality%20lacquered%20bathroom%20surfaces%20in%20various%20colors%2C%20modern%20glossy%20finish%20materials%2C%20contemporary%20bathroom%20design%20elements%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=lacados_material&orientation=portrait',
    category: 'lacados',
    properties: ['Resistente al agua', 'Fácil limpieza', 'Amplia gama de colores', 'Acabado brillante']
  },
  {
    id: 'madera-s3',
    name: 'Madera S3 - Roble Salvaje',
    description: 'Madera natural de roble con acabado salvaje y textura única',
    image: 'https://readdy.ai/api/search-image?query=Natural%20wild%20oak%20wood%20texture%20with%20unique%20grain%20patterns%2C%20bathroom%20furniture%20materials%2C%20warm%20wood%20tones%20and%20natural%20finishes%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=madera_s3&orientation=portrait',
    category: 's3-roble-salvaje',
    properties: ['100% Natural', 'Textura única', 'Resistente', 'Cálido']
  },
  {
    id: 'madera-s4',
    name: 'Madera S4 - Roble Raw',
    description: 'Roble con acabado raw, conservando la belleza natural de la madera',
    image: 'https://readdy.ai/api/search-image?query=Raw%20oak%20wood%20with%20natural%20finish%2C%20unprocessed%20wood%20texture%20for%20bathroom%20furniture%2C%20authentic%20grain%20patterns%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=madera_s4&orientation=portrait',
    category: 's4-roble-raw',
    properties: ['Acabado natural', 'Sin tratar', 'Auténtico', 'Sostenible']
  },
  {
    id: 'madera-s1',
    name: 'Madera S1 - Natural',
    description: 'Madera natural con acabado tradicional y elegante',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20natural%20wood%20finish%20for%20bathroom%20furniture%2C%20elegant%20wood%20grain%20texture%2C%20classic%20material%20appearance%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=madera_s1&orientation=portrait',
    category: 's1-madera-natural',
    properties: ['Elegante', 'Tradicional', 'Duradero', 'Versátil']
  },
  {
    id: 'marmol',
    name: 'Mármol',
    description: 'Mármol natural de alta calidad con vetas únicas',
    image: 'https://readdy.ai/api/search-image?query=High-quality%20natural%20marble%20with%20unique%20veining%20patterns%2C%20luxurious%20bathroom%20materials%2C%20white%20and%20gray%20marble%20textures%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=marmol_material&orientation=portrait',
    category: 'marmol',
    properties: ['Lujo natural', 'Vetas únicas', 'Resistente', 'Atemporal']
  },
  {
    id: 'mdi',
    name: 'MDi',
    description: 'Material compuesto de alta densidad y durabilidad',
    image: 'https://readdy.ai/api/search-image?query=High-density%20composite%20material%20for%20bathroom%20applications%2C%20modern%20engineered%20surface%20with%20smooth%20finish%2C%20contemporary%20material%20design%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=mdi_material&orientation=portrait',
    category: 'mdi',
    properties: ['Alta densidad', 'Resistente', 'Uniforme', 'Moderno']
  },
  {
    id: 'espejos-cristales',
    name: 'Espejos y Cristales',
    description: 'Cristales y espejos de alta calidad con diferentes acabados',
    image: 'https://readdy.ai/api/search-image?query=High-quality%20mirrors%20and%20glass%20surfaces%20for%20bathroom%20design%2C%20crystal%20clear%20reflective%20materials%2C%20modern%20glass%20finishes%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=espejos_cristales&orientation=portrait',
    category: 'espejos-cristales',
    properties: ['Claridad óptica', 'Resistente', 'Fácil mantenimiento', 'Versatil']
  },
  {
    id: 'solidsurface',
    name: 'Solidsurface',
    description: 'Superficie sólida no porosa de última generación',
    image: 'https://readdy.ai/api/search-image?query=Modern%20solid%20surface%20material%20for%20bathroom%20applications%2C%20non-porous%20white%20surface%20with%20smooth%20finish%2C%20contemporary%20engineered%20material%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=solidsurface&orientation=portrait',
    category: 'solidsurface',
    properties: ['No poroso', 'Higiénico', 'Reparable', 'Moldeable']
  },
  {
    id: 'topsolid',
    name: 'Topsolid',
    description: 'Material de superficie premium con propiedades avanzadas',
    image: 'https://readdy.ai/api/search-image?query=Premium%20Topsolid%20surface%20material%20with%20advanced%20properties%2C%20high-end%20bathroom%20surface%20finish%2C%20modern%20engineered%20material%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=topsolid&orientation=portrait',
    category: 'topsolid',
    properties: ['Premium', 'Avanzado', 'Resistente', 'Exclusivo']
  },
  {
    id: 'uhs',
    name: 'UHS Color',
    description: 'Ultra High Surface con colores vibrantes y duraderos',
    image: 'https://readdy.ai/api/search-image?query=Ultra%20High%20Surface%20material%20with%20vibrant%20colors%2C%20modern%20colored%20bathroom%20surfaces%2C%20durable%20finish%20materials%2C%20professional%20material%20photography%2C%20simple%20background&width=400&height=500&seq=uhs_color&orientation=portrait',
    category: 'uhs-color',
    properties: ['Ultra resistente', 'Colores vibrantes', 'Duradero', 'Innovador']
  }
];

const categories = [
  { id: 'todos', name: 'Todos los materiales' },
  { id: 'lacados', name: 'Lacados' },
  { id: 's3-roble-salvaje', name: 'Madera S3' },
  { id: 's4-roble-raw', name: 'Madera S4' },
  { id: 's1-madera-natural', name: 'Madera S1' },
  { id: 'marmol', name: 'Mármol' },
  { id: 'mdi', name: 'MDi' },
  { id: 'espejos-cristales', name: 'Espejos y cristales' },
  { id: 'solidsurface', name: 'Solidsurface' },
  { id: 'topsolid', name: 'Topsolid' },
  { id: 'uhs-color', name: 'UHS' }
];

export default function MaterialesPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredMaterials = materials.filter(material => {
    return selectedCategory === 'todos' || material.category === selectedCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span>Mater<em className="font-light">iales</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Materiales de alta calidad que definen la excelencia en diseño
            </p>
            <div className="scroll-down hidden lg:block">
              <a href="#materials" className="inline-block text-sm">
                Descubrir
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
              <span className="font-medium">{filteredMaterials.length}</span> material/es
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section id="materials" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map(material => (
              <div key={material.id} className="material-card bg-white border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {material.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-800">Propiedades:</h4>
                    <ul className="space-y-1">
                      {material.properties.map((property, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {property}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Categories Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Categorías de Materiales
            </h2>
            <p className="text-lg text-gray-600">
              Cada material está cuidadosamente seleccionado por su calidad y belleza
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Natural Materials */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Natural%20materials%20for%20bathroom%20design%20including%20wood%20and%20marble%20textures%2C%20organic%20materials%20showcase%2C%20warm%20natural%20tones%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=natural_materials&orientation=squarish"
                  alt="Materiales Naturales"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Materiales Naturales</h3>
              <p className="text-gray-600 text-sm">
                Madera y mármol que aportan calidez y elegancia natural
              </p>
            </div>

            {/* Engineered Materials */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Engineered%20materials%20for%20modern%20bathroom%20design%2C%20solid%20surface%20and%20composite%20materials%2C%20contemporary%20finish%20textures%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=engineered_materials&orientation=squarish"
                  alt="Materiales Técnicos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Materiales Técnicos</h3>
              <p className="text-gray-600 text-sm">
                Superficies sólidas y materiales compuestos de última tecnología
              </p>
            </div>

            {/* Finish Materials */}
            <div className="text-center">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Lacquered%20and%20glass%20finish%20materials%20for%20bathroom%20applications%2C%20glossy%20surfaces%20and%20mirror%20materials%2C%20modern%20finish%20textures%2C%20professional%20photography%2C%20simple%20background&width=400&height=400&seq=finish_materials&orientation=squarish"
                  alt="Acabados Especiales"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">Acabados Especiales</h3>
              <p className="text-gray-600 text-sm">
                Lacados y cristales que definen la estética contemporánea
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
