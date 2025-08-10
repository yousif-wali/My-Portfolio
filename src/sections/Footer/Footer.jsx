import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} Yousif Wali. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
