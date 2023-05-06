<template>
    <footer class="wrapper">
        <div class="footer-content__top">
            <BaseLogo></BaseLogo>
        </div>
        <div class="footer-content__bottom gridder">
            <div class="footer-column gridder-span__8">
                <ul class="block-list legal-list">
                    <li v-for="(legal, i) in legalList" :key="i" class="list-entry legal-entry">
                        <a :href="legal.link" class="list-link legal-link is-small">
                            {{ legal.name }}
                        </a>
                        <span v-if="i < legalList.length-1" >|</span>
                    </li>
                </ul>
                <div class="footer-copyright">
                    <span id="copyright">Copyright © {{ new Date().getFullYear() }} Logotel. All rights reserved.</span>
                </div>
            </div>
            <div class="footer-column gridder-span__4">
                <div class="social-container">
                    <p class="social-claim">Seguici sui social:</p>
                    <ul class="block-list social-list">
                        <li v-for="(social, i) in socialList" :key="i" class="list-entry social-entry">
                            <a :href="social.link" class="list-link social-link">
                                <BaseIcon :name="social.name" color="white"></BaseIcon>
                                <!-- {{ social.name }} -->
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import BaseLogo from '@components/base/BaseLogo.vue'
import BaseIcon from '@components/base/BaseIcon.vue'

export default {
    components: { BaseLogo, BaseIcon },
    data() {
        return {
            socialList: [
                { id: 0, name: "facebook", link: "#" },
                { id: 1, name: "twitter", link: "#" },
                { id: 2, name: "instagram", link: "#" },
                { id: 3, name: "linkedin", link: "#" },
                { id: 4, name: "youtube", link: "#" },
            ],
            legalList: [
                { id: 0, name: "Term & Conditions", link: "#" },
                { id: 1, name: "Privacy Policy", link: "#" },
                { id: 2, name: "Cookies Policy", link: "#" },
                { id: 3, name: "Copyrights Notification", link: "#" },
            ]
        }
    }
}
</script>

<style lang="scss">
    footer {
        padding: $gap__v__xl 0;

        .footer-content__top {
            padding: $gap__v__l 0;
        }

        .footer-content__bottom {
            font-family: $f-family__mono;
            font-size: $f-size__xs;

            .footer-column {
                .legal-list {
                    margin-bottom: $gap__h__m;

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
                        margin-bottom: $gap__v__m;
                    }
                }
            }
        }
    }
</style>