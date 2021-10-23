import NotificationImage from "../../../assets/notification_illustration.png";

import "./Notifications.css";

const Notifications = () => {
    return(
        <section className="notifications">
            <div className="wrapper">
                <h2>Notifications</h2>
                <figure>
                    <img src={NotificationImage} />
                </figure>
                <div className="notifications_content">
                    <h5>No notifcations yet</h5>
                    <p>Here you will see the external changes in your shared folders, tags from your peers and other updates</p>
                </div>
            </div>
        </section>
    );
}

export default Notifications;