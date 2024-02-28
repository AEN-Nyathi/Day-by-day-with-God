class AppState {
	ID: string;
	Name: string;
	Picture: string;
	Theme: ThemeTypes;
	YourEmail: string;
	PicturePath?: string;
	createdAt: {
		seconds: number;
		nanoseconds: number;
	};

	isError: { state: boolean, message: string };
	isLoading: {
		progress: string,
		state: boolean,
		message: string,
	};
	isMenuOpen: boolean
	constructor(

	) {

		// this.user = user;
		this.Name = "E";
		this.ID = "string";
		this.Picture = "string";
		this.Theme = {
			Color: 'string',
			Transparency: 1,
			Mode: 'light',
			HexColor: "string",
		};
		this.YourEmail = "string";
		this.PicturePath = "string";
		this.createdAt = {
			seconds: 1,
			nanoseconds: 2,
		};
		this.isMenuOpen = false;
		this.isLoading = {
			progress: 'Loading...',
			state: false,
			message: '',
		};
		this.isError = { state: false, message: '' };

	}
}

export default AppState;
