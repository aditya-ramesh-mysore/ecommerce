package com.neu.design.pattern.project.ECommercePlatform.controller;

import com.neu.design.pattern.project.ECommercePlatform.patterns.facade.CheckoutFacade;
import com.neu.design.pattern.project.ECommercePlatform.patterns.singleton.Cart;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/checkout")
public class CheckoutController {
    @Autowired
    private CheckoutFacade checkoutFacade;

    @GetMapping()
    public ResponseEntity<String> completeCheckout() {
        String invoice = checkoutFacade.completeCheckout(Cart.getInstance());
        return ResponseEntity.ok(invoice);
    }
}
