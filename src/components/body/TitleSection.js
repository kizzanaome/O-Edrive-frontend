import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/title.css';

class TitleSection extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h2 className="fw-bolder font-size-27 cat-title">Top Selling Picks</h2>
        <Link to="/">View all <i class="fas fa-caret-right"></i></Link>
      </div>
    )
  }

}

export default TitleSection;
