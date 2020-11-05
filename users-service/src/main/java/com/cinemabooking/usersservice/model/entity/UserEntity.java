package com.cinemabooking.usersservice.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity implements Serializable {
    private static final long serialVersionUID = -3498765400138166837L;

    @Id
    @GeneratedValue
    private long id;
    @Column(nullable = false, length = 50)
    private String name;
    @Column(nullable = false, length = 50, unique = true)
    private String email;
    @Column(nullable = false, length = 50)
    private String userId;
    @Column(nullable = false, length = 50)
    private String encryptedPassword;
}
