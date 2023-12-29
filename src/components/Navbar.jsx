import Image from 'next/image'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Image
        src={Logo}
        alt='Currency logo'
        width={70}
        height={70}
        placeholder='blur'
        quality={100}
      />
        <h1 style={{"fontSize":"2rem"}}>Currency Finder</h1>
    </nav>
  )
}