const chartData = {
    labels: ["Paid", "Direct", "Social", "Others"],
    data: [50, 17, 10, 22,],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Revenue Channel",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 2,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
  
 
  
  populateUl();