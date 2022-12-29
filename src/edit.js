/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n'
import { useEffect, useState } from '@wordpress/element'
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { 
	__experimentalFontFamilyControl as FontFamilyControl,
	__experimentalFontAppearanceControl as FontAppearanceControl,
	__experimentalLetterSpacingControl as LetterSpacingControl,
    __experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
    ColorPaletteControl,
    InspectorControls,
    PanelColorSettings,
    useInnerBlocksProps,
    useBlockProps,
    useSetting
} from '@wordpress/block-editor'
import { 
    __experimentalBorderControl as BorderControl,
    __experimentalBoxControl as BoxControl,
    __experimentalSpacer as Spacer,
    FontSizePicker,
    PanelBody,
    TabPanel,
    RangeControl,
    SelectControl,
    ToggleControl,
} from '@wordpress/components'
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import DynamicStyles from './styles'
import './editor.scss'
import variations from './variations'

const gutenaAccordUniqueIds = [];
const ALLOWED_BLOCKS = [ 'gutena/accordion-panel' ]

function EditContainer( { clientId, attributes, setAttributes } ) {
    const {
        uniqueId,
        panelPadding,
        panelSpaceBetween,
        panelCollapse,
        panelDefaultOpen,
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
        panelTriggerIcon,
        showVariation,
        blockStyles
    } = attributes

    const innerBlocksCount = useSelect(
        ( select ) =>
            select( blockEditorStore ).getBlocks( clientId ).length,
        [ clientId ]
    );

    const blockProps = useBlockProps( {
        className: `gutena-accordion-block gutena-accordion-block-${ attributes.uniqueId }`,
    } );
    
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        allowedBlocks: ALLOWED_BLOCKS,
        orientation: 'horizontal',
        renderAppender: false,
    } );

    useEffect( () => {
        if ( ! uniqueId || gutenaAccordUniqueIds.includes( uniqueId ) ) {
			setAttributes( {
				uniqueId: clientId.substr( 2, 9 ),
			} );
			gutenaAccordUniqueIds.push( clientId.substr( 2, 9 ) );
		} else {
			gutenaAccordUniqueIds.push( uniqueId );
		}
    }, [] )

    const panelDefaultSettings = (
        <>
            <Spacer marginBottom={ 5 }>
                <BorderControl
                    label={ __( 'Border', 'gutena-accordion' ) }
                    onChange={ ( value ) => setAttributes( { panelBorder: value } ) }
                    value={ panelBorder }
                />
            </Spacer>
            <Spacer marginBottom={ 4 }>
                <BoxControl
                    label={ __( 'Border radius', 'gutena-accordion' ) }
                    values={ panelRadius }
                    onChange={ ( value ) => setAttributes( { panelRadius: value } ) }
                />
            </Spacer>
            <Spacer marginBottom={ 4 }>
                <BoxControl
                    label={ __( 'Padding', 'gutena-accordion' ) }
                    values={ panelPadding }
                    onChange={ ( value ) => setAttributes( { panelPadding: value } ) }
                />
            </Spacer>
            <ColorPaletteControl
                label={ __( 'Background color', 'gutena-accordion' ) }
                value={ panelBackgroundColor }
                onChange={ ( value ) => setAttributes( { panelBackgroundColor: value } ) }
            />
        </>
    )

    const panelOpenSettings = (
        <>
            <Spacer marginBottom={ 5 }>
                <BorderControl
                    label={ __( 'Border', 'gutena-accordion' ) }
                    onChange={ ( value ) => setAttributes( { panelBorderOpen: value } ) }
                    value={ panelBorderOpen }
                />
            </Spacer>
            <Spacer marginBottom={ 4 }>
                <BoxControl
                    label={ __( 'Border radius', 'gutena-accordion' ) }
                    values={ panelRadiusOpen }
                    onChange={ ( value ) => setAttributes( { panelRadiusOpen: value } ) }
                />
            </Spacer>
            <ColorPaletteControl
                label={ __( 'Background color', 'gutena-accordion' ) }
                value={ panelBackgroundColorOpen }
                onChange={ ( value ) => setAttributes( { panelBackgroundColorOpen: value } ) }
            />
        </>
    )

    const panelTitleTypography = (
        <div className="gutena-accordion-title-typography">
            <FontFamilyControl
                label={ __( 'Font family', 'gutena-accordion' ) }
                fontFamilies={ useSetting( 'typography.fontFamilies' ) }
                value={ panelTitleFontFamily }
                onChange={ ( value ) => setAttributes( { panelTitleFontFamily: value } ) }
            />
            <FontSizePicker
                label={ __( 'Font size', 'gutena-accordion' ) }
                value={ panelTitleFontSize }
                onChange={ ( value ) => setAttributes( { panelTitleFontSize: value } ) }
                fallBackFontSize={ 14 }
                fontSizes={ useSetting( 'typography.fontSizes' ) }
            />
            <FontAppearanceControl
                hasFontStyles={ !! useSetting( 'typography.fontStyle' ) }
                hasFontWeights={ !! useSetting( 'typography.fontWeight' ) }
                value={ {
                    fontStyle: panelTitleFontStyle,
                    fontWeight: panelTitleFontWeight,
                } }
                onChange={ ( styles ) => {
                    setAttributes( {
                        panelTitleFontStyle: styles?.fontStyle,
                        panelTitleFontWeight: styles?.fontWeight
                    } )
                } }
            />
            <RangeControl
                label={ __( 'Line height', 'gutena-accordion' ) }
                value={ panelTitleLineHeight }
                onChange={ ( value ) => setAttributes( { panelTitleLineHeight: value } ) }
                min={ 0 }
                max={ 10 }
                step={ 0.1 }
                allowReset={ true }
            />
            <SelectControl
                label={ __( 'Text transform', 'gutena-accordion' ) } 
                value={ panelTitleTextTransform }
                options={ [
                    { label: __( 'None', 'gutena-accordion' ), value: '' },
                    { label: __( 'Lower case', 'gutena-accordion' ), value: 'lowercase' },
                    { label: __( 'Upper case', 'gutena-accordion' ), value: 'uppercase' },
                    { label: __( 'Capitalized case', 'gutena-accordion' ), value: 'capitalize' },
                ] }
                onChange={ ( value ) => setAttributes( { panelTitleTextTransform: value } ) }
            />
        </div>
    )

    const panelContentTypography = (
        <div className="gutena-accordion-content-typography">
            <FontFamilyControl
                label={ __( 'Font family', 'gutena-accordion' ) }
                fontFamilies={ useSetting( 'typography.fontFamilies' ) }
                value={ panelContentFontFamily }
                onChange={ ( value ) => setAttributes( { panelContentFontFamily: value } ) }
            />
            <FontSizePicker
                label={ __( 'Font size', 'gutena-accordion' ) }
                value={ panelContentFontSize }
                onChange={ ( value ) => setAttributes( { panelContentFontSize: value } ) }
                fallBackFontSize={ 14 }
                fontSizes={ useSetting( 'typography.fontSizes' ) }
            />
            <FontAppearanceControl
                hasFontStyles={ !! useSetting( 'typography.fontStyle' ) }
                hasFontWeights={ !! useSetting( 'typography.fontWeight' ) }
                value={ {
                    fontStyle: panelContentFontStyle,
                    fontWeight: panelContentFontWeight,
                } }
                onChange={ ( styles ) => {
                    setAttributes( {
                        panelContentFontStyle: styles?.fontStyle,
                        panelContentFontWeight: styles?.fontWeight
                    } )
                } }
            />
            <RangeControl
                label={ __( 'Line height', 'gutena-accordion' ) }
                value={ panelContentLineHeight }
                onChange={ ( value ) => setAttributes( { panelContentLineHeight: value } ) }
                min={ 0 }
                max={ 10 }
                step={ 0.1 }
                allowReset={ true }
            />
            <SelectControl
                label={ __( 'Text transform', 'gutena-accordion' ) } 
                value={ panelContentTextTransform }
                options={ [
                    { label: __( 'None', 'gutena-accordion' ), value: '' },
                    { label: __( 'Lower case', 'gutena-accordion' ), value: 'lowercase' },
                    { label: __( 'Upper case', 'gutena-accordion' ), value: 'uppercase' },
                    { label: __( 'Capitalized case', 'gutena-accordion' ), value: 'capitalize' },
                ] }
                onChange={ ( value ) => setAttributes( { panelContentTextTransform: value } ) }
            />
        </div>
    )

    const dynamicStyles = DynamicStyles( attributes )
    const renderCSS = (
		<style>
			{`
				.gutena-accordion-block-${ uniqueId } {
					${ Object.entries( dynamicStyles ).map( ( [ k, v ] ) => `${ k }:${ v }` ).join( ';' ) }
				}
			`}
		</style>
	);

    const customStyles = JSON.stringify( dynamicStyles )
    useEffect( () => {
        if ( customStyles != JSON.stringify( blockStyles ) ) {
			setAttributes( {
				blockStyles: dynamicStyles,
			} );
        }
    }, [ customStyles ] )

    return (
		<>
            <InspectorControls>
                <PanelBody title={ __( 'Panel Settings', 'gutena-accordion' ) } initialOpen={ false }>
                    <Spacer marginTop={ 3 } marginBottom={ 7 }>
                        <ToggleControl
                            label={ __( 'Open single panel at a time', 'gutena-accordion' ) }
                            checked={ panelCollapse }
                            onChange={ ( value ) => setAttributes( { panelCollapse: value } ) }
                        />
                    </Spacer>
                    <SelectControl
                        label={ __( 'Default Open', 'gutena-accordion' ) }
                        value={ panelDefaultOpen }
                        onChange={ ( value ) => setAttributes( { panelDefaultOpen: value } ) }
                    >
                        <option value="none">{ __( 'None', 'gutena-accordion' ) }</option>
                        {
                            Array.from( Array( innerBlocksCount ).keys() ).map( ( value ) => (
                                <option value={ value }>{ sprintf( __( 'Panel %d', 'gutena-accordion' ), value + 1 ) }</option>
                            ) )
                        }
                    </SelectControl>
                    <RangeControl
                        label={ __( 'Space between the panels', 'gutena-accordion' ) }
                        value={ panelSpaceBetween }
                        onChange={ ( value ) => setAttributes( { panelSpaceBetween: value } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label={ __( 'Margin below the title', 'gutena-accordion' ) }
                        value={ panelTitleContentGap }
                        onChange={ ( value ) => setAttributes( { panelTitleContentGap: value } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                </PanelBody>    
			    <PanelBody title={ __( 'Panel Styles', 'gutena-accordion' ) } initialOpen={ false }>
                    <TabPanel 
                        className="gutena-tab-panel"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name     : 'default',
                                title    : __( 'Default', 'gutena-accordion' ),
                                className: 'gutena-default-tab',
                            },
                            {
                                name     : 'active',
                                title    : __( 'Active', 'gutena-accordion' ),
                                className: 'gutena-active-tab',
                            },
                        ] }>
                        { ( tab ) => {
                                let tabout = panelDefaultSettings
                                if ( tab?.name == 'active')  {
                                    tabout = panelOpenSettings
                                }
                                return tabout
                            }
                        }
                    </TabPanel>
                </PanelBody>
                <PanelColorSettings
                    __experimentalHasMultipleOrigins
					__experimentalIsRenderedInSidebar
					title={ __( 'Color Settings', 'gutena-accordion' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: panelTitleColor,
                            onChange: ( value ) => setAttributes( { panelTitleColor: value } ),
							label: __( 'Title color', 'gutena-accordion' ),
						},
                        {
							value: panelContentColor,
                            onChange: ( value ) => setAttributes( { panelContentColor: value } ),
							label: __( 'Content color', 'gutena-accordion' ),
						},
					] }
				/>
                <PanelBody title={ __( 'Typography', 'gutena-accordion' ) } initialOpen={ false }>
                    <TabPanel 
                        className="gutena-tab-panel"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name     : 'title',
                                title    : __( 'Title', 'gutena-accordion' ),
                                className: 'gutena-title-tab',
                            },
                            {
                                name     : 'content',
                                title    : __( 'Content', 'gutena-accordion' ),
                                className: 'gutena-content-tab',
                            },
                        ] }>
                        { ( tab ) => {
                                let tabout = panelTitleTypography
                                if ( tab?.name == 'content')  {
                                    tabout = panelContentTypography
                                }
                                return tabout
                            }
                        }
                    </TabPanel>
                </PanelBody>
                <PanelBody title={ __( 'Trigger Icon Settings', 'gutena-accordion' ) } initialOpen={ false }>
                    <SelectControl
                        label={ __( 'Trigger icon', 'gutena-accordion' ) }
                        value={ panelTriggerIcon }
                        options={ [
                            { label: __( 'Plus Minus', 'gutena-accordion' ), value: 'plus-minus' },
                            { label: __( 'Up Down', 'gutena-accordion' ), value: 'up-down' },
                            { label: __( 'None', 'gutena-accordion' ), value: 'none' },
                        ] }
                        onChange={ ( value ) => setAttributes( { panelTriggerIcon: value } ) }
                    />
                </PanelBody>
            </InspectorControls>

            { renderCSS }
            <div { ...innerBlocksProps } data-single={ panelCollapse } data-open={ panelDefaultOpen } />
		</>
	);
}

