
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  firstName: string;
    lastName: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
    activeUser: User | null;
  isLoggedIn: boolean;
  fcmtoken : string | null;
}

const initialState: UserState = {
  users: [],
   activeUser: null,
  isLoggedIn: false,
  fcmtoken:null,
};

const saveUsersToStorage = async (users: User[]) => {
  await AsyncStorage.setItem('userData', JSON.stringify(users));
};

const userSlice = createSlice({

  name: 'user',
  initialState,
  reducers: {

    registerUser: (state, action) => {
      const newUser: User = action.payload;
      const userExists = state.users.find(u => u.email === newUser.email);

      if (!userExists) {
        state.users.push(newUser);
        saveUsersToStorage(state.users);
      }

    },

    loadUser: (state, action) => {
       state.activeUser = action.payload;
      state.isLoggedIn = true;
},

    logoutUser: (state) => {
        state.activeUser = null;
      state.isLoggedIn = false;
    },

    updatePassword: (state, action) => {
       const { email, newPassword } = action.payload;
      const userIndex = state.users.findIndex(u => u.email === email);

      if (userIndex !== -1) {
        state.users[userIndex].password = newPassword;

        if (state.activeUser && state.activeUser.email === email) {
          state.activeUser.password = newPassword;
        }
        saveUsersToStorage(state.users);
   }

    },

    loadAllUsersFromStorage: (state, action) => {
      state.users = action.payload.users || [];
      state.activeUser = action.payload.activeUser || null;
      state.isLoggedIn = !!action.payload.activeUser;
    },

// },

setfcmtoken:(state,action:PayloadAction<string |null>) =>{
state.fcmtoken = action.payload;
if(action.payload){
  AsyncStorage.setItem('fcmtoken',action.payload);
}else{
  AsyncStorage.removeItem('fcmtoken');


}
},
  },
});

export const { registerUser, loadUser, logoutUser, updatePassword, loadAllUsersFromStorage,setfcmtoken } = userSlice.actions;
export default userSlice.reducer;
