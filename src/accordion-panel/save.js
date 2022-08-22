import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components'
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";

export default function save( { attributes } ) {
	const { panelTitle, panelTitleTag, panelTitleTagGlobal, panelTriggerIconGlobal } = attributes
	const richTextTitleTag = panelTitleTag == 'default' ? panelTitleTagGlobal : panelTitleTag

	const blockProps = useBlockProps.save( {
        className: 'gutena-accordion-block__panel',
    } )

	return (
		<div { ...blockProps }>
			{/* <div className="gutena-accordion-block__panel-title">
				<div className="gutena-accordion-block__panel-title-inner">
					<Icon icon="screenoptions" />
					<RichText.Content tagName={ richTextTitleTag } value={ panelTitle } className="panel-title-content" />
					{
                        panelTriggerIconGlobal != 'none' && 
                            <div className={ `trigger-${ panelTriggerIconGlobal }` }>
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                    }
				</div>
			</div> */}
			{/* <div className="gutena-accordion-block__panel-content">
				<div className="gutena-accordion-block__panel-content-inner"> */}
					<InnerBlocks.Content />
				{/* </div>
			</div> */}
		</div>
	);
}
