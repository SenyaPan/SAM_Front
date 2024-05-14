import react from "react"


class PageName extends react.Component {
    text = this.props.text
    render() {return (
        <h1>{this.text}</h1>
    )}
}

export default PageName