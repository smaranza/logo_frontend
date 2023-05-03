<template>
    <footer>
        <div class="footer-content--top">
            <BaseLogo></BaseLogo>
        </div>
        <div class="footer-content--bottom">
            <div class="footer--column">
                <ul class="legal--list">
                    <li v-for="(legal, i) in legalList" :key="i" class="list--entry legal--entry">
                        <a :href="legal.link" class="list--link legal--link">
                            {{ legal.name }}
                        </a>
                        <span v-if="i < legalList.length-1" >|</span>
                    </li>
                </ul>
                <div class="footer--copyright">
                    <span id="copyright">Copyright © {{ new Date().getFullYear() }} Logotel. All rights reserved.</span>
                </div>
            </div>
            <div class="footer--column">
                <div class="social--container">
                    <p class="social--claim">Seguici sui social:</p>
                    <ul class="social--list">
                        <li v-for="(social, i) in socialList" :key="i" class="list--entry social--entry">
                            <a :href="social.link" class="list--link social--link">
                                <BaseIcon :name="social.name" color="white"></BaseIcon>
                                {{ social.name }}
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