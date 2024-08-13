package com.neu.design.pattern.project.ECommercePlatform.patterns.builder;

import com.neu.design.pattern.project.ECommercePlatform.patterns.observer.Order;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.CartItem;

import java.util.ArrayList;
import java.util.List;

public class OrderBuilder {
    private List<CartItem> items = new ArrayList<>();

    public OrderBuilder addItem(CartItem item) {
        items.add(item);
        return this;
    }
    public OrderBuilder addItem(List<CartItem> item) {
       items = item;
        return this;
    }


    public Order build() {
        if (items.isEmpty()) {
            throw new IllegalStateException("Order cannot be empty");
        }
        return new Order(items);
    }
}
