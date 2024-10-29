# Simple Calendar Project

## What is the use of this project

This Project is a React Calendar App which allows users to do following

1. See a calendar that shows US holidays and sundays highlighted
2. Add notes to specific days
3. Delete existing notes or update notes
4. Send notes to server and save them
5. Load saved notes from the server

## Techstacks

`React`, `Tailwind CSS`, `Typescript`

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

`Clone the project into local`

You can clone this public project from this URL: git@github.com:duwand-dev/Custom-Calendar-Component.git

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Challenge

**Displaying daily view with holidays and sundays highlighted** :

This was the most challenging thing there are special years called leap years with 29 days in February and getting and displaying holidays for US was complicated. I made a function that checks if a year is leap year and get list of holidays using React library called date-holidays.
