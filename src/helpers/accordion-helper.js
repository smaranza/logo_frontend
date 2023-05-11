class Accordion {
    defaults = {
        'panelSelector': '.collapse__item',
        'headerSelector': '.collpase__header',
        'contentSelector': '.collpase__content',
        'panelCls': 'collapse',
        'headerCls': 'collpase__header',
        'contentCls': 'collpase__content',
        'openCls': 'is__open',
        'closeSiblings': false
    }

    constructor(el, opts) {
        this.opts = {...this.defaults, ...opts};
        this.$panels = el.querySelectorAll(opts.panelSelector);
        
        this.$panels.forEach(panel => {
            let panelHeader = panel.querySelector(this.opts.headerSelector);
            let panelContent = panel.querySelector(this.opts.contentSelector);
            
            // handle default classes for styling
            panel.classList.add('panelCls');
            panelHeader.classList.add('headerCls');
            panelContent.classList.add('contentCls');

            // register events
            if (panelHeader) {
                panelHeader.addEventListener( 'click', (e) => { this.toggleCollapse(e, this) })
            }
        });
    }

    toggleCollapse(e, me) {
        let opts = me.opts,
            panel = e.currentTarget.closest(opts.panelSelector);

        // reset all panels if mutual exclusive
        if (opts.closeSiblings) {
            this.$panels.forEach(panel => { 
                panel.classList.remove(opts.openCls)
            });
        }

        // toggle open/close
        panel.classList[!panel.classList.contains(opts.openCls) ? 'add' : 'remove'](opts.openCls);
    }
}

export default Accordion