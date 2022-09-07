const qalinligi = $(".non");
const qalinligiDarajasi = $(".non__qalinligi");

qalinligi.addEventListener("change", () => {
    let qalinligiValue = qalinligi.value;
    qalinligiDarajasi.textContent = qalinligiValue;
})

const kattaligiOne = $("#size1");
const kattaligiTwo = $("#size2");
const kattaligiThree = $("#size3");
const kattaligiArea = $(".kattaligi__area__one");

kattaligiOne.addEventListener("click", () => {
    kattaligiArea.textContent = "25sm";
})

kattaligiTwo.addEventListener("click", () => {
    kattaligiArea.textContent = "30sm";
})

kattaligiThree.addEventListener("click", () => {
    kattaligiArea.textContent = "35sm";
})

const listOne = $(".checkbox__one");
const listTwo = $(".checkbox__two");
const listThree = $(".checkbox__three");
const listFour = $(".checkbox__four");
const listFive = $(".checkbox__five");
const listSix = $(".checkbox__six");

const listAreaOne = $(".ustiga__list__one");
const listAreaOTwo = $(".ustiga__list__two");
const listAreaThree = $(".ustiga__list__three");
const listAreaFour = $(".ustiga__list__four");
const listAreaFive = $(".ustiga__list__five");
const listAreaSix = $(".ustiga__list__six");

listOne.addEventListener("click", () => {
    listAreaOne.textContent = " -pomidor"
})

listTwo.addEventListener("click", () => {
    listAreaOTwo.textContent = " -kurka go'shti"
})

listThree.addEventListener("click", () => {
    listAreaThree.textContent = " -zaytun"
})

listFour.addEventListener("click", () => {
    listAreaFour.textContent = " -tuzlangan bodring"
})

listFive.addEventListener("click", () => {
    listAreaFive.textContent = " -qo'ziqorin"
})

listSix.addEventListener("click", () => {
    listAreaSix.textContent = " -qazi"
})

const plusOne = $(".plus__one");
const plusTwo = $(".plus__two");

const plusAreaOne = $(".plus__list__one");
const plusAreaOTwo = $(".plus__list__two");

plusOne.addEventListener("click", () => {
    plusAreaOne.textContent = " -achchiq"
})

plusTwo.addEventListener("click", () => {
    plusAreaOTwo.textContent = " -sosiskali"
})


const button = $(".danger__btn");
const modalOne = $(".modal__success");
const close  =$("#close");

button.addEventListener("click", ()=>{
    modalOne.setAttribute('class', 'modal__success show')
})

close.addEventListener("click", ()=>{
    modalOne.setAttribute('class', 'modal__success')
})
