package com.mobiledelivery.theatersservice;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import static org.modelmapper.convention.MatchingStrategies.STRICT;

@SpringBootApplication
@EnableDiscoveryClient
public class TheatersServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TheatersServiceApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(STRICT);
        return modelMapper;
    }
}
