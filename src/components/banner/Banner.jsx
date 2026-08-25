const Banner = function () {

    return (
        <div className=" container  relative flex flex-col items-center">
            <div className="flex flex-col items-start">
                <h1 className="mt-50 text-white text-[89px] font-bold uppercase">choose</h1>
                <h1 className=" text-white text-[89px] font-bold uppercase">the perfect</h1>
                <h1 className=" text-white text-[89px] font-bold uppercase">destinations.</h1>
                <p className="w-194.75 text-white text-xl leading-[150%]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                <div className="mt-7.5 flex gap-10 items-center">
                    <input type="text" placeholder="enter your location" className="py-4.25 px-16.5 bg-white text-[#036e8a] border-0 rounded-xl outline-0 relative capitalize text-xl font-medium" />
                    <button className="py-3 px-6 flex justify-center items-center rounded-xl text-xl font-medium capitalize cursor-pointer transition-all ease-linear duration-300 bg-[#ff80004a] text-white hover:bg-[#ff8000] ">location</button>
                </div>
            </div>
        </div>
    )
}

export default Banner