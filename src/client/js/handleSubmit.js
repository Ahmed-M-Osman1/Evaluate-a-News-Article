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

const handleSubmit = async () => {
  const URLOfArticle = document.getElementById('articalURLs').value
  if (validURL(URLOfArticle)) {
    const responseData = await readResponseData('http://localhost:8081/add-url', {
        URLOfArticle
    })
    document.getElementById('text').textContent = responseData.text
    document.getElementById('agreement').textContent = responseData.agreement
    document.getElementById('confidence').textContent = responseData.confidence
    document.getElementById('score_tag').textContent = responseData.score_tag
    document.getElementById('subjectivity').textContent = responseData.subjectivity
    document.getElementById('irony').textContent = responseData.irony
  } else {
    alert('Enter a valid URL')
  }
}

export default handleSubmit
