import { RouteObject } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import MaterialesPage from "../pages/materiales/page";
import NosotrosPage from "../pages/nosotros/page";
import ContactoPage from "../pages/contacto/page";
import DescargasPage from "../pages/descargas/page";
import MaderasPage from "../pages/maderas/page";
import FrentesPage from "../pages/frentes/page";
import AmbientesPage from '../pages/ambientes/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
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
    path: '/maderas',
    element: <MaderasPage />
  },
  {
    path: '/frentes',
    element: <FrentesPage />
  },
  {
    path: '/descargas',
    element: <DescargasPage />
  },
    {
    path: '/ambientes',
    element: <AmbientesPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
