---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<div class="wrap">

<p class="section"><em>99% of the bookmarks on this page are my favorite URLs from <a class="section" href="https://news.ycombinator.com/">Hacker News</a>. As of May 2024, I’m not adding new URLs anymore. Instead, I collect them each month and post them under my writing page as <a class="section" href="https://syazarilasyraf.com/writing/#links">"[month]'s web discoveries."</a></em></p>

<p class="section"><em>Updated: April 2025. I now save bookmarks in <a class="section" href="https://bookmark.syazarilasyraf.com/bookmarks/shared" target="_blank">Linkding</a>. Browse them there!</em></p>

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

</div>
