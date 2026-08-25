import Posterimg from '../../assets/img/banner.png'

const Poster = function(){

    return(
        <div>
            <img src= {Posterimg} alt="banner" className="absolute top-0 left-0 -z-99 w-full" />
        </div>
    )
}

export default Poster