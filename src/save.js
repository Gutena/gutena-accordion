/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

export default function save( { attributes } ) {
	const { uniqueId, panelCollapse } = attributes
	const blockProps = useBlockProps.save( {
        className: `gutena-accordion-block gutena-accordion-block-${ uniqueId }`,
    } );

	return (
		<div { ...blockProps } data-single={ panelCollapse }>
			<InnerBlocks.Content />
		</div>
	);
}
