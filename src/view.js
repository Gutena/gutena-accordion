document.addEventListener( 'DOMContentLoaded', () => {
    const accordionNodeList = document.querySelectorAll( '.gutena-accordion-block' );
    accordionNodeList?.forEach( ( el, index ) => {
        const panelNodeList = el?.querySelectorAll( ':scope > .gutena-accordion-block__panel > .gutena-accordion-block__panel-title' );
        
        panelNodeList?.forEach( ( el, index ) => {
            el?.addEventListener( 'click', () => {
                const mainNode = el.closest( '.gutena-accordion-block' );
                const parentNode = el.closest( '.gutena-accordion-block__panel' );
                parentNode?.classList?.toggle( 'active' );

                const panel = el?.nextElementSibling;
                if ( panel.style.maxHeight ) {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    setTimeout( function() {
                        panel.style.maxHeight = null;
                    }, 50 )
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    setTimeout( function() {
                        panel.style.maxHeight = 'unset';
                    }, 200 );
                } 

                if ( mainNode?.getAttribute( 'data-single' ) === 'true' ) {
                    panelNodeList?.forEach( ( el, i ) => {
                        if ( i !== index ) {
                            const siblingParentNode = el.closest( '.gutena-accordion-block__panel' )
                            
                            if ( siblingParentNode?.classList?.contains( 'active' ) ) {
                                siblingParentNode?.classList?.remove( 'active' );

                                const siblingPanel = el?.nextElementSibling;
                                if ( siblingPanel.style.maxHeight ) {
                                    siblingPanel.style.maxHeight = null;
                                } else {
                                    siblingPanel.style.maxHeight = siblingPanel.scrollHeight + 'px';
                                }
                            }
                        }
                    } );
                }
            } );
        } );

        const activePanel = el?.getAttribute( 'data-open' );
        if ( activePanel !== 'none' ) {
            panelNodeList?.[ parseInt( activePanel ) ]?.click();
        }
    } );
} );