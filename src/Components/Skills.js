import { Component } from "react";
import skills from "../assets/skills.jpg";
import { imgdata } from "../Components/config";
import  SkillsCards  from "../Components/SkillCards";

class Skills extends Component {

    render() {
        return (

            <>
                <div><img src={skills} alt="" style={{ backgroundSize: 'cover', position: 'relative', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100svh' }}></img></div>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%', width: '100%', position: 'absolute', top: '0' }}>
                <div className="flex flex-wrap justify-center items-center absolute lg:mx-48 mt-16">
                    {imgdata.map((skill) => {
                        return <SkillsCards key={skill.id} {...skill} />;
                    })}
                </div>
                </div>
            </>
        );
    }


}
export default Skills;