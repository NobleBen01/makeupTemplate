import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <p className="underline">hey</p>
      <button className="btn">Button</button>
    </div>
  );
}
