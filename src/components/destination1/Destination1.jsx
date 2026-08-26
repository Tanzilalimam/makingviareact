import Shade1 from '../../assets/img/path 144.png'
import Vid from '../../assets/img/vid.png'

const Destination1 = function(){

    return(
        <section className="mt-75 mb-37.5 container">
            <div>
                <img src= {Shade1} alt="shade1" className='absolute top-[150%] -z-9' />
            </div>
            <div className='mt-56 flex justify-between relative'>
                <div className='flex flex-col items-start gap-3.75'>
                    <p className='text-[30px] uppercase'>featured destinations</p>
                    <h2 className='text-[#036e8a] text-[55px] font-bold uppercase leading-15'>choose</h2>
                    <h2 className='text-[#036e8a] text-[55px] font-bold uppercase leading-15'>the perfect</h2>
                    <h2 className='text-[#036e8a] text-[55px] font-bold uppercase leading-15'>accommodation.</h2>
                    <p className='w-132.25 text-xl leading-[150%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                </div>
                <div className='relative transition-all ease-linear duration-300 cursor-pointer hover:opacity-70'>
                    <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] size-18 border-2 border-white rounded-full cursor-pointer z-2'>
                    </div>
                    <img src= {Vid} alt="video"/>
                </div>
            </div>
        </section>
    )
}

export default Destination1