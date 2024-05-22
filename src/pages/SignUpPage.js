import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import SignUp from "../components/SignUp"

class SignUpPage extends react.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <PageName text="Sign Up" />
                    <SignUp />
                </main>
            </div>
        )
    }
}

export default SignUpPage