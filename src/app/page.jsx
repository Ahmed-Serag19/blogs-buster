import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ab, a
          officiis porro ullam ipsa corporis veritatis saepe ut atque!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands that support us"
            fill
            className={styles.brandImage}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="home hero section component"
          fill
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Home;
