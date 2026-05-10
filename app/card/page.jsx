import styles from "./Card.module.css";

export default function Card() {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Card</h1>
      <p className={styles.description}>This is a card component.</p>
    </section>
  );
}
