import logo from '../assets/logo.svg'
const NAV_OPTIONS = ['Features', 'Team', 'Sign in']
const Header = () => {
  return (
    <header className='w-full'>
      <nav className='px-4 py-6 w-full'>
        <ul className='flex justify-between items-center'>
          <div className='logo_nav'>
            <li>
              <a href='#' tabIndex={1}>
                <img src={logo} alt='logo' />
              </a>
            </li>
          </div>
          <div className='flex gap-6'>
            {NAV_OPTIONS.map((item, idx) => (
              <li key={idx}>
                <a href='' tabIndex={1} className='text-white text-xs font-raleway'>
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
