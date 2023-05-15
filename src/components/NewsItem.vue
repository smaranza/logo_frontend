<template>
    <div class="news__item article">
        <div class="article__header">
            <img :src="article.imageUrl" class="article__banner"/>
        </div>
        <div class="article__body">
            <h5 class="article__info"> 
                <span class="article__date">{{ friendlyDate }}</span>
                <!-- @DEMO localData only  -->
                <!-- <span class="article__min-read">{{ minRead }} min read</span>  -->
            </h5>
            <h3 class="article__title">{{ article.title }}</h3>
            <p class="article__text">{{ article.summary }}</p>
            <a :href="article.url" class="article__read-more is__text-link">
                <span>Read More</span>
            </a>
        </div>
    </div>
</template>

<script>
import ImageHelper from "@helpers/image-helper.js";

export default {
    mixins: [ ImageHelper ],
    props: {
        article: Object
    },
    computed: {
        // @DEMO publish date into readable format
        friendlyDate() {
            const event = new Date(this.article.publishedAt);
            let friendlyDate = event.toLocaleDateString(undefined, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).replaceAll('/', '.');
            return friendlyDate
        },
        // @DEMO localData only: generates seo-friendly slug for given title
        friendlyUrl() {
            // news blog base url
            const newsUrl = '/path-to-blog/';
            // truncate title to 6 words
            let shortTitle = this.article.title.split(' ').slice(0, 6).join(" ");
            // string to slug
            let detailUrl = this.slugify(shortTitle);
            return newsUrl + detailUrl
        },
        // @DEMO localData only:calculates minutes of read for given article
        minRead() {
            // average reading words per minute
            const avgWPM = 250; 
            let wordCount = this.article.summary.split(" ").length;
            // always get a value >= 1 Min
            let minutes = Math.ceil(wordCount / avgWPM);
            return minutes
        }
    },
    methods: {
        slugify(string) {
            let slug = string.toString().toLowerCase()
                .normalize('NFKD').replace(/[^\w\s_\/]/g, '') // Replace special characters
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/&/g, '-and-') // Replace & with 'and'
                .replace(/[^\w\-]+/g, '') // Remove all non-word characters
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
            return slug
        }
    }
}
</script> 

<style lang="scss">
.article {
    @include flexxer(v);
    height: 480px;
    overflow: hidden;
    position: relative;
    background-color: $light;
    align-items: center;
    justify-content: flex-start;
    background-color: lighten(rgba(tone(light, overlay), 100), 10);
    
    &::after {
        @include pseudo;
        top: 100%;
        background: linear-gradient(180deg, rgba($primary, 0) 0%, $primary 40%, $primary 100%);
        z-index: 0;
        transition: top $t__base ease;
    }

    .article__header, 
    .article__body {
        height: 50%;
    }

    .article__header {
        width: 100%;
        background-color: $dark;
        position: relative;

        &::before {
            @include pseudo;
            background: linear-gradient(180deg, rgba($dark, 0) 60%, $dark 100%);
        }

        .article__banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .article__body {
        @include flexxer(v);
        position: absolute;
        bottom: 0;
        padding: $gap__v-m $gap__h-m;
        z-index: 50;
        transition: height $t__base ease;
        row-gap: $gap__v-s;

        .article__info {
            @include flexxer;
            justify-content: space-between;
            font-family: $f-family__mono;
            color: tone(light, darker);
        }

        .article__title {
            color: $primary;
            @include font-headline;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }

        .article__text {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            font-size: $f-size__s; // make sure font size is not overridden
            $line-height: $f-size__s * 1.5; // store line-height 
            height: 100%;
            max-height: $line-height * 3; // set initial height for transition
            transition: max-height $t__fast ease;
        }

        .article__read-more {
            display: none;
            align-self: flex-end;
            position: relative;
            font-family: $f-family__mono;
            
            span {
                position: relative;
                z-index: 30;
            }
        }
    }

    &:hover {
        &::after {
            top: 0;
        }
        
        &,
        .article__title,
        .article__read-more,
        .article__info {
            color: $light;
        }

        .article__body {
            height: auto;

            .article__title {
                margin-bottom: $gap__v-m;
                -webkit-line-clamp: unset;
            }

            .article__text {
                margin-bottom: $gap__v-s;
                -webkit-line-clamp: unset;
                max-height: 100%;
            }

            .article__read-more {
                display: inline-block;
            }
        }
    }
}
</style>