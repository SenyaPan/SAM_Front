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

export default GalleryPage