package com.example.demo.model;

public class Geo {


        private String lat;
        private String lng;
    public Geo(String lat ,String lng)
        {
            this.lat=lat;
            this.lng=lng;
        }

        public String getLng() {
        return lng;
    }

        public String getLat() {
        return lat;
    }

}
