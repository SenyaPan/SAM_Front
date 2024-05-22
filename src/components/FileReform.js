import React, { Component } from 'react';

class FileReform extends Component {
    state = {
        drawing: false,
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        ratio: 0,
        imageUrl: '',
        file: null
    };

    canvasRef = React.createRef();

    startDrawing = (e) => {
        const canvas = this.canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.setState({ drawing: true, startX: x, startY: y });
    };

    continueDrawing = (e) => {
        if (!this.state.drawing) return;

        const canvas = this.canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.setState({ endX: x, endY: y });
    };

    stopDrawing = () => {
        this.setState({ drawing: false });
        const canvas = this.canvasRef.current; 
        const ctx = canvas.getContext('2d');

        const width = this.state.endX - this.state.startX;
        const height = this.state.endY - this.state.startY;

        ctx.beginPath();
        ctx.rect(this.state.startX, this.state.startY, width, height);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        console.log(this.state.startX, this.state.endY)

        this.props.onChangeFile([
            this.state.startX,
            this.state.startY,
            this.state.endX,
            this.state.endY,
            this.state.imageUrl,
            this.state.file,
            this.state.ratio
        ])
        console.log("pfff")
    };

    handleDrop = (e) => {
        e.preventDefault();
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const file = e.dataTransfer.files[0];
        this.setState({
            file: file
        });
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            this.setState({ imageUrl: e.target.result });
            img.onload = () => {
                // const windowInnerWidth = window.innerWidth;
                const windowInnerHeight = window.innerHeight;
                const temp = img.width / img.height
                const ratio = img.height / (windowInnerHeight*0.5)
                this.setState({ratio: ratio})
                canvas.width = temp * windowInnerHeight*0.5
                canvas.height = windowInnerHeight*0.5
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = e.target.result;

            // img.src = reader.result;
        };
        reader.readAsDataURL(file);
    };

    handleDragOver = (e) => {
        e.preventDefault();
    };

    handleImageChange = (e) => {
        const file = e.target.files[0];
        this.setState({
            file: file
        });
        const reader = new FileReader();
    
        reader.onload = (e) => {
            this.setState({ imageUrl: e.target.result });
            const canvas = this.canvasRef.current;
            const ctx = canvas.getContext('2d');
    
            const img = new Image();
            img.onload = () => {
                const windowInnerHeight = window.innerHeight;
                const temp = img.width / img.height;
                const ratio = img.height / (windowInnerHeight*0.5)
                this.setState({ratio: ratio})
                canvas.width = temp * windowInnerHeight*0.5
                canvas.height = windowInnerHeight*0.5
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = e.target.result;
        };
    
        reader.readAsDataURL(file);
    };

    render() {
        return (
            <div className='fileReform'>
                <input type="file" onChange={this.handleImageChange} />
                <p>or</p>
                <b>DROP FILE IN THE FIELD BELOW</b>
                <canvas
                    ref={this.canvasRef}
                    width="500px"
                    height="350px"
                    onMouseDown={this.startDrawing}
                    onMouseMove={this.continueDrawing}
                    onMouseUp={this.stopDrawing}
                    onDrop={this.handleDrop} 
                    onDragOver={this.handleDragOver}
                    
                    style={{border: "2px dashed black"}}
                />
            </div>
        );
    }
}

export default FileReform;
