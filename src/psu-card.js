import {LitElement, html, css, } from 'lit';



class PsuCard extends LitElement {
  static properties = {
    image: { type: String },
    alt: { type: String },
    title: { type: String },
    descripton: { type: String },
    dark: { type: Boolean, reflect: true },
  }

  constructor() {
    super();
    this.image = "https://www.centredaily.com/sports/college/penn-state-university/psu-football/ap7hi6/picture72664512/alternates/FREE_1140/IMG_Stripe11_2_1_746PA6CA_L184436036";
    this.title = "Penn State Blue and White Game";
    this.descripton = "110 thousand fans come to watch penn state football to create the greatest show in college football.";
    this.alt = "Card Image";

  }

  static styles = css`
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  
  }

  :host([dark]) .card-container{
    background-color: grey;
  }

  
  .card-container {
    background-color: #001e44;
    width: 20%;
    height: 50%;
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: background-color 0.3s;
  }

  
  .card-content {
    text-align: center;
    color: white;
    display: block;
    flex-direction: column;
    justify-content: center;
  }

  
  
  .card-content> img{
    width: 350px;
    max-width:80%;
    border-radius: 10px;
  }
  
  
  .card-content button{
    margin-top:40px;
    text-decoration: none;
    background-color: #ffff;
    color:#001e44 ;
    padding: 8px 12px;
    border-radius: 5px;
    
  }
  
  .card-content button:hover{ 
    background-color: #001e44;
    color: white;
    transition: background-color 0.3s; 
  }
  
  .card-content button a{
     text-decoration: none;
  }
  
  #cDescription {
    color: white;
    font-family: "Lucida Console";
  }

  #toggleDescription {
    display: flex;
    background-color: white;
    color: black;
    width: 40%;
    align-items: center; 
    justify-content: center;
    margin-left: 100px;
    margin-top: 20px;
    font-family: "Lucida Console";
  }
  
    .hidden {
      display: none;
  }
  .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .card-container {
      background-color: #001e44;
      width: 20%;
      margin: 8px;
      padding: 10px;
      border-radius: 12px;
    
  }
  .card-content img {
      max-width: 100%;
      border-radius: 10px;
  }


@media (max-width: 800px) and (min-width: 500px) {
    .details-button {
      display: block;
      
      .card-content button{
    display: none;
      }
    }
  }
  
  @media (max-width: 800px) {
    .card {
      max-width: 500px;
    }
      .card-content button{
    display: none;
      }
    }


  `;



  firstUpdated() {
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
 
    
   

    button.addEventListener("click", function (e) {
      const cardToClone = document.querySelector(".card-container");
      const clone = cardToClone.cloneNode(true);
    });

    btn.addEventListener('click', () => {
      cards.appendChild(clone);
    });

    cardContent.addEventListener('click', () => {
      cardImage.classList.removeChild('hidden');
    });

  
}

  deleteBtn(e) {
      const cards = this.shadowRoot.querySelector('.cards');
      const cardCount = cards.children.length;
      if (cardCount > 1) {
        cards.removeChild(cards.lastChild);
      } 
  }


  toggleDescription(e) {
    console.warn(e);
    const cardDescription = this.shadowRoot.querySelector('#cDescription');
    cardDescription.classList.toggle('hidden');
  }
  

  randomColorGenerator(e) {
    console.warn(e);
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cardContainer.style.backgroundColor = '#' + randomColor;
   
  }

  titleBtn(e) {
    console.warn(e);
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');

    if (cardTitle.innerText == 'something else')
    {
      cardTitle.innerText = 'Penn State Blue and White Game';
     }
     else{
      cardTitle.innerHTML = 'something else';
     }
    }

    //This was the only way I could get the hover to work when I clicked the change color buttone
    //I used css originially, but it would not change the color when I hovered if I used the change color button
    handleCardHover() {
    
      this.hovered = !this.hovered; 
      const cardContainer = this.shadowRoot.querySelector('.card-container');

      if (this.hovered) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cardContainer.style.backgroundColor = '#' + randomColor;
      } else {
        cardContainer.style.backgroundColor = '#001e44'; 
      }

    }

  //Cloned card properties and functions
  cloneCard(e) {
    console.warn(e);
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
  
    clone.addEventListener('mouseover', () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16); //random color generator for cloned cards when hovered
      clone.style.backgroundColor = '#' + randomColor;
    });

    clone.addEventListener('mouseout', () => {
      clone.style.backgroundColor = '#001e44';
    });
  
    const clonedToggleButton = clone.querySelector('button');

    clonedToggleButton.addEventListener('click', () => {
      const clonedDescription = clone.querySelector('#cDescription');
      clonedDescription.classList.toggle('hidden');
    });

    const changeTitle = this.shadowRoot.querySelector('#writing');
    changeTitle.addEventListener('click', () => {
      const title = clone.querySelector('h2');
      if (title.innerHTML == 'something else')
      {
        title.innerHTML = 'Penn State Blue and White Game';
       }
        else{
          title.innerHTML = 'something else';
        }
    })

    const changeBackground = this.shadowRoot.querySelector('#background');
    changeBackground.addEventListener('click', () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      clone.style.backgroundColor = '#' + randomColor;
    })
  

      
    this.shadowRoot.querySelector('.cards').appendChild(clone);
    }

  render() {
  return html`
  <button id = "btn" @click = "${this.cloneCard}">Clone Card</button>
  <button id = "background" @click ="${this.randomColorGenerator}">Change Card Color</button>
  <button id = "writing" @click ="${this.titleBtn}">Change Title</button>
  <button @click ="${this.deleteBtn}">Delete Last Card</button>
  
  <div class="cards">
  <div class="card-container"
  @mouseover="${this.handleCardHover}"
  @mouseout="${this.handleCardHover}">

    <div class="card-content">
      <h2 id="cardTitle">${this.title}</h2>
      <p>Blue and White game day</p>
      <img src="${this.image}" alt= ${this.alt} />
      <button @click ="${this.toggleDescription}">Toggle Description</button>
    </div>
    <p id="cDescription" ><slot></slot>${this.descripton} </p>
   
  </div>
</div>
    `;
  }
}
customElements.define('psu-card', PsuCard);




