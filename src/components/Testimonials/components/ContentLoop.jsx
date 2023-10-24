import React from "react";

export default function ContentLoop({ data }) {
  return (
    <div className="lg:space-y-4 sm:space-y-4  sm:text-center">
      <i className="leading-5 text-xl text-justify">{data.Review}</i>
      <div className="flex flex-col items-end space-y-3">
        <h3 className="text-2xl font-[Poppins]">{data.Client}</h3>
        <span className="leading-5 lg:text-xl md:text-lg sm:text-sm sm:px-4">{`${data.ClientOrganization}`}</span>
      </div>
      <div className="flex justify-end">
        {data.Image && <img src={data.Image} width="90" height="50" />}
      </div>
    </div>
  );
}
