import styles from './EmploymentTimeLine.module.css';

export type TimelineNodeType = 'start' | 'middle' | 'end';

export interface EmploymentNode {
  type: TimelineNodeType;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
}

interface Props {
  heading?: string;
  nodes: EmploymentNode[];
}

export default function EmploymentTimeline({ heading, nodes }: Props) {
  return (
    <section className={styles.timeline}>
      {heading && <h2 className={styles.title}>{heading}</h2>}

      <ul className={styles.list}>
        {nodes.map((node, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.left}>
              <span className={`${styles.node} ${styles[node.type]}`} />
              {node.type !== 'end' && <span className={styles.line} />}
            </div>

            <div className={styles.content}>
              <h3>{node.title}</h3>
              <span className={styles.subtitle}>
                {node.subtitle} · {node.date}
              </span>
              {node.description && <p>{node.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
