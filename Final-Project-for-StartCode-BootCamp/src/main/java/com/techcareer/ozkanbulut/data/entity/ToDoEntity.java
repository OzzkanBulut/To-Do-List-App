package com.techcareer.ozkanbulut.data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Todo")
@Table(name = "todo")
@DynamicUpdate
public class ToDoEntity implements Serializable { // ToDoEntity Start

    // Serializing
    private final Long serialVersionUUID = 1L;

    // Creating an id for to-do entity with the column name todo_id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "todo_id")
    private Long toDoId;

    // Creating a not-nullable name for to-do entity with the column name todo_name
    @Column(name = "todo_name", length = 20, nullable = false, columnDefinition = "varchar(255) default USER")
    @NotEmpty(message = "Task Name cannot be null!")
    private String toDoName;

    // Creating a description for to-do entity with the column name todo_desc
    @Column(name = "todo_desc", length = 60, nullable = false, columnDefinition = "varchar(255) default USER")
    @NotEmpty(message = "Task Description cannot be null!")
    private String toDoDescription;

    // Creating a importance boolean value for to-do entity with todo_importance column
    @Column(name = "todo_importance")
    private Boolean isImportant;

    // The Date object to see when we have created this entity
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date systemCreatedDate;

    // Creating a finished boolean value for to-do entity with todo_status column
    @Column(name = "todo_status")
    private Boolean isFinished;


} // ToDoEntity End
