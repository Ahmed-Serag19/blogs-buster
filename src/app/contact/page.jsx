import Image from "next/image";
import styles from "./contact.module.css";
const ContactPage = () => {
  console.log("It works here on the server");
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          fill
          className={styles.image}
          alt="contact us image"
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="email" placeholder="Phone Number (Optional)" />
          <textarea placeholder="Message" cols={30} rows={10} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
