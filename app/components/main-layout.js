import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainLayout extends Component {
  render() {
    return(
      <div className="container">
        <div className="header">
            <ul className="ulForMeny">
              <li className="liForMeny"><Link to={"/"}>Home</Link></li>
              <li className="liForMeny"><Link to={"/Values"}>Values</Link></li>
              <li className="liForMeny"><Link to={"/IT"}>IT</Link></li>
              <li className="liForMeny"><Link to={"/Foto"}>Foto</Link></li>
            </ul>
        </div>
        <div className="boxForKuts">
          <Link className="kuts" Link to={"/"}>ANTON KUTS</Link>
        </div>
        <main>
        {this.props.children}
        </main>
      </div>
    );
  }
};
