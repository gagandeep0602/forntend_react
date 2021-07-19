import React from 'react';
import Popup from 'reactjs-popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ProgressBar , Button} from 'react-bootstrap';
import pic from './../../Assets/pin.png';
import '../../Components/TaskComponent/TaskComponent.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";

class Task extends React.Component {
    constructor(props){
       
        super(props);
        this.state = {
            tasks:[],
            isOpen: false,
            updateData:[],
            name:''
        }
      }
   
      
      componentDidMount()
      {
          fetch('http://localhost:8080/getTask')
            .then(response => response.json())
            .then(response => {
                console.log(response.task.length)
                let tmpArray=[]
                for(var i=0;i<response.task.length;i++) {
                  tmpArray.push(response.task[i])
                }
                this.setState({tasks :tmpArray});
          
            
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
                 <Link to={'/'}><h5  style={{color:"black"}}>Dashboard</h5></Link></a>
                   
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
                         <h4 style={{textDecoration:"underline"}}>Tasks</h4>
         
</div>
</div><br/>
<div className="card " style={{backgroundColor:"#e8ecf1"}}>
<div className="row">

                     {this.state.tasks.map((task)=>(
                         <div className="col-sm">
      
                         <div className="card allCards">
                            <div className="card-body">
                          <img src={pic} alt="..." style={{height:"80px"  ,marginLeft:"180px"}} /><br />
                          <ul className="card-text">
                              <li className="am"><span className="listhead">Task Id -</span><span className="ans" value="id"> {task.task_id  }</span></li><br />
                              <li className="am"><span className="listhead">Reporting Manager -</span><span className="ans"> {task.reporting_manager}</span></li><br />
                              <li className="am"><span className="listhead">Department -</span><span className="ans"> {task.department_name}</span></li><br />
                              <li className="am"><span className="listhead">Employee Name -</span><span className="ans"> {task.emp_name}</span></li><br />
                              <li className="am"><span className="listhead">Task Description -</span><span className="ans"> {task.task_description}</span></li><br />
                              <li className="am"><span className="listhead">Priority-</span><span className="ans"> {task.priority}</span></li><br />
                              <li className="am"><span className="listhead">Assinged Date -</span><span className="ans"> {task.assinged_date}</span></li><br />
                              <li className="am"><span className="listhead">Assinged By -</span><span className="ans"> {task.assinged_by}</span></li><br />
                              

                          </ul><br />
                          <div class="card-footer">
                          <h6 className="listhead " style={{color:"blue"}}>Status: {task.task_status}</h6>
                          </div>
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
export default Task;
  