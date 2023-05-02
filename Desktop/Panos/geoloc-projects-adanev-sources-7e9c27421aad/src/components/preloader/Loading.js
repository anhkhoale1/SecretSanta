import React from "react";
import {GridLoader} from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="spinning flex items-center justify-center">
      <GridLoader color="#0e9f6e" loading={loading} height={30} width={3} radius={3} margin={4} />
    </div>
  );
};

export default Loading;
