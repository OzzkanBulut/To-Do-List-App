package com.techcareer.ozkanbulut.annotation;

import com.techcareer.ozkanbulut.data.repository.IToDoRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;

// Validation for To-Do names to be unique
@RequiredArgsConstructor
public class UniqueToDoNameValidaton implements ConstraintValidator<AnnotationUniqueToDoName, String> {

    // Dependency injections
    private final IToDoRepository iToDoRepository;
    // @RequiredArgsConstructor did not work here. So i had to use @Autowired manually.Don't know why
    @Autowired
    private HttpServletRequest httpServletRequest;

    // If the request method is PUT, skip the validation.
    // I used HttpServletRequest to make sure this validation only works for POST request.
    @Override
    public boolean isValid(String name, ConstraintValidatorContext constraintValidatorContext) {
        return HttpMethod.PUT.name().equals(httpServletRequest.getMethod()) ||
                validate(name, constraintValidatorContext);
    }

    // If entity with the given name is already in the database, throw an exception
    public boolean validate(String name, ConstraintValidatorContext constraintValidatorContext) {

        Boolean isOther = iToDoRepository.findByToDoName(name).isPresent();

        if (isOther) {
            return false;
        }
        return true;
    }

}




