import { PropsSocial } from '../../interface/interface'
const SocialMediaIcon = ({ children }: PropsSocial) => {
  return (
    <a href="#" tabIndex={1} className='grid rounded-full place-items-center border-white border-solid border p-2'>
      {children}
    </a>
  )
}

export default SocialMediaIcon
