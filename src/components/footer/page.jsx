import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sergadev</div>
      <div className={styles.text}>
        Serga creative thoughts agency &#169; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
