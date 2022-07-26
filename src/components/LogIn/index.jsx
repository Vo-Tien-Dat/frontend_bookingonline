import "./styles.scss";
import "../../assets/styles/margin.scss";
import "../../assets/styles/padding.scss";
import "../../assets/styles/font-weight.scss";
import "../../assets/styles/border-radius.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LogIn = ({ login, img, name }) => {
  name = name !== undefined ? name : "hello";
  if (login === true) {
    return (
      <div className="login-user ">
        <img src="" />
        <div className="">
          <span>Log In</span>
        </div>
      </div>
    );
  }
  return (
    <div className="login">
      <div className="login-user">
        <div></div>
        <div className="bg-white">
          <i class="fa-solid fa-user"></i>
          <span className="text-black">{name}</span>
        </div>
      </div>
      <div className="bg-blue-600 px-2 py-1">
        <span className="text-white font-medium rounded-lg">Register</span>
      </div>
    </div>
  );
};

export default LogIn;
