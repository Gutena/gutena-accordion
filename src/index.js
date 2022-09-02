/**
 * Register sub blocks.
 */
import './accordion-panel/index.js';
import './accordion-panel-title/index.js';
import './accordion-panel-content/index.js';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from "./edit";
import save from './save';

import './style.scss'

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="1.5" height="20" fill="#3F6DE4"/>
            <rect x="21" y="2" width="1.5" height="20" fill="#3F6DE4"/>
            <rect x="2" y="3" width="1.5" height="20.5" transform="rotate(-90 2 3)" fill="#3F6DE4"/>
            <rect x="2" y="22" width="1.5" height="20.5" transform="rotate(-90 2 22)" fill="#3F6DE4"/>
            <rect x="2" y="15" width="1.5" height="20.5" transform="rotate(-90 2 15)" fill="#3F6DE4"/>
            <rect x="2" y="9" width="1.5" height="20.5" transform="rotate(-90 2 9)" fill="#3F6DE4"/>
        </svg>
    )
} )