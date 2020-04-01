import produce from 'immer';

const INITIAL_STATE = {
	token: null,
	signed: false,
	loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_REQUEST': {
				console.log(action);
				draft.loading = true;
				break;
			}
			case '@auth/SIGN_IN_SUCCESS': {
				console.log(action);
				draft.token = action.payload.token;
				draft.signed = true;
				break;
			}
			case '@auth/SIGN_FAILURE': {
				console.log(action);
				draft.loading = false;
				break;
			}
			default:
		}
	});
}
