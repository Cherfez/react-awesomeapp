import React, { useState } from "react";

export default function LikeButton() {
  const [value, setValue] = useState("Like This");

  const likeUnlike = () => {
    if (value === "Like This") {
      setValue("LIKED!");
    } else {
      setValue("Like This");
    }
  };

  return (
    <div>
      <p>
        <button onClick={likeUnlike}>{value}</button>
      </p>
    </div>
  );
}
