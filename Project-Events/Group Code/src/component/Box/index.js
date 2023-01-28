import React, { useState, useEffect } from "react";
import CardBox from "../CardBox";
import AxiosInstance from "../axiosInstance";
import Grid from "@mui/material/Grid";

const Box = () => {
  const [books, setBooks] = useState([]);
  const getAllData = async () => {
    const res = await AxiosInstance.get("/books");
    setBooks(res.data.books);
    // let sortbyprice = res.data.sort((a, b) => {
    //   return a.price - b.price;
    // });
  };
  console.log(books);
  const filter = () => {};

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {books.map((item) => {
        console.log(item, "item");
        return (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <CardBox item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Box;
