import SubTitle from "../SubTitle"
import Title from "../Title"
import Card from '../Card'

import './style.css'

const projects = [
    {
        title: 'JEngine',
        desc: 'By Using java & OpenGL, I created a basic game engine. This engine has the standard basic functionalities to be a GameEngine',
        media: 'assets/robot.gif',
        path: 'https://github.com/AhmadEleiwa/JEngine'
    },
    {
        title: 'Freelance',
        desc: ' Freelancing is a free-space hosting website built using MERN stack. The site allows you to upload your projects (products) in the site. You can also access the other users products ',
        media: 'assets/streamer.gif',
        path: 'https://github.com/AhmadEleiwa/Freelance'
    },
    {
        title: 'Book Shop',
        desc: ' The bookshop is a website built using ASP. CORE framework. The site allows the user to read or upload books. Also, it has allowed the Author to delete its books',
        media: 'assets/reading.gif',
        path: 'https://github.com/AhmadEleiwa/BookShop'
    }
]
const Projects = props => {
    return <div className="projects">
        <Title>PROJECTS</Title>
        <SubTitle>There's some of my works, checkout and have fun 😄</SubTitle>
        <div className="list">
            {projects.map((item, index) => <Card key={index} title={item.title}
                desc={item.desc}
                path={item.path}
                media={item.media}
            />
            )}
        </div>
    </div>
}

export default Projects