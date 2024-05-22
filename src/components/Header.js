import react from "react"
import { NavLink, Navigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";


class Header extends react.Component {
    state = {
        redirectLogIn: false,
    }

    logOut = async() => {
        await fetch('http://localhost:8001/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            })
        this.setState({redirectLogIn: true})
    }

    render() {
        if(this.props.type === "full")
            return (
                <header className="header" id="wrapper">
                    <h1 id="site_name">SAM</h1>
                    <nav>
                        <NavLink to="/reform" id="linkHeader">Reform image</NavLink>
                        <NavLink to="/" id="linkHeader">Gallery</NavLink>
                        <NavLink to="/favourites" id="linkHeader">Favourites</NavLink>
                        <NavLink to="/private" id="linkHeader">Private</NavLink>
                    </nav>
                    <button id="logOutHeader" onClick={this.logOut}>Log out</button>
                    <FaRegUserCircle className="icon-user" onClick={() => this.setState({redirectUser: true})}/>
                    {this.state.redirectLogIn && <Navigate to="/login"/>}
                    {this.state.redirectUser && <Navigate to="/me"/>}
                </header>
            )
        else
            if (this.props.type === "nouser")
                return (
                    <header className="header" id="wrapper">
                        <h1 id="site_name">SAM</h1>
                        <nav>
                            <NavLink to="/reform" id="linkHeader">Reform image</NavLink>
                            <NavLink to="/" id="linkHeader">Gallery</NavLink>
                            <NavLink to="/favourites" id="linkHeader">Favourites</NavLink>
                            <NavLink to="/private" id="linkHeader">Private</NavLink>
                        </nav>
                        <button id="logOutHeader" onClick={this.logOut}>Log out</button>
                        {this.state.redirectLogIn && <Navigate to="/login"/>}
                    </header>
                )
            else
                return (
                    <header className="header" id="wrapper">
                        <h1 id="site_name">SAM</h1>
                    </header>
                )
    }
}

export default Header