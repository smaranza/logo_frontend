<template>
    <TheHeader></TheHeader>
    <main>
        <section id="slider" class="main-hero">
            <!-- @demo: load dynamic component (slider or banner) based on route -->
            <SliderBlock v-if="isHome"></SliderBlock>
            <BannerBlock v-else></BannerBlock>
        </section>
        <section class="main-content">
            <!-- @demo: use of basic routes for dynamic views -->
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


const routes = {
    "/": HomeView,
    "/page": "PageView" // @demo: other page view
}


export default {
    components: { TheHeader, TheFooter, HomeView, SliderBlock },
    beforeMount() {
        this.routeName = "Home"; // @demo: this.$route.name 
        this.currentPath = "/other-page" // @demo: this.currentPath.slice(1)
    },
    computed: {
        isHome() {
            return this.routeName === 'Home'
        },
        currentView() {
           return routes[this.currentPath] || HomeView
        }
    }
}
</script>