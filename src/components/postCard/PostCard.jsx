import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="/about.png" alt="" fill className={styles.image} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet.</p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
