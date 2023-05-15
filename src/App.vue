<template>
    <TheHeader></TheHeader>
    <main>
        <section id="slider" class="main-hero">
            <!-- @DEMO: load dynamic component (slider or banner) based on route -->
            <SliderBlock v-if="isHome"></SliderBlock>
            <BannerBlock v-else></BannerBlock>
        </section>
        <section class="main-content">
            <!-- @DEMO: use of basic routes for dynamic views -->
            <component :is="currentView"></component>
        </section>
    </main>
    <TheFooter></TheFooter>
</template>

<script>
import TheHeader from '@components/TheHeader.vue';
import SliderBlock from '@components/SliderBlock.vue';
import HomeView from '@components/HomeView.vue';
import TheFooter from '@components/TheFooter.vue';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const routes = {
    "/": HomeView,
    "/page": "PageView" // @DEMO: other page view
}

export default {
    components: { TheHeader, TheFooter, HomeView, SliderBlock },
    beforeMount() {
        this.routeName = "Home"; // @DEMO: this.$route.name 
        this.currentPath = "/other-page" // @DEMO: this.currentPath.slice(1)
        gsap.registerPlugin(ScrollTrigger);
    },
    computed: {
        isHome() {
            return this.routeName === 'Home'
        },
        currentView() {
           return routes[this.currentPath] || HomeView
        }
    },
    mounted() {
        let animationTrigger = document.querySelectorAll(".animate");

        // apply reveal animation to targets
        animationTrigger.forEach((trigger) => {
            let revealFade = trigger.children;

            gsap.from( revealFade, {
                scrollTrigger: {
                    start: "20% bottom" ,
                    trigger: trigger,
                    toggleActions: "play pause resume reset",
                    markers: false
                },
                duration: .5,
                yPercent: 50,
                scale: .8,
                opacity: 0,
                stagger: {
                    each: 0.3,
                    onComplete() {
                        this.targets()[0].classList.add('revealed') // @DEMO
                    }
                },
                ease: "power2.inOut",
            });
        });
    }
}
</script>