<template>
   <div class="news__container gridder g__span-12">
        <template v-for="article in news" :key="article.id">
            <NewsItem
                v-if="article" 
                :article="article"
                class="g__span-4"
            />
        </template>
    </div>
</template>

<script>
import NewsItem from '@components/NewsItem.vue';
import { localData, SNAPI } from "@helpers/data-helper";

const colorMap = [ "primary", "secondary", "tertiary" ];

export default {
    components: { NewsItem },
    props: {
        maxItems: Number 
    },
    data() {
        return {
            // news: localData.news // @DEMO localData only
            news: []
        }
    },
    methods: {
        getColorByIndex(index) {
            return colorMap[index % 3];
        },
        async getLatestNews() {
            this.news = await SNAPI.fetchLatestNews(this.maxItems);
        }
    },
    mounted() {
        this.getLatestNews()
    }
}
</script>

<style lang="scss">
.news__container {
    position: relative;
    padding-top: $gap__h-xl;
    z-index: 30;
}
</style>