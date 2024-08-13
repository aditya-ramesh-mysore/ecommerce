package com.neu.design.pattern.project.ECommercePlatform.service;

import com.neu.design.pattern.project.ECommercePlatform.jpa.repository.UserRepository;
import com.neu.design.pattern.project.ECommercePlatform.models.PlatformUser;
import com.neu.design.pattern.project.ECommercePlatform.patterns.factory.ErrorFactory;
import com.neu.design.pattern.project.ECommercePlatform.suppliers.StringSuppliers;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.function.Supplier;

@Component
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public PlatformUser login(JSONObject creds) {
        String username = creds.getAsString(StringSuppliers.USERNAME.get());
        String password = creds.getAsString(StringSuppliers.PASSWORD.get());
        return userRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(userNotFoundSupplier());
    }

    private Supplier<ResponseStatusException> userNotFoundSupplier() {
        return ErrorFactory::createPasswordOrUserNameIncorrect;
    }
}