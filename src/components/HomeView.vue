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
    components: { NewsBlock, TimelineBlock, TabsBlock },
}
</script>

<style lang="scss">
.home-section {
    // min-height: 100vh;
    // background-color: $light;
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
        margin: 350px 0 150px;
        
        @media (min-width: $breakpoint-mobile__ex) {
            margin: 476px 0 304px;
        }
        
        
        &::before, 
        &::after {
            @include pseudo;
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vw;
            width: 100vw;
            
            @media (min-width: $breakpoint-mobile__ex) {
                height: unset;
                aspect-ratio: 2.6 / 1 ;
            }
        }
        
        &::before {
            transform: translateY(calc(-100% + 4px));
            background-image: $wave__light-dark;
            
            @media (min-width: $breakpoint-2k__in) {
                min-height: 556px;
                height: 556px;
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
                transform: translateY(calc(-100% + 2px));
                padding: 150px $gap__h-m 90px;
                
                @media (min-width: $breakpoint-2k__in) {
                    text-align: right;
                    padding: 192px 0 180px;
                    max-width: calc(92vw / 12 * 8 - $gap__h-s);
                }

                & + * {
                    color: $light;
                }
            }
        }
    }

    &#news {
        z-index: 50;
    }

    &#tabs {
        // padding-top: $gap__v-xl * 6;
    }
}
</style>