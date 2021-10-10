# Course Search

* System Goals (1 point)

Goal of this project is to create an alternative search engine for https://studies.helsinki.fi/courses where results are shown as you type.
This alternative search engine is intended to provide a user experience that we feel is better than the current one provided by the University of Helsinki.

## System Architecture

* System architecture (2 points)

Typesense, Scrape and Frontend are each in its own Docker container. The Scraper fetches data from the studies.helsinki.fi API and from the data we pick the relevant data that we push to the Typesense search engine database.

Frontend directly queries data from typesense and displays results.

![Course Search Architecture](../images/architecture.jpg)
*A diagram representing the system architecture*


* Components / Module description including the interfaces exposed between the modules (2 points)

Interface: typesense api (with our schema)

### Typesense

An open source search engine that supports spelling mistakes and instantaneous search from database as you type. [More information here](https://typesense.org/).

### Scraper

Self-built scraper that fetches necessary course information from studies.helsinki.fi, does type checking to the API data and passes it to Typesense's collection.

### Frontend

A self built frontend built upon Next.js with React that provides the user interface for search queries and filtering.

* Communication channel between the modules. For instance, do the modules use secure communication to communicate with each other, if yes, how? (2 points)

Communication channel is http requests between frontend and typesense and scraper and typesense.

Not in development because they are only available in localhost. If we were to deploy this to a production environment, it would be easy to setup https.

* Pros and cons of the open-source components/modules used for developing the system, and the modules/components you have built (3 points)
* cons: studies.helsinki.fi API is limited to 30 results per page, meaning we have to fetch data from all pages in different queries.
* pros: Typesense supports spelling mistakes
* pros: Typesense search as you type
* pros: typesense easy to use
* cons: Typesense schema does not support objects
* pros: Searching can be done
* con: courses.helsinki.fi api not made for this
* pros: typescript gave us type safety and it made writing a parser for the courses.helsinki.fi data much easier
* pros: next.js made setting up the frontend really easy
* pros: there were helper components that made it easy to integrate typesense to react
* pros: react allowed us to manage ui declaratively, meaning we don't have to make cumbersome manual ui changes
* cons: had some file syncing problems with docker compose relating to permissions
* Which of the fallacies of the distributed system does your system violate, and how (0.5 points).

all of them

## Extending current architecture

* What needs to be added to your system be used to be integrated/extended by another system (2 points).

To extend the search engine to support different search data, you need to create a schema for Typesense and create a new scraper for the new API endpoint. In the Frontend service, you need to create new page.

* Evaluation. Methodology used for evaluating the system performance, and the key results (2 points)

From typesense readme.

## Future work for improvements
* Avenues for future work (0.5 points).

Better filtering
