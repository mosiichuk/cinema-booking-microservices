package com.cinemabooking.usersservice.services;

import com.cinemabooking.usersservice.services.dto.UserData;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UsersService extends UserDetailsService {
    UserData createUser(UserData userData);
    UserData findUserByEmail(String email) throws UsernameNotFoundException;
}
