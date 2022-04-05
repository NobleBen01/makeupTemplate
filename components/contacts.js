import react from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FadeInWhenVisible1, SlideLeft } from "./animate";

function Contacts() {
  return (
    <section className={styles.bgServices} id="contact">
      <FadeInWhenVisible1>
        <h1 className="text-4xl text-center pt-10">Contact Us</h1>
      </FadeInWhenVisible1>
      <div className="flex flex-wrap justify-around">
        <div className="card w-60 bg-base-100 h-72 shadow-xl flex-none rounded-none bg-gray-500 mx-20 mt-2 hover:bg-blue-200">
          <figure className="px-5 py-5 hover:scale-105">
            <Image
              src="/element5-digital.jpg"
              alt="home"
              height="300"
              width="250"
            />
          </figure>
        </div>
        <div className="mx-20 text-lg flex-initial mt-10">
          <SlideLeft>
            <h3 className="pt-4 text-left text-2xl">
              <b>Reach Out</b>
            </h3>
            <h5 className="pt-4 text-left text-2xl">
              Do you want to look pretty and confident in your special day?
            </h5>
            <div className="divide-x divide-gray-400 flex">
              <div className="flex-initial p-3">
                <p className="text-left underline">
                  Book an apointment with me today
                </p>
                <p className="py-2">Email : myemail@gmail.com</p>

                <p className="py-2">Phone : 07055348234</p>
                <p className="py-2">Address : Mainland Lagos Nigeria</p>
              </div>
              <div className="flex-initial px-3">
                <h1 className="py-2 underline">Quick Apointment</h1>
                <a
                  className="py-2"
                  href="https://api.whatsapp.com/send?phone=2347055348234"
                >
                  Message Us-
                  <AiOutlineWhatsApp
                    style={{ color: "green", fontSize: "20px" }}
                  />
                </a>
                <a className="py-2" href="mailto:s.alagbu@gmail.com">
                  Send Email
                  <AiOutlineMail style={{ color: "red", fontSize: "20px" }} />
                </a>
              </div>
            </div>
          </SlideLeft>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
