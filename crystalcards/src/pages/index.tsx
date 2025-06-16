import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Crystal Cards</title>
      </Head>
      <body className = {styles.body}>
        <main className={styles.main}>
          <div className={styles.logo}>
            <h1 className={styles.title}>Crystal Cards</h1>
            <Navbar />
          </div>
          <p className = {styles.tagline}>
            finding the perfect card for your deck has never been easier
          </p>
          </main>
      </body>
    </>
  );
}
