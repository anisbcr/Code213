document.addEventListener("DOMContentLoaded", () => {
  const Gogo = document.querySelector(".gogo");
  const Put = document.querySelector(".put");
  const News = document.querySelector(".news");

  let cocos = JSON.parse(localStorage.getItem("cocos")) || [];
  let editIndex = -1; 

  const tache1 = () => {
    News.innerHTML = "";
    cocos.forEach((coco, index) => {
      const li = document.createElement("li");
      li.classList.toggle("succes", coco.completed);
      li.innerHTML = 
       ` <span>${coco.Text}</span>
        <div class="but">           
          <button onClick="cocoCompleted(${index})">Done</button>
          <button onClick="editCoco(${index})">Edit</button>
           <button onClick="cocoNotCompleted(${index})">Delete</button>
        </div>`
      ;
      News.appendChild(li);
    });
  };

  Gogo.addEventListener("click", (e) => {
    e.preventDefault();
    const textPut = Put.value.trim();
    if (textPut) {
      if (editIndex === -1) {
        // Ajouter une nouvelle tâche
        cocos.push({ Text: textPut, completed: false });
      } else {
        // Modifier la tâche existante
        cocos[editIndex].Text = textPut;
        editIndex = -1; // Réinitialiser après modification
      }
      localStorage.setItem("cocos", JSON.stringify(cocos));
      tache1();
      Put.value = "";
    }
  });

  window.cocoCompleted = (index) => {
    cocos[index].completed = !cocos[index].completed;
    localStorage.setItem("cocos", JSON.stringify(cocos));
    tache1();
  };
  window.cocoNotCompleted = (index) => {
    cocos.splice(index, 1);
    localStorage.setItem("cocos", JSON.stringify(cocos));
    tache1();
  }
window.editCoco = (index) => {
    const coco = cocos[index];
    Put.value = coco.Text; 
    editIndex = index; 
    Put.focus(); 
  };

  tache1();
});