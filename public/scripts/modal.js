export default function Modal(){

    const modal_wrapper = document.querySelector(".modal-wrapper")
    const buttonCancel = document.querySelector(".modal-wrapper .buttons a")

    buttonCancel.addEventListener("click", close)

    function close(){
        modal_wrapper.classList.remove("active")
    }
    function open(){
        modal_wrapper.classList.add("active")
    }

    return{
        close,
        open
    }
}