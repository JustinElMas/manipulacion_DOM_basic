function documentLoadComplete () {
    let $btnSelectPet = document.getElementById('btn-select-pet');
    $btnSelectPet.addEventListener('click', selectPet);

    function selectPet() {
        alert('Seleccionaste tu mascota');
        $btnSelectPet.style.backgroundColor = 'yellow';
        $btnSelectPet.style.color = 'black';
        $btnSelectPet.style.fontFamily = 'monospace';
        $btnSelectPet.style.fontSize = '20px';
        $btnSelectPet.style.fontWeight = 'bolder';
        $btnSelectPet.style.borderRadius = '20px';
        $btnSelectPet.style.border = 'none';
        $btnSelectPet.style.padding = '10px';

        const $petHipodoge = document.getElementById('hipodoge');
        const $petCapipepo = document.getElementById('capipepo');
        const $petRatigueya = document.getElementById('ratigueya');

        //code for create and insert the new element with answer of user
            function $userTrueOption (pet) {
                const $userPet = document.getElementById('mensaje');
        
                const $newElementP = document.createElement('p');
                $newElementP.textContent = `Seleccionaste a: ${toString(pet.id)}`;
                
                $userPet.replaceChildren($newElementP);
            };
        //finist codde for create ...

        //comprobation code function $userTrueOption()
        if ($petHipodoge.checked) {
            $userTrueOption($petHipodoge);
        } else if ($petCapipepo.checked) {
            $userTrueOption($petCapipepo);
        } else {
            $userTrueOption($petRatigueya);
        }   
};

};


//this code only execute when load complete my HTML
window.addEventListener('load', documentLoadComplete);

//**PREGUNTAS  ¿QUÉ SIGNIFICA? script.js:5 [Violation] 'click' handler took 804ms */

//para estudiar react and node 
//https://www.npmjs.com/package/require-stack