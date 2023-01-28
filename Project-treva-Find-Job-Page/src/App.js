import React from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';

import img1 from '../src/assets/Group 145.png'
import img2 from '../src/assets/Group 172.png'
import rec1 from '../src/assets/RectangleCopy2.png'
import rec2 from '../src/assets/Rectangle-4.png'

import img3 from '../src/assets/Group163.png'
import img4 from '../src/assets/Group247.png'
import rec3 from '../src/assets/RectangleCopy-1.png'
import rec4 from '../src/assets/RectangleCopy4.png'

import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"

import { Header, SignIn } from "./Components";

function App() {
  const descriptionData1 = [
    {
      title: 'The Amazing Hubble (Post)',
      description: 'Post: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    },
    {
      title: 'The Amazing Hubble (Applied)',
      description: 'Applied: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    },
    {
      title: 'The Amazing Hubble (Assigned)',
      description: 'Assigned: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    },
    {
      title: 'What If They Let You Run The Hubble',
      description: 'There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement. The headline should be simply catchy and various key points should be embedded when deciding on the headline for the ad. The headline should catch attention of the eye at the first glance. Words in headlines should act as tags for the advertisement. It should say it all about the content that follows. If a company is selling reasonably priced furniture, the headline of their advertisement should be ‘Durable furniture for less price’. This headline will attract the ook out for durable furniture as well as low cost furnitu'
    }
  ];
  const descriptionData2 = descriptionData1;
  const buttonColors = [
    ['#7796FE','#FD5E5E','#49A652'],
    ['#FB1488','#03D3E2','#130242']
  ];
  return (
    <div>
      <Header />
      {/* <SignIn /> */}
      <HeroSection title='Hire' img1={img1} img2={img2} rec1={rec1} rec2={rec2} descriptionData={descriptionData1} buttonColors={buttonColors[0]} />
      <HeroSection title='Work' img1={img3} img2={img4} rec1={rec3} rec2={rec4} descriptionData={descriptionData2} buttonColors={buttonColors[1]} />
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App;
