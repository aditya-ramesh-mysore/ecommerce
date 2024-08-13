package com.neu.design.pattern.project.ECommercePlatform.service;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.OrderRepository;
import com.neu.design.pattern.project.ECommercePlatform.patterns.builder.OrderBuilder;
import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.OrderState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(List<CartItem> items) {
        Order order = new OrderBuilder().addItem(items).build();
        order.placeOrder();
        return orderRepository.save(order);
    }

    public Order findOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Order updateOrderState(Long id, OrderState state) {
        Order order = findOrderById(id);
        order.setState(state);
        return orderRepository.save(order);
    }

    public Order moveOrderToNextState(Long id) {
        Order order = findOrderById(id);
        order.next();
        return orderRepository.save(order);
    }

    public Order moveOrderToPreviousState(Long id) {
        Order order = findOrderById(id);
        order.previous();
        return orderRepository.save(order);
    }
}
