import HeaderImg from '../assets/img/header-img.png'

const Header = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>
                        Lessons and insights
                        <br />
                        <span>from 8 years</span>
                    </h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <a href="#">Register</a>
                </div>
                <div>
                    <img src={HeaderImg} alt="HeaderImg" />
                </div>
            </div>
        </div>
    )
}

export default Header;