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
        .nav--list {
            @extend .flexxer__h;
            color: $blushred;

            .nav--item {
                margin: 0 calc($gap__h * 1.25);
            }
        }
    }
</style>

