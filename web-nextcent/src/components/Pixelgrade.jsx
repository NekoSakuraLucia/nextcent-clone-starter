import img01 from '../assets/img/img-01.png'

const Pixelgrade = () => {
    return (
        <div className="py-10">
            <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img src={img01} alt="Img" />
                </div>
                <div>
                    <h3 className='mt-5 md:mt-0 text-[2.25rem] text-[#4D4D4D] leading-[1] font-semibold'>The unseen of spending three <br /> years at Pixelgrade</h3>
                    <p className='text-[#717171] my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#"  className='mt-5 inline-flex justify-center items-center py-3 px-8 bg-[#4CAF4F] rounded-md text-white'>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Pixelgrade;