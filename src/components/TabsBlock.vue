<template>
    <div class="tab-container gridder g__span-12">
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
    </div>
</template>

<script>
import TabsItem from '@components/TabsItem.vue';
import ImageHelper from "@helpers/image-helper.js";
import { localData } from "@helpers/data-helper";

const colorMap = [ "primary", "secondary", "tertiary" ];

export default {
    mixins: [ ImageHelper ],
    components: { TabsItem },
    props: {
        maxItems: Number //@DEMO
    },
    data() {
        return {
            tabs: localData.tabs
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
.tab-container {
    z-index: 30;
    margin: $gap__v-m * 3 0 $gap__v-xl * 2.75;
}
</style>