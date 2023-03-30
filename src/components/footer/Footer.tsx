// const
import { FOOTER_OPT_ONE, FOOTER_OPT_TWO } from '../../constant/constant'

// images
import logo from '../../assets/logo.svg'
import locate from '../../assets/icon-location.svg'
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg'
import SocialMediaIcon from '../ui/SocialMediaIcon'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import TwitterIcon from '../icons/TwitterIcon'

export const Footer = () => {
  return (
    <footer className=' px-6 pb-12 pt-56 w-full grid place-items-start w-full bg-blue_dark_footer_bg'>
      <div className='grid'>
        <img src={logo} alt='logo' />
        <div className='flex gap-6 items-start mt-10'>
          <img src={locate} alt='locate' className='mt-2' />
          <p className='text-white text-base  font-open_sans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quae quam
            temporibus dignissimos.
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <a href='' className='flex gap-6 items-start mt-4'  tabIndex={1}>
          <img src={phone} alt='phone' />
          <span className='text-white text-sm  font-open_sans'>+1-543-123-4567</span>
        </a>
        <a href='' className='flex gap-6 items-start mt-4'  tabIndex={1}>
          <img src={email} alt='gmail' />
          <span className='text-white text-sm  font-open_sans'>example@fylo.com</span>
        </a>
      </div>
      <ul className='mt-20 grid gap-4 w-full'>
        {FOOTER_OPT_ONE.map((item, idx) => (
          <li key={idx} className='w-full'>
            <a href='' className='text-white text-base  w-full font-open_sans flex'  tabIndex={1}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className='mt-12 grid gap-4 w-full'>
        {FOOTER_OPT_TWO.map((item, idx) => (
          <li key={idx} className='w-full'>
            <a href='' className='text-white text-base  w-full font-open_sans flex' tabIndex={1}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex gap-4 w-full place-items-center place-content-center mt-24 '>
	<SocialMediaIcon>
	  <FacebookIcon/>
	</SocialMediaIcon>
	<SocialMediaIcon>
	  <TwitterIcon/>
	</SocialMediaIcon>
	<SocialMediaIcon>
	  <InstagramIcon/>
	</SocialMediaIcon>
      </div>
    </footer>
  )
}
