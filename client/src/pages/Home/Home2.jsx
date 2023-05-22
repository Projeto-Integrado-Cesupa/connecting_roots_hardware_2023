import { useEffect } from "react";
import Aos from "aos";

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import About2 from "../../components/UI2/About2";

function Home2() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    <main>
      <About2 />
    </main>
    {/* <Footer /> */}
  </>
}

export default Home2;
