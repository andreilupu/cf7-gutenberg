const { data, apiRequest } = wp;
const { registerStore, dispatch } = data;

const DEFAULT_STATE = {};

registerStore( 'orbitfox/contact-form-7', {
	reducer( state = DEFAULT_STATE, action ) {

		switch ( action.type ) {
			case 'GET_CF7_LIST':
				return {
					forms: action.data,
				};
		}

		return state;
	},

	actions: {
		setCFList(data) {
			return {
				type: 'GET_CF7_LIST',
				data: data
			}
		}
	},

	selectors: {
		getCFList( data ) {
			if ( typeof data.forms !== "undefined" ) {
				return data.forms
			}
		}
	},

	resolvers: {
		async getCFList() {
			let result = []

			result = await apiRequest( { path: `contact-form-7/v1/contact-forms/` } );

			dispatch( 'orbitfox/contact-form-7' ).setCFList( result );
		}
	},
} );