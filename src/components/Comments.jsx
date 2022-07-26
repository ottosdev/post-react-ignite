import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";

export function Comments() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/103395926?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Otto Neto</strong>
              <time title="20 de Julho ás 21:00" dateTime="2022-05-11 21:00">
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar comentario">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
