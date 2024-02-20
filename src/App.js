import React from 'react';
import EmployeeInfo from './components/StudentInfo';
import Info from './components/StudentInfo';
import Summary from './components/summary'; 
import QualificationInfo from './components/Qualificationinfo';
const App = () => {
  return (
    <div className='ap'>
    <div className='container-fluid'>
      <h1 style={{ textAlign: "center", backgroundColor: " lightblue", color: " blue" }}>RESUME</h1>
      <br />
      <Info/>
      <Summary summary="Implemented a strategic marketing campaign that resulted in a 30% increase in customer engagement and a 25% boost in sales revenue within six months." />
      <br />
      <QualificationInfo />
    </div>
    </div>
  );
}

export default App;