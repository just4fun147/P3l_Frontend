import "./InputWithIcon.css";
import { FaLocation } from "react-icons";

const InputWithIcon = () => {
  return (
    <div className="wrapper">
      <div className="icon">
        <FaLocation></FaLocation>
      </div>
      <input className="input" type="text"></input>
    </div>
  );
};

export default InputWithIcon;
