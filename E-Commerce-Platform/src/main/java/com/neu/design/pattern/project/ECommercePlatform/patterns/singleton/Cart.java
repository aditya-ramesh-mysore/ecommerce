package com.neu.design.pattern.project.ECommercePlatform.patterns.singleton;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.CartItemsRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;

public class Cart {
    private static Cart instance;

    List<CartItem> cartItems = new ArrayList<>();
    private CartItemsRepository cartItemsRepository;

    private Cart() {
    }

    public static synchronized Cart getInstance() {
        if (instance == null) {
            instance = new Cart();
        }
        return instance;
    }

    public void setCartItemsRepository(CartItemsRepository repository) {
        this.cartItemsRepository = repository;
    }

    @Transactional
    public void addItem(CartItem item) {
        cartItems.add(item);
//        cartItemsRepository.save(item);
    }

    @Transactional
    public void removeItem(CartItem item) {
        cartItems.remove(item);
//        cartItemsRepository.delete(item);
    }

    public List<CartItem> getItems() {
      return cartItems;
    }

    public void removeAllItems()
    {
        cartItems.clear();
    }

}
