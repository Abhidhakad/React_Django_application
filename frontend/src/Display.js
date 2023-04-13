import {useState,useEffect} from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';
const Display=()=>
{
	const [record,setRecord]=useState([]);
	const loaddata=()=>
	{
		axios
		.get("http://127.0.0.1:8000/api/student/")
		.then((res)=>{setRecord(res.data)});
	}
	useEffect(()=>{
		loaddata()
	},[]);
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
          </tr>
        </thead>
        <tbody>
        {record.map((key, index) => (
            <tr key={index}>
              <td>{key.id}</td>
              <td>{key.stuname}</td>
              <td>{key.stuemail}</td>
              <td>{key.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>






        {/* before */}
		{/* <h1>Display Records</h1>
		{record.map((key)=> <h3> {key.id} {key.name} {key.add} {key.contact}) </h3> )}
    */}

    </>
		);
}
export default Display;

		