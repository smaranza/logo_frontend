<template>
    <div class="timeline gridder">
        <ol class="timeline__list" ref="accordion">
            <li v-for="(step, index) in maxSteps" 
                :key="index" 
                class="timeline__step"
                :class="stepVariantCls(index)"
            >
                <div class="step__header" @click="toggleStep($event, index)" ref="panelHeader">
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
                        <h3>Lorem Ipsum</h3>
                        <p>
                            Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper.
                            
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.
                        </p>
                    </slot>
                </div>
            </li>
        </ol>

        <!-- <svg class="timeline__path g__start-4  g__span-6 " viewBox="0 0 570 1074" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :d="`M5 ${points[1]} H${points[2]}C${points[0]} ${points[1]} ${points[3]} 33 ${points[3]} 68V100C${points[3]} 135 ${points[0]} 163 ${points[2]} 163H68C33 163 ${points[1]} 192 ${points[1]} 227V529C5 564 33 592 68 592H${points[2]}C${points[0]} 592 ${points[3]} 621 ${points[3]} 656V6878C${points[3]} 72216 ${points[0]} 751 ${points[2]} 751H68C33 751 ${points[1]} 779 ${points[1]} 814V846C5 881 33 910 68 910H${points[2]}C${points[0]} 910 ${points[3]} 938 ${points[3]} 973V1005C${points[3]} 1040 ${points[0]} 1069 ${points[2]} 1069H285`" stroke="white" stroke-width="10"/>
        </svg> -->

        <!-- <svg class="timeline__path g__start-4  g__span-6 " viewBox="0 0 570 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :d="`M5 0.0800781C5 35.0161 33.5981 63.6 68.5514 63.6H501.449C536.402 63.6 565 92.1841 565 127V200`" stroke="white" stroke-width="10"/>
        </svg> -->

        <!-- <svg width="570" height="159" viewBox="0 0 570 159" fill="none" xmlns="http://www.w3.org/2000/svg"> -->

<!-- </svg> -->



    </div>
</template>

<script>
import BaseIcon from '@components/base/BaseIcon.vue'
import Accordion from '@components/base/BaseAccordion.vue'

const openCls = 'is__open';

export default {
    components: { BaseIcon },
    props: { 
        maxSteps: Number
    },
    mounted() {
        // initialize accordion functionality, with custom options
        new Accordion(this.$refs.accordion, {
            'panelSelector': '.timeline__step',
            'headerSelector': '.step__header',
            'contentSelector': '.step__content',
            'openCls': openCls,
            'closeSiblings': true
        })
    },
    methods: {
        stepVariantCls(i) {
            let accentMap = ['tertiary', "secondary", "primary"]
            let variant = i % 2 == 0 ? ['left', 4] : ['right', 4];
            variant[2] = accentMap[i % 3];
            return `side__${variant[0]} g__start-${variant[1]} step__${variant[2]}`
        },
        stepIcon(i) {
            return `icon-${i}`
        },
        toggleStep(e, index) {
            let step = e.target.closest('.timeline__step');

            for (const [i, point] of this.points.entries()) {
                if ( i >= index) {
                    this.points[i] += step.classList.contains(openCls) ? -300 : +300
                }
            }
        }
    },
    data() {
        return {
            points: [ 565 ]
        }
    },
    computed: {
        cPoints() {
            return this.points
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
        .step__title-marker,
        .step__content h3 {
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
    padding-top: $gap__h-xl;
    z-index: 30;
    @include gridder;
    
    .timeline__list {
        @include gridder;
        @include g__span(12);
        row-gap: 0;
        color: $light;
        
        .timeline__step {
            @include gridder(6);
            @include g__span(6);
            padding: $gap__v-m 0;
            color: $light;
            background-image: url('../assets/graphics/step__right.svg');
            background-size: 90%;
            background-position: center top;
            background-repeat: no-repeat;
            
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
                        width: 0;
                        aspect-ratio: 1 / 1;
                        border-radius: 50%;
                        z-index: -1;
                        transition: width $t__base $t__bounce;
                        // background-color: rgba($primary, .3); // extended on variant class
                    }
    
                    i[class*="icon"] {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }

            .step__content {
                @include g__start(2);
                @include g__span(4);
                grid-row-start: 2;
                margin-bottom: 0;

                h3 {
                    @include font-headline;
                    font-size: $f-size__xl;
                    margin-bottom: $gap__v-m;
                }
            }

            &.side__left {
                background-image: url('../assets/graphics/step__left.svg');

                .step__title {
                    right: calc(100% + $gap__h-m);;
                    left: unset;
                    text-align: right;
                }
            }

            &.side__right {
                .step__header {
                    @include g__start(6);
                }
            }

            &:first-of-type {
                background-image: url('../assets/graphics/step__start.svg');
            }

            &:last-of-type {
                background-image: url('../assets/graphics/step__end.svg');
                background-position-x: right;
            }

            &.is__open {
                .step__header .step__icon::after {
                    width: calc(100% + $gap__h-l);
                }

                .step__content {
                    margin-bottom: $gap__h-xl;
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