package com.dieses.todo.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ToDoConfig {

    @Bean
    CommandLineRunner commandLineRunner(ToDoRepository toDoRepository) {
        return args -> {
            ToDo one = new ToDo("Cleaning");
            ToDo two = new ToDo("Learning");

            toDoRepository.saveAll(
                    List.of(one,two)
            );
        };
    }
}
