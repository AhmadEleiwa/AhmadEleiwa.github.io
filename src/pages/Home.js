
import Header from "../components/Header"

import Aboutme from "../components/Aboutme"
import Container from "../components/Container"
import UserInfo from "../components/UserInfo"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = props => {
    return <div>
        <Header />
        <Container>
            <UserInfo />
            <Aboutme />
            <Skills />
            <Projects />
        </Container>

    </div>
}

export default Home