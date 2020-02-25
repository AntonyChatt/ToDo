const initialState = [
  {
    label: "Create task manager interface",
    date: new Date(2020, 1, 17),
    type: "Trello",
    status: "To do",
    id: 1
  },
  {
    label: "Api querry",
    date: new Date(2020, 1, 18),
    type: "Default",
    status: "To do",
    id: 2
  },
  {
    label: "Create deletion task",
    date: new Date(2020, 1, 19),
    type: "Default",
    status: "To do",
    id: 3
  },
  {
    label: "Drag and Drop",
    date: new Date(2020, 1, 20),
    type: "Yandex",
    status: "To do",
    id: 4
  },
  {
    label: "Creating task manager interface",
    date: new Date(2020, 1, 13),
    type: "Default",
    status: "In process",
    id: 5
  },
  {
    label: "Watching TAoM",
    date: new Date(2020, 1, 18),
    type: "Default",
    status: "In process",
    id: 6
  },
  {
    label: "hh",
    date: new Date(2012, 5, 29),
    type: "Yandex",
    status: "In process",
    id: 7
  },
  {
    label: "Enter TUSUR",
    date: new Date(2018, 1, 17),
    type: "Trello",
    status: "Done",
    id: 8
  },
  {
    label: "Sign in PH",
    date: new Date(2019, 1, 18),
    type: "Yandex",
    status: "Done",
    id: 9
  },
  {
    label: "Drag and Drop",
    date: new Date(2020, 1, 7),
    type: "Yandex",
    status: "Done",
    id: 10
  }
];

export default function tasks(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TASK": {
      return [...state, payload];
    }
    case "DELETE_TASK": {
      return state.filter(({ id }) => id !== payload);
    }
    case "EDIT_TASK": {
      const index = state.findIndex(task => task.id === payload.id);
      state[index] = payload;
      return [...state];
    }
    default:
      return state;
  }
}
