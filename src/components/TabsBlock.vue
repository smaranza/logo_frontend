<template>
    <div class="tab-container gridder g__span-12 animate">
        <template v-if="isMobile">
            <Carousel 
                :items-to-show="1"
                :wrapAround="true"
                :autoplay="0" 
            >
                <template v-for="(tab, i) in tabs" :key="i">
                    <Slide v-if="i < maxItems">
                        <TabsItem 
                            url="#"
                            :color="getColorByIndex(i)"
                            class="tab-item"
                        >
                            <template #title>{{ tab.title }}</template>
                            <template #media>
                                <img :src="getFullPath(tab.media)"/>
                            </template>
                            <template #text></template>
                            <template #cta></template>
                        </TabsItem>
                    </Slide>
                </template>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </template>
        <template v-else>
            <template v-for="(tab, i) in tabs" :key="i">
                <TabsItem 
                    v-if="i < maxItems"
                    url="#"
                    :color="getColorByIndex(i)"
                    class="tab-item g__span-4"
                >
                    <template #title>{{ tab.title }}</template>
                    <template #media>
                        <img :src="getFullPath(tab.media)"/>
                    </template>
                    <template #text></template>
                    <template #cta></template>
                </TabsItem>
            </template>
        </template>
    </div>
  
</template>

<script>
import TabsItem from '@components/TabsItem.vue';
import ImageHelper from "@helpers/image-helper.js";
import { localData } from "@helpers/data-helper";
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const colorMap = [ "primary", "secondary", "tertiary" ];

export default {
    mixins: [ ImageHelper ],
    components: { TabsItem, Carousel, Slide, Pagination },
    props: {
        maxItems: Number //@DEMO
    },
    data() {
        return {
            tabs: localData.tabs,
            isMobile: false
        }
    },
    methods: {
        getColorByIndex(index) {
            return colorMap[index % 3];
        }
    },
    mounted() {
        this.isMobile = window.innerWidth < 960;
    }
}
</script>

<style lang="scss">
.tab-container {
    z-index: 30;
    margin: $gap__v-l calc($gap__h-s * -1) $gap__v-xl;
    // margin: 0 -20px;

    @media (min-width: $breakpoint-mobile__ex) {
        margin: $gap__v-m * 3 0 $gap__v-xl * 2.75;
    }

    .carousel {
        .carousel__viewport {
            background-color: unset;
            height: unset;

            .carousel__slide {
                padding: 0 $gap__h-s;
            }
        }
    
        .carousel__pagination {
            position: relative;
            margin-top: $gap__v-m;
        }
    }
}
</style>