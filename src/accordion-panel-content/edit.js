import { __ } from '@wordpress/i18n'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

const BLOCK_TEMPLATE = [
	[ 'core/paragraph' ] 
]

export default function edit() {
	const blockProps = useBlockProps( {
        className: 'gutena-accordion-block__panel-content editor',
    } );

	return (
		<div { ...blockProps }>
			<div className="gutena-accordion-block__panel-content-inner">
				<InnerBlocks
					template={ BLOCK_TEMPLATE }
				/>
			</div>
		</div>
	);
}
