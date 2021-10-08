# Course Search

* System Goals (1 point)

Goal of this project is to create an alternative search engine for https://studies.helsinki.fi/courses where results are shown as you type.
This alternative search engine is intended to provide an user experience that we feel is better then the current one provided by the University of Helsinki.

## System Architecture

* System architecture (2 points)

A brief overview of the architecture. Typesense, Scrape and Frontend are each in its own Docker container. The Scraper fetches data from the studies.helsinki.fi API and from the data we pick the relevant data that we push to the Typesense search engine database.

![Course Search Architecture](../images/architecture.jpg)  
*A diagram representing the system architecture*

### Typesense

An open source search engine that supports spelling mistakes and instantaneous search from database as you type. [More information here](https://typesense.org/).

### Scraper

Self-built scraper that fetches necessary course infromation from studies.helsinki.fi, does type checking to the API data and passes it to Typesenses colleciton. 

### Frontend

A self built frontend built upon Next.js with React that provides the user inferface for search queries and filtering.

* Components / Module description including the interfaces exposed between the modules (2 points)
* Communication channel between the modules. For instance, do the modules use secure communication to communicate with each other, if yes, how? (2 points)
* Pros and cons of the open-source components/modules used for developing the system, and the modules/components you have built (3 points)
    * cons: studies.helsinki.fi API is limited to 10 000 results, meaning we have to fetch all the data in different queries.
    * pros: Typesense supports spelling mistakes
    * pros: Typesense search as you type
    * pros: Searching can be done 
* Which of the fallacies of the distributed system does your system violate, and how (0.5 points).

## Extending current architecture

* What needs to be added to your system be used to be integrated/extended by another system (2 points).

To extend the search engine to support different search data, you need to create a schema for Typesense and create a new scraper for the new API endpoint. In the Frontend service, you need to create new page.

* Evaluation. Methodology used for evaluating the system performance, and the key results (2 points)

## Future work for improvements
* Avenues for future work (0.5 points).