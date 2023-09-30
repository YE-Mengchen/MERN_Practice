import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import Profile from './components/profile/Profile';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={
            <section className="container">
              <Alert />
              <Register />
            </section>
          }/>
        <Route path="/login" element={
            <section className="container">
              <Alert />
              <Login />
            </section>
          }/>
          <Route path="/profiles" element={
            <section className="container">
              <Alert />
              <Profiles />
            </section>
          }/>
          <Route path="/profile/:id" element={
            <section className="container">
              <Alert />
              <Profile />
            </section>
          }/>
          <Route path="/dashboard" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <Dashboard />
              </section>
            </PrivateRoute>
          } />

          <Route path="/create-profile" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <CreateProfile />
              </section>
            </PrivateRoute>
          } />
          <Route path="/edit-profile" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <EditProfile />
              </section>
            </PrivateRoute>
          } />

          <Route path="/add-experience" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <AddExperience />
              </section>
            </PrivateRoute>
          } />

          <Route path="/add-education" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <AddEducation />
              </section>
            </PrivateRoute>
          } />

          <Route path="/posts" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <Posts />
              </section>
            </PrivateRoute>
          } />

          <Route path="/posts/:id" element={ 
            <PrivateRoute>
              <section className="container">
                <Alert />
                <Post />
              </section>
            </PrivateRoute>
          } />
          <Route path="/*" element={<NotFound />} />

      </Routes>
    </Router>
  </Provider>
  
)};

export default App;
