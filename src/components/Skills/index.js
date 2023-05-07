import SubTitle from "../SubTitle"
import Title from "../Title"
import SlillCard from "./SkillCard"

import { faGithub, faPython, faJava, faHtml5, faReact, faCss3, faJs, faUnity} from '@fortawesome/free-brands-svg-icons'

import './style.css'

const skills = [
    {text:'Python', icon:faPython},
    {text:'Java', icon:faJava},
    {text:'html', icon:faHtml5},
    {text:'React', icon:faReact},
    {text:'CSS', icon:faCss3},
    {text:'Js', icon:faJs},
    {text:'Unity', icon:faUnity},
    {text:'VCS', icon:faGithub},

    

]

const Skills = props => {
    return <div className="skills">
        <div>
            <Title>SKILLS/TOOLS</Title>
            <SubTitle>My skills / tools experience</SubTitle>
            <div className="list" >
                {skills.map((item, index) => <SlillCard key={index}  icon={item.icon}>{item.text}</SlillCard>)}
            </div>
        </div>
        <img  src="assets/Creative team-bro.svg" style={{ color: 'red' }} alt="skills" />

    </div>
}

export default Skills