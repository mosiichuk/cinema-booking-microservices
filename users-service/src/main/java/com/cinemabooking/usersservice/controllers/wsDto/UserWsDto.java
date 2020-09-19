package com.cinemabooking.usersservice.controllers.wsDto;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class UserWsDto {
    @NotNull
    @Size(min = 2, max=40)
    private String name;
    @Email
    @NotNull
    private String email;
    @NotNull
    @Size(min = 4, max=40)
    private String password;
    private String userId;
}
