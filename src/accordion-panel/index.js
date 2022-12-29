/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import metadata from './data.json'
import edit from './edit'
import save from './save'

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="1.5" height="20" fill="#0EA489"/>
            <rect x="21" y="2" width="1.5" height="20" fill="#0EA489"/>
            <rect x="2" y="3" width="1.5" height="20.5" transform="rotate(-90 2 3)" fill="#0EA489"/>
            <rect x="2" y="22" width="1.5" height="20.5" transform="rotate(-90 2 22)" fill="#0EA489"/>
            <rect x="5" y="13" width="7" height="14" transform="rotate(-90 5 13)" fill="#0EA489"/>
            <rect x="5" y="17" width="2" height="14" transform="rotate(-90 5 17)" fill="#0EA489"/>
        </svg>
    )
} )