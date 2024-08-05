import { useId, useState, useEffect } from 'react'

const MEMES_URL = 'https://api.imgflip.com/get_memes'

const MemeInput = (props) => {
  const id = useId()

  const [memesArr, setMemesArr] = useState([])

  const getRandomMemeImg = (e) => {
    e.preventDefault()

    const arrLen = memesArr.length

    if (!arrLen) {
      alert(`
          There are no loaded images.
          Please refresh your page or try again later.
          You can work with template meme if you want.
        `)
      return
    }

    const randomIndex = Math.floor(Math.random() * arrLen)

    const randomImgUrl = memesArr[randomIndex].url

    props.setMemeImg(randomImgUrl)
  }

  useEffect(() => {
    fetch(MEMES_URL)
      .then(res => res.json())
      .then(data => setMemesArr(data.data.memes))
      .catch(err => alert(`
          There was an error trying to connect to memes database.
          Please refresh your page or try again later.
          ${err}
        `))
  }, [])

  const setText = ({ target }) => props.setText(target.value, target.name)

  return (
    <section className="py-7">
      <form
        onSubmit={getRandomMemeImg}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-9">
          <div className="flex flex-col flex-grow">
            <label
              className="font-semibold"
              htmlFor={id + '-top-text'}
            >
              Top text
            </label>

            <input
              className="border-neutral-200 border-[1px] rounded-md px-3 py-2"
              name='topText'
              value={props.meme.topText}
              onChange={setText}
              id={id + '-top-text'}
              type="text"
              placeholder={props.defaultPlaceholder.topText}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label
              className="font-semibold"
              htmlFor={id + '-bottom-text'}
            >
              Bottom text
            </label>

            <input
              className="border-neutral-200 border-[1px] rounded-md px-3 py-2"
              name='bottomText'
              value={props.meme.bottomText}
              onChange={setText}
              id={id + '-bottom-text'}
              type="text"
              placeholder={props.defaultPlaceholder.bottomText}
            />
          </div>
        </div>

        <button
          className="bg-gradient-to-r from-fuchsia-800 to-purple-600 text-white font-semibold tracking-tighter py-3 rounded-md"
          type="submit"
        >
          Get a new meme image 🖼️
        </button>
      </form>
    </section>
  )
}

export default MemeInput
