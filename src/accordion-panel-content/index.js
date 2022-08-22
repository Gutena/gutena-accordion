/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import metadata from './block.json'
import edit from './edit'
import save from './save'

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.2632H11.5714V19.1579H3V17.2632ZM3 10.6316H20.1429V12.5263H3V10.6316ZM3 4H20.1429V5.89474H3V4ZM16.7143 17.2632V14.4211H18.4286V17.2632H21V19.1579H18.4286V22H16.7143V19.1579H14.1429V17.2632H16.7143Z" fill="#3F6DE4"/>
    </svg>
} )