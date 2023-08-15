const URI = "http://127.0.0.1:3000/api";

export const requestRegister = (user) => {
  return fetch(URI + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const requestLogin = (user) => {
  return fetch(URI + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const getTasksRequest = () => {
  return fetch(URI + "/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const createTasksRequest = (task) => {
  return fetch(URI + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());
};
export const updateTasksRequest = (id, task) => {
  return fetch(URI + `/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(task),
  });
};

export const deleteTasksRequest = (id) => {
  return fetch(URI + `/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const getTaskRequest = (id) => {
  return fetch(URI + `/tasks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const getProfileRequest = () => {
  return fetch(URI + "/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};
