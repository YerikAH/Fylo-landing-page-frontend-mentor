import { useState } from 'react'
import { FORM_ERROR_EMAIL, FORM_ERROR_LITTLE, FORM_ERROR_VOID } from '../../../constant/constant'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [errorState, setErrorState] = useState({
    message: '',
    state: false,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value
    setInputEmail(valueInput)
    validateEmail(valueInput)
  }

  function validateEmail(value: string) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // eslint-disable-next-line prefer-const
    let errorObj = {
      message: '',
      state: false,
    }
    if (value.length === 1 || value.length === 0) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_VOID
    } else if (value.length <= 5) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_LITTLE
    } else if (!regexEmail.test(value)) {
      errorObj.state = true
      errorObj.message = FORM_ERROR_EMAIL
    }
    setErrorState(errorObj)
  }
  return (
    <article className='grid place-items-center w-full bg-blue_dark_testimonials py-10 px-5 lg:py-16 rounded-md relative top-48 max-w-4xl'>
      <motion.h3
        className='text-white text-base font-bold font-raleway text-center lg:text-3xl relative'
        initial={{ bottom: '-1rem' }}
        whileInView={{ bottom: '0' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get early access today
      </motion.h3>
      <motion.p
        className='text-white text-sm  font-open_sans text-center mt-4 lg:text-base max-w-3xl relative'
        initial={{ bottom: '-1rem' }}
        whileInView={{ bottom: '0' }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </motion.p>
      <motion.form
        className='grid w-full lg:flex lg:mt-10 lg:gap-8 lg:max-w-3xl relative'
        initial={{ bottom: '-1rem' }}
        whileInView={{ bottom: '0' }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input
          tabIndex={1}
          type='email'
          aria-label='Enter your email'
          aria-required='false'
          placeholder='email@example.com'
          className=' rounded-full bg-white w-full px-3.5 py-3.5 mt-8 text-xs font-open_sans lg:mt-0 lg:py-4 lg:px-4 lg:flex-initia lg:text-base input-focus'
          onChange={(e) => handleChange(e)}
          value={inputEmail}
          required
        />
        {errorState.state && (
          <span className='absolute font-semibold bottom-[-1.5rem] italic text-xs text-light_red'>
            {errorState.message}
          </span>
        )}
        <button
          tabIndex={1}
          type='submit'
          aria-label='Get Started For Free'
          className='text-white  text-xs w-full px-3.5 py-3.5 mt-4 font-raleway font-bold lg:mt-0 lg:flex-none lg:text-sm lg:max-w-[12.5rem] button-started cursor-pointer'
          disabled={errorState.state}
          onClick={() => validateEmail(inputEmail)}
        >
          Get Started For Free
        </button>
      </motion.form>
    </article>
  )
}

export default ContactSection
