import Logo from '../assets/img/logo-black.png'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav className="bg-[#F5F7FA]">
            <div className='relative container mx-auto max-w-[1320px] p-10 h-auto flex flex-col md:flex-row md:items-center md:justify-between md:h-[80px]'>
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>

                <ul className={`${!toggle ? 'hidden' : 'flex'} md:flex flex-col md:flex-row my-5`}>
                    <li className='my-2 md:mx-4'>
                        <a href="#">Home</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#">Service</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#">Feature</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#">Product</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#">Testimonial</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#">FAQ</a>
                    </li>
                </ul>

                <ul className={`${!toggle ? 'hidden' : 'flex'} md:flex flex-col md:flex-row my-5`}>
                    <li className='my-2 md:mx-4'>
                        <a href="#" className='inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F]'>Login</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a href="#" className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] rounded-md text-white'>Sign up</a>
                    </li>
                </ul>

                {/* Menu Icon */}
                <FaBars size={20} onClick={updateToggle} className='absolute right-5 md:hidden cursor-pointer' />
            </div>
        </nav>
    )
}

export default Navbar;