import Home1 from "../components/home";
import Services from "../components/service";
import About from "../components/about";
import Gallery from "../components/gallery";
import Testimonials from "../components/testimonial";
import Navbar from "../components/Navbar";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import { FadeInWhenVisible } from "../components/animate";

export default function Home() {
  return (
    <>
      <Navbar />
      <FadeInWhenVisible>
        <Home1 />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Services />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Gallery />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contacts />
      </FadeInWhenVisible>
      <Footer />
    </>
  );
}
