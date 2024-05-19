import { useState,useEffect } from "react";
import React from "react";
import ToDoApi from "../../services/ToDoApi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ToDoList(){

    const[toDos, setToDos] = useState([]);

    let navigate = useNavigate();

    const fetchToDoList = async (execuse="party") => {
        try {
            const response = await ToDoApi.toDoApiList();  
            setToDos(response.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    

    
    useEffect(() => {
        //2.YOL
        fetchToDoList("party");
        
    },[])

    const listManipulationAfter = () => {
        ToDoApi.toDoApiList()
            .then(
                (response) => {
                    console.log(response);
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.headers);
                    if (response.status === 200) {
                        setToDos(response.data)
                    }
                }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    

    //To-Do DELETE
    const setDeleteToDo = (id) => {
       if (window.confirm(" Are you sure you want to delete task ID: "+id+" ?")) {
        axios.delete(" http://localhost:4444/todo/api/delete/"+id).then((response) => {
          if (response.status === 200) {
              listManipulationAfter();
              navigate('/todo/api/list')
          }
      }).catch((err) => {
        console.error(err);
        navigate('/todo/api/list')
    });
      } else{
        console.log("Error");
      }
     
       
  }

   // To-Do DELETE All
   const setDeleteToDoAll = () => {
    if (window.confirm( "Are you sure you want to delete all tasks?")) {
     axios.delete(" http://localhost:4444/todo/api/delete/all").then((response) => {
       if (response.status === 200) {
           listManipulationAfter();
           navigate('/todo/api/list')
       }
   }).catch((err) => {
     console.error(err);
     navigate('/todo/api/list')
 });
   } else{
     console.log("Error");
   }

   

   
  
    
}

 // To-Do Delete All Finished
 const setDeleteToDoAllFinished = () => {
  if (window.confirm( "Are you sure you want to delete all finished tasks ?")) {
   axios.delete(" http://localhost:4444/todo/api/delete/allfinished=true").then((response) => {
     if (response.status === 200) {
         listManipulationAfter();
         navigate('/todo/api/list')
     }
 }).catch((err) => {
   console.error(err);
   navigate('/todo/api/list');
});
 } else{
   console.log("Error");
 }
}

  const setUpdateToDo = (data) => {
    
    let { id, toDoName,toDoDescription,isImportant,isFinished } = data
    localStorage.setItem("todo_update_id", id)
    localStorage.setItem("todo_name", toDoName)
    localStorage.setItem("todo_description", toDoDescription)
    localStorage.setItem("todo_importance", isImportant)  
    localStorage.setItem("todo_is_finished", isFinished) 
}

const setViewToDo = (id) => {

  localStorage.setItem("todo_view_id", id)
}

 

 const sortByImportance = () => {
  const sortedToDos = [...toDos].sort((a, b) => {
    if (a.isFinished && !b.isFinished) {
      return 1;
    }  

    if (!a.isFinished && b.isFinished) {
      return -1;
    }

        return b.isImportant - a.isImportant;
      
  });
  setToDos(sortedToDos);
};





useEffect(() => {
 
  sortByImportance();

},[...toDos])


 

 const myStyle = {
  float:"right",
  color:"white"
 };

        return (
            <React.Fragment>
            
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
  <section className="vh-100 gradient-custom-2">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
          <div className="card mask-custom">
            <div className="card-body p-4 text-white">
              <div className="text-center pt-1 pb-2">
              <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                  alt="Check"
                  width={60}
                />
                <h2 className="my-2">Task List</h2>
                
              </div>
              <table className="table text-white mb-0">
                <thead>
                    
                  <tr>
                    <th scope="col">Task Name</th>
                    <th scope="col">Task Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    
                  </tr>
                </thead>
                <tbody >
                    {toDos.map((data)=>
                    <tr key={data.toDoId}  className="fw-normal">
                    <th >
                      <span >{data.toDoName}</span>
                    </th>
                    <td className="align-middle">
                      <span>{data.toDoDescription}</span>
                    </td>
                    <td  className="align-middle">
                      <h6 className="mb-0">
                        <span  className={(data.isFinished ? 'badge bg-success':(data.isImportant ? 'badge bg-danger':'badge bg-warning'))}>{data.isFinished ?"Finished":(data.isImportant ? "High Priority":"Low Priority")}</span>
                      </h6>
                    </td>
                    <td className="align-middle">
                    <Link to={`/todo/api/find/${data.toDoId}` }>
                      <a data-mdb-tooltip-init="" title="See">
                        <i onClick={() => setViewToDo(data.toDoId)} className="fas fa-solid fa-eye fa-lg text-white ms-0" />
                        </a>
                        </Link>
                      
                      <Link to={`/todo/api/update/${data.toDoId}` }> <a  data-mdb-tooltip-init="" title="Update">
                        <i onClick={() => setUpdateToDo(data.toDoId)} className="fa-solid fa-highlighter text-warning ms-2 " />
                      </a>
                      </Link>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove">
                        <i onClick={() => setDeleteToDo(data.toDoId)} className="fas fa-trash-alt fa-lg text-danger ms-2" />
                      </a>
                      
                    </td>
                  </tr>
                    )}
                  
                </tbody>
              </table>
              <div className="myfunc">

                <a href="#!" >
                <i onClick={() => setDeleteToDoAll()}
                className="fa-solid fa-ban myfunc my-2 fa-3x text-danger ms-3"></i>
                </a>
                <a href="#!" >
                <i onClick={() => setDeleteToDoAllFinished()}
                className="fa-regular fa-circle-xmark myfunc my-2 fa-3x text-warning ms-3"></i>
                </a>

              <Link to={`/todo/api/create`}>
                <i className="fa-solid myfunc fa-circle-plus my-2 fa-3x text-white"></i>
                </Link>

                

                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
            </React.Fragment>
        );


};
export default ToDoList;