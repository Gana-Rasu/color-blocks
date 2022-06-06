import React from "react";

export default function Block({ value }) {
  const styles = {
    backgroundColor: value,
    height: "20px",
    width: "177px"
  };
  return (
    <>
      <div style={styles}></div>
    </>
  );
}
