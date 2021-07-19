import React from 'react';
import '../../Components/EmployeeComponent/EmployeeComponent.css';
import Popup from 'reactjs-popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ProgressBar , Button} from 'react-bootstrap';
import pic from './../../Assets/employee.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";

class Employee extends React.Component {
    constructor(props){
       
        super(props);
        this.state = {
            employee:[],
            isOpen: false,
            updateData:[],
            name:''
        }
      }
   
      
      componentDidMount()
      {
          fetch('http://localhost:8080/getEmployee')
            .then(response => response.json())
            .then(response => {
                console.log(response.employee.length)
                let tmpArray=[]
                for(var i=0;i<response.employee.length;i++) {
                  tmpArray.push(response.employee[i])
                }
                this.setState({employee: tmpArray});
          
            
            })
            .catch(console.log)
          
}
    
  
       
      
      openModal = () => this.setState({ isOpen: true });
      closeModal=() =>{
         /* this.setState
          const url="";
        axios.post(url, reactData)
               .then(res => console.log('Data send'))
               .catch(err => console.log(err.data))
               this.setState({ isOpen: false });
          */  
      };
      
      myChangeHandler = (event) => {
        this.setState({name: event.target.value});
        this.setState({ isOpen: false });
       
      }
      
      
     abc(value)
     {
     console.log(value);
     }



    render(){
       console.log(this.state.employee);
       console.log(this.state.name);
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
                        <h4 className="card-title" style={{textDecoration:"underline", textAlign:"center", }}>Hi Gagan</h4><br /><br /><br /><br />
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
                            <h4 style={{textDecoration:"underline"}}>Employee</h4>
            
</div>
</div><br/>
<div className="card " style={{backgroundColor:"#e8ecf1"}}>
<div className="row">

                        {this.state.employee.map((emp)=>(
                            <div className="col-sm">
         
                            <div className="card allCard">
                               <div className="card-body">
                             <img src={pic} alt="..." style={{height:"80px"  ,marginLeft:"90px"}} />
                            <h5 className="card-title empName" style={{textDecoration:"underline", textAlign:"center"}}>{emp.emp_name}</h5>
                            <h6 className="listheadcc" style={{ textAlign:"center"}}>{emp.designation}</h6>
                            <h6 className="listheadcc" style={{ textAlign:"center"}}>{emp.email}</h6><br/>
                             <ul className="card-text">
                                 <li className="am"><span className="listheadcc">Employee Code -</span><span className="ans" value="id"> {emp.id}</span></li><br />
                                 <li className="am"><span className="listheadcc">Reporting Manager -</span><span className="ans"> {emp.reporting_manager}</span></li><br />
                                 <li className="am"><span className="listheadcc">Department -</span><span className="ans"> {emp.department_name}</span></li><br />
                                 <li className="am"><span className="listheadcc">Mobile Number -</span><span className="ans"> {emp.mobile_number}</span></li><br />

                             </ul><br />
                             <div class="card-footer">
                             <h6 className="listhead text-muted">Years Completed </h6>
                             <ProgressBar animated variant="info" now={1} max={10} />
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

       
        <Modal show={this.state.isOpen} onHide={this.closeModal} >
          <Modal.Header >
            <Modal.Title>Please Fill Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={this.myChangeHandler}>
                  name:<input type="text" ></input>
                 
               
                  </form>
          </Modal.Body>
          <Modal.Footer>
          <button  onClick={this.myChangeHandler} ></button>
          </Modal.Footer>
        </Modal>
            
            <h1>{this.state.name}</h1>
            
            
            
            
        </div>
  
            );
    }
}
export default Employee;