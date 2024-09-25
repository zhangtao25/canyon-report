import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
const App = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    codeToHtml("const a = 1", {
      lang: "ts",
      theme: "github-light",
    }).then((r) => {
      setHtml(r);
    });
  }, []);

  return (
    <div>
      sss
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
};

export default App;
