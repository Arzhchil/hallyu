import React from "react";

const BigLetters: React.FC = () => {
  return (
    <div className="flex p-4 h-screen">
      <div className="text-left text-black leading-none">
        <h1 className="text-[10vw] font-bold">
          TAKING DANCE
          <br />
          &nbsp;&nbsp;&nbsp;TO
          <br />
          &nbsp;THE
          <span className="inline-block align-middle mx-4">
            <svg
              width="200"
              height="2"
              viewBox="0 0 200 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="2" fill="black" />
            </svg>
          </span>
          NEXT
          <br />
          &nbsp;&nbsp; LEVEL
        </h1>
      </div>
    </div>
  );
};

export default BigLetters;
