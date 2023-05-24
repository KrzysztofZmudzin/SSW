function dzielenie() {
    const a= prompt("Podaj liczbę a")
    const b= prompt("Podaj liczbę b, musi być różna od 0")
    var c

    if (b != 0) {
        c= a/b
        document.getElementById("wynik").innerHTML = c
    } else {
        document.getElementById("wynik").innerHTML = "Nie można dzielić przez 0!"
    }
}