# repo-pattern-template

This is a demo application and will only be used in demonstrations of Wise Consulting As's new repo- code pattern.

This application is written in Asp.Net Core, uses Vue (v2.6), and Bootstrap 5 as its frontend frameworks.
Vue 2.6 was choosen in favor of the newly released Vue 3 due to it's support of using multiple spa apps (as this pattern uses one spa app per page, insted of the convensional one spa app with multiple pages).

The web application includes features such as:
 - Keyboard Shortcuts
 - Vue Submit Validaton (custom and default)

<hr />
# How to start the project
This mini-guide presumes you are using visual studo.

## Setup the Database
When setting up the database can you either set it up with some template data, or without.

### With Data
To setup the database with some template data will you use the included .dacpac file (template.Database.bacpac) in the template.Database project. 
1. Open MSSQL and connect to a server
2. Right-click on the Databases folder and open select the "Import Data-tier Application..."
3. Go through the wizard
4. Open the appsettings.json file in the template.Web project and edit the connection string

### Without Data
The easies way to setup the database without data is to use the included database project.
1. Right-click on the database project (inside Visual Studo) and select "Set As Startup Project",
2. Once selected, run the application. In the Output window will you be able to view the progress.
3. By Default is the database configured to connect to the database, so there is no need to edit the connection string.

## Run the application
In the solution explorer (Visual Studio) right click on the template.Web project and select it as the startup project.
After having choosen template.Web, run the applicaiton.


## Install Solution Template
By copying the `repo-pattern.zip` file into the `\Documents\Visual Studio 2019\Templates\ProjectTemplates` directory will visual studio setup the solution for you.

# TODO
 - Add Permission support
 - Add Release enviroment
 - Multi-Client / User specific
 - Datepicker: Range, min date, max date
 - Verify all file names
 - Edit login, register and password reset to use form instead of div on the v-on-submit
