import React, { useEffect, useState } from "react";
import "./App.css";
import Searching from "./component/Searching";
import ImageListing from "./component/ImageListing";
import PageIgnating from "./component/PageIgnating";
import { Flex, Spin } from "antd";
import axios from "axios";

function App() {
  const [apiStatus, setApiStatus] = useState("init");
  const [pageNo, setPageNo] = useState(1);
  const [query, setQuery] = useState("Random");
  const [data, setData] = useState(null);

  const fetchImages = async () => {
    try {
      setApiStatus("pending");
      const response = await axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        params: {
          page: pageNo,
          ...(query && {query}),
          client_id: "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U",
        },
      });
      setApiStatus("success");
      setData(response.data);
    } catch (error) {
      setApiStatus("error");
      alert(error.message);
    }
  };

  useEffect(()=>{
    if(query && pageNo >= 1)
      {
        fetchImages();
      }
  },[pageNo,query]);

  return (
    <React.Fragment>
      <Searching UpdateQuery={setQuery}/>
      {apiStatus == "init" || apiStatus == "pending" ? (
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      ) : apiStatus == "error" ? (
        <button onClick={this.handleRefresh}>Retry</button>
      ) : (
        <ImageListing data={data} />
      )}
      <PageIgnating  totalPages={data?.total_pages} activePages={pageNo} setPageNo={setPageNo} />
    </React.Fragment>
  );
}

export default App;
