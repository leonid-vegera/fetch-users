const BASE_URL = 'https://reqres.in/api';
export const request = (url, options) => {
  return (
    fetch(`${BASE_URL}${url}`, options)
      .then(response => response.json())
  )
}