import React, { useState } from 'react';
import styles from './App.module.css';
import Popup from 'reactjs-popup';
import FilterType from './components/FilterType';
import icon from './assets/icon.png'
import { BsTelephone, BsFillPersonFill, BsSearch } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineStar } from 'react-icons/ai';
import { FiLifeBuoy } from 'react-icons/fi'

function App() {
  const [name, setName] = useState('');
  const addEvent = () => {
    const newEvent = {
      author: '',
      id: '',
      price: 1,
      title: '',
      url: '',
      detail: '',
      date: '',
      rating: 2
    };

  };
  return (
    <div className={styles.container}>
      <div id={styles.headerBack}></div>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={icon} alt='Icon' id={styles.icon} />
          <span>
            <BsTelephone /> +10229528
          </span>
          <span>
            <AiOutlineMail /> info@EventTitans.com
          </span>
        </div>
        <div className={styles.headerRight}>
          <span>
            <button className={styles.lifeSaver}><FiLifeBuoy /></button>
          </span>
          <span className={styles.loginButton}>
            <BsFillPersonFill />Login | Register
          </span>
          <Popup trigger={<span id={styles.createEvent}>
            <AiOutlineStar /> Create Event
          </span>} position="right center">
            <div>
              {/* heeeeeeeereeee is poooopo up */}
              <input type="Title" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
          </Popup>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.filters}>
            <h2>Filter Events</h2>
            <FilterType title='Name' defultValue='Model' options={['Ascending', 'Descending']} />
            <FilterType title='Price' defultValue='From' options={['Low->High', 'High->Low']} />
            <FilterType title='Rate' defultValue='Type' options={['Ascending', 'Descending']} />
          </div>
          <button className={styles.apply}><BsSearch />Apply Filters</button>
        </div>

      </div>
    </div>
  );
}

export default App;
