# After Midnight
## General Assembly Project 3


### Timeframe
5 days

### Technologies, frameworks and packages
* React
* Webpack
* MongoDB/Mongoose
* Express
* Ajax
* JavaScript (ES6)
* HTML5
* Bulma (CSS framework)
* SCSS
* GitHub
* Insomnia
* React Select
* ReactMapBox-GL


### Project brief and team
The brief was to build a full-stack application with a React front-end and noSQL database.  
The application had to include data schema and a RESTful api framework.  
The project was collaboration with [Hugo Raymond](https://github.com/h-raymond) merging code from a single GitHub repository.  
The application is deployed via Git on Heroku and can be found here: [After Midnight](http://after-midnight.herokuapp.com)

### App overview
The application allows users to view on a map venues that are open after midnight.
User current location is also highlighted so venues that are close by can be easily identified.
Upon clicking a marker, a pop up shows basic info, and the `More Info` link navigates to the `Venue Page`.
The `Venue Page` provides more detailed information about each venue including which nights of week the venue is open after midnight.  
The app provides register/login options.  
Once registered and logged in a user gains access to the `Add Venue` page.


### Development process

Once we had decided on our idea, we set about wire-framing the various pages of our app.
For our MVP we wanted our `Add Venue` form to perform solidly, and our database of venues to be displayed on the `Venues` page in a text list format.  
We only added the map functionality on the `Venues` page after we had reached MVP.



### Wins
Upon achieving MVP it was very enjoyable to move on to displaying our database of venues on a map using `ReactMapBox-GL`.  
Referencing the documentation we were able to add customised
* Markers
* Popups
* Colours

We also were pleased to add the `You Are Here` marker, as this improved the overall app experience.



### Challenges
The biggest challenge of our project was the `Add Venue` form.
Our aim was to help users populate the form.
Upon entering a venue name and clicking 'Go', the search bar at the top of the page pulls information from the `YelpAPI` then automatically populates most of the form fields.





### Screen Shots
* #### Index Page
![After Midnight Index Page](https://user-images.githubusercontent.com/47188720/59195804-d101a280-8b84-11e9-84bb-9bab2b618cda.png)

* #### Venue Page
![After Midnight Venue Page](https://user-images.githubusercontent.com/47188720/59195894-13c37a80-8b85-11e9-883c-9775537a55fb.png)

* #### Add Venue Form
![After Midnight Form](https://user-images.githubusercontent.com/47188720/59196372-62254900-8b86-11e9-8f85-aa4b7028a023.png)


### Future enhancements
* Filter by venue type on venue index page
* Option to edit and delete venues that user has created
* Option for user to add their own images
