# React Blog App

Welcome to React Blog App, a multi-page web application that lets you view and create blog posts. This application uses React Router for multi-page navigation and JSON Server to store data.

## Installation

To run the project, please clone the repository using the following command:

`git clone https://github.com/AbdelrahmanAshrafMohamedelsayed/dojo-blog.git`

Then, navigate to the project directory and run the following commands to install the dependencies:

`npm install`

`npm start`

You will also need to run JSON Server to store data for the blog. To do this, run the following command in a separate terminal window:

`npx json-server --watch data/db.json --port 8000`

After the dependencies are installed and the server is running, you can access the application by navigating to `http://localhost:3000/` in your web browser.

## Usage

On the home page, you can view all the blogs that have been created. Click on a blog post to view the entire blog on a separate page.

<img src=".\public\home.png" alt="home-page">

On the blog page, you can view the entire blog post. You can also navigate back to the home page by clicking on the "Home" button.

<img src=".\public\blog.png">

On the create page, you can create a new blog post by filling out the form and clicking on the "Add Blog" button.

<img src=".\public\create.png" alt="create-page"> 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
