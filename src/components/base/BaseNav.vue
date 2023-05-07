<template>
    <nav>
        <ul class="nav--list">
            <li v-for="item in menu" class="nav--item">
                <a class="nav--link" @click="scrollToTarget(item.target)">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { 'target': '#target', name: 'Slider' },
                { 'target': '#target', name: 'News' },
                { 'target': '#target', name: 'Percorso' },
                { 'target': '#target', name: 'Tab' },
            ]
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
        margin-right: $gap__h__xl;
        
        .nav--list {
            @include flexxer(h);

            .nav--item {
                margin: 0 $gap__h__m;
                font-family: $f-family__mono;
                font-weight: $f-weight__medium;
                font-size: $f-size__m;
                text-transform: uppercase;
            }
        }
    }
</style>

