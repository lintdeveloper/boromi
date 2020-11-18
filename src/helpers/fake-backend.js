import userDb from "../db/user.json"

export async function register(url, opts) {

  if ( url.endsWith('/users/register') && opts.method === 'POST' ) {
    const user = opts.body;
    user["id"] = userDb.length + 1;
    const data = JSON.stringify(user);
      userDb.push(data);
    return Promise.resolve({
      status: true,
      message: "User successfully registered"
    })
  }

  return Promise.reject({
    status: false,
    message: "Route Unknown",
  })
  
}