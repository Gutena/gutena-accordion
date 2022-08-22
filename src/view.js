document.addEventListener( 'DOMContentLoaded', () => {
    const accordionNodeList = document.querySelectorAll( '.gutena-accordion-block' );
    accordionNodeList?.forEach( ( el, index ) => {
        const panelNodeList = el.querySelectorAll( '.gutena-accordion-block__panel-title' );
        for ( let i = 0; i < panelNodeList.length; i++ ) {
            panelNodeList[i]?.addEventListener( 'click', () => {
                const mainNode = panelNodeList[i].closest( '.gutena-accordion-block' );
                const parentNode = panelNodeList[i].closest( '.gutena-accordion-block__panel' );
                parentNode?.classList?.toggle( 'active' );
            
                const panel = panelNodeList[i]?.nextElementSibling;
                if ( panel.style.maxHeight ) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }

                if ( mainNode?.getAttribute( 'data-single' ) === 'true' ) {
                    panelNodeList?.forEach( ( el, index ) => {
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
        }
    });
} );