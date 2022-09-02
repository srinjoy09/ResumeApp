package com.assessment.entity;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.annotation.Id;


import javax.persistence.Entity;
import javax.persistence.Id;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class User {
	@Id
	private String id;
	private String name;
	private String email;
	private String mobileNumber;
	private String bio;
	private String hobbies;
	private String skills;
	private String address;
}


