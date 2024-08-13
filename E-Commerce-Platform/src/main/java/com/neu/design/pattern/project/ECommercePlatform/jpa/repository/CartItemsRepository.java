package com.neu.design.pattern.project.ECommercePlatform.jpa.repository;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemsRepository extends JpaRepository<CartItem, Long> {
    Optional<CartItem> findById(Long id);

    List<CartItem> findAll();
}
