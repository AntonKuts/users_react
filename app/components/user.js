import React, {Component} from 'react';
import axios from 'axios';


export default class User extends Component {

  state = {
    visible: true
  }

  delete_user(e){
    e.preventDefault();
    console.log(this);

    this.setState({
      visible: false
    });
  }

  render() {
    var post = this.props.data;
    return (
      <div key={post.username} className={(this.state.visible ? '': 'none')}>
        <div className="card">
          <p>{post.username}</p>
         <button type="button" onClick={this.delete_user.bind(this)} name="button"> {'delete'} </button>
       </div>
       <img className="img1" src={post.pic} alt="#"/>
      </div>
    )
  }
}
