---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<h1>Bookmarks</h1>

<p>Internet things, saved for later.</p>

<!-- <hr><hr/> -->

<div>
    {% for bookmark in site.bookmarks %}
    <ul>
        <li>
        <!-- <span>{{- bookmark.date | date: "%m-%d" -}}</span> -->
        <span>({{ bookmark.tags | join: ', ' }})</span>
        <span><a href="{{ bookmark.url }}">{{ bookmark.title }}</a></span>
        </li>
    {% endfor %}
    </ul>