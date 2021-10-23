import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalStorage from "../components/Content/LocalStorage/LocalStorage";
import Notifications from "../components/Content/Notifications/Notifications";
import Profile from "../components/Content/Profile/Profile";
import StorageManagement from "../components/Content/StorageManagement/StorageManagement";

import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState('1');
    const [componentState, setComponentState] = useState(null);

    const renderComponent = (currentValue) => {
        setState(currentValue);
    }

    useEffect(() => {
        if (state === '1') {
            setComponentState(<Banner />);
        }
        if (state === '2') {
            setComponentState(<LocalStorage />);
        }
        // if(state === 3){
        //     setComponentState( <Notifications /> );
        // }
        if (state === '4') {
            setComponentState(<Notifications />);
        }
        if (state === '5') {
            setComponentState(<Profile />);
        }
    }, [state]);

    return (
        <>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home">
                        {componentState}
                    </Route>
                    <Route exact path="/storage_management">
                        <StorageManagement />
                    </Route>
                </Switch>
            </BrowserRouter>

            <Footer getComponent={renderComponent} />
        </>
    );
}

export default Home;