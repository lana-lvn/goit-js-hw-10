import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_nXJmSR86wGH7Lbl4GbCAxbWLfKpMa3lJM0q9uX0Q5B21lYvsZapTKhLLUWQL36NI";

const URL = 'https://api.thecatapi.com/v1';


export function fetchBreeds() { 
    return axios
        .get(`${URL}/breeds`)
        .then((response) => response.data);

};

export function fetchCatByBreed(breedId) { 
    return axios
        .get(`${URL}/images/search?breed_ids=${breedId}`)
        .then((response) => response.data);
};

