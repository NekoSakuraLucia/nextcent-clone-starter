import Logo from '../assets/img/logo-black.png';

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>

                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Feature</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">Testimonial</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;