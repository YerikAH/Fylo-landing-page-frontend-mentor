import { FOOTER_OPT_ONE, FOOTER_OPT_TWO } from '../../constant/constant'
import logo from '../../assets/logo.svg'
import locate from '../../assets/icon-location.svg'
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg'
export const Footer = () => {
  return (
    <footer className=' px-6 py-6 w-full grid place-items-start w-full mt-16'>
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
        <a href='' className='flex gap-6 items-start mt-4'>
          <img src={phone} alt='phone' />
          <span className='text-white text-sm  font-open_sans'>+1-543-123-4567</span>
        </a>
        <a href='' className='flex gap-6 items-start mt-4'>
          <img src={email} alt='gmail' />
          <span className='text-white text-sm  font-open_sans'>example@fylo.com</span>
        </a>
      </div>
      <ul className='mt-20 grid gap-4 w-full'>
        {FOOTER_OPT_ONE.map((item, idx) => (
          <li key={idx} className='w-full'>
            <a href='' className='text-white text-base  w-full font-open_sans flex'>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className='mt-12 grid gap-4 w-full'>
        {FOOTER_OPT_TWO.map((item, idx) => (
          <li key={idx} className='w-full'>
            <a href='' className='text-white text-base  w-full font-open_sans flex'>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div></div>
    </footer>
  )
}
