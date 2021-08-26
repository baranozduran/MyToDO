import Api from "./Api";

export default {
  signUp: function(dataBlock) {
    return Api()
      .post("signUp", dataBlock)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 422) {
          return err.response.data;
        } else {
          console.log(err);
        }
      });
  },
  login: function(dataBlock) {
    return Api()
      .post("login", dataBlock)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          return err.response.data;
        } else {
          console.log(err);
        }
      });
  },
  signOut: function(dataBlock) {
    return Api()
      .post("signOut", dataBlock)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          return err.response.data;
        } else {
          console.log(err);
        }
      });
  },
  deleteAccount: function(dataBlock) {
    return Api()
      .post("deleteAccount", dataBlock)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          return err.response.data;
        } else {
          console.log(err);
        }
      });
  }
};
