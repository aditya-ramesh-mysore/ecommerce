package com.neu.design.pattern.project.ECommercePlatform.jpa.repository;

import com.neu.design.pattern.project.ECommercePlatform.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findById(Long id);
    List<Product> findAll();

}
