<template>
    <main>
        <section id="news">
            <div class="section-inner">
                <h2 class="section-display"></h2>
                <NewsBlock></NewsBlock>
            </div>
        </section>
        <section id="timeline">
            <div class="section-inner">
                <h2 class="section-display">Sed diam nonummy nibh euismod tincidunt?</h2>
                <TimelineBlock></TimelineBlock>
            </div>
        </section>
        <section id="tabs">
            <div class="section-inner">
                <h2 class="section-display">Lorem ipsum dolor
    sit amet consectetuer?
    </h2>
                <TabsBlock></TabsBlock>
            </div>
        </section>
    </main>
</template>

<script>

</script>

<style lang="scss">
main {
    width: 100%;

    section {
        min-height: 100vh;
        background-color: $light;
        color: $dark;
        position: relative;

        &:nth-child(even) {
            background-color: $dark;
            color: $light;
            opacity: 1;
            overflow-y: visible;
            background: linear-gradient(180deg, $dark 0%, tone(dark, lighter) 100%);
            
            &::before, 
            &::after {
                content: '';
                display: block;
                width: 100vw;
                // min-height: 556px;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                aspect-ratio: 2.6 / 1 ;
            }
            
            &::before {
                top: 0;
                transform: translateY(calc(-100% + 2px));
                background-image: $wave__light-dark;
            }
            
            &::after {
                transform: translateY(calc(100% - 2px));
                background-image: $wave__dark-light;
                z-index: 10;
            }
        }

        &:nth-child(odd) {
            .section-inner {
                .section-display {
                    color: $primary;
                }
            }
        }

        .section-inner {
            @include wrapper;
            @include gridder;
            
            .section-display {
                @include gridder-span(8);
                position: relative;
                z-index: 30;
            }
        }
        



    }
}
</style>