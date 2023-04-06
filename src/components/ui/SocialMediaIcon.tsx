import { PropsSocial } from '../../interface/interface'
const SocialMediaIcon = ({ children, url }: PropsSocial) => {
  return (
    <a
      href={url}
      tabIndex={1}
      className='grid rounded-full place-items-center border-white border-solid border p-2 lg:mt-0 mt-24 text-focus'
    >
      {children}
    </a>
  )
}

export default SocialMediaIcon
