/**
 * External dependencies
 */
import { includes, merge, pickBy } from 'lodash';

export default function DynamicStyles( attributes ) {
	const {
        panelPadding,
        panelSpaceBetween,
        panelBorder,
        panelRadius,
        panelBackgroundColor,
        panelBorderOpen,
        panelRadiusOpen,
        panelBackgroundColorOpen,
        panelTitleColor,
        panelContentColor,
        panelTitleFontFamily,
        panelTitleFontSize,
        panelTitleFontStyle,
        panelTitleFontWeight,
        panelTitleLineHeight,
        panelTitleTextTransform,
        panelContentFontFamily,
        panelContentFontSize,
        panelContentFontStyle,
        panelContentFontWeight,
        panelContentLineHeight,
        panelContentTextTransform,
        panelTitleContentGap,
    } = attributes

    const transformData = ( data, fallback = {} ) => {
        let output = {}
        merge( output, fallback, data )
        return `${output?.top} ${output?.right} ${output?.bottom} ${output?.left}`
    }
    
    const transformBorder = ( data, fallback = {} ) => {
        let output = {}
        merge( output, fallback, data )
        return `${output?.width} ${output?.style} ${output?.color}`
    }

	const styleProps = pickBy( {
        '--gutena--accordion-panel-padding': transformData( panelPadding ),
        '--gutena--accordion-panel-spacing': panelSpaceBetween,
        '--gutena--accordion-panel-border': transformBorder( panelBorder ),
        '--gutena--accordion-panel-border-radius': transformData( panelRadius ),
        '--gutena--accordion-panel-background-color': panelBackgroundColor,
        '--gutena--accordion-panel-open-border': transformBorder( panelBorderOpen, panelBorder ),
        '--gutena--accordion-panel-open-border-radius': transformData( panelRadiusOpen, panelRadius ),
        '--gutena--accordion-panel-open-background-color': panelBackgroundColorOpen,
        '--gutena--accordion-panel-title-color': panelTitleColor,
        '--gutena--accordion-panel-content-color': panelContentColor,
        '--gutena--accordion-panel-title-font-family': panelTitleFontFamily,
        '--gutena--accordion-panel-title-font-size': panelTitleFontSize,
        '--gutena--accordion-panel-title-font-style': panelTitleFontStyle,
        '--gutena--accordion-panel-title-font-weight': panelTitleFontWeight,
        '--gutena--accordion-panel-title-line-height': panelTitleLineHeight,
        '--gutena--accordion-panel-title-text-transform': panelTitleTextTransform,
        '--gutena--accordion-panel-content-font-family': panelContentFontFamily,
        '--gutena--accordion-panel-content-font-size': panelContentFontSize,
        '--gutena--accordion-panel-content-font-style': panelContentFontStyle,
        '--gutena--accordion-panel-content-font-weight': panelContentFontWeight,
        '--gutena--accordion-panel-content-line-height': panelContentLineHeight,
        '--gutena--accordion-panel-content-text-transform': panelContentTextTransform,
        '--gutena--accordion-panel-title-content-spacing': panelTitleContentGap,
        }, value => typeof value !== 'undefined' && '' !== value && ! includes( value, 'undefined' )
    )

	return styleProps
}