const Typesense = require('typesense')

async function main () {
  await sleep(10*1000)
  let client = new Typesense.Client({
      'nodes': [{
        'host': 'typesense', 
        'port': '8108',      
        'protocol': 'http'
      }],
      'apiKey': 'xyz',
      'connectionTimeoutSeconds': 10
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
        {'name': 'study_strack', 'type': 'string' },
        {'name': 'is_open_university_course', 'type': 'bool'}
      ],
    }
    if ((await client.collections().retrieve()) == '') {
    client.collections().create(courseSchema)
      .then(function (data) {
        console.log(data)
      })
    } else console.log("Schema already exists")
}

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

main()