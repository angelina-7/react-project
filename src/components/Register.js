export default function Register() {

    const onRegisterHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="col-md-8 contact-left wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
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