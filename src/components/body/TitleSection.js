import React from 'react';
import { Link } from 'react-router-dom';

class TitleSection extends React.Component {

  render() {
    return (
      <div className="">
        <h2>Top Selling Picks</h2>
        <Link to="/">View all <i class="fas fa-caret-right"></i></Link>
      </div>
    )
  }

}

export default TitleSection;
