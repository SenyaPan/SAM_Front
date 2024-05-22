import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import Content from "../components/Content"

class FavouritesPage extends react.Component {

    render() {
        return (
            <div>
                <Header type="full"/>
                <main>
                    <PageName text="Favourites" />
                    <Content type='favourites'/>
                </main>
            </div>
        )
    }
}

export default FavouritesPage