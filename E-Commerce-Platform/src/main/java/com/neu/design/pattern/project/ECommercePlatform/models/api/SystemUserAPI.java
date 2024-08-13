package com.neu.design.pattern.project.ECommercePlatform.models.api;

public interface SystemUserAPI extends PersonAPI{

    public String getUsername();
    public String getPassword();
    public int getId();
}
