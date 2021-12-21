export default function Home() {
    return (
        <div class="contact">
            <div class="container">
                <div class="col-md-8 contact-left wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <h4>Login</h4>
                    <form method="POST">
                        <input type="email" id="email" name="email" placeholder="Email" />
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <input type="submit" value="Submit" />

                    </form>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    );
}