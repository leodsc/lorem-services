package com.loremservices.backend.model.User;

import com.loremservices.backend.model.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="managers")
@Data
@AllArgsConstructor
public class Manager extends User {

    @ManyToOne
    private Company company;
}
