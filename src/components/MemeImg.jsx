const MemeImg = (props) => {
  return (
    <div className="relative">
      <img
        className="mx-auto max-w-2xl w-full rounded-md"
        src={props.meme.imgUrl}
      />

      <h2
        className="
        absolute
        top-6
        w-full
        text-center
        text-white
        font-normal
        text-5xl
        text-stroked
        font-anton
        uppercase
      "
      >
        {props.meme.topText || props.defaultPlaceholder.topText}
      </h2>

      <h2
        className="
          absolute
          bottom-6
          w-full
          text-center
          text-white
          font-normal
          text-5xl
          text-stroked
          font-anton
          uppercase
        "
      >
        {props.meme.bottomText || props.defaultPlaceholder.bottomText}
      </h2>
    </div>
  )
}

export default MemeImg
