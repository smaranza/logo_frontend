<template>
    <div class="tab-container gridder gridder-span__12">
        <template v-for="(tab, i) in tabs" :key="i">
            <BaseTab 
                v-if="i < maxItem"
                url="#"
                :color="getColorByIndex(i)"
                class="tab-item gridder-span__4"
            >
                <template #title>{{ tab.title }}</template>
                <template #media>
                    <img :src="getFullPath(tab.media)"/>
                </template>
                <template #text></template>
                <template #cta></template>
            </BaseTab>
        </template>
    </div>
</template>

<script>
import BaseTab from '@components/base/BaseTab.vue';
import ImageHelper from "@helpers/image-helper.js";

const colorMap = [ "primary", "secondary", "tertiary" ];
const tabData = [ 
    { 
        title: "Tab Rosa",
        media: "sveglia.png",
        text: "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
        cta: "Call to Action"
    }, {
        title: "Tab Rosa",
        media: "target.png",
        text: "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
        cta: "Call to Action"
    }, {
        title: "Tab Rosa",
        media: "razzo.png",
        text: "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
        cta: "Call to Action"
    }, {
        title: "Tab Rosa",
        media: "sveglia.png",
        text: "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
        cta: "Call to Action"
    }, {
        title: "Tab Rosa",
        media: "sveglia.png",
        text: "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
        cta: "Call to Action"
    }
]

export default {
    mixins: [ ImageHelper ],
    components: { BaseTab },
    props: {
        maxItem: Number //@demo
    },
    data() {
        return {
            tabs: tabData
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