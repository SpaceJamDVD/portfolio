import styles from './Wedge.module.css';

type Props = {
  imageSrc?: string;
};

export default function Wedge({
  imageSrc = '/images/backgroundwedge.png',
}: Props) {
  return (
    <div className={styles.wedge}>
      <img src={imageSrc} alt="" aria-hidden="true" />
    </div>
  );
}
