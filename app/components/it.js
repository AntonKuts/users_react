import React, {Component} from 'react';
import axios from 'axios';

export default class It extends Component {

state = {
  post: [],
  loading: true,
  error:null
}

  componentDidMount() {
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(res =>{
        this.setState({
          post: res.data.data.children,
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
    const {error, post} = this.state;
    if(error){
  return this.renderError;
    }

    return (
      <ul>
        {post.map(post =>
          <li key={post.data.id}>{post.data.title} </li>
        )}
      </ul>
    );
  }
  render() {
    const {loding} = this.state;

    return (
      <div>
        <p className="topic">IT</p>
        {loding ? this.renderLoding():this.renderPosts()}
      </div>
    );
  }
};
