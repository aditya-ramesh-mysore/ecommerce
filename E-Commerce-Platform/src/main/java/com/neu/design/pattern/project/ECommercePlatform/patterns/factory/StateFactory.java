package com.neu.design.pattern.project.ECommercePlatform.patterns.factory;

import com.neu.design.pattern.project.ECommercePlatform.patterns.state.DeliveredState;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.OrderState;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.ProcessingState;
import com.neu.design.pattern.project.ECommercePlatform.patterns.state.ShippedState;

public class StateFactory {
    public static OrderState getState(String stateType) {
        switch (stateType) {
            case "processing":
                return new ProcessingState();
            case "shipped":
                return new ShippedState();
            case "delivered":
                return new DeliveredState();
            default:
                return new ProcessingState();
        }
    }
}

