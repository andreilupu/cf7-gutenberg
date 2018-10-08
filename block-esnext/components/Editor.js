/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	TextControl,
	SelectControl,
	Placeholder,
} = wp.components;

const { withSelect } = wp.data;

const { InspectorControls } = wp.editor;

class Editor extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {forms, focus, attributes, setAttributes} = this.props
		let options = [
			{value: 'none', label: __('-- Select Form --')}
		]

		const {formID, title, className} = attributes

		if (typeof forms !== "undefined" && forms !== []) {
			forms.forEach(function (e, i) {
				options.push({
					value: e.id,
					label: e.title
				})
			})
		}

		return (
			<Placeholder
				key="cf-7-block"
				icon="email"
				label={__('Contact Form 7 Block')}
				className={className}>
				<SelectControl
					label={__('Contact Form')}
					value={formID || "none"}
					onChange={newValue => {
						setAttributes({formID: newValue})
					}}
					options={options}
				/>
				{(formID !== "none" && focus)
					? <InspectorControls>
						<TextControl
							placeholder={__('Title')}
							value={title}
							onChange={newValue => {
								setAttributes({title: newValue})
							}}/>
						<TextControl
							label={__('Email')}
							onChange={newValue => {
								setAttributes({email: newValue})
							}}/>
					</InspectorControls>
					: null}
			</Placeholder>)
	}
}

export default withSelect( ( select ) => {
	const forms = select( 'orbitfox/contact-form-7' ).getCFList();
	return {
		forms
	};
} )( Editor );