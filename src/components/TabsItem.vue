<template>
    <div :class="tabVariantCls">
        <h3 class="tab__title">
            <slot name="title">
                Tab Rosa
            </slot>
        </h3>
        <span class="divider"></span>
        <div class="tab__media">
            <slot name="media">
                <img :src="getFullPath('placeholder.jpg')"/>
            </slot>
        </div>
        <slot name="body">
            <p class="tab__text">
                <slot name="text">
                    Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                </slot>
            </p>
            <a :href="url" class="tab__cta">
                <slot name="cta" class="tab__cta">
                    call to action
                </slot>
            </a>
        </slot>
    </div>
</template>

<script>
import ImageHelper from "@helpers/image-helper.js";

export default {
    mixins: [ ImageHelper ],
    props: {
        url: String,
        color: String
    },
    computed: {
        tabVariantCls() { return `tab__${this.color}` }
    }
}
</script> 

<style lang="scss">
@mixin tab($color: $primary, $width: 4) {
    $accent: rgba(tone($color, overlay), 1);
    
    @include flexxer(v);
    padding: $gap__v-l $gap__h-s;
    background-color: $light;
    align-items: center;
    justify-content: flex-start;
    border-radius: $gap__h-m;
    border: 1px solid $accent;
    transition-duration: $t__base;
    transition-property: background-color, color;
    
    @media (min-width: $breakpoint-mobile__ex) {
        box-shadow: 0px 0px 20px 10px rgba($black, 0.1);
        padding: $gap__v-l $gap__h-l calc( $gap__v-m + $gap__v-xl);
        border: none;
    }

    .tab__title {
        color: $accent;
        font-size: $f-size__m;
        font-family: $f-family__sans;
        text-transform: uppercase;
        
        @media (min-width: $breakpoint-mobile__ex) {
            font-size: $f-size__xl;
        }
    }

    .tab__media {
        position: relative;
        margin: $gap__v-l;
        
        &::after {
            @include pseudo;
            aspect-ratio: 1 / 1;
            background-color: $accent;
            z-index: 0;
            border-radius: 50%;
        }

        img {
            width: 100%;
            object-fit: contain;
            padding: $gap__v-xs;
            position: relative;
            z-index: 10;
        }
    }

    .tab__text {
        margin: auto 0 $gap__v-m;
        text-align: center;
    }

    .tab__cta {
        @include btn($accent);
    }

    .divider {
        background-color: $accent;
    }

    &:hover {
        background-color: rgba(tone($color, screen), 1);
        // transform: scale(1.01);
        
        &,
        .tab__title {
            // @DEMO: eventually create a contrast ratio utility
            @if ($color == $secondary) { 
                color: $dark;
            }
            @else {
                color: $light;
            }
        }

        .tab__cta {
            color: $accent;
            background-color: $light;
            
            &:hover {
                background-color: tone($accent, lightest);
                
                @if ($color == $secondary) { 
                    color: $dark;
                    border-color: $dark;
                }
                @else {
                    color: $light;
                    border-color: $light;
                }
            }
        }

        .divider {
            // @DEMO: eventually create a contrast ratio utility
            @if ($color == $secondary) { 
                background-color: $dark;
            }
            @else {
                background-color: $light;
            }
        }
    }
}

@each $name, $color in $colors {
    .tab__#{$name} {
        @include tab($color);
    }
}
</style>