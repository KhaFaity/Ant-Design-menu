import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilePen } from '@fortawesome/free-solid-svg-icons';

import './HomePage.scss'
function HomePage() {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <div className="home-page">
      <header class="page-header">
        <h1>Welcome to My Website!</h1>
      </header>
      <div className="body">
        <div className="nav-left">
          <h1>Nav-left</h1>
          <div className='dropdown' >
            <div className="dropdown__select">
              <span className='dropdown__selected'>Quản lý sinh viên</span>
              <FontAwesomeIcon icon={faCaretDown} className='dropdown__caret' />
            </div>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
              
            </ul>
            <div className="dropdown__select">
              <span className='dropdown__selected'>Quản lý phòng</span>
              <FontAwesomeIcon icon={faCaretDown} className='dropdown__caret' />
            </div>
            <ul className="dropdown__list">
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
              <li className="dropdown__item">
                <span className="dropdown__text">Cập nhật phòng</span>
                <FontAwesomeIcon icon={faFilePen} className='dropdown__icon' />
              </li>
            </ul>
            <div className="dropdown__select">
              <span className='dropdown__selected'>Quản lý điện nước</span>
              {/* <FontAwesomeIcon icon={faCaretDown} className='dropdown__caret' /> */}
            </div>
          </div>
        </div>
        <div className="content">
          <h1>Content</h1>
        </div>
      </div>
        <footer>
          <h1>Footer</h1>
        </footer>
      
      
      {/* <main>
        <p>Thank you for visiting my website. This is the home page.</p>
        <p>Please feel free to explore the rest of the site.</p>
      </main>
      <footer>
        <p>Copyright © My Website</p>
      </footer> */}
    </div>
  );
}

export default HomePage;
