import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService'

export default function Register() {
    const { register } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        const regex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/);
        if (password == rePassword) {
            if (regex.test(email)) {
                authService.register(email, password)
                    .then((authData) => {
                        if (authData.message) {
                            addNotification('Unsuccessful register, please try again');
                        } else {
                            let data = { _id: authData._id, email: authData.email, accessToken: authData.accessToken };
                            register(data);
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
            addNotification('Passwords dont match');
        }


    }

    return (
        <div className="contact">
            <div className="container">
                <div className="col-md-8 contact-left">
                    <h4>Register</h4>
                    <form onSubmit={onRegisterHandler} method="POST">
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />

                        <input type="submit" value="Register" />

                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}