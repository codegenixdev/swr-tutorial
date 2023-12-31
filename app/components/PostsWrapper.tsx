"use client";

import { useState } from "react";

import Posts from "@/app/components/Posts";

export default function PostsWrapper() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Posts pageIndex={pageIndex} />
      <div style={{ display: "none" }}>
        <Posts pageIndex={pageIndex + 1} />
      </div>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}
