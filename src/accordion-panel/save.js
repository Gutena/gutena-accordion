import { __ } from '@wordpress/i18n'
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save( {
        className: 'gutena-accordion-block__panel',
    } )
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return <div { ...innerBlocksProps } />
}
