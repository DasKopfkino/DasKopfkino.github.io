
---
layout: default
---

<main class="main-content fadeInDown delay_075s">
  <article class="post">
    <header class="post-header">
      <h3 class="post-title">{{page.title}}</h3>
      {% if page.feature_image and page.feature_image != "" %}
      <figure class="post-thumbnail image-card width-wide">
        <img src="{{ page.feature_image | relative_url }}" alt="{{ page.title }}" style="height:10;width:auto">
      </figure><!-- .post-thumbnail -->
      {% endif %}
    </header><!-- .post-header -->
    <div class="post-content">
      {{content}}
    </div><!-- .post-content -->
  </article><!-- .post -->
{% if site.disqus and site.disqus != "" %}
  {% include disqus.html %}
{% endif %}
</main><!-- .site-main -->

