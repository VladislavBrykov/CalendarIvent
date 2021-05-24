
import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css';

export default ({ }) => {

  return (
    <div class="footer">
      <div className="buttons">
        <div className="link-wrapper">
          <Link to='/exemple-calendar'>Отзывы</Link>
        </div>
        <div className="link-wrapper">
          <Link to='/calendar'>Контакты</Link>
        </div>
        <div className="link-wrapper">
          <Link to='/share_calendar'>О проекте</Link>
        </div>
      </div>
    </div>
  )

};