import { Link, useLocation } from "react-router-dom";

export const NavLinks = ({ links }: { links: Array<{pathname: string, title: string}> }) => {
  const location = useLocation();
  
  return (
    <>
      {
        links.map((link) => (
          <Link 
            to={link.pathname} 
            className={`text-lg ${location.pathname === link.pathname ? 'font-bold' : ''}`}>
            {link.title}
          </Link>
        ))
      }
    </>
  );
}