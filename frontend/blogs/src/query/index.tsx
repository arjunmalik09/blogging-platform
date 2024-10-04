const BASE_URL = process.env.BASE_BACKEND_URL;

const getPosts = (url: string = `${BASE_URL}/post/list`) => {
  const request = new Request(
    url, {
      method: "GET",
      headers: {"token": "auth-token"},
    }
  );
  return fetch(request);
};

export const queryRunner = {
  getPosts,
};