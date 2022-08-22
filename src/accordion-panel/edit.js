import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { Icon, PanelBody, SelectControl } from '@wordpress/components'
import { InnerBlocks, InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor'

const ALLOWED_BLOCKS = [ 'gutena/accordion-panel-title', 'gutena/accordion-panel-content' ]
const BLOCK_TEMPLATE = [
    [ 'gutena/accordion-panel-title' ], 
    [ 'gutena/accordion-panel-content' ]
]
// const BLOCK_TEMPLATE = [
// 	[ 'core/paragraph' ] 
// ]

export default function edit( { attributes, context, setAttributes } ) {
    // const { panelTitle, panelTitleTag, panelTitleTagGlobal, panelTriggerIconGlobal } = attributes
    // const globalTitleTag = context?.gutenaAccordionTitleTag
    // const globalTriggerIcon = context?.gutenaAccordionTriggerIcon

	const blockProps = useBlockProps( {
        className: 'gutena-accordion-block__panel',
    } );

    // useEffect( () => {
    //     if ( panelTitleTagGlobal != globalTitleTag ) {
    //         setAttributes( { panelTitleTagGlobal: globalTitleTag } )
    //     }

    //     if ( panelTriggerIconGlobal != globalTriggerIcon ) {
    //         setAttributes( { panelTriggerIconGlobal: globalTriggerIcon } )
    //     }
    // }, [ globalTitleTag, globalTriggerIcon ] )

    // const richTextTitleTag = panelTitleTag == 'default' ? panelTitleTagGlobal : panelTitleTag

	return (
		<div { ...blockProps }>
            {/* <InspectorControls>
			    <PanelBody title={ __( 'Panel Settings' ) }>
                    <SelectControl
                        label={ __( 'Title HTML Tag' ) }
                        value={ panelTitleTag }
                        options={ [
                            { label: 'Default', value: 'default' },
                            { label: 'H1', value: 'h1' },
                            { label: 'H2', value: 'h2' },
                            { label: 'H3', value: 'h3' },
                            { label: 'H4', value: 'h4' },
                            { label: 'H5', value: 'h5' },
                            { label: 'H6', value: 'h6' },
                            { label: 'DIV', value: 'div' },
                            { label: 'SPAN', value: 'span' },
                        ] }
                        onChange={ ( value ) => setAttributes( { panelTitleTag: value } ) }
                    />
                </PanelBody>
            </InspectorControls>

            <div className="gutena-accordion-block__panel-title editor">
                <div className="gutena-accordion-block__panel-title-inner">
                    <Icon icon="screenoptions" />
                    <RichText
                        tagName={ richTextTitleTag }
                        value={ panelTitle }
                        onChange={ ( content ) => setAttributes( { panelTitle: content } ) }
                        placeholder={ __( 'Add Title' ) }
                        className="panel-title-content"
                    />
                    {
                        panelTriggerIconGlobal != 'none' && 
                            <div className={ `trigger-${ panelTriggerIconGlobal }` }>
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                    }
                </div>
            </div> */}
            {/* <div className="gutena-accordion-block__panel-content editor">
                <div className="gutena-accordion-block__panel-content-inner"> */}
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        template={ BLOCK_TEMPLATE }
                        //templateLock="all"
                    />
                {/* </div>
            </div> */}
		</div>
	);
}
