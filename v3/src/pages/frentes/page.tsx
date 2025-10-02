
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface FrenteDesign {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  detailedDescription: string;
  applications: string[];
  characteristics: string[];
  maintenance: string[];
}

const frenteDesigns: FrenteDesign[] = [
  {
    id: 'liso',
    name: 'Frente Liso',
    description: 'Diseño minimalista con superficie completamente lisa y uniforme',
    image: 'https://readdy.ai/api/search-image?query=Smooth%20minimalist%20bathroom%20cabinet%20front%20with%20clean%20flat%20surface%2C%20contemporary%20design%2C%20uniform%20finish%2C%20modern%20bathroom%20furniture%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_liso&orientation=portrait',
    category: 'minimalista',
    features: ['Superficie uniforme', 'Fácil limpieza', 'Estilo minimalista', 'Versatil'],
    detailedDescription: 'El frente liso representa la esencia del minimalismo en su forma más pura. Su superficie completamente uniforme y sin interrupciones crea una sensación de calma y orden en el baño. Este diseño atemporal se adapta perfectamente a cualquier estilo decorativo, desde el más contemporáneo hasta el más clásico. La ausencia de relieves o texturas facilita enormemente su mantenimiento, convirtiéndolo en la opción ideal para quienes buscan funcionalidad sin renunciar a la elegancia.',
    applications: ['Baños minimalistas', 'Espacios pequeños', 'Diseño contemporáneo', 'Ambientes zen'],
    characteristics: ['Superficie completamente plana', 'Sin relieves ni texturas', 'Acabado mate o brillante disponible', 'Líneas perfectamente rectas'],
    maintenance: ['Limpiar con paño húmedo y jabón neutro', 'Secar inmediatamente para evitar manchas', 'Evitar productos abrasivos', 'Pulir ocasionalmente para mantener el brillo']
  },
  {
    id: 'acanalado-vertical',
    name: 'Acanalado Vertical',
    description: 'Frente con acanaladuras verticales que aportan textura y profundidad',
    image: 'https://readdy.ai/api/search-image?query=Vertical%20fluted%20bathroom%20cabinet%20front%20with%20linear%20grooves%2C%20textured%20surface%20design%2C%20contemporary%20furniture%20detail%2C%20modern%20bathroom%20storage%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=acanalado_vertical&orientation=portrait',
    category: 'texturizado',
    features: ['Textura vertical', 'Juego de luces', 'Diseño contemporáneo', 'Elegante'],
    detailedDescription: 'Las acanaladuras verticales crean un juego fascinante de luces y sombras que cambia a lo largo del día. Este diseño no solo aporta textura visual, sino que también crea la ilusión de mayor altura en el espacio. Las líneas verticales guían la mirada hacia arriba, generando una sensación de amplitud y elegancia. Cada acanaladura está perfectamente calculada para crear el equilibrio perfecto entre funcionalidad y estética.',
    applications: ['Baños con techos bajos', 'Espacios que necesitan altura visual', 'Diseño contemporáneo', 'Ambientes sofisticados'],
    characteristics: ['Acanaladuras uniformes y precisas', 'Profundidad controlada para óptimo juego de luces', 'Acabado suave al tacto', 'Resistente a la humedad'],
    maintenance: ['Limpiar siguiendo la dirección de las acanaladuras', 'Usar cepillo suave para las ranuras', 'Secar completamente después de la limpieza', 'Aplicar protector cada 6 meses']
  },
  {
    id: 'acanalado-horizontal',
    name: 'Acanalado Horizontal',
    description: 'Líneas horizontales que crean un efecto visual de amplitud',
    image: 'https://readdy.ai/api/search-image?query=Horizontal%20fluted%20bathroom%20cabinet%20front%20with%20linear%20grooves%2C%20textured%20surface%20design%2C%20contemporary%20furniture%20detail%2C%20modern%20bathroom%20storage%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=acanalado_horizontal&orientation=portrait',
    category: 'texturizado',
    features: ['Textura horizontal', 'Sensación de amplitud', 'Moderno', 'Sofisticado'],
    detailedDescription: 'El acanalado horizontal transforma completamente la percepción del espacio, creando una sensación de amplitud y continuidad. Las líneas horizontales se extienden visualmente más allá de los límites físicos del mueble, integrándose armónicamente con el diseño general del baño. Este efecto es especialmente beneficioso en espacios reducidos, donde cada centímetro visual cuenta para crear una sensación de mayor amplitud.',
    applications: ['Baños estrechos', 'Espacios que necesitan amplitud visual', 'Diseño moderno', 'Integración con líneas arquitectónicas'],
    characteristics: ['Líneas horizontales perfectamente alineadas', 'Efecto visual de continuidad', 'Textura suave y uniforme', 'Proporciones equilibradas'],
    maintenance: ['Limpiar horizontalmente siguiendo las líneas', 'Prestar atención a las esquinas', 'Usar productos no abrasivos', 'Mantener seco para evitar acumulación de humedad']
  },
  {
    id: 'rejilla',
    name: 'Frente Rejilla',
    description: 'Diseño con patrón de rejilla que combina funcionalidad y estética',
    image: 'https://readdy.ai/api/search-image?query=Grid%20pattern%20bathroom%20cabinet%20front%20with%20geometric%20mesh%20design%2C%20contemporary%20furniture%20detail%2C%20modern%20storage%20solution%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_rejilla&orientation=portrait',
    category: 'geometrico',
    features: ['Patrón geométrico', 'Ventilación', 'Diseño único', 'Funcional'],
    detailedDescription: 'El frente rejilla representa la perfecta fusión entre funcionalidad y diseño. Su patrón geométrico no solo crea un impacto visual único, sino que también permite la circulación natural del aire, siendo ideal para espacios donde se almacenan productos que requieren ventilación. Cada apertura está calculada para mantener la privacidad del contenido mientras permite el flujo de aire, creando un equilibrio perfecto entre estética y practicidad.',
    applications: ['Almacenamiento de productos de higiene', 'Espacios que requieren ventilación', 'Diseño industrial', 'Baños modernos'],
    characteristics: ['Patrón geométrico regular', 'Aberturas calibradas para ventilación', 'Estructura resistente', 'Diseño tridimensional'],
    maintenance: ['Limpiar con aspiradora para eliminar polvo', 'Usar cepillo pequeño para las aberturas', 'Aplicar protector antioxidante', 'Revisar regularmente la integridad de la estructura']
  },
  {
    id: 'marco',
    name: 'Frente con Marco',
    description: 'Diseño clásico con marco perimetral que define la estructura',
    image: 'https://readdy.ai/api/search-image?query=Framed%20bathroom%20cabinet%20front%20with%20perimeter%20border%20design%2C%20classic%20contemporary%20style%2C%20structured%20furniture%20detail%2C%20modern%20bathroom%20storage%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_marco&orientation=portrait',
    category: 'clasico',
    features: ['Marco perimetral', 'Estructura definida', 'Estilo clásico', 'Atemporal'],
    detailedDescription: 'El frente con marco evoca la elegancia clásica adaptada a los tiempos modernos. El marco perimetral no solo define visualmente la estructura, sino que también aporta profundidad y carácter al conjunto. Este diseño atemporal ha resistido el paso de las tendencias, manteniéndose siempre relevante gracias a su equilibrio perfecto entre tradición y modernidad. La precisión en las esquinas y la calidad del acabado hacen de este frente una inversión duradera.',
    applications: ['Baños clásicos', 'Espacios tradicionales', 'Diseño atemporal', 'Ambientes sofisticados'],
    characteristics: ['Marco perimetral perfectamente definido', 'Esquinas con acabado impecable', 'Proporción áurea en el diseño', 'Acabado de alta calidad'],
    maintenance: ['Prestar especial atención a las esquinas del marco', 'Limpiar con productos específicos para el material', 'Proteger el acabado con ceras adecuadas', 'Inspeccionar regularmente las uniones']
  },
  {
    id: 'biselado',
    name: 'Frente Biselado',
    description: 'Bordes biselados que crean efectos de luz y sombra únicos',
    image: 'https://readdy.ai/api/search-image?query=Beveled%20edge%20bathroom%20cabinet%20front%20with%20angled%20borders%2C%20light%20and%20shadow%20effects%2C%20contemporary%20furniture%20detail%2C%20modern%20design%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_biselado&orientation=portrait',
    category: 'elegante',
    features: ['Bordes biselados', 'Efectos de luz', 'Elegante', 'Refinado'],
    detailedDescription: 'Los bordes biselados transforman la luz natural en un espectáculo visual constante. Cada ángulo está cuidadosamente calculado para captar y reflejar la luz de manera óptima, creando efectos que cambian sutilmente a lo largo del día. Esta técnica, heredada de la tradición artesanal más refinada, aporta una sofisticación incomparable al baño. El biselado no solo es un elemento decorativo, sino que también suaviza visualmente los bordes, creando una sensación de ligereza y elegancia.',
    applications: ['Baños de lujo', 'Espacios con buena iluminación natural', 'Diseño refinado', 'Ambientes elegantes'],
    characteristics: ['Biselado preciso en todos los bordes', 'Ángulos calculados para óptima reflexión de luz', 'Acabado espejo en los biselados', 'Transiciones suaves entre superficies'],
    maintenance: ['Limpiar los biselados con especial cuidado', 'Usar paños suaves para evitar rayados', 'Aplicar productos específicos para acabados brillantes', 'Pulir regularmente para mantener el efecto espejo']
  },
  {
    id: 'curvado',
    name: 'Frente Curvado',
    description: 'Superficies curvas que aportan suavidad y fluidez al diseño',
    image: 'https://readdy.ai/api/search-image?query=Curved%20bathroom%20cabinet%20front%20with%20smooth%20flowing%20surfaces%2C%20organic%20design%20elements%2C%20contemporary%20furniture%20detail%2C%20modern%20bathroom%20storage%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_curvado&orientation=portrait',
    category: 'organico',
    features: ['Superficies curvas', 'Diseño orgánico', 'Suavidad', 'Fluido'],
    detailedDescription: 'Las superficies curvas introducen un elemento orgánico que contrasta armoniosamente con las líneas rectas típicas del baño. Estas curvas no solo suavizan visualmente el espacio, sino que también mejoran la ergonomía, eliminando esquinas y creando superficies más amigables al tacto. El diseño curvado requiere una tecnología de fabricación avanzada que permite crear estas formas fluidas manteniendo la resistencia estructural y la durabilidad necesarias para el ambiente húmedo del baño.',
    applications: ['Baños familiares', 'Espacios que requieren suavidad', 'Diseño orgánico', 'Ambientes relajantes'],
    characteristics: ['Curvas suaves y continuas', 'Ausencia total de esquinas agudas', 'Superficies ergonómicas', 'Transiciones fluidas entre planos'],
    maintenance: ['Limpiar siguiendo la curvatura natural', 'Prestar atención a las transiciones entre curvas', 'Usar productos que no dañen la superficie curvada', 'Mantener la suavidad del acabado con tratamientos específicos']
  },
  {
    id: 'geometrico',
    name: 'Frente Geométrico',
    description: 'Patrones geométricos complejos que crean impacto visual',
    image: 'https://readdy.ai/api/search-image?query=Geometric%20pattern%20bathroom%20cabinet%20front%20with%20complex%20angular%20design%2C%20contemporary%20furniture%20detail%2C%20modern%20artistic%20elements%2C%20professional%20photography%2C%20simple%20background&width=400&height=500&seq=frente_geometrico&orientation=portrait',
    category: 'geometrico',
    features: ['Patrones complejos', 'Impacto visual', 'Artístico', 'Vanguardista'],
    detailedDescription: 'El frente geométrico es una declaración artística que transforma el mueble de baño en una pieza escultural. Los patrones complejos están diseñados siguiendo principios matemáticos que crean armonía visual a pesar de su aparente complejidad. Cada elemento geométrico interactúa con los demás creando un conjunto cohesivo que funciona como punto focal del baño. Este diseño vanguardista está pensado para espacios que buscan ser únicos y memorables.',
    applications: ['Baños de diseño', 'Espacios artísticos', 'Diseño vanguardista', 'Ambientes únicos'],
    characteristics: ['Patrones matemáticamente calculados', 'Múltiples planos y ángulos', 'Efecto tridimensional', 'Precisión milimétrica en la ejecución'],
    maintenance: ['Limpiar cada sección geométrica individualmente', 'Usar herramientas específicas para llegar a todos los ángulos', 'Aplicar protectores en cada superficie', 'Inspeccionar regularmente la integridad del patrón']
  }
];

