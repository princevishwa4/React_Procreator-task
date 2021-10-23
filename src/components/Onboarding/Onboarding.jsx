import { BrowserRouter, Link } from 'react-router-dom';
import "./Onboarding.css";
import ButtonImage from "../../assets/icons_tab bar_stats copy.png";

const Onboarding = () => {
    return (
        <section className="onBoarding">
            <div className="wrapper">
                <div className="holder">
                    <p>Your cloud storage safe and sound</p>
                    <Link exact to="/home">
                        <button>
                            <img src={ButtonImage} alt="Button Image" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Onboarding;