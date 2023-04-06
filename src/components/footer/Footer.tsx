// const
import { FOOTER_OPT_ONE, FOOTER_OPT_TWO, FOOTER_SOCIAL } from '../../constant/constant'

// images
import logo from '../../assets/logo.svg'
import locate from '../../assets/icon-location.svg'
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg'
import SocialMediaIcon from '../ui/SocialMediaIcon'

export const Footer = () => {
  return (
    <footer className='px-6 pb-12 pt-56  bg-blue_dark_footer_bg'>
      <div className='footer-center w-full grid lg:place-content-center'>
        <img src={logo} alt='logo' />
        <div className=' place-items-start grid w-full lg:grid-cols-custom_5 mt-8 lg:gap-16'>
          <div className='grid h-full  lg:mt-0 w-full'>
            <div className='flex gap-6 items-start mt-10 lg:mt-0'>
              <img src={locate} alt='locate' className='mt-2' />
              <p className='text-white text-base  font-open_sans'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className='  h-full   w-full '>
            <a href='' className='flex gap-6 items-start pt-8 lg:pt-0 text-focus' tabIndex={1}>
              <img src={phone} alt='phone' />
              <span className='text-white text-sm  font-open_sans'>+1-543-123-4567</span>
            </a>
            <a
              href=''
              className='flex gap-6 items-start pt-4 pb-20 lg:pb-0 text-focus'
              tabIndex={1}
            >
              <img src={email} alt='gmail' />
              <span className='text-white text-sm  font-open_sans'>example@fylo.com</span>
            </a>
          </div>
          <ul className='grid  w-full  h-full  '>
            {FOOTER_OPT_ONE.map((item, idx) => (
              <li key={idx} className='w-full py-2 lg:pt-0 lg:pb-2'>
                <a
                  href=''
                  className='text-white text-base  w-full font-open_sans flex text-focus'
                  tabIndex={1}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className='pt-12 grid w-full  h-full  lg:pt-0'>
            {FOOTER_OPT_TWO.map((item, idx) => (
              <li key={idx} className='w-full  py-2 lg:pt-0 lg:pb-2'>
                <a
                  href=''
                  className='text-white text-base  w-full font-open_sans flex text-focus'
                  tabIndex={1}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex gap-4 w-full place-items-center place-content-center   h-full lg:place-items-start'>
            {FOOTER_SOCIAL.map((item, idx) => (
              <SocialMediaIcon key={idx} url={item.url}>
                {item.componentElement}
              </SocialMediaIcon>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
