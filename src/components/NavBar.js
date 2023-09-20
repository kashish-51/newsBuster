import React, { Component } from 'react';
import { Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className={`navbar navbar-expand-lg bg-cyan-600 fixed-top font-bold text-white`}>
  <div>
    <ul className="flex ml-8 ">
      <li className=" ml-5"> <Link to="/">Home</Link></li>
     <li className=" ml-5"> <Link to="/business">Business</Link></li>
     <li className=" ml-5"> <Link to="/entertainment">Entertainment</Link></li>
     <li className=" ml-5"> <Link to="/health">Health</Link></li>
     <li className=" ml-5"> <Link to="/science">Science</Link></li>
     <li className=" ml-5"> <Link to="/sports">Sports</Link></li>
     <li className=" ml-5"> <Link to="/technology">Technology</Link></li>
    </ul>
  </div>
  <div className="ml-[90vh]"  >
  <h1>newsBuster</h1>
</div>
</nav>
      </div>
    )
  }
}

export default Navbar
