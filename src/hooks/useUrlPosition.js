import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return [lat, lng];
}

export { useUrlPosition };
