import styles from "./Header.module.css";

import IgniteLogo from "../assets/ignite_logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
