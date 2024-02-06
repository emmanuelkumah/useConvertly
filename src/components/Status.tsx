import React from "react";

const Status = ({ status }: { status: String }) => {
  if (status === "success") {
    return <p>File uploaded successfully</p>;
  } else if (status === "fail") {
    return <p>file upload failed</p>;
  } else if (status === "uploading") {
    return <p>Uploading selected file</p>;
  } else {
    return null;
  }
};

export default Status;
