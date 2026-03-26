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

<div class="thoughts-footer">
    <p class="p-footer">
        <a class="a-undecorated" href="/" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        Home
        </a>
    </p>
</div>