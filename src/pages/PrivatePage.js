import react from "react"
import Header from "../components/Header"
import PageName from "../components/PageName"
import Images from "../components/Images"
import axios from "axios"


class PrivatePage extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }

    componentDidMount() { 
        let imageUrl = "http://localhost:8000/api/file/images/private" 


        // try {
        //     const response = axios.get(imageUrl, {withCredentials: true})
        //     if(response.data)
        //         this.setState({images: response.data})
        // }catch (error) {
        //     console.error(error);
        // }
        fetch(imageUrl,{
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                this.setState({images: await response.json()});
                this.setState({auth: true})
            };
            if (response.status === 401) {
                this.setState({auth: false})
            }
        }).catch((error) => {
            // this.setState({auth: false})
        })
    }


    render() {
        return (
            <div>
                <Header type="full"/>
                <main>
                    <PageName text="Private" />
                    <Images images={this.state.images}/>
                    {/* <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/> */}
                </main>
                <aside>
                    {/* <AddUser onAdd={this.addUser}/> */}
                </aside>
            </div>
        )
    }
}

export default PrivatePage