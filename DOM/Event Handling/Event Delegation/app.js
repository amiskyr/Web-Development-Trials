// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//     li.addEventListener("click", function () {
//         li.remove();
//     });
// }

const tweetForm = document.querySelector("#tweetForm");// form element
const tweetcontainer = document.querySelector("#tweets");// list element

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();// preventing default behavior of form element submission

    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];
    // console.log(usernameInput.value, tweetInput.value);

    const usernameInput = tweetForm.elements.username.value;// value obtained form inputField
    const tweetInput = tweetForm.elements.tweet.value;// value obtained from inputfield

    addTweet(usernameInput, tweetInput);

    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');// new list item 
    const bTag = document.createElement('b');// new bold tag

    bTag.append(username);// adds username as the child of b element : <b>username</b>
    newTweet.append(bTag);// adds the whole bTag element as child of li element : <li><b>username</b></li>
    newTweet.append(`-${tweet}`);// adds the whole value from 2nd input field as child of li element

    // console.log(newTweet);
    tweetcontainer.append(newTweet);
}

tweetcontainer.addEventListener("click", function (e) {
    e.target.nodeName === "LI" && e.target.remove();// on clicking the container element the li will be removed
})