import {Outlet} from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BannerFooter from "../organisms/BannerFooter";
const AppTemplate = ()=>{

  return(
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <BannerFooter />
      <Footer/>
    </>
  )

}

export default AppTemplate
