import React, { Component } from 'react';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  toggleSwitch = () => {
    this.setState({ isOn: !this.state.isOn });
    this.props.onChange()
  };

  render() {
    return (
      <div className='switchDiv'>
        <span>Private</span>
        <label className="switch">
          <input type="checkbox" onChange={this.toggleSwitch} />
          <span className="slider round"></span>
        </label>
        <span>Public</span>
      </div>
    );
  }
}

export default Switch;
