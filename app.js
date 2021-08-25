// http://curric.rithmschool.com/springboard/exercises/ajax-giphy-party/


const form = document.querySelector("#form");
const gifDiv = document.getElementById("gifDisplay");

async function getGIF(q) {
    const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { q, api_key } });
    let resRand = res.data["data"][Math.floor(Math.random() * (res.data["data"]).length)];
    let resRandIndex = res.data["data"].indexOf(resRand);
    let resRandImg = res.data["data"][resRandIndex]["images"]["fixed_height"]["url"];
    appendGIF(resRandImg);
};

form.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.id == "addGIFs") {
        const searchVal = document.getElementById("searchText").value;
        getGIF(searchVal);
    } else if (e.target.id == "removeGIFs") {
        gifDiv.innerHTML = '';
    }
});

function appendGIF(gifURL) {
    let newImg = document.createElement("img");
    newImg.src = gifURL;
    gifDiv.append(newImg);
}