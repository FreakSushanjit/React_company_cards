import React from 'react'
import Card from './components/Card'
import jobs from './components/jobList'
const App = () => {
  const Cards = []

  for(let i =0;i<jobs.length;i++){
    Cards.push(<Card companyLogo={jobs[i].companyLogo} companyName={jobs[i].companyName} 
    daysAgo ={jobs[i].daysAgo} designation={jobs[i].designation} 
    availability = {jobs[i].
    availability} experience = {jobs[i].experience} payPerHour = {jobs[i].payPerHour} city={jobs[i].city}/>); 
  }  

  return (
    <div className="parent">
      {Cards}
    </div>
  )
}

export default App