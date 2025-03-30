function appendValue(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  try {
    let result = eval(
      document.getElementById("display").value.replace("^", "**")
    );
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function printResult() {
  let result = document.getElementById("display").value;
  if (result) {
    let printWindow = window.open("", "", "width=400,height=300");
    printWindow.document.write(
      "<html><head><title>Hasil Perhitungan</title></head><body>"
    );
    printWindow.document.write("<h2>Hasil Perhitungan</h2>");
    printWindow.document.write(
      '<p style="font-size: 24px;">' + result + "</p>"
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  } else {
    alert("Tidak ada hasil untuk dicetak!");
  }
}
