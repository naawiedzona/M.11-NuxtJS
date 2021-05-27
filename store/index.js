import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const state = () => ({
  users: [],
  pictures: [],
  search: "",
  albums: []
});

export const mutations = {
  //users + contador users
  SetUsers(state, users) {
    users.forEach(user => {
      user.count = 0;
    });
    state.users = users;
    console.log(state);
  },
  //pictures + contador pictures
  SetPictures(state, pictures) {
    pictures.forEach(picture => {
      picture.count = 0;
    });
    state.pictures = pictures;
  },
  InfoUserStore (state, value) {
    state.users.forEach((user) => {
      if (user.id == value) {
        user.count++;
      }
    });
  },
  InfoPictureStore (state, value) {
    state.pictures.forEach((picture) => {
      if (picture.id == value) {
        picture.count++;
      }
    });
  },
  SetSearch(state, value) {
    state.search = value;
  }
};

export const actions = {
  //users from api + commit to mutations
  getUsers({ commit }) {
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      commit("SetUsers", response.data);
    });
  },
  //pictures from api + commit to mutations
  getPictures({ commit }) {
    axios.get("http://jsonplaceholder.typicode.com/photos").then(response => {
      commit("SetPictures", response.data);
    });
  }
};

export const getters = {
  FilteredUsers(state) {
    let users = state.users;
    let usersTemp = [];
    if (state.search.length > 1) {
      for (const user of users) {
        if (
          user.name
            .toLocaleLowerCase()
            .includes(state.search.toLocaleLowerCase())
        ) {
          usersTemp.push(user);
        }
      }
      users = usersTemp;
      return users;
    } else {
      for (const user of users) {
        if (
          user.name
            .toLocaleLowerCase()
            .includes(state.search.toLocaleLowerCase())
        ) {
          usersTemp.push(user);
        }
      }
      users = usersTemp;
      return users;
    }
  }
};
