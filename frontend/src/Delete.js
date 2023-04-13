import {useState,useEffect} from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';
const Delete=()=>
{
	const[mydata,setMydata]=useState([]);

	const loaddata=()=>
	{
		axios
		.get("http://127.0.0.1:8000/api/student/")
		.then((res)=>{setMydata(res.data)});
	}
	useEffect(()=>{
		loaddata();
	},[]);

	const Delrec=(stuname)=>
	{
		axios 
		.delete(`http://localhost:4000/students/${stuname}`)
		.then((res)=>{ alert("data deleted successfully")});
		loaddata();

	}
	return(
		<>
       <div>
      <h2>Student Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
			<th>operations</th>
          </tr>
        </thead>
        <tbody>
        {mydata.map((key, index) => (
            <tr key={index}>
              <td>{key.id}</td>
              <td>{key.stuname}</td>
              <td>{key.stuemail}</td>
              <td>{key.rollNo}</td>
			  <td><button onClick={()=>{Delrec(key.stu)}} > Delete record</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>




		{/* {mydata.map((key)=><h3>{key.id} {key.name} {key.add} {key.contact} 
			<button onClick={()=>{Delrec(key.id)}} >Delete record</button> </h3> )
			} */}

		</>
		);
}
export default Delete;