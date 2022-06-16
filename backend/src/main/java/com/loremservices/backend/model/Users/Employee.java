package com.loremservices.backend.model.User;

import com.loremservices.backend.model.Company;
import com.loremservices.backend.model.Service;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="employees")
@Data
@AllArgsConstructor
public class Employee extends User{

    @ManyToOne
    private Company company;

    @ManyToOne
    private Manager manager;

    @ManyToOne
    private Service service;
}
