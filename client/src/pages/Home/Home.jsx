import { useEffect } from "react";
import Aos from "aos";

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About from '../../components/UI/About'
import Guideline from '../../components/UI/Guideline'
import Projects from '../../components/UI/Projects'
import Contact from '../../components/UI/Contact'

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    <main>
      <About />
      <Guideline />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
}

export default Home;
