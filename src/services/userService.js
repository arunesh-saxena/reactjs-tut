import {CONSTANTS} from '../constants';
// import {LOGOUT} from '../actions/userActions'
const setUserData = (user) => {
	if (user.success) {
		const userInfo = {
			username: user.data.username,
			email: user.data.email,
			id: user.data._id
		};
		setUserStorage(userInfo);
	}else{
		setUserStorage(null);
	}
};
const loginUser = data => {
		return fetch(CONSTANTS.api.login, {
					method: 'POST',
					headers: {
									Accept: 'application/json',
									'Content-Type': 'application/json'
					},
					body: data
		}).then((res)=>res.json())
		.then((res) => {
			setUserData(res);
			return res;
		}).catch(error => {
						console.error(error);
		});
};

const logoutUser = () => {
				return fetch(CONSTANTS.api.logout, {method: 'GET'}).then((res) => res.json())
				.then(res=>{
					setUserStorage(null);
					// LOGOUT();
					return res;
				}).catch(error => {
					console.error(error);
				})
};

const setUserStorage = (user) =>{
	if (user!==null && Object.keys(user).length) {
		const userData = {
						username: user.username,
						email: user.email,
						id: user.id
		};
		localStorage.setItem('userData', JSON.stringify(userData));
	} else {
		localStorage.removeItem('userData');
	}
}
const isUserLoggedIn = () => {
	return localStorage.hasOwnProperty('userData');
};
export const userService = {
				loginUser: loginUser,
				logoutUser: logoutUser,
				isUserLoggedIn: isUserLoggedIn
}
