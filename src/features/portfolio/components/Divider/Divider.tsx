import styles from './Divider.module.css';

type Props = {
  variant?: 'solid' | 'dashed' | 'gradient' | 'custom';
  color?: string;
  thickness?: string;
  width?: string;
};

export default function Divider({
  variant = 'solid',
  color = 'var(--warmGray)',
  thickness = '2px',
  width = '100%',
}: Props) {
  return (
    <hr
      className={`${styles.divider} ${styles[variant]}`}
      style={{ borderColor: color, borderWidth: thickness, width }}
    />
  );
}
