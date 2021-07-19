
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../LeavaComponent/LeaveComponent.css';
class Leave extends React.Component {
    constructor(props){
       
        super(props);
        this.state = {
            jobs:[],
            isOpen: false,
            updateData:[],
            name:''
        }
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
                         <h4 style={{textDecoration:"underline"}}>Holidays</h4>
         
</div>
</div><br/>

<div className="card">
                     <div className="card-body">
                        <ul>
                          <li> Total Alloted Leaves : 15</li><br />
                          <li>Taken 10</li><br />
                          <li>Remaining 5</li><br />
                          <li>Sick Leave 4</li><br />
                        
                          </ul>
         
</div>
</div><br/>
         
         
         </div>
     </div>

     </div>
     </div>
  
            );
    }
}
export default Leave;
  