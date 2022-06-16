package com.loremservices.backend.model.User;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.loremservices.backend.model.Company;
import com.loremservices.backend.model.Schedule;
import com.loremservices.backend.model.Service;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="customers")
@Data
@AllArgsConstructor
public class Customer extends User{

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="companys_columns",
            joinColumns = @JoinColumn(name="companys"),
            inverseJoinColumns = @JoinColumn(name="customers"))
    private List<Company> companies;

    @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    @JsonIgnoreProperties("customer")
    private List<Schedule> schedules;

}
