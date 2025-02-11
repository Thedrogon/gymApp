
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setselectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children,setselectedPage}:Props) => {
  return (
    <AnchorLink
      className="rounded-md text-red-500 bg-amber-300  px-10 py-2 hover:bg-red-500 hover:text-amber-300 transition-colors duration-300"
      onClick={() => setselectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton