import React from "react";
import { Spinner } from "@nextui-org/react";

export const Loading = () => {
  return (
    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 z-50">
      <Spinner size="lg" />
    </div>
  );
};
