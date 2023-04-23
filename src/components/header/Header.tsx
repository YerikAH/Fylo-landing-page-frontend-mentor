import { motion } from 'framer-motion'
import logo from '../../assets/logo.svg'
import { NAV_OPTIONS } from '../../constant/constant'

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='px-4 py-6 w-full lg:px-16 lg:py-20'>
        <ul className='flex justify-between items-center'>
          <div className='logo_nav'>
            <motion.li
              className='relative'
              initial={{ opacity: 0, top: '-1rem' }}
              animate={{ opacity: 1, top: '0' }}
              transition={{ duration: 2 }}
            >
              <a href='#' tabIndex={1} className='text-focus'>
                <img src={logo} alt='logo' />
              </a>
            </motion.li>
          </div>
          <div className='flex gap-6 place-items-center lg:gap-12'>
            {NAV_OPTIONS.map((item, idx) => (
              <motion.li
                key={idx}
                className='flex relative'
                initial={{ opacity: 0, top: '-1rem' }}
                animate={{ opacity: 1, top: '0' }}
                transition={{ duration: 2 }}
              >
                <a
                  href=''
                  tabIndex={1}
                  className='text-white text-xs font-open_sans lg:text-base text-focus'
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default Header
