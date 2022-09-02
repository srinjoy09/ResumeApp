package com.assessment.repo;

import com.assessment.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EduRepo extends JpaRepository<Education, String> {
}
