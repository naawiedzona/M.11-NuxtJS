import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const state = () => ({
  users: [],
  pictures: [],
  search: "",
  albums: [],
  usersConsulted: [],
  picturesConsulted: []
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
  InfoUserStore(state, value) {
    let consulted = state.usersConsulted.findIndex(
      item => item.name == value.name
    );
    if (consulted === -1) {
      value.count = 1;
      state.usersConsulted.push(value);
    } else {
      let newConsulted = state.usersConsulted.find(item => item.id == value.id);
      newConsulted.count++;
    }
  },
  InfoPictureStore(state, value) {
    let consulted = state.picturesConsulted.findIndex(
      item => item.title == value.title
    );
    if (consulted === -1) {
      value.count = 1;
      state.picturesConsulted.push(value);
    } else {
      let newConsulted = state.picturesConsulted.find(item => item.id == value.id);
      newConsulted.count++;
    }
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
