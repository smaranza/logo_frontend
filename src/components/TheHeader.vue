<template>
    <header>
        <div class="header-inner wrapper flexxer">
            <BaseLogo type-color="#ffffff" :show-type="true"></BaseLogo>
            <BaseNav></BaseNav>
        </div>
    </header>
</template>

<script setup>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseNav from '@components/base/BaseNav.vue'
</script>

<style lang="scss">
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 5000;
        background-color: rgba($dark, .80);
        padding: $gap__v__l 0;

        .header-inner {
            align-items: center;
            justify-content: space-between;
        }
    }
</style>