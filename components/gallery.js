import Image from "next/image";
import react from "react";
import styles from "../styles/Home.module.css";
import { SlideUp, FadeInWhenVisible1 } from "./animate";

function Gallery() {
  return (
    <section className="pb-20" id="gallery">
      <FadeInWhenVisible1>
        <h1 className="text-xl text-center pt-10">Portfolio</h1>
        <h3 className="text-5xl text-center pt-2 mb-5">GALLERY</h3>
      </FadeInWhenVisible1>
      <div className="flex flex-wrap justify-center">
        <div className="flex-none m-7">
          <SlideUp>
            <Image
              src="/oliver-johnson.jpg"
              alt="home"
              height="350"
              width="300"
              className="hover:drop-shadow-2xl hover:scale-105"
            />
          </SlideUp>
        </div>
        <div className="flex-none m-7">
          <SlideUp>
            <Image
              src="/oliver-johnson.jpg"
              alt="home"
              height="350"
              width="300"
              className="hover:drop-shadow-2xl hover:scale-105"
            />
          </SlideUp>
        </div>
        <div className="flex-none m-7">
          <SlideUp>
            <Image
              src="/oliver-johnson.jpg"
              alt="home"
              height="350"
              width="300"
              className="hover:drop-shadow-2xl hover:scale-105"
            />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
