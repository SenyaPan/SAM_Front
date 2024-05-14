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
                    <Content />
                    {/* <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/> */}
                </main>
                <aside>
                    {/* <AddUser onAdd={this.addUser}/> */}
                </aside>
            </div>
        )
    }
}

export default FavouritesPage