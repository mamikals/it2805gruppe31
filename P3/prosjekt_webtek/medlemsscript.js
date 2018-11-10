const submit = document.getElementById("submit")
const form = document.getElementById("div_form")
const hidden_form = document.getElementById("div_form_submitted")

submit.addEventListener("click", function(change) {
        change.preventDefault
        form.style.display = "none"
        hidden_form.style.display = "block"
})

      