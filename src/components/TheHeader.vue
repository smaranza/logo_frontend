<template>
    <header ref="header">
        <div class="header__inner">
            <BaseLogo type-color="#ffffff" :show-type="true"></BaseLogo>
            <BaseIcon name="chevron-left" class="menu-trigger" @click="toggleMenu"/>
            <BaseNav>
            </BaseNav>
        </div>
    </header>
</template>

<script>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseNav from '@components/base/BaseNav.vue'
import BaseIcon from '@components/base/BaseIcon.vue'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    components: { BaseLogo, BaseNav, BaseIcon },
    beforeMount() {
        gsap.registerPlugin(ScrollTrigger);
    },
    mounted() {
        const header = this.$refs.header;
        const logoType = header.querySelector('.logo__type');
        const minimalCls = 'is__minimal';
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
                    yPercent: isMinimal ? 0 : -100,
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
            if (window.innerWidth < 960) {
                let activeCls = 'is__active';
                let openCls = 'is__open';
                let menuTrigger =  e ? e.currentTarget : document.querySelector('.menu-trigger');
                let menuNav = menuTrigger.parentNode.querySelector(`.nav__list`)
                let menuEntries = menuNav.querySelectorAll('.nav__link');
                let timeline = this.tl;
    
                let isMenuOpen = menuTrigger.classList.contains(activeCls)
    
                timeline.to(menuEntries, {
                    duration: .8, 
                    xPercent: isMenuOpen ? 0 : -100,
                    opacity: isMenuOpen ? 0 : 1,
                    stagger: .1,
                    ease: "power2.inOut",
                }).play()
    
                menuTrigger.classList.toggle(activeCls)
                menuNav.classList.toggle(openCls)
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

            .logo__wrapper {
                padding: 0;
                transition: padding $t__fast;
            }
            
            nav {
                position: absolute;
                top: 100%;
                right: 0;
                width: 100%;
                height: 100%;
                transition: $t__fast ease;
                transition-property: background-color, margin-right;

                @media (min-width: $breakpoint-mobile__ex) {
                    position: relative;
                    width: unset;
                    height: auto;
                }
                
                .nav__links {
                    margin: 0;

                    .nav__link {
                        padding: 1rem 2rem;
                        text-align: right;
                        opacity: 0;
                        transform: translate( 100%, 0);

                        &:last-child {
                            padding-bottom: 2rem;
                        }
                    }
                }
            }

            .menu-trigger {
                display: inline-block;
                width: 20px;
            }
        }

        &.is__minimal {
            padding: 0;

            .logo__wrapper {
                padding: $gap__v-xs 0;
            }

            nav {
                margin-right: 0;
            }
        }
    }
</style>