import lexmeet from "../../assets/lexmeet.svg";
import styles from "./header.module.css";

export function Head() {
  return (
    <header className={styles.header}>
      <img className={styles.lexmeet} src={lexmeet} />
    </header>
  );
}
