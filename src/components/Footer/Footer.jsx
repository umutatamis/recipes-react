import styles from "./Footer.module.css";
import Copyright from "/src/assets/Svg/copyright.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Design & Development by Umut Atamış
      </div>
      <img src={Copyright} />
    </div>
  );
}

export default Footer;
