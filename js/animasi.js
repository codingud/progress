window.addEventListener("scroll", muncul);

function muncul(){
    let elements = document.querySelectorAll(".elemen");

    for (let i = 0; i < elements.length; i++)
    {
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScrolll = 150;

        if(jarakAtasElemen < tinggiLayar - ukuranScrolll)
        {
            elements[i].classList.add("tampil");
        }
        else
        {
            elements[i].classList.remove("tampil");
        }
    }
}