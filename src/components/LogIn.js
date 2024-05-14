import react from "react"
import axios from "axios"
import { Navigate } from "react-router-dom"

class LogIn extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            redirect: false
        }
    }

    userAdd = {}

    sendRequest = async (formData) => {
        try {
            const requestData = new URLSearchParams();
            requestData.append('username', formData.email);
            requestData.append('password', formData.password);

            const response = await fetch('http://localhost:8001/api/auth/login', {
                method: 'POST',
                body: requestData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                credentials: 'include'
            })
            // const response = await axios.post('http://localhost:8001/api/auth/login', requestData, {
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            // });

            if(response.status === 204) {
                this.setState({redirect: true})
            }
        } catch (error) {
        console.error(error);
        }
    }

    render() {return (
        <form className="login" ref={(el) => this.logInForm = el}>
            <input name="email" placeholder="email" onChange={(e) => this.setState({email: e.target.value})}/>
            <input name="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
            <button type="button" onClick={ async () => 
                {
                    this.logInForm.reset()
                    this.userAdd = {
                        email: this.state.email,
                        password: this.state.password,
                    }

                    await this.sendRequest(this.userAdd)
                } 
            }>{this.state.redirect && <Navigate to="/"/>}Log In</button>
        </form>
    )}
}

export default LogIn