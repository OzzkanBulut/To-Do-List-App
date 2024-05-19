package com.techcareer.ozkanbulut.data.repository;

import com.techcareer.ozkanbulut.data.entity.ToDoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IToDoRepository extends JpaRepository<ToDoEntity,Long> { // IToDoRepository Start
    // Custom query find by task ıd
    Optional<ToDoEntity> findByToDoId(Long id);

    // Custom query find by task name
    Optional<ToDoEntity> findByToDoName(String name);

    // Custom query find by task description
    Optional<ToDoEntity> findByToDoDescription(String desc);

    // Custom query delete all by isFinished boolean value
    void deleteAllByIsFinished(Boolean isFinished);

} // IToDoRepository End
