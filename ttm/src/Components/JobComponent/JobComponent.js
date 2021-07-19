import React from 'react';
import pic from './../../Assets/searchjobs_icon.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../../Components/JobComponent/JobComponent.css';
class Job extends React.Component {
    constructor(props){
       
        super(props);
        this.state = {
            jobs:[],
            isOpen: false,
            updateData:[],
            name:''
        }
      }
   
      
      componentDidMount()
      {
          fetch('http://localhost:8080/getJobs')
            .then(response => response.json())
            .then(response => {
                console.log(response.jobs.length)
                let tmpArray=[]
                for(var i=0;i<response.jobs.length;i++) {
                  tmpArray.push(response.jobs[i])
                }
                this.setState({jobs :tmpArray});
          
            
            })
            .catch(console.log)
          
}
render(){
     return(
      
     <div>
         {/*----------------------Navbar----------------- */}
   
         <nav className="navbar navbar-expand-sm navbar-light bg-light">
         <a className="navbar-brand" href="https://www.moglix.com/" >
             <img src="https://cdn.moglix.com/assets/img/moglix-logo.jpg" id="logo"/></a>
         <ul className="navbar-nav" style={{ listStyle:"none"}}>
             <li className="nav-item">
                 <a className="nav-link" href="#">
                 <Link to={'/'}><h5   style={{color:"black"}}>Dashboard</h5></Link></a>
                   
             </li>
             <li className="nav-item">
                 <a className="nav-link" href="https://www.moglix.com/about" style={{paddingLeft:"2"}}><h5>About</h5></a>
             </li>
         </ul>
     </nav><br />
      {/*----------------------Navbar Ends----------------- */}

      {/*---------------- Side Bar------------------- */}
     <div className="container-fluid">
         <div className="row">
             <div className="col-md-2">
                 <div className="card " id="mc" >
                     <div className="card-body" id="maincard"> 
                     <h4 className="card-title" style={{textDecoration:"underline", textAlign:"center", }}>Hi Gagan</h4><br /><br /><br />
                     <ul className="card-text">
                     <li ><Link to={'/'}> <span className="sidelist"  >Dashboard</span></Link></li><br />
                              <li className="amd"><Link to={'/jobs'}><span className="sidelist">Job Postings</span></Link></li><br />
                              <li className="amd"><Link to={'/interviews'}><span className="sidelist">Inteview Schedule</span></Link></li><br />
                              <li className="amd"><Link to={'/task'}><span className="sidelist">Tasks</span></Link></li><br />
                              <li className="amd"><Link to={'/leave'}><span className="sidelist">Leave</span></Link></li><br />
                              <li className="amd"><Link to={'/employee'}><span className="sidelist">Employees</span></Link></li><br />
                              
                     </ul><br />
                     </div>
                 </div>
            </div>

     {/*----------Main Content------------------------ */}
             <div className="col-md-10 ">
                 <div className="card">
                     <div className="card-body">
                         <h4 style={{textDecoration:"underline"}}>Job Openings</h4>
         
</div>
</div><br/>
<div className="card " style={{backgroundColor:"#e8ecf1"}}>
<div className="row">

                     {this.state.jobs.map((jobs)=>(
                         <div className="col-sm">
      
                         <div className="card jo">
                            <div className="card-body">
                          <img src={pic} alt="..." style={{height:"80px"  ,marginLeft:"100px"}} /><br />
                          <ul className="card-text">
                              <li className="am"><span className="listhead">Job Id -</span><span className="ans" value="id"> {jobs.job_id}</span></li><br />
                              <li className="am"><span className="listhead">Job Title-</span><span className="ans"> {jobs.job_title}</span></li><br />
                              <li className="am"><span className="listhead">Location -</span><span className="ans"> {jobs.location}</span></li><br />
                              <li className="am"><span className="listhead">Experience Required-</span><span className="ans"> {jobs.experience_required} yrs </span></li><br />
                              <li className="am"><span className="listhead">Job Role -</span><span className="ans"> {jobs.job_role}</span></li><br />
                              
                          </ul><br />
                          </div>

                          </div><br/>
                     </div>


                     ))}
                        
                     

                         </div>
                     </div>
               </div>     
             
         
         
  
         
         
           
         
         
         </div>
     </div>

     </div>
  
            );
    }
}
export default Job;
  