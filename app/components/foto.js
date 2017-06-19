import React, {Component} from 'react';
import axios from 'axios';

export default class Foto extends Component {

state = {
  posts: [],
  loading: true,
  error:null
}

  componentDidMount() {
    axios.get('json.json')
      .then(res =>{
        console.log(res);
        this.setState({
          posts: res.data,
          loading: false,
          error: null
        })
      }).catch(err =>{
      this.setState({
        loding: false,
        error: err
      });
    })
  }
  renderLoding(){
    return (
      <div>loading...</div>
    );
  }


  renderError(){
    return(
      <div>Something went wrong {this.stste.error.message}</div>
    )
  }
  renderPosts(){
    const {error, posts} = this.state;
    console.log(this.state);
    if(error){
      return this.renderError;
    }

    return (
      <div className="mainBox">
        {posts.map(post => (
          <div>
          <p key={post.username}>{post.username}</p>
          <img className="img1" src={post.pic} alt="#"/>
          </div>
        )
      )}
      </div>
    );

  }
  render() {
    const {loding} = this.state;

    return (
      <div>
      <p className="topic">Foto</p>
        {loding ? this.renderLoding():this.renderPosts()}
      </div>
    );
  }
};
