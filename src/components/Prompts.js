import react from "react"

class Prompts extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            prompt: "",
            antiprompt: ""
        }
    }
    render() {return (
        <form className="prompts">
            <input name="prompt" placeholder="Your prompt" onChange={(e) => 
                {
                    this.setState({prompt: e.target.value})
                    this.props.onChangePrompt( e.target.value)
                }
            }/>
            <input name="antiprompt" placeholder="Your anti-prompt" onChange={(e) => 
                {
                    this.setState({antiprompt: e.target.value})
                    this.props.onChangeAntiprompt( e.target.value)
                }
            }/>
        </form>
    )}
}

export default Prompts