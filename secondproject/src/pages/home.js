import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function login() {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.contenido}>Bienvenido</span>
        <Link href="/login">
          <a>
            <span className={styles.closeSession}>Cerrar Sesión</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
