import { useState } from "react"

// const APIKey = process.env.REACT_APP_GIPHY_API_KEY
const APIKey = 'VcpgioVbe99aM2WDrEDzsElRNdbtftWS'

const App = () => {

  const [text, setText] = useState('')

  const fetchGif = () => {
    // fetch weather data
    const url = `https://api.giphy.com/v1/gifs/translate`
    fetch(`${url}?api_key=${APIKey}&q=ryan gosling`)
      .then((response) => {
        console.log('raw response', response)
        return response.json()
      })
      .then((jsonData) => {
        console.log('data response', jsonData)
    })
  }


  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleTextChange}></input>
      <button onClick={fetchGif}>Translate</button>
    </>
  );
}

export default App;