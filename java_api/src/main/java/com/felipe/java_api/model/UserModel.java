package com.felipe.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private short age;
    private String sex;
    private String email;
    private String password;
    private boolean notifications;

    public UserModel(String name, short age, String sex, String email, String password, Boolean notifications)
    {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.email = email;
        this.password = password;
        this.notifications = notifications;
    }

    public UserModel(String id)
    {
        this.id = id;
    }

    public UserModel() { }
}
