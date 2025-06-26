const ctx = document.getElementById("statChart").getContext("2d");

const statChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: [
      "Gratitude",
      "Training",
      "Intelligence",
      "Charisma",
      "Success",
      "Happiness"
    ],
    datasets: [
      {
        label: "Your Stats",
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: "rgba(30, 144, 255, 0.3)",
        borderColor: "rgba(30, 144, 255, 1)",
        pointBackgroundColor: "white",
        pointBorderColor: "#1e90ff"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: "#444" },
        grid: { color: "#333" },
        pointLabels: { color: "#fff" },
        suggestedMin: 0,
        suggestedMax: 300
      }
    },
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    }
  }
});

function updateChart() {
  const values = [
    document.getElementById("gratitude").value || 0,
    document.getElementById("training").value || 0,
    document.getElementById("intelligence").value || 0,
    document.getElementById("charisma").value || 0,
    document.getElementById("success").value || 0,
    document.getElementById("happiness").value || 0
  ].map(Number);

  statChart.data.datasets[0].data = values;
  statChart.update();

  localStorage.setItem("userStats", JSON.stringify(values));
}

// Load saved data on page load
const saved = JSON.parse(localStorage.getItem("userStats"));
if (saved) {
  [
    "gratitude",
    "training",
    "intelligence",
    "charisma",
    "success",
    "happiness"
  ].forEach((id, i) => {
    document.getElementById(id).value = saved[i];
  });
  statChart.data.datasets[0].data = saved;
  statChart.update();
}
