<script>
  // array
  const text = ["Semmy Taju", "Wandi Darea", "Recky Ronga", "Dilben Tulum"];

  // object array javascript
  const myArr = JSON.parse(text);

  // print console
  console.log(myArr);

  // view to html
  document.getElementById("demo3").innerHTML = "My name is " + myArr[0];
</script>