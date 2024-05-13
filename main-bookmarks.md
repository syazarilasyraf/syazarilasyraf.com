---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<h1>Bookmarks</h1>

<p>Internet things, saved for later.

<div>
    {% for bookmark in site.bookmarks %}
    <ul>
        <li>
        <span><a href="{{ bookmark.url }}">{{ bookmark.title }}</a></span>
        </li>
    {% endfor %}
    </ul>
