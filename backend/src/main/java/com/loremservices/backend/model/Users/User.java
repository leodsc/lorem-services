package com.loremservices.backend.model.User;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@MappedSuperclass
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min=2, max=20, message = "size")
    private String firstName;

    @Size(min=2, max=20, message = "size")
    private String lastName;

    @Email(message="unique")
    @Column(unique = true)
    private String email;

    @Column(unique=true)
    private String phone;
}
