import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components"
import './App.css';
// console.log(process.env.REACT_APP_API_KEY);
// console.log('test api');
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
