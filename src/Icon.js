import { ReactComponent as Mail } from './icons/mail.svg'
import { ReactComponent as Phone } from './icons/phone.svg'
const MAP = {
  mail: Mail,
  phone: Phone,
}
const Icon = ({ name, ...props }) => {
  const Component = MAP[name]
  if (!Component) return null
  return <Component {...props} />
}
export default Icon
