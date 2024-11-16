class PUBLIC {
	// privates
	private association = '/association'
	private activity = '/activity'
	private press_center = '/press-center'

	HOME = '/'
	FOR_CUSTOMER = `/for-client`
	FOR_EXECUTOR = `/for-implementer`
	
	ASSOCIATION = {
		TASKS: `${this.association}/tasks`,
		CHARTER: `${this.association}/charter`,
		DIRECTORS: `${this.association}/directors`,
		COMMITTEES: `${this.association}/committees`,
		PARTNERS: `${this.association}/partners`,
		JOIN: `${this.association}/join-the-association`
	}

	ACTIVITY = {
		DIRECTION: `${this.activity}/direction`,
		LAWS: `${this.activity}/laws`,
		RESOLUTION_AND_DECREES: `${this.activity}/decrees`,
		PROJECTS: `${this.activity}/projects`
	}

	PRESS_CENTER = {
		DIRECTION: `${this.press_center}/announcements`,
		NEWS: `${this.press_center}/news`,
		GALLERY: `${this.press_center}/gallery`,
		PUBLICATIONS: `${this.press_center}/publications`,
		EDUCATIONS: `${this.press_center}/education`,
		PRESS_SERVICE: `${this.press_center}/press-service`
	}

	/// other pages
	AUTH = `/auth/login`
	REGISTER = `/auth/sign-up`
	REGISTER_CONFIRM = `/auth/sign-up/confirmation`

	RESET_PASSWORD = `/reset-password`
	RESET_PASSWORD_CREATE = `/forgot-password/create`
}
export const PUBLIC_PAGES = new PUBLIC()
