import react from "react"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LogInPage from "./pages/LogInPage"
import GalleryPage from "./pages/GalleryPage"
import FavouritesPage from "./pages/FavouritesPage"
import PrivatePage from "./pages/PrivatePage"
import ReformPage from "./pages/ReformPage"
import MyPage from "./pages/MyPage"
import ImagePage from "./pages/ImagePage"
import SignUpPage from "./pages/SignUpPage"


class App extends react.Component {
  constructor(props) {
    super(props)

    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
    this.changePage = this.changePage.bind(this)
}
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path='/me' element={<MyPage />} />
            <Route path="/favourites" element={<FavouritesPage name="Favourites"/>} />
            <Route path="/private" element={<PrivatePage name="Private"/>} />
            <Route path="/reform" element={<ReformPage />} />
            <Route path="/image/:id" element={<ImagePage />} />
            <Route path="/" element={<GalleryPage name="Gallery"/>} />
          </Routes>
        </Router>
      </div>
    )
  }

  changePage(pageName){
    this.setState({page: pageName})
  }

  addUser(user){
    this.setState({users: [...this.state.users, {...user}]}) 
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }
}

export default App;
