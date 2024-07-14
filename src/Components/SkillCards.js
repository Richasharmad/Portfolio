import { Component } from "react";

class SkillCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true' data-aos-delay='300' className='w-40 text-black bg-white rounded-lg m-2 p-5 hover:scale-95 transform duration-500 lg:w-60 md: sm:m-4'>
                <img loading='lazy' className='rounded-lg' src={this.props.img} alt="Card image cap" />
                <div className=''>
                <h5 data-aos='slide-left' data-aos-offset='50' className='text-xl font-bold '>{this.props.name}</h5>
                </div>
                </div>
                

        );
    }
}
export default SkillCards;
