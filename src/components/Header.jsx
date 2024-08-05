import mainLogo from 'assets/main-logo.png'

const Header = () => {
  return (
    <header className='fixed z-10 w-full h-16 px-7 flex items-center gap-2 text-white bg-gradient-to-r from-fuchsia-900 to-purple-600'>
      <img className='h-6' src={mainLogo} alt="meme generator logo" />
      <h1 className='text-xl tracking-tighter font-semibold'>Meme Generator</h1>
      <h2 className='ml-auto text-xs font-inter'>React Course - Project 3</h2>
    </header>
  )
}

export default Header
