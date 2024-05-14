import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import AboutMe from "../components/AboutMe"

class MyPage extends react.Component {

    render() {
        return (
            <div>
                <Header type="nouser"/>
                <main>
                    <PageName text="My account" />
                    <AboutMe />
                    {/* <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/> */}
                </main>
                <aside>
                    {/* <AddUser onAdd={this.addUser}/> */}
                </aside>
            </div>
        )
    }
}

export default MyPage