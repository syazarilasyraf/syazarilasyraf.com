---
layout: page
title: Writing
permalink: /writing/
---

<h1>Writings</h1>
<p>If you want to read more, have a visit to my blog page, <a href="https://wmsa.hashnode.dev/" target="_blank">here.</a></p>

<hr>
{%-include newsletter.html-%}
<hr>
<h1>Tags</h1>
<div>
    {% for tag in site.tags %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>
    {% endfor %}
</div>

<!-- <hr><hr/> -->

<div>
    {% for tag in site.tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag | first }}</h2>

    <ul>
        {% for post in tag[1] %}
        <li>
            <span>{{- post.date | date: "%Y-%m-%d" -}}</span>
            <a href="{{ post.link | relative_link }}" target="_blank">{{ post.title | downcase }}</a>
        </li>
        {% endfor %}
    </ul>
    {% endfor %}
</div>
