const API_URL = "http://localhost:3000";

class AuthService {
  
  register(user) {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
    return fetch(`${API_URL}/users/register`, request).then(handleResponse);
  }

}

function handleResponse(response) {
  console.log(response);
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.status) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              // logout();
              window.location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

export default new AuthService();

