import { faker } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  user: [
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(250, 250, true),
      isActive: false,
      userName: faker.internet.userName(),
      date: dayjs(new Date()).toNow(),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(250, 250, true),
      isActive: false,
      userName: faker.internet.userName(),
      date: dayjs(new Date()).toNow(),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(250, 250, true),
      isActive: false,
      userName: faker.internet.userName(),
      date: dayjs(new Date()).toNow(),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(250, 250, true),
      isActive: false,
      userName: faker.internet.userName(),
      date: dayjs(new Date()).toNow(),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(250, 250, true),
      isActive: false,
      userName: faker.internet.userName(),
      date: dayjs(new Date()).toNow(),
    },
  ],
  filterUser: []
};


//State slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setFilterUser: (state, { payload }) => {
      state.filterUser = payload;
    },
  },

});

// Action creators are automatically generated for each case reducer function 
export const { setUser, setFilterUser } = userSlice.actions;
export const selectUser = ({ user }) => user;
export default userSlice.reducer;
