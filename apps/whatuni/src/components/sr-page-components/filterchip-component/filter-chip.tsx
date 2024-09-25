import React from "react";
import classes from "./style.module.css";
import Link from "next/link";
interface dataProps {
  Title: String;
  value: string[];
}
const FilterChip: React.FC<{ data: dataProps }> = ({ data }) => {
  return (
    <ul className={classes.ul}>
      <li style={{ fontSize: "20px", fontWeight: "500", color: "#707070" }}>
        {data.Title}
      </li>
      {data.value.map((item, index) => (
        <Link href={`?subject=${item}`} className={classes.chip} key={index}>
          {item}
        </Link>
      ))}
    </ul>
  );
};

export default FilterChip;
