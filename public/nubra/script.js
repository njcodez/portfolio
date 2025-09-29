document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate");

  // Charts placeholders
  let marketChart, funnelChart, financeChart, retentionChart;

  function initCharts() {
    const ctxMarket = document.getElementById("marketChart").getContext("2d");
    const ctxFunnel = document.getElementById("funnelChart").getContext("2d");
    const ctxFinance = document.getElementById("financeChart").getContext("2d");
    const ctxRetention = document.getElementById("retentionChart").getContext("2d");

    marketChart = new Chart(ctxMarket, {
      type: "bar",
      data: { labels: [], datasets: [{ label: "Market Size", data: [], backgroundColor: "#4a90e2" }] },
      options: { responsive: true }
    });

    funnelChart = new Chart(ctxFunnel, {
      type: "bar",
      data: { labels: [], datasets: [{ label: "Acquisition Funnel", data: [], backgroundColor: "#7ec8e3" }] },
      options: { responsive: true }
    });

    financeChart = new Chart(ctxFinance, {
      type: "line",
      data: { labels: [], datasets: [{ label: "Revenue Projection", data: [], borderColor: "#4a90e2", fill: false }] },
      options: { responsive: true }
    });

    retentionChart = new Chart(ctxRetention, {
      type: "pie",
      data: { labels: ["3 Months", "6 Months", "Lost"], datasets: [{ data: [], backgroundColor: ["#4a90e2", "#7ec8e3", "#ccc"] }] },
      options: { responsive: true }
    });
  }

  function calculate() {
    const engineers = parseInt(document.getElementById("engineers").value);
    const adoptionRate = parseFloat(document.getElementById("adoption").value) / 100;
    const referralMultiplier = parseFloat(document.getElementById("referral").value);
    const conv1 = parseFloat(document.getElementById("conv1").value) / 100;
    const conv2 = parseFloat(document.getElementById("conv2").value) / 100;
    const conv3 = parseFloat(document.getElementById("conv3").value) / 100;
    const conv4 = parseFloat(document.getElementById("conv4").value) / 100;
    const cac = parseFloat(document.getElementById("cac").value);
    const revenue = parseFloat(document.getElementById("revenue").value);
    const ret3 = parseFloat(document.getElementById("ret3").value) / 100;
    const ret6 = parseFloat(document.getElementById("ret6").value) / 100;

    // ===== Market Sizing =====
    const targetUsers = engineers * adoptionRate * referralMultiplier;

    // ===== Funnel =====
    const stage1 = targetUsers * conv1;
    const stage2 = stage1 * conv2;
    const stage3 = stage2 * conv3;
    const stage4 = stage3 * conv4;

    // ===== Financials =====
    const totalRevenue = stage4 * revenue;
    const totalCost = stage4 * cac;
    const ltv = revenue * ret3; // Simplified LTV
    const cacLtvRatio = (cac > 0) ? (ltv / cac).toFixed(2) : 0;

    // ===== Update KPI Cards =====
    document.getElementById("kpi-active").innerText = Math.round(stage4);
    document.getElementById("kpi-revenue").innerText = "$" + totalRevenue.toLocaleString();
    document.getElementById("kpi-cost").innerText = "$" + totalCost.toLocaleString();
    document.getElementById("kpi-ltv").innerText = "$" + ltv.toFixed(2);
    document.getElementById("kpi-cac").innerText = "$" + cac.toFixed(2);
    document.getElementById("kpi-ratio").innerText = cacLtvRatio;

    // ===== Update Charts =====
    marketChart.data.labels = ["Potential Market"];
    marketChart.data.datasets[0].data = [targetUsers];
    marketChart.update();

    funnelChart.data.labels = ["Awareness", "Registration", "KYC", "First Trade"];
    funnelChart.data.datasets[0].data = [stage1, stage2, stage3, stage4];
    funnelChart.update();

    financeChart.data.labels = ["Month 1", "Month 3", "Month 6", "Month 12"];
    financeChart.data.datasets[0].data = [totalRevenue * 0.1, totalRevenue * 0.3, totalRevenue * 0.6, totalRevenue];
    financeChart.update();

    retentionChart.data.datasets[0].data = [ret3 * 100, ret6 * 100, 100 - (ret6 * 100)];
    retentionChart.update();
  }

  // Initialize charts and bind button
  initCharts();
  calculateBtn.addEventListener("click", calculate);
  calculate(); // Initial run
});
