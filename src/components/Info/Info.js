import { Icon } from '../CommonComponents';
import problem from '../Icons/img/report_problem.svg';



export const Info = props => {
  return (
    <div>
      <Icon problem src={problem} alt="problem" />
      {props.children}
    </div>
  );
};
