---
layout: page
title: Writing
permalink: /writing/
---

<h1>Writings</h1>
<p>Explore my posts here, including a variety of topics and <a href="https://wmsa.hashnode.dev/">tech</a>.</p>

<h1>Tags</h1>
<div>
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a>
    {% endfor %}
</div>

<div>
    {% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag | first }}</h2>

    <ul>
        {% for post in tag[1] %}
        <li>
            <span>{{- post.date | date: "%Y-%m-%d" -}}</span>
            <a href="{{ post.link | relative_link }}">{{ post.title | downcase }}</a>
        </li>
        {% endfor %}
    </ul>
    {% endfor %}
</div>