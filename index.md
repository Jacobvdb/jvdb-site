---
layout: "layout.html"
title: "Jacob van den Berg"
---



{% for post in collections.post %}

### <a href=" {{ post.url }} "><h2>{{ post.data.title }}</h2></a>

## {{ post.data.subtitle }}

{{ post.data.description }} 

{%  endfor %} 