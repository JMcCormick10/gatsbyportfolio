import * as React from "react";
import './Layout.scss';
import { navigate } from 'gatsby';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MobileMenu from "./MobileMenu/MobileMenu";
import LoadScreen from "./LoadScreen/LoadScreen";
import { assignRevealClasses } from "../shared/utility";

const Layout = ( { pageName, children}) => {

    const [mobileMenuShow, setMobileMenuShow] = React.useState(false);
    const [showLoadScreen, setShowLoadScreen] = React.useState(true);

    React.useEffect(() => {
        //check for section in url and scroll.
        setShowLoadScreen(false);
        const params = new URLSearchParams(window.location.search);
        const section = params.get("section");
        if(section){
            if(section !== ""){
                document.querySelector('.'+section).scrollIntoView();
            }
        }
        setTimeout(() => {
            assignRevealClasses();
        }, 800)

    }, [])

    document.addEventListener("scroll", assignRevealClasses);

    const onMenuLinkClicked = (page, section, isMobile) => {
        setMobileMenuShow(false)
        let pathName = window.location.pathname;

        if(page == 'current'){
            document.querySelector('.'+section).scrollIntoView({ 
                behavior: 'smooth' 
              });
        }
        else{
            if(pathName === page){
                const behaviour = (isMobile ? 'auto' : 'smooth')
                if(section !== ""){
                    document.querySelector('.'+section).scrollIntoView({ 
                        behavior: behaviour 
                      });
                }
            }
            //if we are changing pages
            else{
                const delay = (isMobile ? 300 : 1000);
                if(!isMobile){
                    setShowLoadScreen(true);
                }
                let parameter = '';
                if(section){
                    parameter = '?section='+section;
                }
                setTimeout(() => {
                    navigate(page + parameter);
                }, delay)
            }
        }
    
    }
    
    const onMobileMenuItemClicked = () => {
        setMobileMenuShow(!mobileMenuShow);
    }
    const closeMobileMenu = () => {
        setMobileMenuShow(false);
    }
    

    return(
        <>
        <Header menuItemClicked={(page, section) => onMenuLinkClicked(page, section, false)} mobileMenuToggleClick={() => onMobileMenuItemClicked()} menuOpen={mobileMenuShow}/>
        <main className={pageName}>
            <div className="Layout">
                {children}
            </div>
        </main>
        <Footer menuItemClicked={(page, section) => onMenuLinkClicked(page, section, false)}/>
        <MobileMenu menuItemClicked={(page, section) => onMenuLinkClicked(page, section, true)} closeMenu={() => closeMobileMenu()} show={mobileMenuShow} menuOpen={mobileMenuShow}/>
        <LoadScreen show={showLoadScreen}/>
        </>
    )
}   

export default Layout;