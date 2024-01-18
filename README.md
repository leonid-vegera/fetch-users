# An implementation of the test task for Smart Head Company

## [DEMO Link of the Application](https://leonid-vegera.github.io/fetch-users/)

## Description of the task

- Create a web application using Vue.js that will display a list of users from the API
- Using an AJAX request (for example, using Axios or Fetch API) get a list of users from the endpoint
- Display the retrieved user data as a list on a web page. Each list element must contain the user's name, email, and avatar
- Implement the possibility to add a new user with a form. The form must contain fields for entering the user's name and email. When submitting a form with new user data, a POST request must be made to the endpoint to add the user
- Add functionality to remove a user from the list. Each list element must have a delete button or icon, which when clicked will execute a DELETE request to the corresponding API endpoint to delete the user
- Create a User Details component that will display additional information about each user when you click on their name in the list. When you click on a username, a modal window should appear with detailed information about the user, such as his avatar, name, email, and other available information
- Implement filtering of the list of users by name or other parameters. Add a search field where the user can enter a name or other parameters to filter the list. When entering data in the search field, the displayed list of users should be updated
- Add form field validation when adding a new user. The email field must be a valid email address and the name field must not be empty. When you try to submit a form with invalid data, the corresponding errors should be displayed
- Style your application using CSS or a CSS preprocessor


## Technologies used
- Vue.js
- CSS
- HTML
- Axios
- UUID library
- Fontawesome icons
- Mockapi API ([link](https://65141e918e505cebc2eac3e0.mockapi.io/players/))