function Placeholder( { clientId, attributes, setAttributes } ) {
    const defaultVariation = variations.filter( item => item.isDefault )[0] || variations[0];

    const { replaceInnerBlocks } = useDispatch( blockEditorStore );
    const blockProps = useBlockProps( {
        className: `gutena-accordion-block gutena-accordion-block-${ attributes.uniqueId }`,
    } );

    return (
        <div { ...blockProps }>
            <BlockVariationPicker
                label={ __( 'Accordion Style', 'gutena-accordion' ) }
                instructions={ __( 'Select a Accordion style to start with.', 'gutena-accordion' ) }
                variations={ variations }
                onSelect={ ( variation = defaultVariation ) => {
                    if ( variation.attributes ) {
                        setAttributes( variation.attributes );
                    }
                    if ( variation.innerBlocks ) {
                        replaceInnerBlocks(
                            clientId,
                            createBlocksFromInnerBlocksTemplate(
                                variation.innerBlocks
                            ),
                            true
                        );
                    }
                } }
                allowSkip
            />
        </div>
    );
}

export default function edit( props ) {
    const { clientId } = props;
    const hasInnerBlocks = useSelect(
        ( select ) =>
            select( blockEditorStore ).getBlocks( clientId ).length > 0,
        [ clientId ]
    );
    const Component = hasInnerBlocks
        ? EditContainer // display the inner blocks
        : Placeholder;  // or the variation picker

    return <Component { ...props } />;
}
