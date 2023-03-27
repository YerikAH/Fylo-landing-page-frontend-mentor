import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className='logo_nav'>
            <li>
              <a href='#' tabIndex={1}>
                <img src={logo} alt='logo' />
              </a>
            </li>
          </div>
          <div className='options_nav'>
            <li>
              <a href='' tabIndex={1}>
                Features
              </a>
            </li>
            <li>
              <a href='' tabIndex={1}>
                Team
              </a>
            </li>
            <li>
              <a href='' tabIndex={1}>
                Sign in
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default Header
