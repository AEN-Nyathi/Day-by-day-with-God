import AppState from "@Context/AppState";

const reducer = (state: AppState = new AppState(), action: ActionTypes): AppState => {
	switch (action.type) {
		case 'INITIALIZE':
			return new AppState();
		default:
			return state;
	}
};

export default reducer;
