const FORM = document.querySelector("form")
const BILL_INPUT = document.getElementById("bill")
const RADIO_TIPS = document.querySelectorAll("input[type='radio']")
const CUSTOM_TIP_INPUT = document.getElementById("custom-tip")
const PEOPLE_INPUT = document.getElementById("people")
const TIP_AMOUNT = document.getElementById("tip-amount")
const TOTAL = document.getElementById("total")
let tip = 0
const BUTTON = document.querySelector(".total button")

FORM.addEventListener("submit", (e) => {
  e.preventDefault()

  if (PEOPLE_INPUT.value == 0) {
    PEOPLE_INPUT.parentElement.classList.add("error")
    return
  } else {
    PEOPLE_INPUT.parentElement.classList.remove("error")
  }

  let bill = parseFloat(BILL_INPUT.value) || 0
  let people = parseInt(PEOPLE_INPUT.value)

  let tip_amount = (tip * bill) / people
  let total = ((1 + tip) * bill) / people

  TIP_AMOUNT.innerText = tip_amount.toFixed(2)
  TOTAL.innerText = total.toFixed(2)

  BUTTON.disabled = false
})

BUTTON.addEventListener("click", () => {
  FORM.reset()
  BUTTON.disabled = true
})

RADIO_TIPS.forEach((radio) => {
  radio.addEventListener("click", () => {
    tip = parseInt(radio.dataset.value) / 100
  })
})

CUSTOM_TIP_INPUT.addEventListener("input", () => {
  RADIO_TIPS.forEach((radio) => {
    radio.checked = false
  })

  tip = parseFloat(CUSTOM_TIP_INPUT.value) / 100
})
