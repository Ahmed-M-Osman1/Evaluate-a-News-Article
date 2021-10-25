import { validURL } from './checkURL'

const readResponseData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
      return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const articleUrl = document.getElementById('articleURLs').value
  if (validURL(articleUrl)) {
    const responseData = await readResponseData('http://localhost:8088/add-url',
     {
      articleUrl
    })
    document.getElementById('text').innerHTML = responseData.text
    document.getElementById('agreement').innerHTML = responseData.agreement
    document.getElementById('confidence').innerHTML = responseData.confidence
    document.getElementById('score_tag').innerHTML = responseData.score_tag
    document.getElementById('subjectivity').innerHTML = responseData.subjectivity
    document.getElementById('irony').innerHTML = responseData.irony
  } else {
    alert('Try Again - this is Not Valid URL')
  }
}

export default handleSubmit
