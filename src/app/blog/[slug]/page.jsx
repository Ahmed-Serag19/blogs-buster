import Image from "next/image";
import styles from "./singlePost.module.css";

const SiglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="single post image"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            src="/noavatar.png"
            alt=""
            // fill
            height={50}
            width={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>09/11/2001</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          temporibus ad voluptatem laboriosam voluptatibus, incidunt quisquam
          ducimus totam voluptates ipsam!
        </div>
      </div>
    </div>
  );
};

export default SiglePost;
