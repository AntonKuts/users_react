import React, {Component} from 'react';
import User from './user';
import axios from 'axios';

export default class Foto extends Component {

state = {
  posts: [],
  loading: true,
  error: null
}

  componentDidMount() {
    axios.get('json.json')
      .then(res =>{
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
    if(error){
      return this.renderError;
    }
    console.log(this);

    return (
      <div className={'mainBox '}>
        {posts.map(post => (
          <User data={post} key={post.username}/>
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
