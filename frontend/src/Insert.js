//  import {useState} from "react";
// import axios from "axios";
// import { Form, Button } from 'react-bootstrap';

// const Insert=()=>
// {
// 	const [input , setInput]=useState({});

// 	const handleInput=(e)=>
// 	{
// 		let name=e.target.name;
// 		let value=e.target.value;

// 		setInput(values=>({...values, [name]:value})); 
// 	}
	
// 	const handleSubmit=(e)=>
// 	{
// 		// e.preventDefault();
// 		// axios
// 		// .post("http://localhost:4000/students",input)
// 		// .then((res)=>{alert("data save")});


// 		e.preventDefault();
// 	axios.post("http://127.0.0.1:8000/api/student/", input)
//   .then((res) => {
//     alert("Data saved successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//     alert("Failed to save data");
//   });
// 	}
// 	return(

// 		<>
//         <div className="ml-3 justify-content-center">
//       <h2>Insert Student Data</h2>
//       <Form onSubmit={handleSubmit} method="post">
//         <Form.Group controlId="name">
//           <Form.Label>Name:</Form.Label>
//           <Form.Control type="text" name="stuname" placeholder="Enter name" value={input.name} onChange={handleInput} />
//         </Form.Group>

//         <Form.Group controlId="rollNo">
//           <Form.Label>Roll No:</Form.Label>
//           <Form.Control type="text" name="rollNo" placeholder="Enter roll number" value={input.rollNo} onChange={handleInput}/>
//         </Form.Group>

//         <Form.Group controlId="email">
//           <Form.Label>Email:</Form.Label>
//           <Form.Control type="email" name="stuemail" placeholder="Enter email" value={input.email} onChange={handleInput} />
//         </Form.Group>

// 		{/* <input type="submit" value="Submit" variant="primary"/> */}
        
//         <Button variant="primary" type="submit" >
//           Submit
//         </Button>
//       </Form>
//     </div>
// 	</>
// 		);
// }
// export default Insert;


import { useState } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

const Insert = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/create ", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Add Student</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="rollNo">
          <Form.Label>Roll No:</Form.Label>
          <Form.Control
            type="text"
            name="rollNo"
            placeholder="Enter roll number"
            value={formData.rollNo}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Insert;
