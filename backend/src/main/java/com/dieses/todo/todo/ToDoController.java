package com.dieses.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/todo")
public class ToDoController {

    private final ToDoService toDoService;

    @Autowired
    public ToDoController(ToDoService toDoService){
        this.toDoService = toDoService;
    }
    @GetMapping
    public List<ToDo> getToDos() {
        return toDoService.getToDos();
    }

    @PostMapping("/new")
    public ToDo addToDo(@RequestBody ToDo toDo){
        return toDoService.addToDo(toDo);
    }

    @PutMapping("/edit")
    public ToDo editToDo(@RequestBody ToDo toDo) {
        return toDoService.editToDo(toDo);
    }

    @PutMapping("/toggle")
    public ToDo toggleToDo(@RequestParam String id) {
        return toDoService.toggleToDo(id);
    }

    @DeleteMapping("/delete")
    public void deleteToDo(@RequestParam String id) {
        toDoService.deleteToDo(id);
    }
}
