---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<h1>Bookmarks</h1>

<p>Internet things, saved for later.</p>

<div>

    {% assign all_tags = "" %}


    {% for bookmark in site.bookmarks %}

        {% for tag in bookmark.tags %}

            {% if all_tags contains tag %}
                {% continue %}
            {% endif %}

            {% assign all_tags = all_tags | append: tag | append: "," %}
        {% endfor %}
    {% endfor %}


    {% assign all_tags = all_tags | split: "," | sort %}


    <ul>
        <li>
            <strong>Tags:</strong>
            {% for tag in all_tags %}

                <span><a href="#{{ tag | downcase }}">{{ tag }}</a></span>
            {% endfor %}
        </li>
    </ul>

    {% for tag in all_tags %}

        <a name="{{ tag | downcase }}"></a>
        <h2>{{ tag }}</h2>
        <ul>
            {% for bookmark in site.bookmarks %}
                {% if bookmark.tags contains tag %}
                    <li>
                        <span><a href="{{ bookmark.url }}">{{ bookmark.title }}</a></span>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    {% endfor %}
</div>
