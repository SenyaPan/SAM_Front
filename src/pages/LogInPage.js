import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import LogIn from "../components/LogIn"

class LogInPage extends react.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <PageName text="Log In" />
                    <LogIn />
                </main>
            </div>
        )
    }
}

export default LogInPage