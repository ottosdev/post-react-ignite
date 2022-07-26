import { Comments } from "./Comments";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/103395926?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Otto Souza</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="19 de julho" dateTime="2022-07-19 22:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a> 👉 jane.design/doctorcare</a>
        </p>

        <a> #novoprojeto #nlw #rocketseat</a>
        <p></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comments />
      </div>
    </article>
  );
}
