import React from "react";

type ErrorProps = {
  message: string;
};
export const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <div className="flex justify-center w-full h-full">
      <p className="text-xl font-bold text-red-500">Error: {message}</p>
    </div>
  );
};
