function calculateMarks() {
    let a = document.getElementById("sub1").value;
    let b = document.getElementById("sub2").value;
    let c = document.getElementById("sub3").value;
    let d = document.getElementById("sub4").value;
    let e = document.getElementById("sub5").value;
    let f = document.getElementById("sub6").value;
    let g = document.getElementById("sub7").value;
    let h = document.getElementById("sub8").value;

    let sub1 = Number(a);
    let sub2 = Number(b);
    let sub3 = Number(c);
    let sub4 = Number(d);
    let sub5 = Number(e);
    let sub6 = Number(f);
    let sub7 = Number(g);
    let sub8 = Number(h);

    let sum = sub1 + sub2 + sub3 +sub4 +sub5 +sub6 +sub7 +sub8;

    let result = "";

    if (sum >= 700) {
        result = "Pass (Distinction)";
    }
    else if (sum >= 600) {
        result = "Pass (First Division)";
    }
    else if (sum >= 500) {
        result = "Pass (Second Division)";
    }
    else if (sum >= 400) {
        result = "Pass (Third Division";
    }
    else {
        result = "Fail!";
    }

    document.getElementById("result").innerHTML =
        "Total Marks = " + sum + "<br>" + result;
}
