import { FOOTER_OPT_ONE, FOOTER_OPT_TWO } from '../../constant/constant'

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src='' alt='logo' />
        <div>
          <img src='' alt='locate' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus quae quam
            temporibus dignissimos.
          </p>
        </div>
      </div>
      <div>
        <a href=''>
          <img src='' alt='phone' />
          <span>+1-543-123-4567</span>
        </a>
        <a href=''>
          <img src='' alt='gmail' />
          <span>example@fylo.com</span>
        </a>
      </div>
      <ul>
        {FOOTER_OPT_ONE.map((item, idx) => (
          <li key={idx}>
            <a href=''>{item}</a>
          </li>
        ))}
      </ul>
      <ul>
        {FOOTER_OPT_TWO.map((item, idx) => (
          <li key={idx}>
            <a href=''>{item}</a>
          </li>
        ))}
      </ul>
      <div></div>
    </footer>
  )
}
