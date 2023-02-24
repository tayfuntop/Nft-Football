import { notification } from "antd";
import "./index.css";

const Notification = (message, description) => {
    notification.open({
        message: message,
        description: description,
    });
};

export { Notification };