package com.neu.design.pattern.project.ECommercePlatform.models.api;

public abstract class ProductAPI {
    public Long id;
    public String productName;
    public int quantity;
    public double price;

    public abstract Long getId();

    public  abstract  String getProductName();
    public abstract int getQuantity();

    public abstract double getPrice();


}
