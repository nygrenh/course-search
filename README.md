# Course Search

Goal of this project is to create an alternative search engine for https://studies.helsinki.fi/courses where results are shown as you type.

Please also read the [project report](docs/Report.md).

## Prerequisites & Installation

You can find the necessary prerequisites to get the project running and their installation instructions in our [installation instructions](docs/Installation.md).
## Run the entire project

Run `npm ci` in `frontend` folder.
In root run `docker-compose build` and `docker-compose up`

Frontend will be available at http://localhost:4365/.

## Code documentation

In the `Frontend` folder you can find the web page displayed for the user. The `Scraper` folder is where all the magic happens fetching the course information from UH API. Fractions of the codes are documented in the source files.

## License

Our project is licensed under the Apache License 2.
Typesense is licensed under GPL 3, which [is compatible](https://www.apache.org/licenses/GPL-compatibility.html) with our project.