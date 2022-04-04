import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { SlideLeft, ShadowOnHover } from "./animate";

const slideLeft = {
  slide: { opacity: 1, x: 1, transition: { duration: 1 } },
  noSlide: { opacity: 0, x: -20 },
};

function Home1() {
  return (
    <div className={styles.intro} id="home">
      <SlideLeft>
        <div>
          <h1 className="text-slate-50 text-6xl text-left pt-72">
            <ShadowOnHover>
              <span> Belen Ava</span>
            </ShadowOnHover>
          </h1>

          <h3 className="text-slate-50 text-5xl text-left pt-2">
            <ShadowOnHover>
              <span>Makeup & Hair Stylist</span>
            </ShadowOnHover>
          </h3>
        </div>
      </SlideLeft>
    </div>
  );
}

export default Home1;
