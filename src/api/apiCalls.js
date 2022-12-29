import axios from "axios";

// whenever we want to make an external http call we will use this functions

export const signup = (user) => {
    return axios.post('/api/v1/users', user);
  };
  