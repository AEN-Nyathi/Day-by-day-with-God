import AppState from "@Context/AppState";

const reducer = (state: AppState = new AppState(), action: ActionTypes): AppState => {
	switch (action.type) {
		case 'INITIALIZE':
			return new AppState();
		case 'isLoading':
		case 'isMenuOpen':
		case 'isError':
			if (action.type in state) {
				return {
					...state,
					[action.type]: action.data,
				};
			}
			return state;
	
		default:
			return state;
	}
};

export default reducer;
