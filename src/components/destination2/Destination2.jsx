import Shade1 from '../../assets/img/path 144.png'
import Nam1 from '../../assets/img/nth amrica1.png'
import Nam2 from '../../assets/img/nth amrica2.png'
import Paris from '../../assets/img/paris.png'
import Nyrk from '../../assets/img/new york.png'
import Cmbda from '../../assets/img/cambodia.png'
import Brzl from '../../assets/img/brazil.png'
import Sf from '../../assets/img/south africa.png'
import Aus from '../../assets/img/australia.png'

const Destination2 = function(){

    return(
        <section className="relative">
            <div className='absolute left-1/2 -translate-x-1/2'>
                <img src= {Shade1} alt="" />
            </div>
            <div className="container">
                <div className='py-5 flex flex-col items-center gap-10'>
                    <h2 className='text-[#036e8a] text-6xl font-bold capitalize'>most destinations</h2>
                    <p className='w-207.5 text-xl text-center leading-[150%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                    <div className='my-7.5 flex justify-center items-start flex-wrap'>
                        <div className='relative'>
                        <img src= {Nam1} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>north america</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Nam2} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>north america</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Paris} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>europe</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Nyrk} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>new york</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Cmbda} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>cambodia</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Brzl} alt="img" className='-translate-y-35'/>
                        <div className='absolute bottom-[42%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>brazil</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Sf} alt="img"/>
                        <div className='absolute bottom-[10%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>south africa</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                        <div className='relative'>
                        <img src= {Aus} alt="img" className='-translate-y-35'/>
                        <div className='absolute bottom-[42%] left-[11%]'>
                            <h3 className='text-[#707070] text-[25px] font-bold capitalize'>australia</h3>
                            <p className='text-[#707070] text-xl capitalize'>nice place</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination2