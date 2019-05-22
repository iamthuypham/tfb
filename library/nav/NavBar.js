import { landingPageStrings } from '../../localization/landingPageStrings'
import NavButton from '../../library/button/NavButton'
import theme from '../../theme'

export const NavBar = ({ logoUrl, menuItems }) => {
  const handleScrollToView = item =>
    document.getElementById(item).scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div id="nav-bar" className="nav-bar">
        <div className="brand">
          <img src={logoUrl} />
          <span>{landingPageStrings.vietnamtours}</span>
          <span>{landingPageStrings.forbooks}</span>
        </div>
        <div className="nav-menu">
          {menuItems.map(item => (
            <NavButton
              key={item}
              name={item}
              onClick={() => handleScrollToView(item)}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .nav-bar {
          background-color: ${theme.palette.blue[0]};
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          padding: ${theme.spacing}px ${theme.spacing * 3}px;
          z-index: 1000;
          box-shadow: ${theme.boxShadow};
        }
        .brand {
          display: flex;
          align-items: center;
        }
        .brand img {
          width: 50px;
          height: 50px;
        }
        .brand span {
          text-transform: capitalize;
          font-family: ${theme.font.family.title};
          color: ${theme.palette.blue[100]};
          font-size: ${theme.font.size.medium};
        }
        .brand span:last-child {
          color: ${theme.palette.blue[100]};
          margin-left: ${theme.spacing}px;
        }
        .nav-menu {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}
