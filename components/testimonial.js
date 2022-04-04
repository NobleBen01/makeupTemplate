import Image from "next/image";
import react from "react";
import styles from "../styles/Home.module.css";
import { FadeInWhenVisible1 } from "./animate";

function Testimonials() {
  return (
    <section className={styles.bgAbout} id="testimonial">
      <FadeInWhenVisible1>
        <h1 className="text-center text-xl pt-10">Testimonials</h1>
        <h1 className="text-center text-4xl">What my clients are saying</h1>
      </FadeInWhenVisible1>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full mx-auto block"
        >
          <div className="flex justify-center">
            <div className="flex-none m-5">
              <div className="px-10 pt-10">
                <Image
                  src="/valerie-elash.jpg"
                  alt="home"
                  height="100"
                  width="100"
                  className="rounded-full"
                />
              </div>
              <p className="text-center">Julie Jane</p>
              <p className="text-center pt-5">I got more than I asked for</p>
            </div>
          </div>
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex justify-center">
            <div className="flex-none m-5">
              <div className="px-10 pt-10">
                <Image
                  src="/mehdi-zegna.jpg"
                  alt="home"
                  height="100"
                  width="100"
                  className="rounded-full"
                />
              </div>
              <p className="text-center">Julie Jane</p>
              <p className="text-center pt-5">I got more than I asked for</p>
            </div>
          </div>
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex justify-center">
            <div className="flex-none m-5">
              <div className="px-10 pt-10">
                <Image
                  src="/vinicius-wiesehofer.jpg"
                  alt="home"
                  height="100"
                  width="100"
                  className="rounded-full"
                />
              </div>
              <p className="text-center">Julie Jane</p>
              <p className="text-center pt-5">I got more than I asked for</p>
            </div>
          </div>
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="flex justify-center">
            <div className="flex-none m-5">
              <div className="px-10 pt-10">
                <Image
                  src="/jessica-felicio.jpg"
                  alt="home"
                  height="100"
                  width="100"
                  className="rounded-full"
                />
              </div>
              <p className="text-center">Julie Jane</p>
              <p className="text-center pt-5">I got more than I asked for</p>
            </div>
          </div>
          /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
