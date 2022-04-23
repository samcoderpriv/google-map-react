import React from "react";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
import { goBack } from "../../store/features/mainSlice";

const Result = ({}) => {
	const { result } = useSelector((state)=>state.main);
	const dispatch = useDispatch();
	return (
		<>
		<Button className="backBtn" onClick={() => dispatch(goBack())}>Exit</Button>
		<h2 className="headerAddress">{result.formatted_address}</h2>
		<div className="mapMain">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACwT5Q26aUC7Pf0DwOWvIKMAEqexmM-vs" }}
          defaultCenter={result.geometry.location}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
   </>
	);

};

export default Result;