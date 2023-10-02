---
layout: page
title: Tools
permalink: "/tools"
description: A list of my favorite tools that I use on a regular basis and that I would recommend to try.
---

<h1>Tools</h1>

<p>A list of my favorite tools that I use on a regular basis and that I would recommend to try.</p>

<!-- <hr><hr/> -->

<!-- <div>
  {% if page.layout != 'tools' %}
    {% for tool in site.tools %}
      {% for tag in tool.tags %}
        <a href="#{{ tag | slugify }}" class="post-tag">{{ tag }}</a>
      {% endfor %}
    {% endfor | uniq %}
  {% endif %}
</div> -->

<ul>
  {% for tool in site.tools %}
    <li><a href="{{ tool.link }}">{{ tool.title }}</a></li>
    <p>{{ tool.description }}</p>
  {% endfor %}
</ul>