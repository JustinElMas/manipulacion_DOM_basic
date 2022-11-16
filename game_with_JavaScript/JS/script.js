function documentLoadComplete () {
    let $btnSelectPet = document.getElementById('btn-select-pet');
    $btnSelectPet.addEventListener('click', selectPet);
}

function selectPet() {
    alert('Es tiempo de Front End para Full Stack');
    $btnSelectPet.style.backgroundColor = 'yellow';
    $btnSelectPet.style.color = 'black';
    $btnSelectPet.style.fontFamily = 'monospace';
    $btnSelectPet.style.fontSize = '20px';
    $btnSelectPet.style.fontWeight = 'bolder';
};

//this code only execute when load complete my HTML
window.addEventListener('load', documentLoadComplete);