package com.techcareer.ozkanbulut.business.service;

import java.util.List;

public interface IToDoService <D,E>{ // IToDoService Interface Start

    // For Model Mapping
    public D entityToDto(E e);

    public E dtoToEntity(D d);

//////// CRUD OPERATIONS ////////

    // CREATE
    public D toDoServiceCreate(D d);

    // GET ALL WITH LIST
    public List<D> toDoServiceList();

    // FIND
    public D toDoServiceFindById(Long id);

    // Update
    public D toDoServiceUpdateById(Long id,D d);

    // Delete
    public D toDoServiceDeleteById(Long id);

    // Delete All
    public void toDoServiceDeleteAll();

    // Delete All By IsFinished Value
    public void deleteAllByIsFinished(Boolean isFinished);

} // // IToDoService Interface End