const Typesense = require('typesense')
console.log('hello wolrd')

let client = new Typesense.Client({
    'nodes': [{
      'host': 'typesense', 
      'port': '8108',      
      'protocol': 'http'
    }],
    'apiKey': 'xyz',
    'connectionTimeoutSeconds': 2
  })

  let courseSchema = {
    'name': 'courses',
    'fields': [
      {'name': 'name', 'type': 'string' },
      {'name': 'teachers', 'type': 'string[]', 'facet': true },
      {'name': 'study_level', 'type': 'string' },
      {'name': 'credits', 'type': 'int32' },
      {'name': 'course_code', 'type': 'string' },
      {'name': 'language', 'type': 'string' },
      {'name': 'type', 'type': 'string' },
      {'name': 'degree_programme', 'type': 'string' },
      {'name': 'study_strack', 'type': 'string' }
    ],
    'default_sorting_field': 'name'
  }
  
  client.collections().create(courseSchema)
    .then(function (data) {
      console.log(data)
    })
  