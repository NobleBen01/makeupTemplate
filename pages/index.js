import Home1 from "../Components/home";
import Services from "../Components/service";
import About from "../Components/about";
import Gallery from "../Components/gallery";
import Testimonials from "../Components/testimonial";
import Navbar from "../Components/Navbar";
import Contacts from "../Components/contacts";
import Footer from "../Components/footer";
import { FadeInWhenVisible } from "../Components/animate";

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
