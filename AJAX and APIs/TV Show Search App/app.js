const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED!");

    // extracting the search term for relevant results
    const searchTerm = form.elements.query.value;

    // query string object for adding our own parameters for making change to the query string
    const config = { params: { q: searchTerm, isFunny: true } };

    // sending request with parameters defined in config object
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`, config);

    makeImages(res.data);

    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result)

        if (result.show.image) {
            // creating a new <img> element in document
            const img = document.createElement("img");
            // assigning the image of first search result to the created <img> element
            img.src = result.show.image.medium;

            // adding the <img> element to the body
            document.body.append(img);
        }
    }
}