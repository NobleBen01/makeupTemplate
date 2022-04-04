import Image from "next/image";
import react from "react";
import styles from "../styles/Home.module.css";
import { FadeInWhenVisible1, SlideLeft, SlideUp } from "./animate";

function About() {
  return (
    <section className={styles.bgAbout} id="about">
      <FadeInWhenVisible1>
        <h1 className="text-4xl text-center pt-10"> About me</h1>
      </FadeInWhenVisible1>
      <div className="flex flex-wrap pt-10 justify-center">
        <div className="flex-none">
          <SlideUp>
            <div className="relative w-92 p-14">
              <div className="w-60 h-72 absolute bg-slate-500 top-5 left-2  hover:bg-white"></div>
              <Image
                src="/valerie-elash.jpg"
                alt="home"
                height="300"
                width="250"
                className=""
              />
            </div>
          </SlideUp>
        </div>

        <div className="flex-none text-xl text-left w-3/6 p-10">
          <SlideLeft>
            <p>
              Hello, i am Olivia a Professional Makeup Artist. Quisque luctus
              tincidunt enim dapibus pharetra neue ultricies at. Morbi dapibus
              mauris id scelerisque placerat nula massa lacinia orci in
              facilisis nulla quam volutpat lectus. Nunc elementum ante commodo
              felis hendrerit. Fringilla risus nec, luctus mauris orci auctor
              purus euismod at pretium purus pretium ligula rutrum tempor sapien
              . Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
              sodales sapien undo pretium purus .
            </p>
          </SlideLeft>
        </div>
      </div>
    </section>
  );
}

export default About;
