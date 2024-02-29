import { Title } from "../atoms";
import CouponContainer from "../organisms/Container/CouponContainer";
import StickerContainer from "../organisms/Container/StickerContainer";

const Home = () => {
  const title = "WISH STICKERS"
  
  return(
    <>
      <Title text={title}/>
      <StickerContainer/>
      <CouponContainer/>
    </>
    
  )
}

export default Home;