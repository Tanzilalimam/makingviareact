import Rating from '../../assets/img/rating.png'

const Booking = function(){

    return(
        <section className="m-18">
            <div className="container">
                <div className="py-12.5 px-16.25 flex justify-around items-center border-[3px] border-[#036e8a] rounded-2xl">
                <div className="flex flex-col gap-5">
                    <h3 className='text-[#036e8a] text-3xl font-bold uppercase'>travel location</h3>
                    <img src= {Rating} alt="rating" className='w-32 opacity-60'/>
                </div>
                <span className='w-1 h-24 bg-[#ff8000]'></span>
                <div className='flex flex-col gap-3.75'>
                    <p className='text-xl capitalize'>tour price</p>
                    <h3 className='text-[#036e8a] text-6xl font-bold uppercase'>$125,99</h3>
                </div>
                <button className='py-4.75 px-12 bg-[#ff800039] hover:bg-[#ff8000] hover:text-white text-[25px] font-bold uppercase border-0 rounded-2xl transition-all ease-linear duration-300 cursor-pointer hover:-translate-y-2.5'>book now</button>
                </div>
            </div>
        </section>
    )
}

export default Booking