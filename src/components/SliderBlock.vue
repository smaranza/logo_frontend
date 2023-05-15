<template>
    <Carousel 
        :items-to-show="1"
        :wrapAround="true"
        :autoplay="5000" 
        :pauseAutoplayOnHover="true"
    >
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__slide-inner">
                <div class="carousel__slide-content">
                    <h2 class="carousel__slide-title">{{ slide.title }}</h2>
                    <p class="carousel__slide-desc">{{ slide.desc }}</p>
                    <a class="carousel__slide-cta btn" :href="slide.cta.url">{{ slide.cta.text }}</a>
                </div>
            </div>
            <div class="carousel__slide-bg">
                <img class="carousel__slide-media"
                    :src="getFullPath(slide.media)"
                    :loading="slide.id == 0 ? '': 'lazy'"
                />
            </div>
        </Slide>
        <template #addons>
            <div class="carousel__navigation">
                <Navigation>
                    <template #next>
                        <BaseIcon :name="'chevron-right'" />
                    </template>
                    <template #prev>
                        <BaseIcon :name="'chevron-left'" />
                    </template>
                </Navigation>
            </div>
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BaseIcon from '@components/base/BaseIcon.vue'
import ImageHelper from "@helpers/image-helper.js";
import { localData } from "@helpers/data-helper";
import 'vue3-carousel/dist/carousel.css'

export default {
    mixins: [ ImageHelper ],
    components: { Carousel, Slide, Pagination, Navigation, BaseIcon },
    data() {
        return {
            slides: localData.slides
        }
    }
}
</script>

<style lang="scss">
.carousel {
    .carousel__viewport {
        background-color: $dark;
        height: 100vh;

        .carousel__track {
            width: 100%;
            height: 100%;

            .carousel__slide {
                .carousel__slide-inner {
                    @include wrapper(full);
                    @include gridder;
                    
                    .carousel__slide-content {
                        @include g__span(5);
                        @include g__start(2);
                        @include flexxer(v);
                        row-gap: $gap__v-l;
                        text-align: left;

                        .carousel__slide-desc {
                            @include font-body();
                        }

                        .carousel__slide-cta {
                            align-self: flex-start;
                        }
                    }
                }

                .carousel__slide-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    
                    &::before {
                        @include pseudo;
                        z-index: 0;
                        background-color: rgba($dark, .2);
                    }

                    .carousel__slide-media {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }

                &:nth-child(even) {
                    .carousel__slide-content {
                        @include g__start(7);
                        text-align: right;

                        .carousel__slide-cta {
                            align-self: flex-end;
                        }
                    }
                }
            }
        }
    }

    .carousel__navigation {
        display: none;

        @media (min-width: $breakpoint-desktop__in) {
            display: block;
        }

        .carousel__prev,
        .carousel__next {
            color: $light;
            margin: 4%;
            
            i {
                position: relative;
                left: $gap__h-m;
                
                svg {
                    height: 46px;
                }
            }
        }

        .carousel__next {
            i {
                left: 0;
                right: $gap__h-m;
            }
        }
    }

    .carousel__pagination {
        position: absolute;
        bottom: 0;
        flex-flow: row;
        left: 0;
        counter-reset: slide-index;
        margin: 0;
        
        @media (min-width: $breakpoint-desktop__in) {
            flex-flow: column;
            top: calc($gap__v-s * 10);
            bottom: unset;
        }

        &-button {
            width: calc( $gap__h-s * 3 );
            height: calc( $gap__h-s * 3 );
            display: flex;
            align-items: center;
            justify-content: center;
            transition-property: color, opacity, background-color;
            transition-duration: $t__slow; 
            transition-timing-function: ease;
            color: $light;
            background-color: $primary;
            opacity: .3;

            &:hover {
                background-color: tone(primary, darker);
            }
    
            &--active {
                opacity: 1;
            }

            &::after {
                counter-increment: slide-index;
                content: counter( slide-index );
                background: none;
                position: relative;
                height: max-content;
                @include font-cta;
                font-family: $f-family__mono;
            }
        }
    }
}
</style>