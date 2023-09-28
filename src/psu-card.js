import {LitElement, html, css, } from 'lit';



class PsuCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
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
  }
  
  
  .card-content {
    text-align: center;
    color: white;
    display: block;
    flex-direction: column;
    justify-content: center;
  }

  
  
  .card-content> img{
    width: 200px;
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

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated() {
    const titleBtn = this.shadowRoot.querySelector('#titleBtn');
    const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');
    const cardDescription = this.shadowRoot.querySelector('#cDescription');
    const toggleDescription = this.shadowRoot.querySelector('#toggleDescription');
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const details = this.shadowRoot.querySelector('details');
    const summary = this.shadowRoot.querySelector('summary');
    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const cardClone = this.shadowRoot.querySelector('.card-container');
    
    titleBtn.addEventListener('click', () => {
      cardTitle.innerHTML = 'Penn State Football';
    });

    button.addEventListener("click", function (e) {
      const cardToClone = document.querySelector(".card-container");
      const cardCloned = cardToClone.cloneNode(true);
    });

    titleBtn.addEventListener('click', () => {
      cardTitle.innerHTML = 'Penn State Football';
    });

    toggleDescription.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

    btn.addEventListener('click', () => {
      cards.appendChild(clone);
    });

    cardContent.addEventListener('click', () => {
      cardImage.classList.removeChild('hidden');
    });

    summary.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

}

  deleteBtn(e) {
      const cards = this.shadowRoot.querySelector('.cards');
      const cardCount = cards.children.length;
      if (cardCount > 1) {
        cards.removeChild(cards.lastChild);
      } 
  }

  randomColorGenerator(e) {
    console.warn(e);
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cardContainer.style.backgroundColor = '#' + randomColor;
    return randomColor;
  }

  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.cards').appendChild(clone);
  }

  render() {
  return html`
  <button id = "btn" @click = "${this.cloneCard}">Clone Card</button>
  <button @click ="${this.randomColorGenerator}">Change Card Color</button>
  <button id ="titleBtn">Change Title</button>
  <button @click ="${this.deleteBtn}">Delete Last Card</button>
  <div class="cards">
  <div class="card-container">
    <div class="card-content">
      <h2 id="cardTitle">Penn State Blue and White Game</h2>
      <p>Blue and White game day</p>
      <img src="https://www.pennlive.com/resizer/nmIUnuL_9rmAqjXOlD5yFnxF29I=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BHM62A6AUJFHVJIZHI6BDPJHWY.jpg" alt="Card Image" />
    </div>
    <details>
      
    <summary id="toggleDescription"> Toggle Description </summary>
    <p id="cDescription" >110 thousand fans come to watch penn state football to create the greatest show in college football.</p>

    </details>
  
  </div>
</div>
    `;
  }
}
customElements.define('psu-card', PsuCard);




