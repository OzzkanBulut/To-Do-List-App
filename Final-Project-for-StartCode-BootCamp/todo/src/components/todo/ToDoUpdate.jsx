import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ToDoApi from '../../services/ToDoApi'
import { Link } from 'react-router-dom';

function ToDoUpdate({ t, i18n, props }) {

  const navigate = useNavigate();

  const [toDoName,setToDoName]=useState(null);
  const [toDoDescription,setToDoDescription]=useState(null);
  const [isImportant, setIsImportant] = useState(false);
  const [isFinished, setisFinished] = useState(false);

  const [paramID,setParamID]=useState(null);
  const updateToDoID=useParams();

  


  useEffect(()=>{
    setParamID(updateToDoID.id);
    localStorage.setItem("todo_update_id",updateToDoID.id);
  
    ToDoApi.toDoApiFindById(updateToDoID.id).
    then((response)=>{
  if(response.status === 200){
    setToDoName(response.data.toDoName);
    setToDoDescription(response.data.toDoDescription);
    setIsImportant(response.data.isImportant);
    setisFinished(response.data.isFinished);
  }
    }).catch(()=>{
      console.error("error");
    })
  },[])

  const clear=()=>{
    setToDoName(null);
    setToDoDescription(null);
    setIsImportant(false);
    setisFinished(false);
    }

    // onChange
const toDoNameOnChange=(event)=>{
  const {name,value}=event.target;
  console.log(name+" "+value);
  setToDoName(value);
  }
// onChange
  const toDoDescriptionOnChange=(event)=>{
    const {name,value}=event.target;
    console.log(name+" "+value);
    setToDoDescription(value);
    }

// onChange
    const isImportantOnChange=(event)=>{
      const {name,value}=event.target;
      console.log(name+" "+value);
      setIsImportant(!isImportant);
      if(isImportant==true || isImportant==false ){
        
        setisFinished(false);
        console.log("status "+ isFinished);
      }
      }
// onChange
      const isFinishedOnChange=(event)=>{
        const {name,value}=event.target;
        console.log(name+" "+value);
        setisFinished(!isFinished);
        if(isFinished==false){
          setIsImportant(false);
        }
        }

      const mystyle = {
        width:"25px",
        height:"25px"
       };


    // Form Submit 
const onSubmitForm=(event)=>{
  event.preventDefault();
}

// Create Submit
const toDoCreateSubmit= async (event)=>{ 


  const myObject={
    toDoName,
    toDoDescription,
    isImportant,
    isFinished
  }

  try{
    const response = await ToDoApi.toDoApiUpdate(localStorage.getItem("todo_update_id"),myObject);
    if(response.status==200){
      console.log(myObject.isFinished);
      navigate("/todo/api/list");
    }
  }catch(err) {
    if(err=="AxiosError: Request failed with status code 400"){
      alert("Task values cannot be empty!");
      }else{
        alert(err);
      }
      navigate();
  }

}

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
  <div className="container py-4 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-10">
        <div className="card mask-custom">
          <div className="card-body p-4 text-white ">
            
          <div className="text-center pt-3 pb-2">
            
              <h1 className='fa-solid fa-highlighter  fa-4x ms-3'></h1>
          
              <h2 className="my-4">Update Task</h2>
            </div>
            <table className="table text-white mb-0">
              <thead>
                  
                <tr>
                  <th scope="col">Task Name</th>
                  <th scope="col">Task Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Finished</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                  <tr  className="fw-normal">
                  <th>
                  
      
      <input 
      type="text"
      className='form-control'
      id="name" 
      size={20}
      name="name"
      autoFocus={true} 
      value={toDoName}
      placeholder="Enter To do Name" 
      
      onChange={toDoNameOnChange} />
                  </th>
                  <td className="align-middle">
                  
      <input 
      type="text" 
      className='form-control'
      id="description" 
      name="description"
      value={toDoDescription}
      size={30}
      autoFocus={true} 
      placeholder="Enter To do Description" 
      
      onChange={toDoDescriptionOnChange} />
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
                    <h6 className="mb-0">
                    <label htmlFor="isFinished"></label>
      <input 
      type="checkbox" 
      id="isFinished" 
      name="isFinished"
      className="ms-3"
      
      style={mystyle}
      onChange={isFinishedOnChange}
      checked={isFinished}
      />      
                    </h6>
                  </td>
                  <td className="align-middle">
                    <h6 className="mb-0 ms-3">
                      <Link to={'/todo/api/list'}>
                      <i type="submit" onClick={toDoCreateSubmit}
                      className='fa-solid fa-highlighter text-white fa-2xl'></i>
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































export default ToDoUpdate