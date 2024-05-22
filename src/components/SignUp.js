import react from "react"
import { Navigate } from "react-router-dom"

class SignUp extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            nickname: "",
            redirect: false
        }
    }

    userAdd = {}

    sendRequest = async (formData) => {
        try {
            console.log(JSON.stringify(formData))
            const response = await fetch('http://localhost:8001/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            })

            this.setState({redirect: true})
        
        } catch (error) {
        console.error(error);
        }
    }

    render() {return (
        <form className="login" ref={(el) => this.logInForm = el}>
            <input name="email" placeholder="email" onChange={(e) => this.setState({email: e.target.value})}/>
            <input name="nickname" placeholder="nickname" onChange={(e) => this.setState({nickname: e.target.value})}/>
            <input name="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
            <button type="button" onClick={ async () => 
                {
                    // this.logInForm.reset()
                    this.userAdd = {
                        email: this.state.email,
                        password: this.state.password,
                        nickname: this.state.nickname,
                    }

                    await this.sendRequest(this.userAdd)
                } 
            }>{this.state.redirect && <Navigate to="/login"/>}Sign Up</button>
        </form>
    )}
}

export default SignUp