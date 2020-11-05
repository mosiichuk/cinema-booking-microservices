package com.cinemabooking.usersservice.security;

import com.cinemabooking.usersservice.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    private UsersService usersService;
    private PasswordEncoder bCryptPasswordEncoder;
    private Environment environment;

    @Autowired
    public WebSecurity(UsersService usersService,
                       BCryptPasswordEncoder bCryptPasswordEncoder, Environment environment) {
        this.usersService = usersService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.environment = environment;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.authorizeRequests()
                .antMatchers("/**").permitAll()
                .and()
                .addFilter(getAuthFilter());
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(usersService)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    private AuthenticationFilter getAuthFilter() throws Exception {
        AuthenticationFilter authFilter = new AuthenticationFilter(usersService, environment);
        authFilter.setAuthenticationManager(authenticationManager());
        authFilter.setFilterProcessesUrl(environment.getProperty("login.url.path"));
        return authFilter;
    }
}
