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
            <g clip-path="url(#clip0_3264_121)">
                <rect x="2" y="17" width="9" height="2" fill="#0EA489"/>
                <rect x="14" y="17" width="8" height="2" fill="#0EA489"/>
                <rect x="17" y="22" width="8" height="2" transform="rotate(-90 17 22)" fill="#0EA489"/>
                <rect x="2" y="3" width="20" height="2" fill="#0EA489"/>
                <rect x="2" y="10" width="20" height="2" fill="#0EA489"/>
            </g>
            <defs>
                <clipPath id="clip0_3264_121">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
} )