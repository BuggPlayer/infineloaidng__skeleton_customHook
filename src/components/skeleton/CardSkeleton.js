import React from "react";
import SkeletonElement from "./SkeletonElement";

const CardSkeleton = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div  style={{ width:"70%"  }} className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
       
      </div>
     
    </div>
  );
};

export default CardSkeleton;
