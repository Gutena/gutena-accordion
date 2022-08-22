import { __ } from '@wordpress/i18n'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
        className: 'gutena-accordion-block__panel-title',
    } );

	return (
		<div { ...blockProps }>
			<div className="gutena-accordion-block__panel-title-inner">
				<InnerBlocks.Content />
				{
					attributes.panelTriggerIconGlobal != 'none' && 
						<div className={ `trigger-${ attributes.panelTriggerIconGlobal }` }>
							<div className="horizontal"></div>
							<div className="vertical"></div>
						</div>
				}
			</div>
		</div>
	);
}
