import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Tech from "./TechStack";
import MyProjects from "./MyProjects";


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
