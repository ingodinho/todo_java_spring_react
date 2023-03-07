package com.dieses.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {

    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDo> getToDos() {
        return toDoRepository.findAll();
    }

    public ToDo addToDo(ToDo todo) {
        Optional<ToDo> toDoOptional = toDoRepository.findByDescription(todo.getDescription());
        if(toDoOptional.isPresent()) {
            throw new IllegalStateException("Description already taken");
        }
        ToDo newToDo = new ToDo(todo.getDescription());
        return toDoRepository.save(newToDo);
    }

    public ToDo editToDo(ToDo toDo) {
        Optional<ToDo> foundToDo = toDoRepository.findById(toDo.getId());
        if(foundToDo.isEmpty()){
            throw new IllegalStateException("No ToDo with this id found");
        }
        foundToDo.get().setDescription(toDo.getDescription());
        return toDoRepository.save(foundToDo.get());
    }

    public ToDo toggleToDo(String id) {
        long toDoId = Long.parseLong(id);
        Optional<ToDo> foundToDo = toDoRepository.findById(toDoId);
        if(foundToDo.isEmpty()) {
            throw new IllegalStateException("No ToDo with this id found");
        }
        foundToDo.get().toggleStatus();
        return toDoRepository.save(foundToDo.get());
    }

    public void deleteToDo(String id) {
        long toDoId = Long.parseLong(id);
         toDoRepository.deleteById(toDoId);
    }


}
