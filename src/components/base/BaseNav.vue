<template>
    <nav>
        <ul class="nav__list">
            <li v-for="item in menu" class="nav__item">
                <a class="nav__link is__text-link" @click="scrollToTarget(item.target)">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { localData } from "@helpers/data-helper"

export default {
    data() {
        return {
            menu: localData.navigation
        }
    },
    methods: {
        scrollToTarget(target) { //WIP
            // window.scrollTo(target) 
        }
    }
}
</script>


<style lang="scss">
    nav {
        margin-right: $gap__h-xl;
        
        .nav__list {
            @include flexxer(h);

            .nav__item {
                margin: 0 $gap__h-m;
                font-family: $f-family__mono;
                font-weight: $f-weight__medium;
                font-size: $f-size__m;
                text-transform: uppercase;
            }
        }
    }
</style>

