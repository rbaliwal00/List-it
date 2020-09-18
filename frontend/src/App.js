import React, { useState, useCallback, Suspense} from 'react';
import { BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';

// import User from './user/pages/User';
// import Signup from './user/pages/Signup';
 import Home from './home/Home';
// import SubArea from './postings/components/SubArea';
// import Type from './postings/components/Type';
// import Category1 from './postings/components/Category1';
// import Form from './postings/components/Form';
// import GigForm from './postings/components/GigForm';
// import CommunityForm from './postings/components/CommunityForm';
// import HousingForm from './postings/components/HousingForm';
// import SaleForm from './postings/components/SaleForm';
// import Category2 from './postings/components/Category2';
// import Category2Sub1 from './postings/components/Category2Sub1';
// import Category2Sub2 from './postings/components/Category2Sub2';
// import Category3 from './postings/components/Category3';
// import Category4 from './postings/components/Category4';
// import Category5 from './postings/components/Category5';
// import Category6 from './postings/components/Category6';
// import Category7 from './postings/components/Category7';
// import Category10 from './postings/components/Category10';
// import Category11 from './postings/components/Category11';
// import Category12 from './postings/components/Category12';
// import EditImage from './postings/components/EditImage';
// import PostingList from './postings/components/PostingList';
// import UpdatePost from './postings/pages/UpdatePost';
 import { AuthContext } from './shared/context/auth-context';
 import UserPosts from './postings/pages/UserPosts';
// import Postings from './postings/pages/Postings';
// import Posting from './postings/pages/Posting';
 import LoadingSpinner from './shared/UIElements/LoadingSpinner';

const User = React.lazy(() => import('./user/pages/User'));
const Signup = React.lazy(() => import('./user/pages/Signup'));
const SubArea = React.lazy(() => import('./postings/components/SubArea'));
const Type = React.lazy(() => import('./postings/components/Type'));
const Category1 = React.lazy(() => import('./postings/components/Category1'));
const Form = React.lazy(() => import('./postings/components/Form'));
const GigForm = React.lazy(() => import('./postings/components/GigForm'));
const CommunityForm = React.lazy(() => import('./postings/components/CommunityForm'));
const HousingForm = React.lazy(() => import('./postings/components/HousingForm'));
const SaleForm = React.lazy(() => import('./postings/components/SaleForm'));
const Category2 = React.lazy(() => import('./postings/components/Category2'));
const  Category2Sub1 = React.lazy(() => import('./postings/components/Category2Sub1'));
const Category2Sub2 = React.lazy(() => import('./postings/components/Category2Sub2'));
const Category3 = React.lazy(() => import('./postings/components/Category3'));
const Category4 = React.lazy(() => import('./postings/components/Category4'));
const  Category5= React.lazy(() => import('./postings/components/Category5'));
const Category6  = React.lazy(() => import('./postings/components/Category6'));
const Category7 = React.lazy(() => import('./postings/components/Category7'));
const  Category10= React.lazy(() => import('./postings/components/Category10'));
const Category11 = React.lazy(() => import('./postings/components/Category11'));
const Category12 = React.lazy(() => import('./postings/components/Category12'));
const EditImage = React.lazy(() => import('./postings/components/EditImage'));
const PostingList = React.lazy(() => import('./postings/components/PostingList'));
const UpdatePost = React.lazy(() => import('./postings/pages/UpdatePost'));
const Postings = React.lazy(() => import('./postings/pages/Postings'));
const Posting = React.lazy(() => import('./postings/pages/Posting'));


const App = () => {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid, token) => {
		setToken(token);
		setUserId(uid);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
	}, []);

	let routes;

	if(token) {
		routes = (
			<React.Fragment>
				<Switch>
					<Route path="/postings/" exact>
						<PostingList />
					</Route>
					<Route path="/postings/:postId" exact>
						<Posting />
					</Route>
					<Route path="/" exact>
						<Home userId={userId}/>
					</Route>
					<Route path="/:userId/posts" exact>
						<UserPosts />
					</Route>
					<Route path="/postings/new/location" exact>
						<SubArea />
					</Route>
					<Route path="/:location/type" exact>
						<Type />
					</Route>
					<Route path="/:location/:categoryType/category1" exact>
						<Category1 />
					</Route>
					<Route path="/:location/:categoryType/category2" exact>
						<Category2 />
					</Route>
					<Route path="/:location/:categoryType/HireSomeone" exact>
						<Category2Sub1 />
					</Route>
					<Route path="/:location/:categoryType/ServiceToOffer" exact>
						<Category2Sub2 />
					</Route>
					<Route path="/:location/:categoryType/category3" exact>
						<Category3 />
					</Route>
					<Route path="/:location/:categoryType/category4" exact>
						<Category4 />
					</Route>
					<Route path="/:location/:categoryType/category5" exact>
						<Category5 />
					</Route>
					<Route path="/:location/:categoryType/category6" exact>
						<Category6 />
					</Route>
					<Route path="/:location/:categoryType/category7" exact>
						<Category7 />
					</Route>
					<Route path="/:location/:categoryType/category10" exact>
						<Category10 />
					</Route>
					<Route path="/:location/:categoryType/category11" exact>
						<Category11 />
					</Route>
					<Route path="/:location/:categoryType/category12" exact>
						<Category12 />
					</Route>
					<Route path="/:location/:categoryType/:form/jobform" exact>
						<Form />
					</Route>
					<Route path="/:location/:categoryType/:form/gigform" exact>
						<GigForm />
					</Route>
					<Route path="/:location/:categoryType/:form/communityform" exact>
						<CommunityForm />
					</Route>
					<Route path="/:location/:categoryType/:form/housingform" exact>
						<HousingForm />
					</Route>
					<Route path="/:location/:categoryType/:form/saleform" exact>
						<SaleForm />
					</Route>
					<Route path="/:location/:categoryType/saleform" exact>
						<SaleForm />
					</Route>
					<Route path="/:location/:categoryType/:form/editimage" exact>
						<EditImage />
					</Route>
					<Route path="/post/:postId" exact>
						<UpdatePost />
					</Route>

				<Route path="/type/:type" exact>
					<Postings />
				</Route>
				<Route path="/form/:form" exact>
					<Postings />
				</Route>
					<Redirect to="/" />
				</Switch>
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/postings/:postId" exact>
						<Posting />
					</Route>
					<Route path="/type/:type" exact>
						<Postings />
					</Route>
					<Route path="/form/:form" exact>
						<Postings />
					</Route>
				<Route path="/:userId/posts" exact>
					<UserPosts />
				</Route>
				<Route path="/auth" exact>
					<User />
				</Route>
				<Route path="/create-account" exact>
					<Signup />
				</Route>
				</Switch>
			</React.Fragment>
		);
    }

	return (
		<AuthContext.Provider value={{
			isLoggedIn: !!token,
			token: token,
			userId: userId,
			login: login,
			logout: logout
		}}>
			<BrowserRouter>
				<Suspense fallback={<div className="center"><LoadingSpinner/></div>}>{routes}</Suspense>
			</BrowserRouter>
	  </AuthContext.Provider>
  );
};

export default App;
