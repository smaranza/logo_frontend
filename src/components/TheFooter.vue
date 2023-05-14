<template>
    <footer>
        <div class="footer-inner wrapper">
            <div class="footer-content__top">
                <BaseLogo></BaseLogo>
            </div>
            <div class="footer-content__bottom gridder">
                <div class="footer-column g__span-8">
                    <ul class="block-list legal-list">
                        <li v-for="(legal, i) in legalList" :key="i" class="list-entry legal-entry">
                            <a :href="legal.url" class="list-link legal-link is-small">
                                {{ legal.name }}
                            </a>
                            <span v-if="i < legalList.length-1" >|</span>
                        </li>
                    </ul>
                    <div class="footer-copyright">
                        <span id="copyright">Copyright © {{ new Date().getFullYear() }} Logotel. All rights reserved.</span>
                    </div>
                </div>
                <div class="footer-column g__span-4">
                    <div class="social-container">
                        <p class="social-claim">Seguici sui social:</p>
                        <ul class="block-list social-list">
                            <li v-for="(social, i) in socialList" :key="i" class="list-entry social-entry">
                                <a :href="social.url" class="list-link social-link">
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
        padding: $gap__v-xl 0;
        position: relative;
        background-color: $dark;

        &::before {
            @include pseudo;
            top: unset;
            height: unset;
            bottom: calc(100% - 2px);
            // min-height: 537px;
            background-image: $wave__light-primary;
            background-size: cover;
            background-repeat: no-repeat;
            aspect-ratio: 2.68 / 1 ;
        }

        .footer-inner {

            .footer-content__top {
                padding: $gap__v-l 0;
            }
    
            .footer-content__bottom {
                font-family: $f-family__mono;
                font-weight: $f-weight__medium;
                font-size: $f-size__xs;
    
                .footer-column {
                    .legal-list {
                        margin-bottom: $gap__h-m;
    
                        .legal-entry {
                            .legal-link {
                                font-family: $f-family__mono;
                                font-size: $f-size__xs;
                            }
                        }
                    }
    
                    .social-container {
                        font-weight: $f-weight__bold;
    
                        .social-claim {
                            text-transform: uppercase;
                            margin-bottom: $gap__v-m;
                        }
                    }
                }
            }
        }
    }
</style>