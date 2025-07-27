import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Tech from "../components/TechStack";
import MyProjects from "../components/MyProjects";


const Home = () => {
  const showTech = true; // make dynamic if needed
  const showProjects = true;

  return (
    <>
      <Header />
      <Hero />
      <About />
      {showTech && <Tech />}
      {showProjects && <MyProjects />}
      <Services />
      <Footer />
    </>
  );
};

export default Home;
