import { Link } from "react-router-dom";
import { Choices } from "./styles";

const SidebarChoice = ({ title, Icon, to }) => {
  return (
    <Choices>
      <Link to={to}>
        {Icon && <Icon fontSize="large" />}
        {/* {Icon ? <h4> {title} </h4> : <h5>{title}</h5>} */}
      </Link>
    </Choices>
  );
};

export default SidebarChoice;
