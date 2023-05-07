import SubTitle from "../SubTitle"
import Title from "../Title"
import Typography from "../Typography"

import './style.css'

const Aboutme = props => {

    return <div className="about-me"  >
        <img src="assets/Resume folder-amico.png" width={'30%'} style={{marginTop:'3em'}} alt="About me" />
        <div className="body">
            <Title>ABOUT ME</Title>
            <SubTitle>A passionate full-stack developer from palestine </SubTitle>
            <Typography type='p' justify>
                Ahmad Ilawa | full-stack developer . I'm a Computer System Engineering student @ Arab American University. During my study I learnt several skills in the IT industry such as problem solving, technical writing, software engineering and a good background in web development.
            </Typography>
            <Typography type='p' justify>
                I can build websites using many frameworks which I learnt during my career. You can check my github and you will see the projects where I built by using React.js and node.js. Or even HTML,CSS and js with asp.core. Also, I built a project using django with my friend.
            </Typography>
        </div>
    </div>

}

export default Aboutme