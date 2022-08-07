export async function getSessionId() {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusMessage);
}

export async function getTickets(id) {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
  if (response.status === 500) {
    return await getTickets(id);
  }

  return response.json();
}

// export const getTickets = (id) =>
//   async function req(dispatch) {
//     const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
//
//     if (response.status === 500) {
//       return await req(dispatch);
//     }
//     return response.json().then((data) => dispatch(getTickets(data.tickets, data.stop)));
//   };

// export default class AviasalesService {
//   async getTickets() {
//     const response = await fetch('https://aviasales-test-api.kata.academy/search');
//     return response.json().then((data) => {
//       const res = fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`);
//       return res.then((data) => data.json());
//     });
//   }
// }
