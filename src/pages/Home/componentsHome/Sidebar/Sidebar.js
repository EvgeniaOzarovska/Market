import styles from './Sidebar.module.scss';
import { HardCoddedData } from '../../../../data/data';
import { Category } from '../Category';

export const Sidebar = props => {
  return (
    <aside className={styles.sidebar}>
      {HardCoddedData.categories.map(item => {
        return (
          <Category key={item.key} onClick={() => props.setValue(item)}>
            {item.name}
          </Category>
        );
      })}
    </aside>
  );
};
