import { useEffect, useState } from "react";
import axios from "axios";
import { Plugins } from "@capacitor/core";

const useSearchFlights = (
  departureIata,
  destinationIata,
  departureDate,
  returnDate,
  travelerCount
) => {
  const { Storage } = Plugins;
  const [searchData, setSearchData] = useState({
    data: {},
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setSearchData({
          ...searchData,
          isLoading: true,
        });
        const access_tokenData = await Storage.get({ key: "access_token" });
        const access_token = access_tokenData.value;
        const result = await axios.get(
          `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departureIata}&destinationLocationCode=${destinationIata}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${travelerCount}&nonStop=true&max=10`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        setSearchData({
          ...searchData,
          data: result.data.data,
          isLoading: false,
        });
      } catch ({ message }) {
        setSearchData({
          ...searchData,
          isLoading: false,
          error: message,
        });
      }
    };

    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return searchData;
};

export default useSearchFlights;
