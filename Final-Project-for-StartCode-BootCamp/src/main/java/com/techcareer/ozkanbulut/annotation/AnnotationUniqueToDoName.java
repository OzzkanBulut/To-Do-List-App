package com.techcareer.ozkanbulut.annotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

// Created a Custom Annotation for Unique Name Validation

// Make this annotation work only on field type of elements
@Target(ElementType.FIELD)
// Work at Runtime policy
@Retention(RetentionPolicy.RUNTIME)
// For the validation
@Constraint(validatedBy = {UniqueToDoNameValidaton.class})
public @interface AnnotationUniqueToDoName {

    String message() default "Task name must be unique!";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
