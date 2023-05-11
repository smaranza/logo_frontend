<template>
    <div class="timeline gridder">
        <ol class="timeline__list" 
            ref="accordion"
        >
            <li v-for="(step, index) in maxSteps" 
                :key="index" 
                class="timeline__step" 
                :class="stepVariantCls(index)"
            >
                <div class="step__header">
                    <div class="step__title">
                        <span class="step__title-marker">{{ index + 1 }}.</span>
                        Lorem Ipsum
                    </div>
                    <div class="step__icon g__span-1">
                        <BaseIcon :name="stepIcon(index + 1)"/>
                    </div>
                </div>
                <div class="step__content">
                    <slot name="content">
                    </slot>
                </div>
            </li>
        </ol>

        <!-- <svg class="timeline__path g__start-4  g__span-6 " viewBox="0 0 570 1074" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 H501.449 C536.402 5 565 33.584 565 68.52 V100.28 C565 135.216 536.402 163.8 501.449 163.8H68.5514C33.5981 163.8 5 192.384 5 227.32V529.08C5 564.016 33.5981 592.6 68.5514 592.6H501.449C536.402 592.6 565 621.184 565 656.12V687.88C565 722.816 536.402 751.4 501.449 751.4H68.5514C33.5981 751.4 5 779.984 5 814.92V846.68C5 881.616 33.5981 910.2 68.5514 910.2H501.449C536.402 910.2 565 938.784 565 973.72V1005.4C565 1040.38 536.402 1069 501.449 1069H285.067" stroke="currentColor" stroke-width="10"/>
        </svg> -->
    </div>
</template>

<script>
import BaseIcon from '@components/base/BaseIcon.vue'
import Accordion from '@helpers/accordion-helper'

export default {
    components: { BaseIcon },
    props: { 
        maxSteps: Number
    },
    mounted() {
        new Accordion(this.$refs.accordion, {
            'panelSelector': '.timeline__step',
            'headerSelector': '.step__header',
            'contentSelector': '.step__content',
            'closeSiblings': true
        })
    },
    methods: {
        stepVariantCls(i) {
            let accentMap = ['tertiary', "secondary", "primary"]
            let variant = i % 2 == 0 ? ['left', 4] : ['right', 9];
            variant[2] = accentMap[i % 3];
            return `side__${variant[0]} g__start-${variant[1]} step__${variant[2]}`
        },
        stepIcon(i) {
            return `icon-${i}`
        }
    }
}
</script>

<style lang="scss">
$stepColors: (
    "primary": $primary,
    "secondary": $secondary,
    "tertiary": $tertiary,
);

@each $name, $color in $stepColors {
    .step__#{$name} {
        .step__title,
        .step__title-marker {
            color: $color;
        }

        .step__icon {
            background-color: $color;
            
            &::after {
                background-color: rgba($color, .3);
            }
        }
    }
}

.timeline {
    position: relative;
    z-index: 30;
    @include gridder;
    
    .timeline__list {
        @include gridder;
        @include g__span(12);

        
        .timeline__step {
            .step__header {
                width: 100%;
                position: relative;
    
                .step__title {
                    position: absolute;
                    left: calc(100% + $gap__h-m);
                    bottom: - $gap__h-s;
                    right: unset;
                    width: max-content;
                    @include font-headline;
                    font-size: $f-size__xl;

                    .step__title-marker {
                        @include font-display;
                        display: block;
                        line-height: 1;
                    }
                }
    
                .step__icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    aspect-ratio: 1 / 1;
                    // background-color: $primary; // extended on variant class
                    border-radius: 50%;
                    position: relative;
                    cursor: pointer;
                    
                    &::after {
                        content: "";
                        position: absolute;
                        width: calc(100% + $gap__h-l);
                        aspect-ratio: 1 / 1;
                        border-radius: 50%;
                        z-index: -1;
                        transition: width $t__fast;
                        // background-color: rgba($primary, .3); // extended on variant class
                    }
    
                    i[class*="icon"] {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }

            .steps__content {

            }

            &.side__left {
                .step__title {
                    right: calc(100% + $gap__h-m);;
                    left: unset;
                    text-align: right;
                }
            }
        }

    }

    .timeline__path {
        position: absolute;
        padding: 0 calc( 8.3% - $gap__h-xs);
        border: 1px solid $tertiary;
    }
}


</style>