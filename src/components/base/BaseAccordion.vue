<script>
class Accordion {
    defaults = {
        'panelSelector': '.collapse__item',
        'headerSelector': '.collpase__header',
        'contentSelector': '.collpase__content',
        'panelCls': 'collapse',
        'headerCls': 'collapse__header',
        'contentCls': 'collapse__content',
        'openCls': 'is__open',
        'closeSiblings': false,
        'closeSelf': true
    }

    constructor(el, opts) {
        this.opts = opts = {...this.defaults, ...opts};
        this.$panels = el.querySelectorAll(opts.panelSelector);
        
        this.$panels.forEach(panel => {
            let panelHeader = panel.querySelector(this.opts.headerSelector);
            let panelContent = panel.querySelector(this.opts.contentSelector);
            
            // handle default classes for styling
            panel.classList.add(opts.panelCls);
            panelHeader.classList.add(opts.headerCls);
            panelContent.classList.add(opts.contentCls);

            // register events
            if (panelHeader) {
                panelHeader.addEventListener( 'click', (e) => { this.handleCollapse(e, this) })
            }
        });
    }

    handleCollapse(e, me) {
        let opts = me.opts,
            target = e.currentTarget.closest(opts.panelSelector);

        if (opts.closeSiblings) {
            this.$panels.forEach(panel => { 
                if (opts.closeSelf && panel == target) { return }
                panel.classList.remove(opts.openCls);
            });
        }
        
        // reset all panels if mutual exclusive or auto closable
        target.classList[!target.classList.contains(opts.openCls) ? 'add' : 'remove'](opts.openCls);
    }
}

export default Accordion
</script>


<style lang="scss">
.collapse {
    .collapse__header {
        cursor: pointer;
    }

    .collapse__content {
        opacity: 0;
        max-height: 0;
        height: 100%;
        transition: $t__slow ease-in-out;
        transition-property: max-height, opacity, margin-bottom;
        overflow: hidden;
    }

    &.is__open {
        .collapse__content {
            opacity: 1;
            max-height: 100vh;
        }
    }
}
</style>