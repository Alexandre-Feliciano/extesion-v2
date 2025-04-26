// Input de imagens do formulário de criar evento

const InputFile = document.querySelector(".picture_input"); 
const pictureImage = document.querySelector(".picture_image");
const pictureImagetxt = 'Carregar imagem do evento';

pictureImage.innerHTML = pictureImagetxt;

InputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.addEventListener('load', function(e){
            const readerTarget = e.target; 

            const img = document.createElement('img');
            img.src = readerTarget.result;

            
            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });
    } else {
        pictureImage.innerHTML = pictureImagetxt;
    }
});

