export const getPosts = (url: string) => {
    const request = new Request(
        url, {
            method: "GET",
            headers: {"token": "auth-token"},
        }
    );
    return fetch(request);
};
