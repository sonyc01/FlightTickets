import { useEffect, useState } from "react";
import { Plugins } from "@capacitor/core";

const useFlightHistory = () => {
  const { Storage } = Plugins;
  const [searchData, setSearchData] = useState({
    data: {},
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setSearchData({
          ...searchData,
          isLoading: true,
        });
        let result = await Storage.get({ key: "history" });
        result = JSON.parse(result.value);

        setSearchData({
          ...searchData,
          data: result,
          isLoading: false,
        });
      } catch ({ err }) {
        setSearchData({
          ...searchData,
          isLoading: false,
          error: err,
        });
      }
    };
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return searchData;
};

export default useFlightHistory;
