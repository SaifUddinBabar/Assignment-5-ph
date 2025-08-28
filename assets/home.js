function getElement(id)
{
   return document.getElementById(id)
}

document.getElementById('cardbox').addEventListener("click", function(e) {
    if (e.target.classList.contains("btn2")) {
        const maincoin = getElement("coin");
let coinValue = Number(maincoin.innerText); 

const totalcoin = coinValue - 20;

if (totalcoin< 0) {
    alert("Not enough coins");
    return;
} 
     
             const card = e.target.parentNode.parentNode.children[1]
    const contact =  e.target.parentNode.parentNode.children[2]
  

        
             const title = card.querySelector(".title").innerText
        const contactNUmber = contact.querySelector(".contact").innerText
       


        alert(title+contactNUmber);
      
      maincoin.innerText = totalcoin; 
      const container = getElement('containerforhistory')

    const newdiv = document.createElement('div')
newdiv.innerHTML = `
<div class="flex justify-between">
        <div>
          <h1 class="font-bold">${title}</h1>
          <p class="text-gray-400">${contactNUmber}</p>
        </div>
        <div>
          <p>Time</p>
        </div>

</div>
      
      `

container.appendChild(newdiv)


    }
});

