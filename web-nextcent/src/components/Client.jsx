import clientImgLogo01 from '../assets/img/clients/client-01.png';
import clientImgLogo02 from '../assets/img/clients/client-02.png';
import clientImgLogo03 from '../assets/img/clients/client-03.png';
import clientImgLogo04 from '../assets/img/clients/client-04.png';
import clientImgLogo05 from '../assets/img/clients/client-05.png';
import clientImgLogo06 from '../assets/img/clients/client-06.png';
import clientImgLogo07 from '../assets/img/clients/client-07.png';

const clientsImgLogo = [clientImgLogo01,
                        clientImgLogo02,
                        clientImgLogo03,
                        clientImgLogo04,
                        clientImgLogo05,
                        clientImgLogo06,
                        clientImgLogo07]

const Client = () => {
    return (
        <div className="container mx-auto max-w-[1320px] py-10 text-center">
            <h2 className='text-[2.25rem] font-semibold text-[#4D4D4D]'>Our Clients</h2>
            <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
            <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 my-10'>
                {clientsImgLogo.map((client, index) => (
                    <li key={index} className='flex items-center justify-center'>
                        <img src={client} alt="Client Logo" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Client;