const { MODE, VITE_BASE_URL_DEV, VITE_BASE_URL_RELEASE, VITE_SERVER_NAME } = import.meta.env;

export const baseURL = (() => {
  const url = MODE === "development" ? VITE_BASE_URL_DEV : VITE_BASE_URL_RELEASE;

  return `${url}${VITE_SERVER_NAME}`;
})();

// export const baseURL = MODE === "development"
//   ? `${VITE_BASE_URL_DEV}${VITE_SERVER_NAME}`
//   : `${VITE_BASE_URL_RELEASE}${VITE_SERVER_NAME}`;

// export const getAxiosConfig = () => {
//   const token = sessionStorage.getItem("")
//     ? sessionStorage.getItem("")
//     : "";

//   return {
//     headers: { Authorization: "Bearer " + token },
//   };
// };
