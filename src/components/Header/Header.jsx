import "./Header.css";

// Images
import Connection from "../../assets/Cellular Connection.png";
import Wifi from "../../assets/Wifi.png";
import Battery from "../../assets/Battery.png";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <h6>9:41</h6>
                <div className="system">
                    <figure><img src={Connection} alt="Connection" /></figure>
                    <figure><img src={Wifi} alt="Wifi" /></figure>
                    <figure><img src={Battery} alt="Battery" /></figure>
                </div>
            </div>
        </header>
    );
}

export default Header;