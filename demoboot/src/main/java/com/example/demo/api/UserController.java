package com.example.demo.api;

import com.example.demo.model.Address;
import com.example.demo.model.Users;
import com.example.demo.repo.AddressRepository;
import com.example.demo.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {


    @Autowired
    UserRepository urepository;

    @GetMapping(value = "/users/list")
    public List<Users> getAllUsers() {
        List<Users> users = new ArrayList<>();
        urepository.findAll().forEach(users::add);
        return users;
    }

    @PostMapping(value = "/users/create")
    public Users postUsers(@RequestBody Users users) {
        Users user_s = urepository.save(new Users(users.getId(), users.getName(), users.getEmail(), new Address(users.getAddress().getStreet(), users.getAddress().getSuite(), users.getAddress().getCity(), users.getAddress().getZipcode()), users.getPhone(), users.getWebsite()));
        return user_s;
    }

    @GetMapping(value = "/users/list/id/{id}")
    public List<Users> findUsers(@PathVariable Long id) {
        List<Users> this_users = urepository.findUsersById(id);
        return this_users;
    }


    @DeleteMapping(value = "/users/list/{id}")
    public ResponseEntity<String> deleteUsers(@PathVariable Long id) {
        urepository.deleteById(id);
        return new ResponseEntity<>("operation is successful", HttpStatus.OK);
    }



    @PutMapping("/users/list/id/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") long id, @RequestBody Users users) {
        System.out.println("Update User with ID = " + id + "...");

        Optional<Users> userData = urepository.findById(id);

        if (userData.isPresent()) {
            Users _user = userData.get();
            _user.setName(users.getName());
            _user.setEmail(users.getEmail());

            return new ResponseEntity<>(urepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
