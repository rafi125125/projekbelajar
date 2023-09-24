document.getElementById("btn-hitung").addEventListener("click", function () {
	const operator=document.getElementById("operator")
	if (operator.value === "+") {
		hitung_tambah ()
	} else if (operator.value === "-") {
		hitung_kurang ()
	} else if (operator.value === "*") {
		hitung_kali ()
	} else if (operator.value === ":") {
		hitung_bagi ()
	}
})

function hitung_tambah () {
    const input1 =document.getElementById("input1")
	const input2 =document.getElementById("input2")
	const hasil =document.getElementById("hasil")
	hasil.value=parseInt(input1.value)+parseInt(input2.value)
}
function hitung_kurang () {
	const input1 =document.getElementById("input1")
	const input2 =document.getElementById("input2")
	const hasil =document.getElementById("hasil")
	hasil.value=parseInt(input1.value)-parseInt(input2.value)
}
function hitung_kali () {
	const input1 =document.getElementById("input1")
	const input2 =document.getElementById("input2")
	const hasil =document.getElementById("hasil")
	hasil.value=parseInt(input1.value)*parseInt(input2.value)
}
function hitung_bagi () {
	const input1 =document.getElementById("input1")
	const input2 =document.getElementById("input2")
	const hasil =document.getElementById("hasil")
	hasil.value=parseInt(input1.value)/parseInt(input2.value)
}