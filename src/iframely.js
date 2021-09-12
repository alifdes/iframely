import { getDefaultNormalizer } from "@testing-library/dom";
import axios from "axios";
import React, { useState } from "react";

function Iframely() {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState({});

  const getMeta = () => {
    axios
      .get(
        `https://iframe.ly/api/iframely?url=${url}&api_key=0a9ce2a12afc06d2ad22eb`
      )
      .then((res) => setMeta(res))
      .catch((err) => console.log(err));
  };

console.log( );
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getMeta();
        }}
      >
        <input onChange={(e) => setUrl(e.target.value)} placeholder={url} />
        <input type="submit" value="submit" />

        <pre>{JSON.stringify(meta)}</pre>
      </form>
      {/* <div>
        <iframe
          src={meta?.data?.links?.player[0]?.href}
        //   style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"
          allowfullscreen
          scrolling="no"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div> */
      }
      <div>{
       meta?.data?.html
      }</div>
    </>
  );
}

export default Iframely;
