<template>
   <div class="news-container gridder g__span-12">
        <template v-for="article in news" :key="article.id">
            <NewsItem 
                v-if="article.id < maxItem"
                :article="article"
                class="tab-item g__span-4"
            />
        </template>
    </div>
</template>

<script>
import NewsItem from '@components/NewsItem.vue';
import ImageHelper from "@helpers/image-helper.js";
import Data from "@helpers/data-helper.json";

const colorMap = [ "primary", "secondary", "tertiary" ];

export default {
    mixins: [ ImageHelper, Data ],
    components: { NewsItem },
    props: {
        maxItem: Number //@demo
    },
    data() {
        return {
            news: Data.news
        }
    },
    methods: {
        getColorByIndex(index) {
            return colorMap[index % 3];
        }
    }
}
</script>

<style lang="scss">
.news-container {
    position: relative;
    padding-top: $gap__h-xl;
    z-index: 30;
}
</style>