package com.assessment.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Projects {
    @Id
    private String id;
    private String description;
    private String resources;
}
