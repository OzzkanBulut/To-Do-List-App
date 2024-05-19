import { Navigate, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import ToDoList from './components/todo/ToDoList';
import ToDoCreate from './components/todo/ToDoCreate';
import ToDoUpdate from './components/todo/ToDoUpdate';
import ToDoView from './components/todo/ToDoView';
import React from 'react';
import LoginComponent from './components/LoginComponent';


function ToDoRouter() {

    // RETURN
        return (
            <React.Fragment>
                    <HeaderComponent></HeaderComponent>
                    
                    <Routes>
                            <Route path={"/"} element={<MainComponent />} />
                            <Route path={"/index"} element={<MainComponent />} />


                            
                            <Route path={"/todo/api/list"} element={<ToDoList/>} />
                            <Route path={"/todo/api/create"} element={<ToDoCreate/>} />
                            <Route path={"/todo/api/find/:id"} element={<ToDoView/>} />
                            <Route path={"/todo/api/update/:id"} element={<ToDoUpdate/>} />
                            <Route path={"/login"} element={<LoginComponent/>} />
                        


                            <Route path={"*"} element={<Navigate to={"/"} />} />
                           
                    </Routes>
                    
                    <FooterComponent></FooterComponent>
            </React.Fragment>
        );
}

// EXPORT
// export default withTranslation()(BlogRouter);
export default ToDoRouter;