import react from "react"
import { Navigate } from "react-router-dom"


class AboutMe extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            nickname: "",
            auth: true
        }

        let myUrl = "http://localhost:8001/api/user/get_user_info" 

        try {
            // const response = axios.get(imageUrl, {withCredentials: true})
            const response = fetch(myUrl, {
                credentials: 'include'
            }).then(response => {
                return response.json();
              })
              .then(data => {
                console.log(data);
                this.setState({email: data['email'], nickname: data['nickname']})
              })
        } catch(error) {
            if (error.response.status === 401)
                this.setState({auth: false})
        }
    }

    render() {
        return(
            <div>
                <h3>email: <i>{this.state.email}</i></h3>
                <h3>nickname: <i>{this.state.nickname}</i></h3>
                {!this.state.auth && <Navigate to="/login" />}
            </div>
        )
    }
}

export default AboutMe