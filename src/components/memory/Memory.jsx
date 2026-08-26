import Shade2 from '../../assets/img/path 142.png'
import Featured from '../../assets/img/featured.png'

const Memory = function(){

    return(
        <section className="my-8 w-full bg-[#036e8a] relative">
            <div className='absolute top-20 left-1/2 -translate-x-1/2 z-1'>
                <img src= {Shade2} alt="shade2" />
            </div>
            <div className="container">
            <div className='w-full p-17.25 flex justify-between items-center'>
                <img src={Featured} alt="featured" className='z-2' />
                <div className='flex flex-col items-start gap-3.75 z-2'>
                    <p className='text-white text-3xl uppercase'>featured only destinations</p>
                    <h2 className='text-white text-[55px] font-bold uppercase'>take only</h2>
                    <h2 className='text-white text-[55px] font-bold uppercase'>memories, leave</h2>
                    <h2 className='text-white text-[55px] font-bold uppercase'>only footprints.</h2>
                    <p className='w-132.25 text-white text-xl leading-[150%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Memory