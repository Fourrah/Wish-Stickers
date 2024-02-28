import { Title } from "../atoms";
import StickerContainer from "../organisms/Container/StickerContainer";

const Home = () => {
  const title = "WISH STICKERS"
  
  return(
    <>
      <Title text={title}/>
      <StickerContainer/>
    </>
    
  )
}

export default Home;