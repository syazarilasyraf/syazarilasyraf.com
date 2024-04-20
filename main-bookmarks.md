---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<h1>Bookmarks</h1>

<p>Internet things, saved for later. <a href="javascript:void(0);" onclick="redirectToRandomBookmark();">Unsure what to read? Click here.</a></p>

<!-- <hr><hr/> -->

<div>
    {% for bookmark in site.bookmarks %}
    <ul>
        <li>
        <!-- <span>{{- bookmark.date | date: "%m-%d" -}}</span> -->
        <!-- <span>({{ bookmark.tags | join: ', ' }})</span> -->
        <span><a href="{{ bookmark.url }}">{{ bookmark.title }}</a></span>
        </li>
    {% endfor %}
    </ul>


<script>
function redirectToRandomBookmark() {
    var bookmarks = document.querySelectorAll('ul li a'); // Get all bookmark links
    var randomIndex = Math.floor(Math.random() * bookmarks.length); // Generate random index
    var randomBookmark = bookmarks[randomIndex]; // Get random bookmark link
    window.location.href = randomBookmark.href; // Redirect to random bookmark
}
</script>
