import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
// import { useNotificationContext, types } from '../contexts/NotificationContext';
import * as authService from '../../services/authService'

export default function Login() {
    const { login } = useAuthContext();
    // const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                // addNotification('You logged in successfully', types.success);
                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }

    return (
        <div className="contact">
            <div className="container">
                {/* <div class="alert alert-danger" role="alert">
                    Error
                </div> */}
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