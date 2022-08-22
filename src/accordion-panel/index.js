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
    <path d="M20.1 3C20.3387 3 20.5676 3.10536 20.7364 3.29289C20.9052 3.48043 21 3.73478 21 4V20C21 20.2652 20.9052 20.5196 20.7364 20.7071C20.5676 20.8946 20.3387 21 20.1 21H3.9C3.66131 21 3.43239 20.8946 3.2636 20.7071C3.09482 20.5196 3 20.2652 3 20V4C3 3.73478 3.09482 3.48043 3.2636 3.29289C3.43239 3.10536 3.66131 3 3.9 3H20.1ZM4.8 10V19H19.2V10H4.8ZM4.8 8H19.2V5H4.8V8Z" fill="#3F6DE4"/>
    </svg>
} )