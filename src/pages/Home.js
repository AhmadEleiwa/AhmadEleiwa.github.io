
import Header from "../components/Header"

import Aboutme from "../components/Aboutme"
import Container from "../components/Container"
import UserInfo from "../components/UserInfo"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactForm from "../components/ContactForm"

const Home = props => {
    return <div>
        <Header />
        <Container>
            <UserInfo />
            <Aboutme />
            <Skills />
            <Projects />
            <ContactForm />
        </Container>

    </div>
}

export default Home