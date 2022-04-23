import React from "react";
import Header from "./header";
import Form from "./form";
import { Image } from "semantic-ui-react";
import Illustration from "../../assets/Illustration.svg";

const Search = ({}) => {
  return (
   <>
    <Header/>
    <Form/>
    <Image className="imageRight" src={Illustration}/>
  </>
  );
};

export default Search;