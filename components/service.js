import react from "react";
import Image from "next/dist/client/image";
import styles from "../styles/Home.module.css";
import { SlideUp, FadeInWhenVisible1 } from "./animate";

function Services() {
  return (
    <div className={styles.bgServices} id="services">
      <FadeInWhenVisible1>
        <h1 className="pt-10 text-center text-xl">What I do</h1>
        <h1 className="text-center text-4xl">MAKEUP SERVICES</h1>
      </FadeInWhenVisible1>
      <div className="flex flex-wrap justify-center">
        <SlideUp>
          <div className="card w-72 bg-base-100 shadow-xl flex-initial m-5 rounded-none hover:drop-shadow-2xl hover:translate-y-6">
            <figure className="px-5 pt-5">
              <Image
                src="/oliver-johnson.jpg"
                alt="home"
                height="300"
                width="250"
              />
            </figure>
            <div className="text-center p-2">
              <h2 className="text-xl">FACE MAKEUP</h2>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="card w-72 bg-base-100 shadow-xl flex-initial m-5 rounded-none hover:drop-shadow-2xl hover:translate-y-6">
            <figure className="px-5 pt-5">
              <Image
                src="/amir-seilsepour.jpg"
                alt="home"
                height="300"
                width="250"
              />
            </figure>
            <div className="text-center p-2">
              <h2 className="text-xl">EYES MAKEUP</h2>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="card w-72 bg-base-100 shadow-xl flex-initial m-5 rounded-none hover:drop-shadow-2xl hover:translate-y-6">
            <figure className="px-5 pt-5">
              <Image src="/aggy-wide.jpg" alt="home" height="300" width="250" />
            </figure>
            <div className="text-center p-2">
              <h2 className="text-xl">HAIR MAKEUP</h2>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className="card w-72 bg-base-100 shadow-xl flex-initial m-5 rounded-none hover:drop-shadow-2xl hover:translate-y-6">
            <figure className="px-5 pt-5">
              <Image src="/valerie.jpg" alt="home" height="300" width="250" />
            </figure>
            <div className="text-center p-2">
              <h2 className="text-xl">BRIDAL MAKEUP</h2>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}

export default Services;
