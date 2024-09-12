import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image src="/about.png" alt="about hero section component" fill />
    </div>
  );
};

export default AboutPage;
