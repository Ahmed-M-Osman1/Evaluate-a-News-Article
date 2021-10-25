import { validURL } from './checkURL'

const serverResponse = async (url = '', theData = {}) => {

  const theResponse = await fetch(url, {

    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {

      'Content-Type': 'application/json',
    },
    body: JSON.stringify(theData),
  })
  try {
      return await theResponse.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async () => {

  const articleUrl = document.getElementById('article-url').value

  if (validURL(articleUrl)) {
    const collectedData = await serverResponse('http://localhost:8081/add-url', {
        articleUrl
    })
    document.getElementById('text').innerHTML = collectedData.text
    document.getElementById('agreement').innerHTML = collectedData.agreement
    document.getElementById('confidence').innerHTML = collectedData.confidence
    document.getElementById('score_tag').innerHTML = collectedData.score_tag
    document.getElementById('subjectivity').innerHTML = collectedData.subjectivity
    document.getElementById('irony').innerHTML = collectedData.irony
  } else {
    alert('Enter a valid URL')
  }
}

export default handleSubmit
