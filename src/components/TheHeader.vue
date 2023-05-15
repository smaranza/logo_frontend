<template>
    <header ref="header">
        <div class="header__inner">
            <BaseLogo type-color="#ffffff" :show-type="true"></BaseLogo>
            <BaseIcon name="chevron-left" class="menu-trigger" @click="toggleMenu"/>
            <BaseNav @hook-click="toggleMenu"></BaseNav>
        </div>
    </header>
</template>

<script>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseNav from '@components/base/BaseNav.vue'
import BaseIcon from '@components/base/BaseIcon.vue'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const minimalCls = 'is__minimal';
const activeCls = 'is__active';
const openCls = 'is__open';

export default {
    components: { BaseLogo, BaseNav, BaseIcon },
    beforeMount() {
        gsap.registerPlugin(ScrollTrigger);
    },
    mounted() {
        const header = this.$refs.header;
        const logoType = header.querySelector('.logo__type');
        let isMinimal = false;

        ScrollTrigger.create({
            start: "124px top",
            end: "bottom top",
            markers: false,
            toggleClass: {
                className: minimalCls,
                targets: header
            },
            onToggle: () => {
                gsap.to(logoType, {
                    duration: .3, 
                    xPercent: isMinimal ? 0 : -100,
                    opacity: isMinimal ? 1 : 0,
                    ease: "power2.inOut",
                })

                isMinimal = isMinimal ? false : true
            },
        });

        this.tl = gsap.timeline({ paused: true });
    },
    methods: {
        toggleMenu(e) {
            if (window.innerWidth < 960) {  // $breakpoint-mobile__ex: 960px;
                const header = this.$refs.header;
                let menuTrigger =  e ? e.currentTarget : header.querySelector('.menu-trigger');
                let menuNav = menuTrigger.parentNode.querySelector(`.nav__list`)
                let menuEntries = menuNav.querySelectorAll('.nav__item');
                let timeline = this.tl;
    
                let isMenuOpen = menuTrigger.classList.contains(activeCls)
    
                timeline.to( menuEntries, {
                    duration: .3, 
                    xPercent: isMenuOpen ? 0 : -100,
                    opacity: isMenuOpen ? 0 : 1,
                    stagger: .1,
                    ease: "power2.inOut",
                    onStart: () => {
                        if (!isMenuOpen) menuNav.parentNode.classList.toggle(openCls)
                    },
                    onComplete: () => {
                        if (isMenuOpen) menuNav.parentNode.classList.toggle(openCls)
                    }
                }).play()

                menuTrigger.classList.toggle(activeCls)
            }
        }
    }
}
</script>

<style lang="scss">
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 5000;
        background-color: rgba($dark, .80);
        transition: padding $t__base;

        @media (min-width: $breakpoint-mobile__ex) {
            padding: $gap__v-l 0;
        }

        .header__inner {
            position: relative;
            @include wrapper;
            @include flexxer;
            align-items: center;
            justify-content: space-between;
            padding: $gap__v-xs $gap__h-s;

            @media (min-width: $breakpoint-mobile__ex) {
                padding: 0;
            }
            
            .logo__wrapper {
                transition: padding $t__fast;
                padding-right: $gap__h-m;

                @media (min-width: $breakpoint-mobile__ex) {
                    padding: 0;
                }
            }
            
            nav {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 100%;
                transition: $t__fast ease;
                transition-property: background-color, margin-right;
                
                
                @media (min-width: $breakpoint-mobile__ex) {
                    visibility: visible;
                    position: relative;
                    width: unset;
                    height: auto;
                }
                
                &:not(.is__open) {
                    @media (max-width: $breakpoint-mobile__in) {
                        visibility: hidden;
                    }
                }
                
                .nav__list {
                    margin: 0;

                    .nav__item {
                        text-align: right;
                        
                        @media (max-width: $breakpoint-mobile__in) {
                            opacity: 0;
                            transform: translate(100%, 0);
                            background-color: rgba($dark, .80);
                        }
                    }
                }
            }

            .menu-trigger {
                display: inline-block;
                width: 20px;
                transform-origin: center;
                transition: transform $t__fast ease;
                
                &.is__active {
                    transform: scaleX(-1);
                }
                
                @media (min-width: $breakpoint-mobile__ex) {
                    display: none;
                }
            }
        }

        &.is__minimal {
            padding: 0;
            
            .header__inner {
                padding: 0 $gap__h-s;
                
                .logo__wrapper {
                    padding-right: $gap__h-xl;
                }
            }

            @media (min-width: $breakpoint-mobile__ex) {
                .header__inner {
                    padding: 0;
             
                    .logo__wrapper {
                        padding-top: $gap__v-xs $gap__h-xs 0 0 ;
                    }

                    nav {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>