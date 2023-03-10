//imports the axios and react libraries
//as well as react hook useState
import axios from "axios";
import React, { useState } from "react";

//creates DataContext object using React.createContext();
//which can be used to share state and functions between components
export const DataContext = React.createContext();

//creates function that takes in 'props' as a parameter
export const DataProvider = (props) => {
  //useState hook used to initialize 3 state variables with an empty array
  const [reviewData, setReviewData] = useState([]);
  const [preReviews, setPreReviews] = useState([]);
  const [postReviews, setPostReviews] = useState([]);

  //function takes in a review object
  //adds it to the 'preReviews' state variable
  //using the 'setPreReviews' function
  //creates a new array with the existing 'preReviews' array and the new 'review' object
  const addPreReview = (review) => {
    setPreReviews([...preReviews, review]);
  };
  //same as above but with post reviews
  const addPostReview = (review) => {
    setPostReviews([...postReviews, review]);
  };
  //async function that takes in 'id' as a parameter
  //sends a GET request to the server to get pre reviews of the movie with the given id.
  const getPreReviews = async (id) => {
    try {
      let res = await axios.get(`/api/movies/${id}/reviews/pre`);
      //if successful it updates the preReviews state variable w/the retrieved data using setPreReviews
      setPreReviews(res.data);
      //response data is logged to the console and displays an error if there is one
      console.log("pre: ", res.data);
    } catch (err) {
      alert("error in getting reviews");
    }
  };
  //same as above but with postReviews
  const getPostReviews = async (id) => {
    try {
      let res = await axios.get(`/api/movies/${id}/reviews/post`);
      setPostReviews(res.data);
      console.log("post: ", res.data);
    } catch (err) {
      alert("error in getting reviews");
    }
  };

  // const deleteReview = async (id) => {
  //   let res = await axios.delete(`/api/reviews/${id}`);
  //   const filteredReviews = reviewData.map( rev => {
  //           if(rev.review.id !== rev.id){
  //           return rev
  //       } else {
  //           return {movie: mov.movie, reviews: mov.reviews.filter(i=> i.id !== id)}
  //       }
  //   })

  //retrieves review data from an API endpoint and sets the data in the 'reviewData' state variable using the setReviewData' function
  //defines a function that uses the 'axios' library to make an GET request to an API endpoint
  // id is the parameter passed to the function
  const getReviewData = async (id) => {
    let res = await axios.get(`/api/reviews/${id}`);
    //called with the data retrieved from the API as an argument, which updates the state of 'reviewData' with the retrieved data
    setReviewData(res.data);
  };
  return (
    //used to provide data to other components in the app using the React.createContext() function
    <DataContext.Provider
      //the value prop of 'DataContext.Provider' is an object that contains properties and methods that can be accessed by other components wrapped inside the Provider such as preReviews, postReviews, etc
      value={{
        preReviews,
        postReviews,
        getPostReviews,
        getPreReviews,
        getReviewData,
        addPreReview,
        addPostReview,
      }}
    >
      {props.children}
    </DataContext.Provider>
    //the props.children render its child components as its children
    //overall, provides a context for data and functions to be shared across components in the app
    //the child components wrapped inside the DataContext.Provider can access the shared data and functions via the 'DataContext.Consumer' component or the useContext hook.
  );
};

export default DataProvider;
