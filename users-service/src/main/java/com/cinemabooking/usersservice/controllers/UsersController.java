package com.cinemabooking.usersservice.controllers;

import com.cinemabooking.usersservice.controllers.wsDto.UserWsDto;
import com.cinemabooking.usersservice.services.UsersService;
import com.cinemabooking.usersservice.services.dto.UserData;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UsersService userService;

    @PostMapping
    public ResponseEntity<UserWsDto> createUser(@RequestBody UserWsDto userWsDto) {
        UserData userData = modelMapper.map(userWsDto, UserData.class);

        UserData createdUser = userService.createUser(userData);

        return ResponseEntity.status(HttpStatus.CREATED).body(modelMapper.map(createdUser, UserWsDto.class));
    }
}
