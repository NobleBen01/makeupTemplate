import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavBar(fixed) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="navbar bg-slate-50 fixed z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-light leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize"
            href="/"
          >
            @Makeup
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-300 block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item px-3 py-2 flex items-center text-stone-600 text-sm capitalize font-light leading-snug hover:opacity-75 m-2">
              <Link href="#home">Home</Link>
            </li>
            <li className="nav-item px-3 py-2 flex items-center text-stone-600 text-sm capitalize font-light leading-snug hover:opacity-75 m-2">
              <div className={styles.dropdown}>
                <Link href="#about">About</Link>
                <ul className={styles.dropdownContent}>
                  <li>
                    <Link href="#services">Services</Link>
                  </li>
                  <li>
                    <Link href="#testimonial">Testimonials</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item px-3 py-2 flex items-center text-stone-600 text-sm capitalize font-light leading-snug hover:opacity-75 m-2">
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
