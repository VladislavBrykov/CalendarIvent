
import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css';

export default ({ }) => {

  return (
    <div class="footer">
      <div className="buttons">
        <div className="link-wrapper">
          <Link to='/'>About</Link>
        </div>
        <div className="link-wrapper">
          <Link to='/'>Technical Support</Link>
        </div>
        <div className="link-wrapper">
          <Link to='/'>Opportunities</Link>
        </div>
      </div>
    </div>
  )

};