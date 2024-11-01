import Card from "./Components/Card/Card.jsx";
import InfoBox from "./Components/InfoBox/InfoBox.jsx";
import PersonCard from "./Components/PersonCard/PersonCard.jsx";
import Products from "./Components/Products/Products.jsx";

const App =()=>{
    return (
    <div>
        {/* <InfoBox/>
        <Card/> */}
        {/* <PersonCard name='Yash' age={30} info='I am a program that is learning  new things'/> */}
        <Products id={1} name='Yash' price={3000} discription="w"/>
    </div>
    )

}
export default App;