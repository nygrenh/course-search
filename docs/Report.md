# Course Search

* System Goals (1 point)

Goal of this project is to create an alternative search engine for https://studies.helsinki.fi/courses where results are shown as you type.

## System Architecture

* System architecture (2 points)

A brief overview of the architecture. Typesense, Scrape and Frontend are each in its own Docker container.

![Course Search Architecture](../images/architecture.jpg)

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
* Which of the fallacies of the distributed system does your system violate, and how (1 points).
* What needs to be added to your system be used to be integrated/extended by another system (2 points).
* Evaluation. Methodology used for evaluating the system performance, and the key results (2 points)