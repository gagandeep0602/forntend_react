import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/HomeComponent.js';
import Employee from  './Components/EmployeeComponent/EmployeeComponent.js';
import Task from './Components/TaskComponent/TaskComponent.js';
import Job from './Components/JobComponent/JobComponent.js';
import Leave from './Components/LeavaComponent/LeaveComponent.js';
import Interview from './Components/InteviewComponent/InterviewComponent.js'
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/employee' component={Employee}/>
        <Route path='/task' component={Task}/>
        <Route path='/jobs' component={Job}/>
        <Route path='/leave' component={Leave}/>
        <Route path='/interviews' component={Interview}/>
     
     
      </Switch>
    </main>
  )
  
  export default Main
  