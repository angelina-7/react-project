import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'

export default function Register() {
    const { register } = useAuthContext();
    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        if (password == rePassword) {
            authService.register(email, password)
            .then((authData) => {
                let data = {_id: authData._id, email: authData.email, accessToken: authData.accessToken};
                register(data);
                navigate('/');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
        } else {
            // TODO: show notification
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