import React, { Component, useState } from "react";


const Home = ({ handleClick }) => {
    return (
      <section>
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    );
  };

export default Home;