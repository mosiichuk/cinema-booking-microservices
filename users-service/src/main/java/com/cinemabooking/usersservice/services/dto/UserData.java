package com.cinemabooking.usersservice.services.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserData {

    private String userId;

    private String name;

    private String email;

    private String password;

    private String encryptedPassword;
}
