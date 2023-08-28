import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {useRoutes} from 'react-router-dom';
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const routes = useRoutes([
    {
        path:"/",
        element:<Hero/>
    },
    {
      path:"/blog",
      element:<Blog/>
  }, 
  {
    path:"/products",
    element:<Products/>
  },
   
    {
        path:"/contact",
        element:<Contact/>
    },
  
  ]);
  return (
    <>
      <Navbar/>
      {routes}
      <Footer/>
    </>
  );
}

export default App;
