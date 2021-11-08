import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" element={Home} />
        <Route exact path="/recipes" element={Recipes} />
        <Route exact path="/my-recipes" element={MyRecipes} />
        <Route exact path="/not-found" element={NotFound} />
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;