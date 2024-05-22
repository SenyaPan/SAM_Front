import react from "react"
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
// import AddUser from "./AddUser"
// import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class Image extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageURL: null,
        }

        let url = 'http://localhost:8000/api/file/get_image_file/' + this.props.image.id;

        fetch(url, {
            credentials: 'include'
        }).then(response => response.blob()).then( blob => {
            this.setState({imageURL: window.URL.createObjectURL(blob)})
        }).catch((e) => {})
    }

    render() {
        return (
            <div className="whiteBackImages">
                <Link to={"/image/" + this.props.image.id}>
                    <img src={this.state.imageURL}/>
                </Link>
                <div className="authorLikes">
                    <h3>{this.props.image.author}</h3>
                    <p>{this.props.image.likes}</p>
                    <FcLike className="iconLike"/>
                </div>
            </div>
        )
    }

}

export default Image