import react from "react"
import Image from "./Image"


class Images extends react.Component {
    render() {
        if(this.props.images.length > 0)
            return (
                <div className="images">
                    {this.props.images.map((el) => (
                        <Image key={el.id} image={el}/>
                    ))}
                </div>
            )
        else
            return (<div className="image">
                <h3>No images</h3>
            </div>)
    }
}

export default Images