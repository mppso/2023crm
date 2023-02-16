var counter = 0;

particlesJS.load('particles-js', 'assets/particles.json', function() {});

$("img,#particles-js").on("contextmenu",function(e){
    return false;
});

new Chart(document.getElementById("birth-chart"), {
    type: 'bar',
    data: {
      labels: ["Barlig","Bauko","Besao","Bontoc","Natonin","Paracelis","Sabangan","Sadanga","Sagada","Tadian"],
      datasets: [
        {label: "2020",backgroundColor: ["#7eade2"],data: [17,1511,147,699,81,495,46,54,129,42]},
        {label: "2021",backgroundColor: ["#4c8dd6"],data: [26,1340,121,609,99,530,54,65,133,49]},
        {label: "2022",backgroundColor: ["#2867af"],data: [44,1935,169,767,151,692,36,81,126,76]}
      ]
    }
});

new Chart(document.getElementById("marriage-chart"), {
    type: 'bar',
    data: {
      labels: ["Barlig","Bauko","Besao","Bontoc","Natonin","Paracelis","Sabangan","Sadanga","Sagada","Tadian"],
      datasets: [
        {label: "2020",backgroundColor: ["#e99f9f"],data: [13,105,23,96,32,102,21,19,55,53]},
        {label: "2021",backgroundColor: ["#e17a7a"],data: [8,157,13,119,41,117,53,35,51,75]},
        {label: "2022",backgroundColor: ["#d95959"],data: [24,176,39,115,50,150,44,38,63,105]}
      ]
    }
});

new Chart(document.getElementById("death-chart"), {
    type: 'bar',
    data: {
      labels: ["Barlig","Bauko","Besao","Bontoc","Natonin","Paracelis","Sabangan","Sadanga","Sagada","Tadian"],
      datasets: [
        {label: "2020",backgroundColor: ["#999999"],data: [31,267,34,197,40,84,37,45,46,84]},
        {label: "2021",backgroundColor: ["#7d7d7d"],data: [39,426,46,277,59,158,60,55,85,102]},
        {label: "2022",backgroundColor: ["#525252"],data: [22,304,38,199,42,117,43,29,65,93]}
      ]
    }
});

setInterval(function(){
  counter++;
  $('#radio'+counter).prop('checked',true);
  if(counter > 4){
    $('#radio1').prop('checked',true);
    counter = 1;
  }
},6000);

