const fetchJokes = () => {
  return new Promise( (resolve, reject) => {
    fetch('http://localhost:3000/joke/random')
      .then( (results) => {
        resolve(results.json())
      })
  })
}

export default fetchJokes;
