import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_api } from "../redux/Action/action";
import Carditems from "./Carditems";
import Addpost from "./Addpost";

const ListItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_api());
  }, [dispatch]);
  const api = useSelector((state) => state.api);
  //   const api = [{ test: "test" }];
  return (
    <div>
      <Addpost />
      {console.log(api)}
      {api?.map((el) => (
        <Carditems key={Math.random()} el={el} />
      ))}
    </div>
  );
};

export default ListItems;
