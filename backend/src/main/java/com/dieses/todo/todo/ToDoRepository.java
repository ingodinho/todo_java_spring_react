package com.dieses.todo.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ToDoRepository
        extends JpaRepository<ToDo, Long> {
    Optional<ToDo> findByDescription(String description);
}