const categories = [
  { id: 'todos', name: 'Todos los diseños' },
  { id: 'minimalista', name: 'Minimalista' },
  { id: 'texturizado', name: 'Texturizado' },
  { id: 'geometrico', name: 'Geométrico' },
  { id: 'clasico', name: 'Clásico' },
  { id: 'elegante', name: 'Elegante' },
  { id: 'organico', name: 'Orgánico' }
];

export default function FrentesPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedFrente, setSelectedFrente] = useState<FrenteDesign | null>(null);

  const filteredDesigns = frenteDesigns.filter(design => {
    return selectedCategory === 'todos' || design.category === selectedCategory;
  });

  const openFrenteModal = (frente: FrenteDesign) => {
    setSelectedFrente(frente);
    document.body.style.overflow = 'hidden';
  };

  const closeFrenteModal = () => {
    setSelectedFrente(null);
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
              <span>Diseños <em className="font-light">de Frentes</em></span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Opciones de diseño que definen la personalidad de tu baño
            </p>
            <div className="scroll-down hidden lg:block">
              <a href="#designs" className="inline-block text-sm">
                Explorar diseños
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
              <span className="font-medium">{filteredDesigns.length}</span> diseño/s
            </div>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section id="designs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map(design => (
              <div 
                key={design.id} 
                className="design-card bg-white border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => openFrenteModal(design)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                    {design.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {design.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-800">Características:</h4>
                    <ul className="space-y-1">
                      {design.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
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
            ))}
          </div>
        </div>
      </section>

      {/* Frente Modal */}
      {selectedFrente && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-medium">{selectedFrente.name}</h2>
              <button
                onClick={closeFrenteModal}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={selectedFrente.image}
                    alt={selectedFrente.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Descripción</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFrente.detailedDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Características Principales</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedFrente.characteristics.map((characteristic, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                          {characteristic}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Cuidado y Mantenimiento</h4>
                    <ul className="space-y-2">
                      {selectedFrente.maintenance.map((maintenanceItem, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></span>
                          {maintenanceItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Aplicaciones Recomendadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFrente.applications.map((application, index) => (
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
                  href="/maderas" 
                  className="flex-1 bg-black text-white px-6 py-3 text-center hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ver tipos de maderas
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

      <Footer />
    </div>
  );
}
