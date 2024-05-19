import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ToDoApi from '../../services/ToDoApi';
import { Link } from 'react-router-dom';

// Function ToDoCreate
function ToDoCreate({ t, i18n, props }) {

// REDIRECT
const navigate=useNavigate();

// STATE
const [toDoName,settoDoName]=useState(null);
const [toDoDescription,settoDoDescription]=useState(null);
const [isImportant, setIsImportant] = useState(false);
const [error,setError]=useState(undefined);



// Clear
const clear=()=>{
  settoDoName(null);
  settoDoDescription(null);
  setIsImportant(false);
  }

// onChange
const toDoNameOnChange=(event)=>{
const {name,value}=event.target;
console.log(name+" "+value);
settoDoName(value);
}

// onChange
const toDoDescriptionOnChange=(event)=>{
  const {name,value}=event.target;
  console.log(name+" "+value);
  settoDoDescription(value);
  }
// onChange
  const isImportantOnChange=(event)=>{
    const {name,value}=event.target;
    console.log(name+" "+value);
    setIsImportant(!isImportant);
    }
// css Styling
    const mystyle = {
     width:"25px",
     height:"25px"
    };



// Form Submit 
const onSubmitForm=(event)=>{
  event.preventDefault();
}

// Submit
const toDoCreateSubmit= async (event)=>{

  const toDoObject={
    toDoName,
    toDoDescription,
    isImportant
  }

  // Don't show errors
  setError(null);

  try {
    const response = await ToDoApi.toDoApiCreate(toDoObject);
    if(response.status==200){

      alert("Task Created")
      console.log("Task Created");
      navigate("/todo/api/list");
    }
  } catch (err) {
    if(err=="AxiosError: Request failed with status code 500"){
    alert("Task values cannot be empty");
    }
    else{
      alert("Task name must be unique !");
    }
    console.error(err,"Can not add task!!!");
    setError(err.response.data.validationErrors);
    navigate("/todo/api/create");
    
  }

  }



  // Error
  const inputInvalidErrorClass= {error} ? "form-control is-invalid" : "form-control";

  // RETURN
  return (
    
    <div>

            
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Task List</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .gradient-custom-2 {\n      background: #7e40f6;\n      background: -webkit-linear-gradient(to right, rgba(126, 64, 246, 1), rgba(80, 139, 252, 1));\n      background: linear-gradient(to right, rgba(126, 64, 246, 1), rgba(80, 139, 252, 1));\n    }\n\n    .mask-custom {\n      background: rgba(24, 24, 16, 0.2);\n      border-radius: 2em;\n      backdrop-filter: blur(25px);\n      border: 2px solid rgba(255, 255, 255, 0.05);\n      background-clip: padding-box;\n      box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);\n    }\n  "
    }}
  />
  <section className="vh-100 gradient-custom-2 ">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
          <div className="card mask-custom">
            <div className="card-body p-4 text-white">
            <div className="text-center pt-3 pb-2">
              
                <h1 className='fa-regular fa-square-plus fa-4x ms-2'></h1>
            
                <h2 className="my-4">Create Task</h2>
              </div>
              <table className="table text-white mb-0">
                <thead>
                    
                  <tr>
                    <th scope="col">Task Name</th>
                    <th scope="col">Task Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    <tr  className="fw-normal">
                    <th>
                    
        <div className="form-group ">
        <input 
        type="text"
        className='form-control' 
        id="name" 
        size={20}
        name="name"
        autoFocus={true}
        required={true}
        placeholder="Enter To do Name" 
        
        onChange={toDoNameOnChange} 
        />{error ? <div className="invalid-feedback">{error.categoryName}+"eee"</div>:""}
                    </div>
                    </th>
                    
                    <td className="align-middle">
                    <div className="form-group">     
        <input 
        type="text" 
        className='form-control'
        id="description" 
        name="description"
        size={30}
        autoFocus={true} 
        placeholder="Enter To do Description" 
        
        onChange={toDoDescriptionOnChange} />
        {error ? <div className="invalid-feedback">{error.categoryName}</div>:""}
        </div>
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                      <label htmlFor="isImportant"></label>
        <input 
        type="checkbox" 
        id="isImportant" 
        name="isImportant"
        className="ms-3"
        
        style={mystyle}
        onChange={isImportantOnChange}
        checked={isImportant}
        />      
                      </h6>
                    </td> 
                    <td className="align-middle">
                      <h6 className="mb-0 ms-3">
                        <Link to={'/todo/api/list'}>
                        <i type="submit" onClick={toDoCreateSubmit}
                        className='fa-regular fa-square-plus text-white fa-2xl'></i>
                        </Link>
                      </h6>
                      </td>
                      
                  </tr>
                    
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

// Export
export default ToDoCreate;