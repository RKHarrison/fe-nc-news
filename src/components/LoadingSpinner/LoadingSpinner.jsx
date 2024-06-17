
import { JellyfishSpinner } from "react-spinners-kit";

const LoadingSpinner = () => {
  return (
    <section className="loading-spinner">
      <h2>Loading...</h2>
      <div className="spinner">
        <JellyfishSpinner size={200} color="red"/>
      </div>
    </section>
  );
};

export default LoadingSpinner;