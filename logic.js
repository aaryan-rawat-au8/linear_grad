const temp = () => {
  x = "#";
  arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  for (var i = 0; i < 6; i++) {
    x = x + arr[Math.floor(Math.random() * arr.length)];
  }
  return x;
};
const changeLogic = () => {
  var xx = temp();
  console.log(xx);
  document.getElementById("heading").innerHTML = "HEX Code :-" + xx;
  document.body.style.background = xx;
};

const gradient = () => {
  a = temp();
  b = temp();
  console.log(a);
  console.log(b);
  console.log("linear-gradient(to right," + a + ",", b + ")");
  document.getElementById("heading").innerHTML =
    "Color 1:- " +
    a +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "Color 2:- " +
    b;
  document.body.style.background = `linear-gradient(to right,${a},${b})`;
};
