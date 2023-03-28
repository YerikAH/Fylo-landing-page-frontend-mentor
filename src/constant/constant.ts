// images
import iconAccess from '../assets/icon-access-anywhere.svg'
import iconSecurity from '../assets/icon-security.svg'
import iconCollaboration from '../assets/icon-collaboration.svg'
import iconFile from '../assets/icon-any-file.svg'

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
