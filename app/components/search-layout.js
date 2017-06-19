import React, {Component} from 'react';
import {Link} from 'react-router'

export default class SerchLayout extends Component {
  render () {
    return(
      <div>
      <div>{this.props.children}</div>
      <p></p>
      <div className="footer">
          <ul className="liForMeny">
            <li className="liForMeny"><Link to={"/"}>Home</Link></li>
            <li className="liForMeny"><Link to={"/Values"}>Values</Link></li>
            <li className="liForMeny"><Link to={"/IT"}>IT</Link></li>
            <li className="liForMeny"><Link to={"/Foto"}>Foto</Link></li>
          </ul>
      </div>
      </div>
    );
  }
};
