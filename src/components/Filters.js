import react from "react"

class Filters extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            sortby: "latest"
        }
    }
    render() {return (
        <form className="filters">
            <input name="author" placeholder="author's name" onChange={(e) => {
                this.setState({author: e.target.value});
                this.props.onStateChange({author: e.target.value})
            }}/>
            <select name="sortby" placeholder="sort by" onChange={(e) => {
                this.setState({sortby: e.target.value})
                this.props.onStateChange({sortby: e.target.value})
            }}>
                <option value="latest">latest</option>
                <option value="earliest">earliest</option>
                <option value="likes">by likes</option>
            </select>
        </form>
    )}
}

export default Filters