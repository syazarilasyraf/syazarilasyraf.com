---
layout: page
title: Writing
permalink: /writing/
---

<div class="wrap">

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

<div>
    {% for year_group in posts_by_year %}
        {% assign year = year_group.name %}
        {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
        {% assign latest_month = posts_by_month.first.name %}

        <!-- Display Year + Latest Month in the same line -->
        <p class="section-right">
            <span class="post-year">{{ year }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor" class="svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </span>
            <span class="post-month">{{ latest_month }}</span>
        </p>

        {% for month_group in posts_by_month %}
            {% assign month = month_group.name %}

            <!-- Skip latest month here since it was already displayed above -->
            {% if month != latest_month %}
            <p class="section-right">
                <span class="post-month">{{ month }}</span>
            </p>
            {% endif %}

            {% for post in month_group.items %}
                <a href="{{ post.url | relative_url }}">
                    <div class="thought">
                        <p>{{ post.title }}</p>
                        <hr class="post-spacer">
                        <p>{{ post.date | date: '%d' | plus: 0 }}th</p>
                    </div>
                </a>
            {% endfor %}
        {% endfor %}
    {% endfor %}
    <div class="thoughts-footer">
        <p class="p-footer">
            <a class="a-undecorated" href= "/" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            Home
            </a>
        </p>
    </div>
</div>
