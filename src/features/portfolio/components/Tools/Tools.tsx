import styles from './Tools.module.css';
import type { IconType } from 'react-icons';

type Tool = { name: string; Icon: IconType; color?: string };
type Props = { tools: Tool[]; size?: number };

export default function Tools({ tools, size = 60 }: Props) {
  const half = Math.ceil(tools.length / 2);
  const topRow = tools.slice(0, half);
  const bottomRow = tools.slice(half);

  return (
    <section className={styles.tools}>
      <h2 className={styles.heading}>Tools of the Trade</h2>

      <div className={styles.carousel}>
        <Row items={topRow} dir="left" size={size} />
        <Row items={bottomRow} dir="right" size={size} />
      </div>
    </section>
  );
}

function Row({
  items,
  dir,
  size,
}: {
  items: Tool[];
  dir: 'left' | 'right';
  size?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          dir === 'left' ? styles.trackLeft : styles.trackRight
        }`}
      >
        {doubled.map((tool, i) => {
          const isClone = i >= items.length;
          return (
            <tool.Icon
              key={`${tool.name}-${i}`}
              size={size}
              color={tool.color}
              className={styles.icon}
              title={tool.name}
              aria-hidden={isClone}
            />
          );
        })}
      </div>
    </div>
  );
}
