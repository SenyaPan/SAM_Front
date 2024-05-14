import react from "react"
import { FcLike } from "react-icons/fc";
// import AddUser from "./AddUser"
// import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class Image extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    image = this.props.image
    render() {
        return (
            <div className="image">
                <h3>{this.image.author}</h3>
                <p>{this.image.likes}</p>
                <FcLike />
            </div>
        )
    }

}

export default Image