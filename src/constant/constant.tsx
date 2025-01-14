// images
import iconAccess from '../assets/icon-access-anywhere.svg'
import iconSecurity from '../assets/icon-security.svg'
import iconCollaboration from '../assets/icon-collaboration.svg'
import iconFile from '../assets/icon-any-file.svg'

import profileOne from '../assets/profile-1.jpg'
import profileTwo from '../assets/profile-2.jpg'
import profileThree from '../assets/profile-3.jpg'
import FacebookIcon from '../components/icons/FacebookIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import InstagramIcon from '../components/icons/InstagramIcon'

// const
export const NAV_OPTIONS = ['Features', 'Team', 'Sign in']
export const FEATURES_BOX = [
  {
    id: '1',
    image: iconAccess,
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computes to access your account means your files follow you everywhere.',
  },
  {
    id: '2',
    image: iconSecurity,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-contraoled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    id: '3',
    image: iconCollaboration,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    id: '4',
    image: iconFile,
    title: 'Store any type of file',
    // eslint-disable-next-line quotes
    description: `Whether you're sharing holidays photos or work documents, Fylo has yo covered allowing for all file types to be securely stored and shared.`,
  },
]
export const TESTIMONY_BOX = [
  {
    id: '1',
    testimony:
      'Fylo has improved our team productivity by an order of magnitud. Since making the switch our team has become a well-olled collaboration machine.',
    name: 'Satish Patel',
    job: 'Founder & CEO, Huddle',
    image: profileOne,
  },
  {
    id: '2',
    testimony:
      'Fylo has improved our team productivity by an order of magnitud. Since making the switch our team has become a well-olled collaboration machine.',
    name: 'Bruce MacKenzie',
    job: 'Founder & CEO, Huddle',
    image: profileTwo,
  },
  {
    id: '3',
    testimony:
      'Fylo has improved our team productivity by an order of magnitud. Since making the switch our team has become a well-olled collaboration machine.',
    name: 'Iva Boyd',
    job: 'Founder & CEO, Huddle',
    image: profileThree,
  },
]
export const FOOTER_OPT_ONE = ['About Us', 'Jobs', 'Press', 'Blog']
export const FOOTER_OPT_TWO = ['Contact Us', 'Terms', 'Privacy']
export const FOOTER_SOCIAL = [
  {
    componentElement: <FacebookIcon key={1} />,
    url: 'https://es-la.facebook.com/',
  },
  {
    componentElement: <TwitterIcon key={2} />,
    url: 'https://twitter.com/?lang=es',
  },
  {
    componentElement: <InstagramIcon key={3} />,
    url: 'https://www.instagram.com/',
  },
]
export const FORM_ERROR_VOID = 'Oops! It looks like the email field is empty.'
export const FORM_ERROR_EMAIL =
  'Unfortunately, what you entered does not appear to be a valid email.'
export const FORM_ERROR_LITTLE = 'The email you entered is too short and is invalid.'
