import React, { Component } from "react";
import Homepg from '../assets/Homepg.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("inside home")
        return (
            <div>
                <div className='text-white h-svh bg-img '><img src={Homepg} style={{ backgroundSize: 'cover', position: 'relative', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100svh' }}></img></div>
                <div className='text-white text-xl flex justify-center items-center top-0 absolute' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%', width: '100%', position: 'absolute', top: '0' }}>
                    <ul>
                        <li data-aos='zoom-out'>HI, I AM</li>
                        <div className="text-5xl font-bold flex"><h1 data-aos='zoom-in' data-aos-delay="1300">React Developer</h1></div>
                        <div>
                            <a href="/projects"><button data-aos='slide-right' className="border-solid border-2 border-gray-400 mr-6 mt-3 bg-gray-400 rounded-lg pt-2 pb-2 pl-3 pr-3 text-black hover:bg-transparent hover:text-white">PROJECTS</button></a>
                            <a href="/contact"><button data-aos='slide-left' className="border-solid border-2 border-white-800 mr-6 mt-3 rounded-lg pt-2 pb-2 pl-3 pr-3 hover:bg-gray-400 hover:text-black">CONTACT</button></a>
                        </div>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Home;