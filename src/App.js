import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Home';
import Service from './components/service/Service';
import About from './components/about/About';
import Footer from './components/footer/Footer'
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
import Error from './components/error/Error';
import ProjectDetail from './components/project/ProjectDetail';
import ReactDemo from './components/React/ReactDemo';


function App() {
  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/project' element={<Project />}>
          <Route  path='/project/:id' />
        </Route>
        <Route exact path='/news' element={<News />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/react-demo' element={<ReactDemo />} />
        <Route path='/project/:slug' element={<ProjectDetail />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
