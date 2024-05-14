import react from "react"

class SignIn extends react.Component {
    userAdd = {}

    render() {return (
        <form>
            <input name="email" placeholder="email" onChange={(e) => this.setState({author: e.target.value})}/>
            <input name="password" placeholder="password" onChange={(e) => this.setState({author: e.target.value})}/>
            <input name="nickname" placeholder="nickname" onChange={(e) => this.setState({author: e.target.value})}/>
            <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        email: this.state.email,
                        password: this.state.password,
                        nickname: this.state.nickname
                    }
                    // if(this.props.user)
                    //     this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)}
                }>Sing In</button>
        </form>
    )}
}

export default SignIn