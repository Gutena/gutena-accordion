import { __ } from '@wordpress/i18n'
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save( {
        className: 'gutena-accordion-block__panel-content',
    } );

	return (
		<div { ...blockProps }>
			<div className="gutena-accordion-block__panel-content-inner">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
