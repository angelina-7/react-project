import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService'

export default function Login() {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        const regex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/);
        if (email && password) {
            if (regex.test(email)) {
                authService.login(email, password)
                    .then((authData) => {
                        if (authData.message) {
                            addNotification('Invalid email or password');
                        } else {
                            login(authData);
                            addNotification('You logged in successfully', types.success);
                            navigate('/');
                        }
                    })
                    .catch(err => {
                        addNotification(err);
                        console.log(err);
                    });
            } else {
                addNotification('Email should be in format: peter@abv.bg')
            }

        } else {
            addNotification('Empty email or password')
        }

    }

    return (
        <div className="contact">
            <div className="container">
                <div className="col-md-8 contact-left">
                    <h4>LogIn</h4>
                    <form onSubmit={onLoginHandler} method="POST">
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <input type="submit" value="Log In" />

                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}