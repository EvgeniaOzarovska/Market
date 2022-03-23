import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>OUR ADRESS: Kharkiv, Sumska Street, 45</p>
      <p>
        We and our partners may store and access data on a device, such as cookies, and process
        personal data, such as unique identifiers, sent by a device to personalise content, tailor
        and report on advertising and analyse our traffic.
      </p>
    </footer>
  );
};
