import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
// import NavBar from './navbar/navbar';
// import HomePageContainer from './home/home_container';
// import BookingIndexContainer from './booking/booking_index_container';
// import ConfirmationContainer from './confirmation/confirmation_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
// import ProfileContainer from './profile/profile_container';


export default () => (
    <div className="content-wrapper">
        {/* <header>
            <Route path="/" component={NavBar} />
        </header> */}
        <Switch>
            {/* <Route exact path="/" component={HomePageContainer} /> */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <ProtectedRoute path="/profile" component={ProfileContainer} />
            <Route path="/booking" component={BookingIndexContainer} />
            <Route path="/confirmation" component={ConfirmationContainer} /> */}
        </Switch>
    </div>
);