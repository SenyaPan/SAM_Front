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

        this.handleChange()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.author !== prevState.author || this.state.sortby !== prevState.sortby) {
          this.handleChange();
        }
    }

    handleChange = () => {
        let imageUrl = ''
        if (this.props.type === 'public')
            imageUrl = imageUrl + "http://localhost:8000/api/file/images?filter_by=" + this.state.sortby

        if (this.props.type === 'favourites')
            imageUrl = imageUrl + "http://localhost:8000/api/file/images/favourite"

        if(this.state.author !== "")
            imageUrl = imageUrl + "&author=" + this.state.author

        const response = fetch(imageUrl, {
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                // console.log(response.json())
                this.setState({images: await response.json()});
                this.setState({auth: true})
            };
            if (response.status === 401) {
                this.setState({auth: false})
            }
        }).catch((error) => {
            // this.setState({auth: false})
        })
    }

    render() {
        return(
            <div className="content" >
                {this.props.type === 'public' && <Filters onStateChange={(data) => {
                    this.setState(data)
                }}/>}
                <Images images={this.state.images}/>
                <p>1</p>
                {!this.state.auth && <Navigate to="/login" />}
            </div>
        )
    }
}

export default Content