package com.example.demo.repo;

import com.example.demo.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Posts ,Long> {

    List<Posts> findPostsById(long id);
}
