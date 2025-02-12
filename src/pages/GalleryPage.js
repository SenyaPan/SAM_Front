import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import Content from "../components/Content"

class GalleryPage extends react.Component {

    render() {
        return (
            <div>
                <Header type="full"/>
                <main>
                    <PageName text="Gallery" />
                    <Content  type='public'/>
                </main>
            </div>
        )
    }
}

export default GalleryPage