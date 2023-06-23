import "./reset.css";
import "./App.scss";
import { IoIosArrowBack, IoIosCall } from "react-icons/io";
import { HiOutlineSearch, HiMicrophone } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import { AiFillCamera, AiOutlinePicture, AiOutlineSmile } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-inner">
          <div className="header-left">
            <IoIosArrowBack className="menu-icons" size={"2rem"} />
            <p>Pawmo</p>
          </div>
          <div className="header-right">
            <HiOutlineSearch className="menu-icons" size={"2rem"} />
            <IoIosCall className="menu-icons" size={"2rem"} />
            <GiHamburgerMenu className="menu-icons" size={"2rem"} />
          </div>
        </div>
      </header>
      <div className="main">
        <div className="main-img">
          <img src="/pawmo1.png" alt="" />
        </div>
        <div className="message-wrapper">
          <div className="message">
            <p>Hi!</p>
            <p>Hello Pawmo!</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-inner">
          <div className="footer-left">
            <BsPlusLg className="menu-icons" size={"2rem"} />
            <AiFillCamera className="menu-icons" size={"2rem"} />
            <AiOutlinePicture className="menu-icons" size={"2rem"} />
          </div>
          <div className="footer-right">
            <div className="msgbox">
              <AiOutlineSmile className="smile menu-icons" size={"2rem"} />
            </div>
            <HiMicrophone className="menu-icons" size={"2rem"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
