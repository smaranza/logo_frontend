<template>
    <section id="news" class="home-section">
        <div class="section-inner">
            <NewsBlock :max-items="3"></NewsBlock>
        </div>
    </section>
    <section id="timeline" class="home-section">
        <div class="section-inner">
            <h2 class="section-display">Sed diam nonummy nibh euismod tincidunt?</h2>
            <TimelineBlock :max-steps="6"></TimelineBlock>
        </div>
    </section>
    <section id="tabs" class="home-section">
        <div class="section-inner">
            <h2 class="section-display">Lorem ipsum dolor sit amet consectetuer?</h2>
            <TabsBlock :max-items="3" />
        </div>
    </section>
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
.home-section {
    // min-height: 100vh;
    background-color: $light;
    color: $dark;
    position: relative;

    .section-inner {
        @include wrapper;
        @include gridder;
        position: relative;
        
        .section-display {
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
        margin-top: 476px;
        
        &::before, 
        &::after {
            @include pseudo;
            width: 100vw;
            background-size: cover;
            background-repeat: no-repeat;
            aspect-ratio: 2.6 / 1 ;
        }
        
        &::before {
            min-height: 556px;
            height: 556px;
            transform: translateY(calc(-100% + 4px));
            background-image: $wave__light-dark;
            
            @media (min-width: $breakpoint-2k__in) {
                height: unset;
            }
        }
        
        &::after {
            top: calc(100% - 4px);
            background-image: $wave__dark-light;
            z-index: 10;
        }

        .section-inner {
            .section-display {
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
}
</style>