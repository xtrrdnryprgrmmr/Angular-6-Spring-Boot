package com.example.demo.api;

import com.example.demo.model.Posts;

import com.example.demo.repo.PostRepository;
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
public class PostController {
    @Autowired
    PostRepository prepository;

    @GetMapping(value = "/posts/list")
    public List<Posts> getAllPosts() {
        List<Posts> posts = new ArrayList<>();
        prepository.findAll().forEach(posts::add);
        return posts;
    }

    @GetMapping(value = "/posts/list/id/{id}")
    public List<Posts> findPostByIds(@PathVariable Long id) {
        List<Posts> p_posts = prepository.findPostsById(id);
        return p_posts;
    }

    @PostMapping(value = "/posts/create")
    public Posts postPosts(@RequestBody Posts posts) {
        Posts p_posts = prepository.save(new Posts(posts.getUserId(), posts.getId(),posts.getTitle(),posts.getBody()));
        return p_posts;
    }

    @DeleteMapping(value = "/posts/list/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id) {
        prepository.deleteById(id);
        return new ResponseEntity<>("delete operation is successful", HttpStatus.OK);
    }

    @PutMapping("/posts/list/id/{id}")
    public ResponseEntity<Posts> updatePost(@PathVariable Long id, @RequestBody Posts posts) {
        System.out.println("Update Post with ID = " + id + "...");

        Optional<Posts> postData = prepository.findById(id);

        if (postData.isPresent()) {
            Posts _posts = postData.get();
        _posts.setBody(posts.getBody());
        _posts.setTitle(posts.getTitle());
            return new ResponseEntity<>(prepository.save(_posts), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
