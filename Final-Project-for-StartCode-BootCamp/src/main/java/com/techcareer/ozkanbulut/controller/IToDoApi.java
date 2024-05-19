package com.techcareer.ozkanbulut.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IToDoApi<D> { // Start IToDoApi Interface

    // Create
    public ResponseEntity<?>toDoApiCreate(D d);

    // List
    public ResponseEntity<List<D>> toDoApiList();

    // Find by id
    public ResponseEntity<?> toDoApiFindById(Long id);

    // Update by id
    public ResponseEntity<?> toDoApiUpdateById(Long id, D d);

    // Delete by id
    public ResponseEntity<?> toDoApiDeleteById(Long id);

    // Delete all
    public void toDoApiDeleteAll();

    // Delete all finished
    public void toDoApiDeleteAllByFinished(Boolean isFinished);
} // Start IToDoApi Interface
