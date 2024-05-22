import react, {useEffect, useState} from "react"
import { Navigate, useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import PageName from "../components/PageName";
import Header from "../components/Header"
// import Prompts from "../components/Prompts"
// import FileReform from "../components/FileReform"
// import Switch from "../components/Switch"

const ImagePage = () => {
    const [data, setData] = useState(null);
    const [imageURL, setURL] = useState(null);
    const [dataGot, setGot] = useState(null);

    const {id} = useParams()

    useEffect( () => {
        let url = 'http://localhost:8000/api/file/image/' + id
        fetch(url, {credentials: 'include'})
        .then(async result => await result.json()).then(data => {setData(data); console.log(data)})
        .catch(e => {console.log(e)})

        let url2 = 'http://localhost:8000/api/file/get_image_file/' + id
        fetch(url2, {credentials: 'include'})
        .then(async response => await response.blob())
        .then(blob => {
            const URL = window.URL.createObjectURL(blob);
            setURL(URL)
        })
        .catch(e => {
            console.log(e)            
        })
    }, [dataGot])

            

    // saveImage = () => {
    //     const image = document.getElementById('image');
    //     if (image) {
    //       const url = image.src;
    //       const downloadLink = document.createElement('a');
    //       downloadLink.href = url;
    //       downloadLink.download = 'image.jpg';
    //       downloadLink.click();
    //     }
    // }

    // publishImage = async() => {
    //     let url = 'http://localhost:8000/api/file/improve_file/post?filename=' + this.state.responseFilename + '&public=' + this.state.public

    //     try {
    //         await fetch(url, {
    //             method: 'POST',
    //             credentials: 'include'
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // onChangeSwitch = () => {
    //     this.setState({
    //         public: !this.state.public
    //     })
    // }

    return (
        <div>
            <Header type='full'/>
            {data && <main className="whiteBackMain">
                <div className="imageDetailHeader">
                    <PageName text={data.author} />
                    <p>{data.likes}</p>
                    <FcLike className="iconLike" onClick={() => {
                        fetch('http://localhost:8000/api/file/image/add_like/' + id, {method: 'PATCH', credentials: 'include'})
                        .catch(e => console.log(e));
                        setGot(true)
                    }}/>
                </div>
                <img id="imageDetail" src={imageURL} alt="Image"/>
                <div className="buttons">
                    <button id="reformButton" onClick={() => {

                    }}>Reform myself</button>
                    <button id="reformButton" onClick={() => {
                        fetch('http://localhost:8000/api/file/image/add_favourite/' + id, {method: 'POST', credentials: 'include'})
                        .catch(e => console.log(e))
                    }}>Add to Favourites</button>
                    {data.public === false && <button id="reformButton" onClick={async () => {
                        await fetch('http://localhost:8000/api/file/image/change_status/' + id, {method: 'PATCH', credentials: 'include'})
                        .catch(e => console.log(e));
                        setGot('toPrivate')
                    }}>Make public</button>}
                </div>
                {dataGot === 'toPrivate' && <Navigate to='/private' />}
            </main>}
        </div>
    )
}

export default ImagePage