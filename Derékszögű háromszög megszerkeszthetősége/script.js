function Megszerkesztheto()
{
    aOldal = document.getElementById("befogo1").value;
    bOldal = document.getElementById("befogo2").value;
    cOldal = document.getElementById("atfogo").value;

    if (Math.pow(aOldal, 2) + Math.pow(bOldal, 2) == Math.pow(cOldal, 2))
    {
        window.alert("A derékszögű háromszög megszerkeszthető!")
    }
    else
    {
        window.alert("A derékszögű háromszög NEM megszerkeszthető!");
    }
}

function VeletlenSzamok()
{
    randomSzam1 = Math.floor(Math.random() * 90 + 10);
    randomSzam2 = Math.floor(Math.random() * 90 + 10);
    randomSzam3 = Math.floor(Math.random() * 90 + 10);

    document.getElementById("befogo1").value = randomSzam1;
    document.getElementById("befogo2").value = randomSzam2;
    document.getElementById("atfogo").value = randomSzam3;
}

function AtfogoKiszamitas()
{
    aOldal = document.getElementById("befogo1").value;
    bOldal = document.getElementById("befogo2").value;
    cOldal = document.getElementById("atfogo").value;

    document.getElementById("atfogo").value = Math.SQRT2(Math.pow(aOldal, 2) + Math.pow(bOldal, 2));
}