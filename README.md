# Makers BnB JavaScript

The purpose of this project is to explore concepts covered throughout the course but in a language of my choice.

I would like to gain more exposure to JavaScript as this is a language I forsee myself using during my career as a software engineer. The goal of Week 6 was focused on being able to build a project according to a specification which meant breaking down the project into user tasks.

### Personal objectives
* Get a node project up and running
* Implement user authentication
* Understand end to end testing for a JavaScript app
* Gain experience using a No SQL database

### Tech Stack
JavaScript
Express
Cypress
Jasmine
MongoDB

### Getting started
```js
$ git clone 'https://github.com/ayelishaamoah/makersbnb_js.git'
$ npm install //install packages listed in package.json
$ npm run server //this will run the 'server' script in package.json
```

### Running Tests
Jasmine

Open ```SpecRunner.html``` in the browser

Running end to end tests using cyprus
``` 
$ npm run cypress:open 
```

### MakersBnB specification
We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

#### Headline specifications
* Any signed-up user can list a new space.
* Users can list multiple spaces.
* Users should be able to name their space, provide a short description of the space, and a price per night.
* Users should be able to offer a range of dates where their space is available.
* Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
* Nights for which a space has already been booked should not be available for users to book that space.
* Until a user has confirmed a booking request, that space can still be booked for that night.

#### Nice-to-haves
* Users should receive an email whenever one of the following happens:
* They sign up
* They create a space
* They update a space
* A user requests to book their space
* They confirm a request
* They request to book a space
* Their request to book a space is confirmed
* Their request to book a space is denied
* Users should receive a text message to a provided number whenever one of the following happens:
* A user requests to book their space
* Their request to book a space is confirmed
* Their request to book a space is denied
* A ‘chat’ functionality once a space has been booked, allowing users whose space-booking request has been confirmed to chat with the user that owns that space
* Basic payment implementation though Stripe.

#### User Stories
```
As a user
So that I can list a new space
I would like to be able to sign up to Makers BnB

As a user
So that I can encourage people to book
I would like to be able to add a detailed listing

As a user
So that I can take a well deserved break
I would like to be able to request a booking for one night

As a user
So that I can manage my listing
I would like to choose when the listing will be available

As a user
So that I can make more money
I would like to be able to list multiple spaces

As a user
So that I can rent out my space
I would like to be able to confirm one request

As a user
So that I don’t waste my time
I would like to know if a space has already been booked for my preferred dates
```
