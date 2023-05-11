<template>
    <i :class="iconCls" :style="iconStyle">
        <component :is="iconSrc"></component>
    </i>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    props: { 
        name: String,
        color: String
    },
    data(){
        return {
            iconSrc: defineAsyncComponent(() => import(/* @vite-ignore */ `../../assets/graphics/icons/${this.name}.svg`)),
            iconCls: `icon--${this.name}`,
            iconStyle: `color: ${this.color};`
        }
    } 
}
</script>