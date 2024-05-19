package com.techcareer.ozkanbulut.controller.api;

import com.techcareer.ozkanbulut.business.dto.ToDoDto;
import com.techcareer.ozkanbulut.business.service.IToDoService;
import com.techcareer.ozkanbulut.controller.IToDoApi;
import com.techcareer.ozkanbulut.error.ApiResult;
import com.techcareer.ozkanbulut.utils.FrontEndPortUrl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo/api")
@CrossOrigin(origins = FrontEndPortUrl.REACT_FRONTEND_PORT_URL) // To prevent CORS error
public class ToDoApi implements IToDoApi<ToDoDto> { // Start ToDoApi Implementation

    // Dependency Injection
    private final IToDoService iToDoService;

    @Override
    @PostMapping("/create") // This method is a post request
    public ResponseEntity<?> toDoApiCreate(@Valid @RequestBody ToDoDto toDoDto) {

        ToDoDto toDoCreateApi = (ToDoDto) iToDoService.toDoServiceCreate(toDoDto);

        // If dto is null, give a 404 error.
        if (toDoCreateApi == null) {
            ApiResult apiResultCreate = ApiResult.builder()
                    .status(404)
                    .error("Can not add task!")
                    .message("Can not find todo dto")
                    .path("localhost:4444/todo/api/create")
                    .createdDate(new Date(System.currentTimeMillis()))
                    .build();
            return ResponseEntity.status(404).body(apiResultCreate);
        }
        // If dto id is 0, give a bad request error
        else if (toDoCreateApi.getToDoId() == 0) {
            ApiResult apiResultCreate = ApiResult.builder()
                    .status(400)
                    .error("Can not add task!")
                    .message("Todo Dto Bad Request")
                    .path("localhost:4444/todo/api/create")
                    .createdDate(new Date(System.currentTimeMillis()))
                    .build();
            return ResponseEntity.status(400).body(apiResultCreate);
        }
        // If dto id is not 0 and dto is not null, successfully add data
        return ResponseEntity.status(201).body(iToDoService.toDoServiceCreate(toDoDto));
    }


    @Override
    @GetMapping("/list")
    public ResponseEntity<List<ToDoDto>> toDoApiList() {
        return ResponseEntity.ok(iToDoService.toDoServiceList());
    }

    // Find By Id Api
    @Override
    @GetMapping({"/find", "/find/{id}"})
    public ResponseEntity<?> toDoApiFindById(@PathVariable(name = "id", required = false) Long id) {

        ToDoDto toDoFindApi = (ToDoDto) iToDoService.toDoServiceFindById(id);

        // If object is null, meaning there is no data in db as requested, throw an error
        if (toDoFindApi == null) {
            ApiResult apiResultFind = ApiResult.builder()
                    .status(404)
                    .error("Can not find task! ")
                    .message("Can not find ToDo Dto")
                    .path("localhost:4444/todo/api/find")
                    .createdDate(new Date(System.currentTimeMillis()))
                    .build();
            return ResponseEntity.status(404).body(apiResultFind);
        }

        return ResponseEntity.ok(iToDoService.toDoServiceFindById(id));
    }

    // Update data by id
    @Override
    @PutMapping({"/update", "update/{id}"})
    public ResponseEntity<?> toDoApiUpdateById(@PathVariable(name = "id", required = false) Long id, @Valid @RequestBody ToDoDto toDoDto) {
        return ResponseEntity.ok().body(iToDoService.toDoServiceUpdateById(id, toDoDto));
    }

    // Delete data by id
    @Override
    @DeleteMapping({"/delete", "/delete/{id}"})
    public ResponseEntity<?> toDoApiDeleteById(@PathVariable(name = "id", required = false) Long id) {
        ToDoDto toDoApiDelete = (ToDoDto) iToDoService.toDoServiceFindById(id);

        // If dto is null, give 404 error
        if (toDoApiDelete == null) {
            ApiResult apiResultFind = ApiResult.builder()
                    .status(404)
                    .error("Can not find task! ")
                    .message("Can not find ToDo Dto")
                    .path("localhost:4444/todo/api/find")
                    .createdDate(new Date(System.currentTimeMillis()))
                    .build();
            return ResponseEntity.status(404).body(apiResultFind);
        }

        return ResponseEntity.ok(iToDoService.toDoServiceDeleteById(id));
    }

    // Delete all
    @Override
    @DeleteMapping("/delete/all")
    public void toDoApiDeleteAll() {
        iToDoService.toDoServiceDeleteAll();
    }

    // Delete all data with isFinished value
    @Override
    // Transactional is needed for create,update and delete requests. Don't know why, i will look into it
    @Transactional
    @DeleteMapping("/delete/allfinished={isFinished}")
    public void toDoApiDeleteAllByFinished(@PathVariable(name = "isFinished") Boolean isFinished) {
        iToDoService.deleteAllByIsFinished(isFinished);
    }


} // End ToDoApi Implementation
