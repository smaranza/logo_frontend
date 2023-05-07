<template>
    <article id="news">
        <div class="article-inner">
            <NewsBlock></NewsBlock>
        </div>
    </article>
    <article id="timeline">
        <div class="article-inner">
            <h2 class="article-display">Sed diam nonummy nibh euismod tincidunt?</h2>
            <TimelineBlock></TimelineBlock>
        </div>
    </article>
    <article id="tabs">
        <div class="article-inner">
            <h2 class="article-display">Lorem ipsum dolor sit amet consectetuer?</h2>
            <TabsBlock></TabsBlock>
        </div>
    </article>
</template>

<script>

</script>

<style lang="scss">
article {
    min-height: 100vh;
    background-color: $light;
    color: $dark;
    position: relative;

    &:nth-child(even) {
        background-color: $dark;
        color: $light;
        opacity: 1;
        overflow-y: visible;
        background: linear-gradient(180deg, $dark 0%, tone(dark, lighter) 100%);
        
        &::before, 
        &::after {
            content: '';
            display: block;
            width: 100vw;
            // min-height: 556px;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            aspect-ratio: 2.6 / 1 ;
        }
        
        &::before {
            top: 0;
            transform: translateY(calc(-100% + 2px));
            background-image: $wave__light-dark;
        }
        
        &::after {
            transform: translateY(calc(100% - 2px));
            background-image: $wave__dark-light;
            z-index: 10;
        }
    }

    &:nth-child(odd) {
        .article-inner {
            .article-display {
                color: $primary;
            }
        }
    }

    .article-inner {
        @include wrapper;
        @include gridder;
        
        .article-display {
            @include gridder-span(8);
            position: relative;
            z-index: 30;
        }
    }
}
</style>