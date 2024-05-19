package com.techcareer.ozkanbulut.business.dto;

import com.techcareer.ozkanbulut.annotation.AnnotationUniqueToDoName;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ToDoDto implements Serializable { // ToDoDto Start

    // Serializing
    private final Long serialVersionUUID = 1L;

    // To-Do Id
    private Long toDoId;

    // To-Do Name
    @Size(min = 1, max = 20, message = "Task Name must be at least 20 characters!")
    @AnnotationUniqueToDoName()
    private String toDoName;

    // To-Do Description
    @Size(min = 1, max = 60, message = "Task Description must be at least 20 characters!")
    private String toDoDescription;

    // To-Do Creation Date
    private Date systemCreatedDate;

    // To-Do is important
    @Builder.Default() // When you create an object, make isImportant false by default
    private Boolean isImportant = false;

    // To-Do is finished
    @Builder.Default() // When you create an object, make isFinished false by default
    private Boolean isFinished = false;

} // ToDoDto End
