import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './../../Components/HomeComponent/HomeComponent.css';
import {Bar} from 'react-chartjs-2';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import pic from '../../Assets/employee.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    labels: ['OMS','ONLINE_TECH','BDE','HR','SUPPORT','SME'],
    datasets: [
      {
        label: 'Total Number of Employees',
        backgroundColor: 'rgba(75,192,192,1)',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderWidth: 2,
        data: [21,30, 40, 11, 56,34]
      }
    ]
  }
}
  render() {
    return (
          <div>
            {/*----------------------Navbar----------------- */}
      
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="https://www.moglix.com/" >
                <img src="https://cdn.moglix.com/assets/img/moglix-logo.jpg" id="logo"/></a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      <h5 style={{color:"black"}}>Dashboard</h5></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.moglix.com/about" style={{paddingLeft:"2"}}><h5>About</h5></a>
                </li>
            </ul>
        </nav><br />
  

{/*----------------------Navbar----ENDS------------ */}
{/*---------------- Side Bar------------------- */}
<div class="container-fluid">
<div class="row">
<div class="col-md-2">
<div class="card" id="main-card">
  <div class="card-body">
  <img src={pic} alt="..." style={{height:"80px"  ,marginLeft:"50px"}} /><br /><br />
     
    <ul id="abc">
      <li><h5 id="txt">Gagandeeep Singh</h5></li><br />
      <li><h5 id="txt">11599</h5></li><br />
      <li><h5 id="txt">9899888615</h5></li><br />
      <li><h5 id="txt">Software Engineer</h5></li><br />
      <li><h5 id="txt">gagandeep.singh@moglix.com</h5></li><br />
      <li><h5 id="txt">6 months</h5></li><br />
      <li><h5 id="txt">Online_tech  Team</h5></li><br />
      <li><h5 id="txt">Reporting Manager - Abc </h5></li><br />



      </ul>
    </div>
    </div>
</div>

{/*----------Main Content------------------------ */}
<div class="col-md-10 ">

<div class="main"> 
<div class="card">
  <div class="card-body">
  <div class="container">
 
  <div class="row">
    <div class="col-sm">
    <Link to={'/employee'}><div class="card-body  cardbt">
  <div class="container">
  <h3 style={{color:"black"}}>Employee</h3>
    </div>
    </div>
  </Link>
    </div>
 
    <div class="col-sm">
    <Link to={'/jobs'}><div class="card-body  cardbt">
   <div class="container">
    <h3 style={{color:"black"}}>Job Postings</h3>
    </div>
    </div>
    </Link>
    </div>
    
    <div class="col-sm">
    <Link to={'/task'}><div class="card-body  cardbt">
  <div class="container">
  <h3 style={{color:"black"}}>Task Assinged</h3>
    </div>
    </div>
    </Link> 
    </div>

    <div class="col-sm">
    <Link to={'/interviews'}><div class="card-body  cardbt">
  <div class="container">
  <h3 style={{color:"black"}}>Interviews</h3>
    </div>
    </div>
    </Link> 
    </div>
 
    </div><br /> <br />

    <div class="row">
    <div class="col-sm">
    <Link to={'/leave'}> <div class="card-body  cardbt">
  <div class="container">
    <h3  style={{color:"black"}}>Leave</h3>
    </div>
    </div>
    </Link>
    </div>

   
 
 
  </div>
</div>
  </div>
</div>
</div><br /><br /> 

{/*-----------------Charts-----------------*/}

<div class="container">
  <div class="row">
    <div class="col">
    <div class="card-body" style={{backgroundColor:"white"}}>
  <div class="container">
  <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Total Employees',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            scales: {
              xAxes: [{
                  gridLines: {
                     display:false
                  }
              }],
              yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
          }
        }}
        />
    </div>
    </div>
    </div>
    {/*Chart End */}

    <div class="col">
    <div class="card-body" style={{backgroundColor:"white"}}>
  <div class="container">
    <h4>Upcoming Birthday & Events</h4>
    </div>
    </div>
    </div>
    </div>
    </div><br /><br /> 
  {/*-------------------------Birthday Section Ends-------------------*/}
 
  
  
  












{/*-------------End Div left main content-------------- */}
</div>










</div>
</div>

</div>
    );
  }
 
}
export default Home;