import axios from "axios";
import React from "react";

const TODO_API_PERSIST_URL="/todo/api" 

class ToDoApi {

    //@GetMapping(value="/find/{id}")
    toDoApiFindById(id){
        return axios.get(`${TODO_API_PERSIST_URL}/find/${id}`);
    }

    toDoApiList(){
        return axios.get(`${TODO_API_PERSIST_URL}/list`);
    }

    toDoApiCreate(toDoDto){
        return axios.post(`/todo/api/create`,toDoDto);

    }

    toDoApiDelete(id){
        return axios.post(`/todo/api/delete/${id}`);
    }

    toDoApiDeleteAll(){
        return axios.delete(`/todo/api/delete/all`);
    }
    
    toDoApiUpdate(id,toDoDto){
        return axios.put(`/todo/api/update/${id}`,toDoDto);
    }
}
export default new ToDoApi();