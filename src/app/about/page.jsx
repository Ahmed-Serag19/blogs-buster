import Image from "next/image";
import styles from "./about.module.css";
import Stat from "@/components/stat/Stat";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>About Agency</h1>
        <h2>
          We create digital ideas that are bigger, bolder, brave and better.
        </h2>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's Our
          special Team best consulting & finance solution provider. Wide range
          of web and software development services
        </p>
        <div className={styles.stats}>
          <Stat title="10 K+" desc="Years of experience" />
          <Stat title="234K+" desc="People reached" />
          <Stat title="5 K+" desc="Services and plugins" />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="about hero section component" fill />
      </div>
    </div>
  );
};

export default AboutPage;
