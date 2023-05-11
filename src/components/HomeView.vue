<template>
    <article id="news">
        <div class="article-inner">
            <NewsBlock></NewsBlock>
        </div>
    </article>
    <article id="timeline">
        <div class="article-inner">
            <h2 class="article-display">Sed diam nonummy nibh euismod tincidunt?</h2>
            <TimelineBlock :max-steps="6"></TimelineBlock>
        </div>
    </article>
    <article id="tabs">
        <div class="article-inner">
            <h2 class="article-display">Lorem ipsum dolor sit amet consectetuer?</h2>
            <TabsBlock :max-item="3" />
        </div>
    </article>
</template>

<script>
import NewsBlock from '@components/NewsBlock.vue'
import TimelineBlock from '@components/TimelineBlock.vue'
import TabsBlock from '@components/TabsBlock.vue'
export default {
    components: { NewsBlock, TimelineBlock, TabsBlock }
}
</script>

<style lang="scss">
article {
    min-height: 100vh;
    background-color: $light;
    color: $dark;
    position: relative;

    .article-inner {
        @include wrapper;
        @include gridder;
        position: relative;
        
        .article-display {
            @include g__span(8);
            position: relative;
            z-index: 30;
            color: $primary;

            & + * {
                @include g__span(12);
            }
        }
    }

    &:nth-child(even) {
        background-color: $dark;
        opacity: 1;
        overflow-y: visible;
        background: linear-gradient(180deg, $dark 0%, tone(dark, lighter) 100%);
        
        &::before, 
        &::after {
            content: '';
            display: block;
            width: 100vw;
            // min-height: 556px;
            position: absolute;
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
            top: calc(100% - 2px);
            background-image: $wave__dark-light;
            z-index: 10;
        }

        .article-inner {
            .article-display {
                position: absolute;
                top: 0;
                right: 0;
                max-width: calc(92vw / 12 * 8 - $gap__h-s);
                padding: 192px 0 180px;
                text-align: right;
                transform: translateY(calc(-100% + 2px));

                & + * {
                    color: $light;
                }
            }
        }
    }

    &#tabs {
        padding-top: $gap__v-xl * 6;
    }

    &#timeline {
        .article-display {
            // margin-bottom: $gap__v-xl * 6;
        }
    }
}
</style>