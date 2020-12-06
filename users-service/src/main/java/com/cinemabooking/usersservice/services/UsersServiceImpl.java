package com.cinemabooking.usersservice.services;

import com.cinemabooking.usersservice.model.UsersRepository;
import com.cinemabooking.usersservice.model.entity.UserEntity;
import com.cinemabooking.usersservice.services.dto.UserData;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
public class UsersServiceImpl implements UsersService {

    private ModelMapper modelMapper;
    private UsersRepository usersRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UsersServiceImpl(ModelMapper modelMapper, UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.modelMapper = modelMapper;
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserData createUser(UserData userData) {
        userData.setUserId(UUID.randomUUID().toString());
        UserEntity userEntity = modelMapper.map(userData, UserEntity.class);
        userEntity.setEncryptedPassword(passwordEncoder.encode(userData.getPassword()));
        usersRepository.save(userEntity);
        return modelMapper.map(userEntity, UserData.class);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = usersRepository.findByEmail(username);

        if (user == null)
            throw new UsernameNotFoundException("There is no user for the email: " + username);

        return new User(user.getEmail(), user.getEncryptedPassword(), true, true, true, true, Collections.emptyList());
    }

    @Override
    public UserData findUserByEmail(String email) throws UsernameNotFoundException {
        UserEntity user = usersRepository.findByEmail(email);

        if (user == null)
            throw new UsernameNotFoundException("There is no user for the email: " + email);

        return modelMapper.map(user, UserData.class);

    }
}
