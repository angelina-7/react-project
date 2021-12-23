# Recipes App with React.js
made by Angelina Yakimova

### Used API - [Softuni practice server](https://github.com/softuni-practice-server/softuni-practice-server)

#### Implemented CRUD operations for Users, Recipes and Likes

### Start Application - start script
```javascript
npm i
npm start
```
Can't work without the server though.
```
npm run server
```

## Routes
#### /  Home Component
#### **/recipes**  Recipes Component
#### **/recipes/id/details**  Details Component
#### &emsp; **/recipes/create**  Create Component
#### &emsp; **/recipes/id/edit**  Edit Component
#### &emsp; Delete Functionality
#### &emsp; Like Functionality
&emsp;Create Edit Delete and Like are operetions that can be performed only by users or creators of the resource.

#### **/users/id**  UserProfile Component
&ensp;Shows user's own recipes.
- [ ] Implement showing liked recipes
- [ ] Change user credentials

## Code Specifications
### AuthContext 
Global context that stores state of user information.
To have acces to user data stored you can use the hook.
```
const { user, login, register, logout, isAuthenticated } = useAuthContext();
```
### LocalStorage hook
Stores the state to Local Storage.
```
const [state, setstate] = useLocalStorage(key, initialState);
```
### Services
#### Requester 
Handles fetch requests to API. Automatically attaches token if available.

