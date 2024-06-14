---
layout: page
title: Bookmarks
permalink: "/bookmarks"
description: Internet things, saved for later.
---

<h1>Bookmarks</h1>

<p>Internet things, saved for later.</p>

<p><em>99% of the bookmarks on this page are my favorite URLs from <a href="https://news.ycombinator.com/">Hacker News</a>. As of May 2024, I’m not adding new URLs anymore. Instead, I collect them each month and post them under my writing page as <a href="https://syazarilasyraf.com/writing/#links">"[month]'s web discoveries."</a></em></p>

<p></p><!--  - this is a line break -->

<script src="/assets/js/pagefind-ui.js"></script>
<div id="search"></div>

<p></p><!--  - this is a line break -->

<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search", showSubResults: true });
        setTimeout(() => {
            document.querySelectorAll('button').forEach(button => button.remove());
            const searchInput = document.querySelector('#search input');
            if (searchInput) {
                searchInput.focus();
            }
        }, 0);
    });
</script>

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
