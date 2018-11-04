const updateUser = user => {
  return () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => {
        return {
          type: "UPDATE_USER",
          user: json
        }
      })
  }
};

const removeUser = () => {
  return {
    type: "REMOVE_USER"
  };
};

export { removeUser, updateUser };
