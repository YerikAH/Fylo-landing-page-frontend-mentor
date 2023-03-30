import { PropsSocial } from '../../interface/interface'
const SocialMediaIcon = ({ children }: PropsSocial) => {
  return (
    <div className='grid rounded-full place-items-center border-white border-solid border p4'>
      {children}
    </div>
  )
}

export default SocialMediaIcon
