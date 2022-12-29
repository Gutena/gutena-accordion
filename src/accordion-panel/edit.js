import { __ } from '@wordpress/i18n'
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

const ALLOWED_BLOCKS = [ 'gutena/accordion-panel-title', 'gutena/accordion-panel-content' ]
const BLOCK_TEMPLATE = [
    [ 'gutena/accordion-panel-title' ], 
    [ 'gutena/accordion-panel-content' ]
]

export default function edit() {
	const blockProps = useBlockProps( {
        className: 'gutena-accordion-block__panel',
    } );

    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: BLOCK_TEMPLATE
    } );

	return <div { ...innerBlocksProps } />
}
