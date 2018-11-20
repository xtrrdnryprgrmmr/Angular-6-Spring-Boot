package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "posts")

public class Posts {


    //@OneToOne
  //  @JoinColumn(name = "userId", referencedColumnName = "id")
   // @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @Column(name = "userId")
    private Long userId;
    @Id
    @Column(name = "postId")
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "body")
    private String body;
public Posts()
{

}
    public Posts(Long userId, Long id, String title, String body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;


    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Long  getUserId() {
        return userId;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }




    @Override
    public String toString() {


        return "posts" + userId + " " + id + " " + " " + title + " " + body;
    }





}
