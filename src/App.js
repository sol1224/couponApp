import "./App.css";
import CouponBox from "./components/CouponBox";
import couponStore from "./stores/CouponStore";

function App() {
  return (
    <div className="container">
      <CouponBox />
    </div>
  );
}

export default App;
