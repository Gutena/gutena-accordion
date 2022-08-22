import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

const BLOCK_TEMPLATE = [
	[ 'core/paragraph' ] 
]

export default function edit( { attributes, context, setAttributes } ) {
	const { panelTriggerIconGlobal } = attributes
	const globalTriggerIcon = context?.gutenaAccordionTriggerIcon

	 useEffect( () => {
        if ( panelTriggerIconGlobal != globalTriggerIcon ) {
            setAttributes( { panelTriggerIconGlobal: globalTriggerIcon } )
        }
    }, [ globalTriggerIcon ] )

	const blockProps = useBlockProps( {
        className: 'gutena-accordion-block__panel-title editor',
    } );

	return (
		<div { ...blockProps }>
			<div className="gutena-accordion-block__panel-title-inner">
				<InnerBlocks
					template={ BLOCK_TEMPLATE }
				/>
				{
					panelTriggerIconGlobal != 'none' && 
						<div className={ `trigger-${ panelTriggerIconGlobal }` }>
							<div className="horizontal"></div>
							<div className="vertical"></div>
						</div>
				}
			</div>
		</div>
	);
}
