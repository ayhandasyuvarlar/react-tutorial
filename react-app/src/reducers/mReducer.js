const initialState = {
    idx: 4,
    user: [
      { name: "Ayhan", situation: "online", id: 1 },
      { name: "Ahmet", situation: "online", id: 2 },
      { name: "Ali", situation: "offline", id: 3 },
    ],
}

const mReducer = (state =initialState , action) => {
  return state;
};

export default mReducer;
