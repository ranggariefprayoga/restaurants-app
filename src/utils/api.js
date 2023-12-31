const api = (() => {
  const BASE_URL = "https://restaurant-api.dicoding.dev";

  async function getAllRestaurants() {
    const response = await fetch(`${BASE_URL}/list`);
    if (!response.ok) {
      throw new Error(`Terjadi kesalahan: ${response.status}`);
    }
    const responseJson = await response.json();
    const { restaurants } = responseJson;
    return restaurants;
  }

  async function getDetailRestaurant(id) {
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    if (!response.ok) {
      throw new Error(`Terjadi kesalahan: ${response.status}`);
    }
    const responseJson = await response.json();
    const { restaurant } = responseJson;
    return restaurant;
  }

  async function searchRestaurantByQuery(query) {
    const response = await fetch(`${BASE_URL}/search?q=${query}`);

    if (!response.ok) {
      throw new Error(`Terjadi kesalahan: ${response.status}`);
    }
    const responseJson = await response.json();
    const { restaurants } = responseJson;

    return restaurants;
  }

  async function addReview({ id, name, review }) {
    const response = await fetch(`${BASE_URL}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });
    const responseJson = await response.json();

    const { error, message, customerReviews } = responseJson;

    if (error) {
      throw new Error(message);
    }

    return customerReviews;
  }

  return {
    getAllRestaurants,
    getDetailRestaurant,
    searchRestaurantByQuery,
    addReview,
  };
})();

export default api;
