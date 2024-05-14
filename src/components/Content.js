import react from "react"
import { Navigate } from "react-router-dom"
import Filters from "./Filters"
import Images from "./Images"


class Content extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: "",
            sortby: "latest",
            images: [],
            auth: true
        }

        let imageUrl = "http://localhost:8000/api/file/images?filter_by=" + this.state.sortby

        if(this.state.author !== "")
            imageUrl = imageUrl + "&author=" + this.state.author

        try {
            // const response = axios.get(imageUrl, {withCredentials: true})
            const response = fetch(imageUrl, {
                credentials: 'include'
            })
            if (response.data) {
                this.images = response.data;
            }

            this.auth = true
            console.log(response)
        } catch(error) {
            if (error.response.status === 401)
                this.setState({auth: false})
        }
    }

    render() {
        return(
            <div>
                <Filters onStateChange={(data) => this.setState(data)}/>
                <p>Filters {this.state.author} {this.state.sortby}</p>
                <Images images={this.state.images}/>
                {!this.state.auth && <Navigate to="/login" />}
            </div>
        )
    }
}

export default Content