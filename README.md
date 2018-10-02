Giphy Party is a front end single page app built with React. 

### Run the App:

To run the app, clone the repo and in the project directory run `npm install` to install project dependencies. Then run `npm start`. Open `http://localhost:3000` in your browser. 

To see tests, run `npm test` in the terminal.

### Components:

```
App
|__Header (navbar)
|__GiphySection (search, random, and upload)
    |__Mosaic (displays giphy results)
        |__GiphyCard (individual giphy)
```

### Completed Requirements: 
  - A user can search for giphys using the search form. 
  - A user can get details on a specific giphy by clicking on the giphy's info button. 
  - A user can share a giphy to Slack using the share to slack button.
  - App uses flexbox and scales based on screensize. 

### Completed Additional Features:
  - A user can generate a random giphy with the surprise me button.
  - A user can upload their own giphy
  - Basic render and snapshot tests added for every component

### Potential extensions for this project beyond suggested improvements:
  - Add in React Navigation and include specific endpoints such as /:giphyid, /search, /upload
  - Add a back end to allow data to persist, or utilize local storage
  - Add other social media share buttons to each giphy. 
  - More styling, potentially add in more graphics

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).





