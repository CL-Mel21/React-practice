import "./App.css";
import ProductPrice from "./components/ProductPrice";

function App() {
  return (
    <div>
      <h1>Fancy Florist</h1>
      <ProductPrice
        name="Congratulations Bouquet"
        description="The perfect bouquet for a celebration such as a birthday or graduation."
        price={70}
      />
      <ProductPrice
        name="Apology Bouquet"
        description="You need something extra when you know you messed up."
        price={150}
      />
      <ProductPrice
        name="Wedding Bouquet"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200}
      />
    </div>
  );
}

export default App;
