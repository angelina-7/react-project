import { useNotificationContext } from '../../contexts/NotificationContext';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <div className={`alert ${notification.type}`} role="alert">
            <strong>Hey!</strong> {notification.message}
        </div>

    );
};

export default Notification;