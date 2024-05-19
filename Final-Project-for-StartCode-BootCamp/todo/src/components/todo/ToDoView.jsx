import React, { useEffect, useState } from 'react';
import ToDoApi from '../../services/ToDoApi';
import { Link } from 'react-router-dom';

function ToDoView({ t, i18n, props }) {

// STATE
const [toDoId,settoDoId]=useState(null);
const[toDoView,setToDoView]=useState([]);

useEffect(()=>{
  settoDoId(localStorage.getItem("todo_view_id"))

  ToDoApi.toDoApiFindById(localStorage.getItem("todo_view_id"))
  .then((response)=>{
    console.log(response);
    if(response.status===200){
      setToDoView(response.data)
    }
  })
  .catch((err)=>{console.error(err);})
},[]); //end useEffect


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
              
                <h1 className='fa-regular fa-eye fa-4x'></h1>
            
                <h2 className="my-4">View Task</h2>
              </div>
              <table className="table text-white mb-0">
                <thead>
                    
                  <tr>
                  <th scope="col">Task ID</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Task Description</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    <tr  className="fw-normal">
                    <th>
                      <span className="ms-0">{toDoView.toDoId}</span>
                    </th>
                    
                    <td className="align-middle">
                      <span className="ms-0">{toDoView.toDoName}</span>
                    </td>
                    <td className="align-middle">
                      <span>{toDoView.toDoDescription}</span>
                    </td>
                    <td className="align-middle">
                      <span>{toDoView.systemCreatedDate}</span>
                    </td>
                    <td className="align-middle">
                      <h6 className="mb-0">
                      <span className={(toDoView.isFinished ? 'badge bg-success':(toDoView.isImportant ? 'badge bg-danger':'badge bg-warning'))}>{toDoView.isFinished ? "Finished":(toDoView.isImportant ? "High Priority":"Low Priority")}</span>
                      </h6>
                    </td> 
                    <td className="align-middle">
                      <h6 className="mb-0 ms-3">
                        <Link to={'/todo/api/list'}>
                        <i className='fa-solid fa-arrow-rotate-left text-warning fa-2xl'></i>
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

export default ToDoView;