
import { useState } from 'react';

interface Collection {
  id: number;
  name: string;
  link: string;
  backgroundImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const collections: Collection[] = [
  {
    id: 1,
    name: "Ed<em>ge</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Modern%20luxury%20bathroom%20interior%20with%20geometric%20Edge%20collection%20furniture%20featuring%20clean%20lines%20and%20minimalist%20design%2C%20neutral%20color%20palette%20with%20white%20and%20wood%20tones%2C%20professional%20architectural%20photography%2C%20simple%20background&width=360&height=600&seq=edge_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Modern%20luxury%20bathroom%20interior%20with%20geometric%20Edge%20collection%20furniture%20featuring%20clean%20lines%20and%20minimalist%20design%2C%20neutral%20color%20palette%20with%20white%20and%20wood%20tones%2C%20professional%20architectural%20photography%2C%20simple%20background&width=768&height=1024&seq=edge_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Modern%20luxury%20bathroom%20interior%20with%20geometric%20Edge%20collection%20furniture%20featuring%20clean%20lines%20and%20minimalist%20design%2C%20neutral%20color%20palette%20with%20white%20and%20wood%20tones%2C%20professional%20architectural%20photography%2C%20simple%20background&width=1200&height=800&seq=edge_desktop&orientation=landscape"
    }
  },
  {
    id: 2,
    name: "Ea<em>se</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Ease%20collection%20featuring%20organic%20curved%20forms%20and%20natural%20materials%2C%20warm%20wood%20textures%20combined%20with%20white%20surfaces%2C%20serene%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=360&height=600&seq=ease_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Ease%20collection%20featuring%20organic%20curved%20forms%20and%20natural%20materials%2C%20warm%20wood%20textures%20combined%20with%20white%20surfaces%2C%20serene%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=768&height=1024&seq=ease_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Ease%20collection%20featuring%20organic%20curved%20forms%20and%20natural%20materials%2C%20warm%20wood%20textures%20combined%20with%20white%20surfaces%2C%20serene%20atmosphere%2C%20professional%20interior%20photography%2C%20simple%20background&width=1200&height=800&seq=ease_desktop&orientation=landscape"
    }
  },
  {
    id: 3,
    name: "Heri<em>tage</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Luxurious%20bathroom%20inspired%20by%20Greek%20architecture%20with%20Heritage%20collection%2C%20classical%20proportions%20and%20marble%20textures%2C%20sophisticated%20design%20elements%2C%20timeless%20elegance%2C%20professional%20architectural%20photography%2C%20simple%20background&width=360&height=600&seq=heritage_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Luxurious%20bathroom%20inspired%20by%20Greek%20architecture%20with%20Heritage%20collection%2C%20classical%20proportions%20and%20marble%20textures%2C%20sophisticated%20design%20elements%2C%20timeless%20elegance%2C%20professional%20architectural%20photography%2C%20simple%20background&width=768&height=1024&seq=heritage_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Luxurious%20bathroom%20inspired%20by%20Greek%20architecture%20with%20Heritage%20collection%2C%20classical%20proportions%20and%20marble%20textures%2C%20sophisticated%20design%20elements%2C%20timeless%20elegance%2C%20professional%20architectural%20photography%2C%20simple%20background&width=1200&height=800&seq=heritage_desktop&orientation=landscape"
    }
  },
  {
    id: 4,
    name: "Gr<em>ate</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Modern%20bathroom%20featuring%20Grate%20collection%20with%20geometric%20patterns%20and%20contrasting%20light%20and%20shadow%20effects%2C%20contemporary%20design%20with%20textured%20surfaces%2C%20dramatic%20lighting%2C%20professional%20interior%20photography%2C%20simple%20background&width=360&height=600&seq=grate_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Modern%20bathroom%20featuring%20Grate%20collection%20with%20geometric%20patterns%20and%20contrasting%20light%20and%20shadow%20effects%2C%20contemporary%20design%20with%20textured%20surfaces%2C%20dramatic%20lighting%2C%20professional%20interior%20photography%2C%20simple%20background&width=768&height=1024&seq=grate_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Modern%20bathroom%20featuring%20Grate%20collection%20with%20geometric%20patterns%20and%20contrasting%20light%20and%20shadow%20effects%2C%20contemporary%20design%20with%20textured%20surfaces%2C%20dramatic%20lighting%2C%20professional%20interior%20photography%2C%20simple%20background&width=1200&height=800&seq=grate_desktop&orientation=landscape"
    }
  },
  {
    id: 5,
    name: "Ori<em>gin</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Minimalist%20bathroom%20with%20Origin%20collection%20featuring%20pure%20geometric%20forms%20and%20natural%20materials%2C%20clean%20contemporary%20design%2C%20neutral%20color%20scheme%2C%20professional%20architectural%20photography%2C%20simple%20background&width=360&height=600&seq=origin_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Minimalist%20bathroom%20with%20Origin%20collection%20featuring%20pure%20geometric%20forms%20and%20natural%20materials%2C%20clean%20contemporary%20design%2C%20neutral%20color%20scheme%2C%20professional%20architectural%20photography%2C%20simple%20background&width=768&height=1024&seq=origin_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Minimalist%20bathroom%20with%20Origin%20collection%20featuring%20pure%20geometric%20forms%20and%20natural%20materials%2C%20clean%20contemporary%20design%2C%20neutral%20color%20scheme%2C%20professional%20architectural%20photography%2C%20simple%20background&width=1200&height=800&seq=origin_desktop&orientation=landscape"
    }
  },
  {
    id: 6,
    name: "Str<em>ato</em>",
    link: "#",
    backgroundImages: {
      mobile: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Strato%20collection%20featuring%20layered%20modular%20design%20and%20minimalist%20forms%2C%20sophisticated%20materials%20and%20textures%2C%20modern%20architectural%20elements%2C%20professional%20interior%20photography%2C%20simple%20background&width=360&height=600&seq=strato_mobile&orientation=portrait",
      tablet: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Strato%20collection%20featuring%20layered%20modular%20design%20and%20minimalist%20forms%2C%20sophisticated%20materials%20and%20textures%2C%20modern%20architectural%20elements%2C%20professional%20interior%20photography%2C%20simple%20background&width=768&height=1024&seq=strato_tablet&orientation=portrait",
      desktop: "https://readdy.ai/api/search-image?query=Contemporary%20bathroom%20with%20Strato%20collection%20featuring%20layered%20modular%20design%20and%20minimalist%20forms%2C%20sophisticated%20materials%20and%20textures%2C%20modern%20architectural%20elements%2C%20professional%20interior%20photography%2C%20simple%20background&width=1200&height=800&seq=strato_desktop&orientation=landscape"
    }
  }
];

export default function CollectionsGrid() {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

  return (
    <section className="collections-grid py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-light mb-16">Nuestras colecciones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.link}
              className="collection-link relative h-96 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
            >
              <picture className="collection-background absolute inset-0">
                <source 
                  media="(max-width: 768px)" 
                  srcSet={collection.backgroundImages.mobile}
                />
                <source 
                  media="(max-width: 1024px)" 
                  srcSet={collection.backgroundImages.tablet}
                />
                <img 
                  src={collection.backgroundImages.desktop}
                  alt={collection.name}
                  className="collection-image w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </picture>
              
              <div className="collection-overlay absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40"></div>
              
              <div className="collection-content absolute inset-0 flex items-center justify-center">
                <h3 className="collection-title text-white text-3xl md:text-4xl font-light text-center">
                  <span dangerouslySetInnerHTML={{ __html: collection.name }} />
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            Colecciones
          </a>
        </div>
      </div>
    </section>
  );
}
