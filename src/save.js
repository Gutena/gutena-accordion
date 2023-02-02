/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor'

export default function save( { attributes } ) {
	const { uniqueId, panelCollapse, panelDefaultOpen } = attributes
	const blockProps = useBlockProps.save( {
        className: `gutena-accordion-block gutena-accordion-block-${ uniqueId }`,
    } );
	const innerBlocksProps = useInnerBlocksProps.save( blockProps );

	return (
		<div { ...innerBlocksProps } data-single={ panelCollapse } data-open={ panelDefaultOpen } />
	);
}
