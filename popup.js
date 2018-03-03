var ctx = document.getElementById("myChart").getContext('2d');

 function newDate(days) {
	    var obj = moment().add(days, 'd').toDate();
		return moment(obj).format("MMM Do").toString();
	}
	
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [newDate(-6), newDate(-5), newDate(-4), newDate(-3), newDate(-2), newDate(-1), newDate(0), newDate(1)],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 7, 9],
            backgroundColor: 'rgba(66, 134, 244, 0.2)',
            borderColor: 'rgba(66, 134, 244, 0.9)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});