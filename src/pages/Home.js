
import Header from "../components/Header"

import Aboutme from "../components/Aboutme"
import Container from "../components/Container"
import UserInfo from "../components/UserInfo"

const Home = props => {
    return <div>
        <Header />
        <Container>
            <UserInfo />
            <Aboutme />
        </Container>

    </div>
}

export default Home