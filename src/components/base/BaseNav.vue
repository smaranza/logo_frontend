<template>
    <nav>
        <ul class="nav__list">
            <li v-for="item in menu" class="nav__item" ref="navItem">
                <a class="nav__link is__text-link" @click="scrollToTarget(item.target)">{{ item.name }}</a>
            </li>
            <li v-if="this.$slots.extra" class="nav__item">
                <slot name="extra"></slot>
            </li>
        </ul>
    </nav>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { localData } from "@helpers/data-helper"

export default {
    beforeMount() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);
    },
    mounted() {
        this.handleNavIndex()
    },
    data() {
        return {
            menu: localData.navigation
        }
    },
    methods: {
        scrollToTarget(selector) {
            gsap.to( window, {
                duration: 1.2,
                scrollTo: {
                    y: selector,
                    offsetY: 60 //header's height when minimal
                },
                ease: "Power1.easeInOut"
            });
            this.$emit('hook-click');
        },

        handleNavIndex() {
            let navItems = this.$refs.navItem;
            const hereCls = 'is__here';

            this.menu.forEach( (section, i) => {
                ScrollTrigger.create({
                    trigger: section.target,
                    // markers: true,
                    start:"top 70%",
                    end:"bottom 70%",
                    onToggle: () => {
                       for (const nav of navItems) {
                         nav.classList.remove(hereCls)
                       }
                       navItems[i].classList.add(hereCls);
                    },
                })
            })
        }
    }
}
</script>


<style lang="scss">
    nav {
        position: relative;

        @media (min-width: $breakpoint-mobile__ex) {
            margin-right: $gap__h-xl;
        }
        
        .nav__list {
            @include flexxer(v);

            @media (min-width: $breakpoint-mobile__ex) {
                flex-flow: row;
            }
            
            .nav__item {
                padding: $gap__v-s $gap__h-s;
                font-family: $f-family__mono;
                font-weight: $f-weight__medium;
                font-size: $f-size__m;
                text-transform: uppercase;
                
                @media (min-width: $breakpoint-mobile__ex) {
                    padding: 0 $gap__h-m;
                }

                &.is__here .nav__link {
                    color: $primary;

                    &::before {
                        border-color: $primary;
                    }
                }
            }
        }
    }
</style>

