import { __ } from '@wordpress/i18n'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

const ALLOWED_BLOCKS = [ 'gutena/accordion-panel-title', 'gutena/accordion-panel-content' ]
const BLOCK_TEMPLATE = [
    [ 'gutena/accordion-panel-title' ], 
    [ 'gutena/accordion-panel-content' ]
]

export default function edit() {
	const blockProps = useBlockProps( {
        className: 'gutena-accordion-block__panel',
    } );

	return (
		<div { ...blockProps }>
            <InnerBlocks
                allowedBlocks={ ALLOWED_BLOCKS }
                template={ BLOCK_TEMPLATE }
            />
		</div>
	);
}
