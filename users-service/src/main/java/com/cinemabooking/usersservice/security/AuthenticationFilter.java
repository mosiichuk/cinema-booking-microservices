package com.cinemabooking.usersservice.security;

import com.cinemabooking.usersservice.controllers.wsDto.UserWsDto;
import com.cinemabooking.usersservice.services.UsersService;
import com.cinemabooking.usersservice.services.dto.UserData;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private UsersService usersService;
    private Environment environment;

    @Autowired
    public AuthenticationFilter(UsersService usersService, Environment environment) {
        this.usersService = usersService;
        this.environment = environment;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        try {
            UserWsDto userDetails = new ObjectMapper().readValue(request.getInputStream(), UserWsDto.class);

            return this.getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            userDetails.getEmail(),
                            userDetails.getPassword(),
                            new ArrayList<>()
                    )
            );
        } catch (IOException e) {
            throw new RuntimeException("Error during login", e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) {
        String email = ((User) authResult.getPrincipal()).getUsername();
        UserData user = usersService.findUserByEmail(email);

        String token = Jwts.builder()
                .setSubject(user.getEmail())
                .setExpiration(new Date(
                        System.currentTimeMillis() + Long.parseLong(environment.getProperty("token.expiration"))))
                .signWith(SignatureAlgorithm.HS512, environment.getProperty("token.secret"))
                .compact();

        response.addHeader("token", token);
        response.addHeader("userId", user.getUserId());
    }
}
