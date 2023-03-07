package com.dieses.todo.todo;

import jakarta.persistence.*;

@Entity
@Table
public class ToDo {
    @Id
    @SequenceGenerator(
            name = "todo_sequence",
            sequenceName = "todo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "todo_sequence"
    )
    private Long id;
    private String description;
    private Boolean status;

    public ToDo(){}

    public ToDo(String description) {
        this.description = description;
        this.status = false;
    }

    public ToDo(Long id, String description){
        this.id = id;
        this.description = description;
        this.status = false;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Boolean getStatus(){return status;}

    public void setDescription(String description) {
        this.description = description;
    }

    public void toggleStatus(){
        this.status = !this.status;
    }
}
