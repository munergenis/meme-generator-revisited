import placeholderMemeImg from 'assets/placeholder-meme-img.png'
import Header from 'components/Header.jsx'
import MemeInput from 'components/MemeInput.jsx'
import MemeImg from 'components/MemeImg.jsx'
import { useState } from 'react'

const App = () => {
  const defaultPlaceholder = {
    topText: 'Shut up',
    bottomText: 'And take my money'
  }

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imgUrl: placeholderMemeImg
  })

  const setText = (text, propertyName) => {
    setMeme(prevMeme => ({
      ...prevMeme,
      [propertyName]: text
    }))
  }

  const setMemeImg = (url) => {
    setMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: url
    }))
  }

  return (
    <div className='font-karla'>
      <Header />
      <main className='pt-16 px-9 pb-7 max-w-4xl mx-auto'>
        <MemeInput
          meme={meme}
          defaultPlaceholder={defaultPlaceholder}
          setText={setText}
          setMemeImg={setMemeImg}
        />
        <MemeImg
          meme={meme}
          defaultPlaceholder={defaultPlaceholder}
        />
      </main>
    </div>
  )
}

export default App
