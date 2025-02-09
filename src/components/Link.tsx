import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../shared/types";


type Props = {
    page: string;   
    selectedPage: SelectedPage;
    setselectedPage: (value: SelectedPage) => void; 
}

const Link = ({
    page,
    selectedPage,
    setselectedPage,
}:Props) => {

    const lowercasepage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    
  return (
    <AnchorLink className={`${selectedPage === lowercasepage ? "text-amber-500" : "text-white"} text-sm`} href={`#${lowercasepage}`} onClick={() => setselectedPage(lowercasepage)}>
        {page}
    </AnchorLink>
  )
}

export default Link