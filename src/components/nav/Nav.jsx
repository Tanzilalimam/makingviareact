import Logo from '../../assets/img/logo.png'


const Nav = function(){

    return(
        <nav className="my-9 py-6 bg flex justify-around items-center">
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>home</a>
                    </li>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>pages</a>
                    </li>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>travel</a>
                    </li>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>blog</a>
                    </li>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>shop</a>
                    </li>
                    <li className='list-none'>
                        <a href="#" className='text-xl no-underline capitalize hover:text-blue-400 transition-all ease-linear duration-300 cursor-pointer'>lements</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='py-2 px-6 border-0 rounded-xl bg-amber-300 hover:bg-amber-700 cursor-pointer hover:text-white text-xl capitalize transition-all ease-linear duration-300'>something</button>
            </div>
        </nav>
    )
}

export default Nav