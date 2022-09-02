package com.assessment.controller;

import java.util.List;

import com.assessment.entity.Education;
import com.assessment.entity.Projects;
import com.assessment.entity.User;
import com.assessment.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class MainController {
	@Autowired
	public MainService mainService;

	@GetMapping   ("/edit")
	public String showUser(@ModelAttribute User user) {
		mainService.showUser(user);
		return "editcv";
	}
	@GetMapping ("/show")
	public String submitForm(Model model) {
		User user=mainService.getUser();
		model.addAttribute("user", user);
		List<Projects> projects=mainService.getProjects();
		model.addAttribute("projects", projects);
		List<Education> education=mainService.getEdu();
		model.addAttribute("education", education);
		return "newcv";
	}
}
