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
        console.log(title)
        console.log(contactNUmber)




        //  const title = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[1].children[0].innerText
      
        //      const number = cardbox.parentNode.parentNode.children[0].children[0].children[0].children[2].children[0].innerText
             

        alert(title+number);
      
      maincoin.innerText = totalcoin; 
      const container = getElement('containerforhistory')

    const newdiv = document.createElement('div')
newdiv.innerHTML = `
<div class="flex justify-between">
        <div>
          <h1 class="font-bold">${title}</h1>
          <p class="text-gray-400">${number}</p>
        </div>
        <div>
          <p>Time</p>
        </div>

</div>
      
      `

container.appendChild(newdiv)


    }
});

