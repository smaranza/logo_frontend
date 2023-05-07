<template>
    <i :class="`icon--${name}`" :style="`color: ${this.color}`">
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
            iconSrc: defineAsyncComponent(() => import(/* @vite-ignore */ `../../assets/graphics/icons/${this.name}.svg`))
        }
    } 
}
</script>