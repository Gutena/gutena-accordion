/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Template option choices for predefined columns layouts.
 */
const variations = [
	{
		name: 'default',
		title: __( 'Default' ),
		description: __( 'Default Style' ),
		icon: (
			<svg width="261" height="175" viewBox="0 0 261 175" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.157349" width="260" height="175" fill="white"/>
				<rect x="19.8573" y="93.4993" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
				<rect x="30.3506" y="101.798" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect x="19.8573" y="127.595" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
				<rect x="30.3506" y="135.894" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect x="19.8573" y="25.0327" width="220.6" height="58.9427" fill="white" stroke="#B3C8FD"/>
				<rect x="30.3506" y="34.7065" width="82.5694" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.3506" y="48.1799" width="176.698" height="1.3752" rx="0.687601" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.3506" y="56.429" width="186.607" height="1.3752" rx="0.687601" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.3506" y="64.678" width="176.698" height="1.3752" rx="0.687601" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.3506" y="72.9268" width="73.762" height="1.3752" rx="0.687601" fill="#94ABE7"/>
				<rect x="224.557" y="36.7991" width="6" height="1.22697" fill="#6884CA"/>
				<rect x="228.157" y="34.3457" width="6.13318" height="1.2" transform="rotate(90 228.157 34.3457)" fill="#6884CA"/>
				<rect x="224.557" y="103.855" width="6" height="1.22697" fill="#6884CA"/>
				<rect x="228.157" y="101.402" width="6.13318" height="1.2" transform="rotate(90 228.157 101.402)" fill="#6884CA"/>
				<rect x="224.557" y="138.201" width="6" height="1.22697" fill="#6884CA"/>
				<rect x="228.157" y="135.748" width="6.13318" height="1.2" transform="rotate(90 228.157 135.748)" fill="#6884CA"/>
			</svg>
		),
		isDefault: true,
		innerBlocks: [ 
			[ 'gutena/accordion-panel', {}, [
				[ 'gutena/accordion-panel-title', {}, [
					[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "plus-minus", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
				] ], 
				[ 'gutena/accordion-panel-content', {}, [
					[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
				] ]
			] ] 
		],
		attributes: {
			showVariation: false,
			panelPadding: {
				top: '15px',
				right: '15px',
				bottom: '15px',
				left: '15px'
			},
			panelSpaceBetween: 15,
			panelCollapse: true,
			panelBackgroundColor: '#ffffff',
			panelTitleTag: 'h6',
			panelTitleColor: '#252740',
			panelContentColor: '#575b7a',
			panelTitleFontSize: '18px',
			panelContentFontSize: '14px',
			panelTitleContentGap: 13,
			panelTriggerIcon: 'up-down',
		},
		scope: [ 'block' ],
	},
	{
		name: 'style-one',
		title: __( 'Style 1' ),
		description: __( 'Style 1 - Plus Minus' ),
		icon: (
			<svg width="261" height="175" viewBox="0 0 261 175" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.157349" width="260" height="175" fill="white"/>
			<rect x="19.8573" y="93.4993" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
			<rect x="30.3506" y="101.798" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
			<rect x="19.8573" y="127.595" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
			<rect x="30.3506" y="135.894" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
			<rect x="19.8573" y="25.0327" width="220.6" height="58.9427" fill="white" stroke="#B3C8FD"/>
			<rect x="30.3506" y="34.7065" width="82.5694" height="5.49933" rx="2.74966" fill="#94ABE7"/>
			<rect opacity="0.7" x="30.3506" y="48.1799" width="176.698" height="1.3752" rx="0.687601" fill="#94ABE7"/>
			<rect opacity="0.7" x="30.3506" y="56.429" width="186.607" height="1.3752" rx="0.687601" fill="#94ABE7"/>
			<rect opacity="0.7" x="30.3506" y="64.678" width="176.698" height="1.3752" rx="0.687601" fill="#94ABE7"/>
			<rect opacity="0.7" x="30.3506" y="72.9268" width="73.762" height="1.3752" rx="0.687601" fill="#94ABE7"/>
			<rect x="224.557" y="36.7991" width="6" height="1.22697" fill="#6884CA"/>
			<rect x="228.157" y="34.3457" width="6.13318" height="1.2" transform="rotate(90 228.157 34.3457)" fill="#6884CA"/>
			<rect x="224.557" y="103.855" width="6" height="1.22697" fill="#6884CA"/>
			<rect x="228.157" y="101.402" width="6.13318" height="1.2" transform="rotate(90 228.157 101.402)" fill="#6884CA"/>
			<rect x="224.557" y="138.201" width="6" height="1.22697" fill="#6884CA"/>
			<rect x="228.157" y="135.748" width="6.13318" height="1.2" transform="rotate(90 228.157 135.748)" fill="#6884CA"/>
			</svg>
		),
		innerBlocks: [ [ 'gutena/accordion-panel', {}, [
			[ 'gutena/accordion-panel-title', {}, [
				[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "plus-minus", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
			] ], 
			[ 'gutena/accordion-panel-content', {}, [
				[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
			] ]
		] ],
		[ 'gutena/accordion-panel', {}, [
			[ 'gutena/accordion-panel-title', {}, [
				[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "plus-minus", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
			] ], 
			[ 'gutena/accordion-panel-content', {}, [
				[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
			] ]
		] ],
		[ 'gutena/accordion-panel', {}, [
			[ 'gutena/accordion-panel-title', {}, [
				[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "plus-minus", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
			] ], 
			[ 'gutena/accordion-panel-content', {}, [
				[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
			] ]
		] ] ],
		attributes: {
			showVariation: false,
			panelPadding: {
				top: '15px',
				right: '15px',
				bottom: '15px',
				left: '15px'
			},
			panelSpaceBetween: 15,
			panelCollapse: false,
			panelBorder: {
				color: '#d8dfef',
				style: 'solid',
				width: '1px'
			},
			panelBackgroundColor: '#ffffff',
			panelTitleTag: 'h6',
			panelTitleColor: '#252740',
			panelContentColor: '#575b7a',
			panelTitleFontSize: '18px',
			panelContentFontSize: '14px',
			panelTitleContentGap: 13,
			panelTriggerIcon: 'plus-minus',
	},
		scope: [ 'block' ],
	},
	{
		name: 'style-two',
		title: __( 'Style 2' ),
		description: __( 'Style 2 - with Dropdown' ),
		icon: (
			<svg width="260" height="175" viewBox="0 0 260 175" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="260" height="175" fill="white"/>
				<rect x="19.7" y="93.4995" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
				<rect x="30.1932" y="101.798" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect x="19.7" y="127.595" width="220.6" height="22.3721" fill="white" stroke="#B3C8FD"/>
				<rect x="30.1932" y="135.894" width="86.7885" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect x="19.7" y="25.0327" width="220.6" height="58.9427" fill="white" stroke="#B3C8FD"/>
				<rect x="30.1932" y="34.7063" width="82.5694" height="5.49933" rx="2.74966" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.1932" y="48.1797" width="176.698" height="1.37483" rx="0.687416" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.1932" y="56.429" width="186.607" height="1.37483" rx="0.687416" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.1932" y="64.678" width="176.698" height="1.37483" rx="0.687416" fill="#94ABE7"/>
				<rect opacity="0.7" x="30.1932" y="72.9265" width="73.762" height="1.37483" rx="0.687416" fill="#94ABE7"/>
				<path d="M224.59 39.3414L228 35.8555L231.41 39.3414" stroke="#6884CA" stroke-width="2"/>
				<path d="M224.59 103.583L228 107.069L231.41 103.583" stroke="#6884CA" stroke-width="2"/>
				<path d="M224 137.446L227.41 140.932L230.821 137.446" stroke="#6884CA" stroke-width="2"/>
			</svg>
		),
		innerBlocks: [
		 	[ 'gutena/accordion-panel', {}, [
				[ 'gutena/accordion-panel-title', {}, [
					[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "up-down", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
				] ], 
				[ 'gutena/accordion-panel-content', {}, [
					[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
				] ]
			] ],
			[ 'gutena/accordion-panel', {}, [
				[ 'gutena/accordion-panel-title', {}, [
					[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "up-down", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
				] ], 
				[ 'gutena/accordion-panel-content', {}, [
					[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
				] ]
			] ],
			[ 'gutena/accordion-panel', {}, [
				[ 'gutena/accordion-panel-title', {}, [
					[ 'core/heading', { content: "Add your title here", panelTriggerIconGlobal: "up-down", textAlign: "left", level: 6, style: { spacing: { margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" } } } } ]
				] ], 
				[ 'gutena/accordion-panel-content', {}, [
					[ 'core/paragraph', { content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", color: { text: "#505050" }, style: { spacing: { margin: { top: "0", bottom: "0" } } } } ]
				] ]
			] ]
		],
		attributes: {
			showVariation: false,
			panelPadding: {
				top: '15px',
				right: '15px',
				bottom: '15px',
				left: '15px'
			},
			panelSpaceBetween: 15,
			panelCollapse: true,
			panelBorder: {
				color: '#d8dfef',
				style: 'solid',
				width: '1px'
			},
			panelBackgroundColor: '#ffffff',
			panelTitleTag: 'h6',
			panelTitleColor: '#252740',
			panelContentColor: '#575b7a',
			panelTitleFontSize: '18px',
			panelContentFontSize: '14px',
			panelTitleContentGap: 13,
			panelTriggerIcon: 'up-down',
		},
		scope: [ 'block' ],
	}
];

export default variations;
