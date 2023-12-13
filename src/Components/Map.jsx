import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <>
      <div className={styles.mapContainer}>
        Positions : {`lat:${lat} lng:${lng}`}
        <button onClick={() => setSearchParam({ lat: 20, lng: 50 })}>
          change pos
        </button>
      </div>
    </>
  );
}

export default Map;
