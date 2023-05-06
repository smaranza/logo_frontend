<template>
    <header>
        <BaseLogo type-color="#ffffff" :show-type="true"></BaseLogo>
        <nav class="wrapper">
            <BaseNav></BaseNav>
        </nav>
    </header>
</template>

<script setup>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseNav from '@components/base/BaseNav.vue'
</script>

<style scoped lang="scss">
    header {
        position: sticky;
        top: 0;
        z-index: 5000;
        // background-color: $color-background;
    }
</style>