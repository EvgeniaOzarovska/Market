import styles from './Sidebar.module.scss';
import { HardCoddedData } from '../../../../data/data';
import { Category } from '../Category';

export const Sidebar = props => {
  const renderCategory = () => {
    return HardCoddedData.categories.map(item => {
      return (
        <Category key={item.key} onClick={() => props.setValue(item)}>
          {item.name}
        </Category>
      );
    });
  };
  return <aside className={styles.sidebar}>{renderCategory()}</aside>;
};
