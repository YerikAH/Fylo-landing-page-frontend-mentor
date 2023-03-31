import logo from '../../assets/logo.svg'
import { NAV_OPTIONS } from '../../constant/constant'

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='px-4 py-6 w-full lg:px-16 lg:py-20'>
        <ul className='flex justify-between items-center'>
          <div className='logo_nav'>
            <li>
              <a href='#' tabIndex={1}>
                <img src={logo} alt='logo' />
              </a>
            </li>
          </div>
          <div className='flex gap-6 place-items-center lg:gap-12'>
            {NAV_OPTIONS.map((item, idx) => (
              <li key={idx} className='flex'>
                <a href='' tabIndex={1} className='text-white text-xs font-raleway lg:text-base'>
                  {item}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default Header
