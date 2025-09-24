
import { RouteObject } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ColeccionesPage from "../pages/colecciones/page";
import MaterialesPage from "../pages/materiales/page";
import NosotrosPage from "../pages/nosotros/page";
import ContactoPage from "../pages/contacto/page";
import ScalaCollectionPage from "../pages/collections/scala/page";
import EdgeCollectionPage from "../pages/collections/edge/page";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/colecciones',
    element: <ColeccionesPage />
  },
  {
    path: '/collections/scala',
    element: <ScalaCollectionPage />
  },
  {
    path: '/collections/edge',
    element: <EdgeCollectionPage />
  },
  {
    path: '/materiales',
    element: <MaterialesPage />
  },
  {
    path: '/nosotros',
    element: <NosotrosPage />
  },
  {
    path: '/contacto',
    element: <ContactoPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
