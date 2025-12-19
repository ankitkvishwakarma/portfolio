import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Tech from "../components/TechStack";
import MyProjects from "../components/MyProjects"; // ✅ CORRECT
import Resume from "../components/Resume";

const Home = () => {
  const showTech = true;
  const showProjects = true;

  return (
    <>
      <Header />
      <Hero />
      <About />

      {showTech && <Tech />}

      {/* ✅ PROJECTS SECTION – DATA + SLIDER */}
      {showProjects && <MyProjects />}

      <Services />
      <Resume />
      <Footer />
    </>
  );
};

export default Home;
