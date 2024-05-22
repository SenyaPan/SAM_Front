import react from "react"
import Header from "../components/Header"
import Prompts from "../components/Prompts"
import FileReform from "../components/FileReform"
import Switch from "../components/Switch"

class ReformPage extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            prompt: "",
            antiprompt: "",
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            file: null,
            request_sent: false,
            imageUrl: this.props.URL,
            filename: '',
            public: false,
            responseURL: null,
            responseFilename: '',
        }
    }


    onChangePrompt = (state_value) => {
        this.setState({prompt: state_value})
    }

    onChangeAntiprompt = (state_value) => {
        this.setState({antiprompt: state_value})
    }

    onChangeFile = (state_values) => {
        this.setState({
            startX: state_values[0]*state_values[6], 
            startY: state_values[1]*state_values[6],
            endX: state_values[2]*state_values[6],
            endY: state_values[3]*state_values[6],
            imageUrl: state_values[4],
            file: state_values[5]
        })
    }

    sendRequest = async () => {
        let url = 'http://localhost:8000/api/file/improve_file?prompt=' + this.state.prompt + '&anti_prompt=' + this.state.antiprompt
        const data = new FormData();
        data.append('uploaded_file', this.state.file);
        data.append('coordinates', [this.state.startX, this.state.startY, this.state.endX - this.state.startX, this.state.endY - this.state.startX]);

        console.log(this.state.startX, this.state.startY, this.state.endX - this.state.startX, this.state.endY - this.state.startX)
        try {
            // let url = 'http://localhost:8000/api/file/random'

            const response = await fetch(url, {
                method: 'POST',
                body: data,
                credentials: 'include'
            })
            
            const filename = response.headers.get('content-disposition').split('"')[1]
            this.setState({responseFilename: filename});

            const blob =  await response.blob();
            const responseURL = window.URL.createObjectURL(blob);
            this.setState({request_sent: true});
            this.setState({responseURL: responseURL});
        } catch (error) {
            console.error(error);
        }
    }

    saveImage = () => {
        const image = document.getElementById('image');
        if (image) {
          const url = image.src;
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = 'image.jpg';
          downloadLink.click();
        }
    }

    publishImage = async() => {
        let url = 'http://localhost:8000/api/file/improve_file/post?filename=' + this.state.responseFilename + '&public=' + this.state.public

        try {
            await fetch(url, {
                method: 'POST',
                credentials: 'include'
            });
        } catch (error) {
            console.error(error);
        }
    }

    onChangeSwitch = () => {
        this.setState({
            public: !this.state.public
        })
    }

    render() {
        return (
            <div>
                <Header type="full"/>
                {!this.state.request_sent && <main className="whiteBackMain">
                    <Prompts onChangePrompt={this.onChangePrompt} onChangeAntiprompt={this.onChangeAntiprompt}/>
                    <FileReform onChangeFile={this.onChangeFile} />
                    <div className="buttons">
                        <button id="reformButton" onClick={ async () => {
                            await this.sendRequest()
                        } }>REFORM</button>
                    </div>
                </main>}
                {this.state.request_sent && <main className="whiteBackMain">
                        <img id="image" src={this.state.responseURL} alt="Response file"/>
                    <div className="buttons">

                        <button id="reformButton" onClick={this.saveImage}>Download</button>
                        <button id="reformButton" onClick={this.publishImage}>Publish</button>
                        <Switch onChange={this.onChangeSwitch}/>
                    </div>
                </main>}
            </div>
        )
    }
}

export default ReformPage