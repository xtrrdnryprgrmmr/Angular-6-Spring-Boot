package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class Users  {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "aid", referencedColumnName = "aid")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Address address;
    @Column(name = "phone")
    private String phone;
    @Column(name = "website")
    private String website;

    public Users() {

    }

    public Users(Long id ,String name,String email,Address address,String phone,String website) {
        this.id = id;
        this.name=name;
        this.email=email;
        this.address=address;
        this.phone=phone;
        this.website=website;
    }

    public void setId(Long  id) {

        this.id = id;
    }

    public Long  getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getEmail() {
        return email;
    }

    public Address  getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getWebsite() {
        return website;
    }

    @Override
    public String toString() {

        return "Users " + " " + id + " " + name + " " + email + "  " + address + " " + phone + "  " + website;
    }

}