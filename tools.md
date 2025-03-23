---
layout: page
title: Tools
permalink: "/tools"
description: A list of my favorite tools that I use on a regular basis and that I would recommend to try.
---

<div class="wrap">

<p class="section">A list of my favorite tools that I use on a regular basis and that I would recommend to try.</p>

<p>
  {% for tool in site.tools %}
    <a href="{{ tool.link }}">{{ tool.title }}</a>
    {{ tool.description }}<br />
  {% endfor %}
</p>