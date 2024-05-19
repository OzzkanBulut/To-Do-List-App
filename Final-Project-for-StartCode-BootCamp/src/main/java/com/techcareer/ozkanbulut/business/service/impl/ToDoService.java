package com.techcareer.ozkanbulut.business.service.impl;

import com.techcareer.ozkanbulut.business.dto.ToDoDto;
import com.techcareer.ozkanbulut.business.service.IToDoService;
import com.techcareer.ozkanbulut.configuration.beanconfig.ModelMapperBean;
import com.techcareer.ozkanbulut.data.entity.ToDoEntity;
import com.techcareer.ozkanbulut.data.repository.IToDoRepository;
import com.techcareer.ozkanbulut.exception.MyCustomException;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service // We tell Spring that this class is a service bean
@RequiredArgsConstructor // Inject the required dependencies
@Log4j2 // For Logging
public class ToDoService implements IToDoService<ToDoDto, ToDoEntity> {// ToDoService Implementation Start

    // Dependency Injection (With the @RequiredArgsConstructor)
    private final IToDoRepository iToDoRepository;
    private final ModelMapperBean modelMapperBean;

    // Convert ToDoEntity to ToDoDto
    @Override
    public ToDoDto entityToDto(ToDoEntity toDoEntity) {
        return modelMapperBean.modelMapperMethod().map(toDoEntity, ToDoDto.class);
    }

    // Convert ToDoDto to ToDoEntity
    @Override
    public ToDoEntity dtoToEntity(ToDoDto toDoDto) {
        return modelMapperBean.modelMapperMethod().map(toDoDto, ToDoEntity.class);
    }

    @SneakyThrows // Throw Exceptions Sneakily
    @Override
    @Transactional // I still don't know what this is.Will look into it
    public ToDoDto toDoServiceCreate(ToDoDto toDoDto) {
        // If dto object is not null, add it to the database
        if (toDoDto != null) {
            ToDoEntity entity = dtoToEntity(toDoDto);
            iToDoRepository.save(entity);
            toDoDto.setToDoId(entity.getToDoId());
            toDoDto.setSystemCreatedDate(entity.getSystemCreatedDate());
        } else { // Else, throw  MyCustomException
            throw new MyCustomException("ToDoDto is null!");
        }

//        entity.setToDoDescription(toDoDto.getDescription().toUpperCase());
//        entity.setToDoName(toDoDto.getName().toUpperCase());
//        ToDoEntity entity1 = iToDoRepository.save(entity);
        return toDoDto;
    }

    // Get ToDoDto objects as a list
    @Override
    public List<ToDoDto> toDoServiceList() {

        List<ToDoEntity> entityList = iToDoRepository.findAll();

        List<ToDoDto> dtoList = new ArrayList<>();

        for (ToDoEntity entity : entityList) {
            dtoList.add(entityToDto(entity));
        }

        return dtoList;
    }

    // Find dto object by id
    @SneakyThrows
    @Override
    public ToDoDto toDoServiceFindById(Long id) {

        Boolean doesEntityExist = iToDoRepository.findByToDoId(id).isPresent();

        // If entity with given id is not in database, throw exception
        if (doesEntityExist) {
            return entityToDto(iToDoRepository.findByToDoId(id).get());
        } else {
            throw new MyCustomException("No task with " + id + " id!");
        }

    }

    // Update the dto object with the given id
    @Override
    @Transactional
    public ToDoDto toDoServiceUpdateById(Long id, ToDoDto toDoDto) {
        ToDoDto dtoFind = toDoServiceFindById(id);
        ToDoEntity toDoEntity = dtoToEntity(dtoFind);

        // If name value of dto is not null, set the entity name
        if (toDoDto.getToDoName() != null) {
            toDoEntity.setToDoName(toDoDto.getToDoName());
        }

        // If description value of dto is not null, set the entity description
        if (toDoDto.getToDoDescription() != null) {
            toDoEntity.setToDoDescription(toDoDto.getToDoDescription());
        }

        // // If isImportant value of dto is not null, set the entity isImportant
        if (toDoDto.getIsImportant() != null) {
            toDoEntity.setIsImportant(toDoDto.getIsImportant());
        }

        // // If isFinished value of dto is not null, set the entity isFinished
        if (toDoDto.getIsFinished() != null) {
            toDoEntity.setIsFinished(toDoDto.getIsFinished());
        }

        // Save to db
        iToDoRepository.save(toDoEntity);

        // Set id and systemCreatedDate of dto
        toDoDto.setToDoId(toDoEntity.getToDoId());
        toDoDto.setSystemCreatedDate(toDoDto.getSystemCreatedDate());

        return entityToDto(toDoEntity);

    }

    // Delete By Id
    @Override
    @SneakyThrows
    @Transactional
    public ToDoDto toDoServiceDeleteById(Long id) {
        // Find
        ToDoDto dtoFind = toDoServiceFindById(id);
        ToDoEntity entityToDelete = dtoToEntity(dtoFind);

        // If there is an entity with given id, delete it
        if (entityToDelete != null) {
            iToDoRepository.deleteById(entityToDelete.getToDoId());
            return dtoFind;
        } else {
            throw new MyCustomException("Could not delete data with id: " + id);
        }
    }

    // Delete all data in db
    @Override
    public void toDoServiceDeleteAll() {
        iToDoRepository.deleteAll();
    }

    // Delete all finished data in db
    @Override
    public void deleteAllByIsFinished(Boolean isFinished) {
        iToDoRepository.deleteAllByIsFinished(isFinished);


    }
}// // ToDoService Implementation End

