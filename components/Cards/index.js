// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const LeCard = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles);
            const mainTopic = Object.entries(response.data.articles)
                        //vscode added .array with forEach may cause problem
            mainTopic.forEach(subject => {
                subject[1].forEach(data =>{
                    const NewCard = PaperStuff(data);
                    LeCard.append(NewCard);
                });
                
            });
    })
        .catch(error => {
            return alert(error);
        });

    function PaperStuff(data) {
        const card = document.createElement("div"),
                Header = document.createElement("div"),
                cardAuthorstuff = document.createElement("div"),
                cardImgstuff = document.createElement("div"),
                cardImg = document.createElement("img"),
                cardAuthor = document.createElement("span");

                card.classList.add("card");
                Header.classList.add("headline");
                cardAuthorstuff.classList.add("author");
                cardImgstuff.classList.add("img-container");

                Header.textContent = data.headline;
                cardImg.src = data.authorPhoto;
                cardAuthor.textContent = data.authorName;

                card.append(Header);
                card.append(cardAuthorstuff);
                cardAuthorstuff.append(cardImgstuff);
                cardImgstuff.append(cardImg);
                cardAuthorstuff.append(cardAuthor);

                return card;
    }