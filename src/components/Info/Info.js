import { Icon } from '../Icon';
import problem from '../Icon/report_problem.svg';

export const Info = props => {
  return (
    <div className={props.className}>
      <Icon colorSchema="iconProblem" src={problem} alt="problem" />
      {props.children}
    </div>
  );
};
