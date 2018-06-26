const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

import Editor from './components/Editor'

registerBlockType( 'orbitfox/contact-form-7', {
	title: __( 'Contact Form 7' ),
	icon: 'index-card',
	category: 'common',
	supports: {
		html: false,
	},

	edit: Editor,
	save() {
		return null;
	},
} );
