# Project 2: Interactive Full-Stack Application: FIT SQUAD.

## Description:

Fit Squad is a health & fitness companion app aimed to keep you motivated and on schedule while navigating your busy life.

## User Story:

GIVEN a fitness app that allows me to track my workouts and health.
WHEN I log in for the first time that day.
THEN I am prompted with a survey that asks me my mood.
WHEN I view the homepage.
THEN I am greeted with a dashboard containing workout posts from all users.
WHEN I view my or someone else’s profile.
THEN I am shown all their posts, a short biography, and their mood for the day.  
WHEN I set myself a fitness goal
THEN I am given a goal to reach categorized by what type of workout it’s duration.
WHEN using this fitness tracker to keep record of my workouts
THEN I am given a fitness calculator to assist me in maintaining my health.
WHEN I make a post to the forum about my exercises
THEN I want my peers to be able to leave feedback on my posts.

## Installation:

Clone the github repo as shown below:
` git clone git@github.com:chandraucb/14-MVC-TechBlog.git`

Run node package install
`npm install`

Execute schema.sql to generate schema within mysql database
`mysql root -u -p`
`source db/schema.sql`

Update .env with database configuration.

Execute command to generate seed data
`node seeds/index.js `

## Usage:

After creating your profile you’ll be greeted with a mood survey and your dashboard. Here you’ll be able view posts from other users sharing their daily workouts, as well as create your own daily workout goals. Upon completion you can create your own posts to show that you were on your grind!

## Application User Interface Images:

![Dashboard](./public/assets/images/FireShot%20Capture%20008%20-%20Fit%20Squad%20-%20fit-squad-805c3e11f44f.herokuapp.com.png)

![Profile Page](./public/assets/images/FireShot%20Capture%20009%20-%20Fit%20Squad%20-%20fit-squad-805c3e11f44f.herokuapp.com.png)

## Future Development:

Moving forward some of the biggest features we can integrate are:
A “follow” or “friend” feature that allows users to connect easier with their friends or like minded individuals.
Video upload integration so that users can upload a video of their workout to pair with their posts (Will also allow for the posting of workout tutorials).
A bookmark post feature that allows users to return to posts that they liked (Pairs with video upload feature).
Long term fitness goal tracker that tracks metrics for month/yearly goals.
Integration of a algorithm so that new users are only recommended posts that they can relate to.
A badge system that you earn points from reaching your workout goals.
Integration of a BMI & calories calculator to assist with dieting.
The ability to see the history of another user’s posts(gives insight into another’s workout routine)
The ability to create groups (Fit Squads) where you can track your groups workout metrics and set group workout goals.

## Team Members:

- Andrew Berry
- Carlos Baltazar
- Chandra Mohan
- Eric Wang
- Kevin Gagante
- Junel Balbin

## Resources:

- Google Search & Youtube videos.
- ChatGpt for troubleshooting.
- Stack Overflow & MDN
- EdX and UCB.

## Coded With:

- Visual Studio Code.
- [Bulma CSS Framework.](https://bulma.io/)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)

## Contributing:

Open to contributions.

## Project Links:

- [Deployed Heroku](https://fit-squad-805c3e11f44f.herokuapp.com)
- [Github Repository](https://github.com/carlosmb001/fit_squad)
- [Presentation](https://docs.google.com/presentation/d/1BxDBs4zXbnkfWr21ou7s5M8Zy2tBDmPrzxjfOKQ-A3w/edit#slide=id.g2752a1e6d71_0_25)

## License:

- MIT License
