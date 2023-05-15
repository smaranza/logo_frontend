<template>
    <footer>
        <div class="footer__inner wrapper">
            <div class="footer__content-top">
                <BaseLogo></BaseLogo>
            </div>
            <div class="footer__content-bottom gridder">
                <div class="footer__column g__span-8">
                    <ul class="block__list legal__list">
                        <li v-for="(legal, i) in legalList" 
                            :key="i" 
                            class="list__entry legal__entry"
                        >
                            <a :href="legal.url" class="list__link legal__link is__text-link">
                                {{ legal.name }}
                            </a>
                            <span v-if="i < legalList.length - 1">|</span>
                        </li>
                    </ul>
                    <div class="footer__copyright">
                        <span id="copyright">Copyright © {{ new Date().getFullYear() }} Logotel. All rights reserved.</span>
                    </div>
                </div>
                <div class="footer__column g__span-4">
                    <div class="social__container">
                        <p class="social__claim">Seguici sui social:</p>
                        <ul class="block__list social__list">
                            <li v-for="(social, i) in socialList" 
                                :key="i" 
                                class="list__entry social__entry"
                            >
                                <a :href="social.url" class="list__link social__link">
                                    <BaseIcon :name="social.name" color="white"></BaseIcon>
                                    <!-- {{ social.name }} -->
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseIcon from '@components/base/BaseIcon.vue'
import { localData } from "@helpers/data-helper";

export default {
    components: { BaseLogo, BaseIcon },
    data() {
        return {
            socialList: localData.socials,
            legalList: localData.legals
        }
    }
}
</script>

<style lang="scss">
footer {
    padding: $gap__v-l 0;
    position: relative;
    background-color: $dark;

    @media (min-width: $breakpoint-mobile__ex) {
        padding: $gap__v-xl 0;
    }

    &::before {
        @include pseudo;
        top: unset;
        height: unset;
        bottom: calc(100% - 2px);
        // min-height: 537px;
        background-image: $wave__light-primary;
        background-size: cover;
        background-repeat: no-repeat;
        aspect-ratio: 2.68 / 1;
    }

    .footer__inner {
        .footer__content-top {
            padding: $gap__v-s 0;

            @media (min-width: $breakpoint-mobile__ex) {
                padding: $gap__v-xl 0;
            }
        }

        .footer__content-bottom {
            font-family: $f-family__mono;
            font-weight: $f-weight__medium;
            font-size: $f-size__xs;

            .footer__column {
                .legal__list {
                    margin-bottom: $gap__h-m;
                    flex-flow: row wrap;

                    .legal__entry {
                        .legal__link {
                            font-family: $f-family__mono;
                            font-size: $f-size__xs;
                        }
                    }
                }

                .social__container {
                    font-weight: $f-weight__bold;

                    .social__claim {
                        text-transform: uppercase;
                        margin-bottom: $gap__v-m;
                    }
                }
            }
        }
    }

    .block__list {
        @include flexxer;

        .list__entry {
            margin-right: calc($gap__v / 2);

            .list__link {
                margin-right: calc($gap__v / 2);
            }
        }
    }
}
</style>