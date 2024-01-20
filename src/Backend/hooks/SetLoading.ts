export const Load = (
	dispatch: React.Dispatch<ActionTypes>,
	MG: string = 'World Club is a grouping savings scheme, a system which is not aim to make people rich but to have a affordable life',
	progress: string = 'Loading...'
) => {
	dispatch({
		type: 'isLoading',
		data: {
			state: MG ? true : false,
			message: MG,
			progress: progress,
		},
	});
};
