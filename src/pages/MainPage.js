
import {
  COIN_LIST,
  getWeatherPrediction,
  getMarketCapHistory,
  getFearGreedIndex,
  getFearGreedLabel,
  getFearGreedEmoji,
} from "../app/api/conapi.js";

// createMarketCapChart 함수는 이전과 동일하게 유지
function createMarketCapChart() {
  const chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  chart.setAttribute("class", "market-cap-chart");
  chart.setAttribute("viewBox", "0 0 100 60"); 

  const { data } = getMarketCapHistory(); // COIN_LIST[0].symbol 인자 제거 (getMarketCapHistory는 인자 안 받음)
  const points = data
    .map(
      (val, i) =>
        `${i * (100 / (data.length - 1))},${60 - (val / Math.max(...data)) * 50}`,
    )
    .join(" ");

  const polyline = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline",
  );
  polyline.setAttribute("points", points);
  polyline.setAttribute("fill", "none");
  polyline.setAttribute("stroke", "#ff3b30"); // 기본 라이트모드 색상, 다크모드는 CSS에서 처리
  polyline.setAttribute("stroke-width", "1");
  chart.appendChild(polyline);

  return chart;
}

export function renderMainPage(container) {
  container.innerHTML = "";

  const main = document.createElement("div");
  main.className = "main-content";

  // 좌측 패널 (코인 일기예보)
  const left = document.createElement("div");
  left.className = "left-panel";

  const leftTitle = document.createElement("h3");
  leftTitle.textContent = "코인 일기예보";
  left.appendChild(leftTitle);

  const coinListContainer = document.createElement("div");
  coinListContainer.className = "coin-list-container";

  COIN_LIST.forEach((coin) => {
    const coinItem = document.createElement("div");
    coinItem.className = "coin-item";
    coinItem.style.cursor = "pointer";
    coinItem.addEventListener("click", () => {
      window.location.hash = `coin/${coin.symbol}`;
    });

    // 코인 기본 정보 (심볼, 이름, 가격, 변동률)
    const coinInfoRow = document.createElement("div");
    coinInfoRow.className = "coin-info-row";
    const coinSymbolName = document.createElement("div");
    coinSymbolName.className = "coin-symbol-name";

    const symbolDisplay = document.createElement("span");
    symbolDisplay.className = "coin-item-symbol";
    // 수정된 부분: 그래픽 심볼 우선 표시
    symbolDisplay.textContent = coin.graphicSymbol || coin.symbol; 

    const nameDisplay = document.createElement("span");
    nameDisplay.className = "coin-item-name";
    nameDisplay.textContent = ` ${coin.name}`; // 심볼과 이름 사이 공백 추가

    coinSymbolName.appendChild(symbolDisplay);
    coinSymbolName.appendChild(nameDisplay);

    const price = document.createElement("div");
    price.className = "coin-price";
    price.textContent = coin.price;

    const change = document.createElement("div");
    change.className = "coin-change";
    change.textContent = coin.change || "0%";
    change.style.color =
      coin.change && coin.change.includes("+") ? "#34c759" : "#ff3b30";

    coinInfoRow.appendChild(coinSymbolName);
    coinInfoRow.appendChild(price);
    coinInfoRow.appendChild(change);
    coinItem.appendChild(coinInfoRow);

    // 어제, 오늘, 내일 날씨 정보
    const dailyWeatherRow = document.createElement("div");
    dailyWeatherRow.className = "daily-weather-row";

    const forecasts = getWeatherPrediction(coin.symbol);

    forecasts.forEach((forecast) => {
      const weatherDayBlock = document.createElement("div");
      weatherDayBlock.className = "weather-day-block";

      // const dayLabel = document.createElement("div");
      // dayLabel.className = "weather-day-label";
      // if (forecast.day === "yesterday") dayLabel.textContent = "";
      // else if (forecast.day === "today") dayLabel.textContent = "";
      // else if (forecast.day === "tomorrow") dayLabel.textContent = "";

      const weatherIcon = document.createElement("span");
      weatherIcon.className = "weather-day-icon";
      weatherIcon.textContent = forecast.icon;
      weatherIcon.title = forecast.tooltip;
      
      // weatherDayBlock.appendChild(dayLabel);
      weatherDayBlock.appendChild(weatherIcon);
      dailyWeatherRow.appendChild(weatherDayBlock);
    });

    coinItem.appendChild(dailyWeatherRow);
    coinListContainer.appendChild(coinItem);
  });

  left.appendChild(coinListContainer);

  // ... (이하 코드는 이전과 거의 동일) ...
  const analysisNote = document.createElement("div");
  analysisNote.className = "analysis-note";
  analysisNote.textContent =
    "* 날씨 아이콘은 각 날짜의 예상 변동성을 나타냅니다.";
  left.appendChild(analysisNote);

  // const ctaButtons = document.createElement("div");
  // ctaButtons.className = "cta-buttons";

  // const predictBtn = document.createElement("button");
  // predictBtn.textContent = "예측하기";
  // predictBtn.onclick = () => (window.location.hash = "prediction");

  // const discussBtn = document.createElement("button");
  // discussBtn.textContent = "토론방";
  // discussBtn.onclick = () => (window.location.hash = "discussion");

  // ctaButtons.appendChild(predictBtn);
  // ctaButtons.appendChild(discussBtn);
  // left.appendChild(ctaButtons);

  // 우측 패널
  const right = document.createElement("div");
  right.className = "right-panel";

  // 시가 총액 패널
  const marketCapPanel = document.createElement("div");
  marketCapPanel.className = "market-cap-panel";

  const marketCapHeader = document.createElement("div");
  marketCapHeader.className = "market-cap-header";

  const marketCapTitle = document.createElement("div");
  marketCapTitle.textContent = "시가 총액";
  marketCapTitle.className = "market-cap-title";

  const marketCapValueContainer = document.createElement("div");
  marketCapValueContainer.className = "market-cap-value-container";
  const marketCapValue = document.createElement("div");
  marketCapValue.textContent = "₩4.04P"; // 이 값은 동적으로 변경될 수 있어야 함
  marketCapValue.className = "market-cap-value";

  const marketCapChange = document.createElement("div");
  marketCapChange.textContent = "▼ 0.86%"; // 이 값은 동적으로 변경될 수 있어야 함
  marketCapChange.className = "market-cap-change";

  marketCapValueContainer.appendChild(marketCapValue);
  marketCapValueContainer.appendChild(marketCapChange);

  marketCapHeader.appendChild(marketCapTitle);
  marketCapHeader.appendChild(marketCapValueContainer);

  const marketCapChartSVG = createMarketCapChart();
  marketCapPanel.appendChild(marketCapHeader);
  marketCapPanel.appendChild(marketCapChartSVG);

  // 공포 탐욕 지수 패널
  const fearGreedPanel = document.createElement("div");
  fearGreedPanel.className = "fear-greed-panel";

  const fearGreedHeader = document.createElement("div");
  fearGreedHeader.className = "fear-greed-header";

  const fearGreedTitle = document.createElement("div");
  fearGreedTitle.textContent = "공포와 탐욕";
  fearGreedTitle.className = "fear-greed-title";

  const fearGreedIndex = getFearGreedIndex();
  const fgValueAndStatusContainer = document.createElement("div");
  fgValueAndStatusContainer.className = "fear-greed-current-value-status";

  const fearGreedValueSmall = document.createElement("div");
  fearGreedValueSmall.textContent = fearGreedIndex;
  fearGreedValueSmall.className = "fear-greed-value-small";

  const fearGreedStatusTextSmall = document.createElement("div");
  fearGreedStatusTextSmall.textContent = getFearGreedLabel(fearGreedIndex);
  fearGreedStatusTextSmall.className = "fear-greed-status-small";

  fgValueAndStatusContainer.appendChild(fearGreedValueSmall);
  fgValueAndStatusContainer.appendChild(fearGreedStatusTextSmall);

  fearGreedHeader.appendChild(fearGreedTitle);
  fearGreedHeader.appendChild(fgValueAndStatusContainer);
  fearGreedPanel.appendChild(fearGreedHeader);
  const fearGreedContent = document.createElement("div");
  fearGreedContent.className = "fear-greed-content";

  const fearGreedInfo = document.createElement("div");
  fearGreedInfo.className = "fear-greed-info";

  const emojiDisplay = document.createElement("div");
  emojiDisplay.className = "fear-greed-emoji-display";
  emojiDisplay.textContent = getFearGreedEmoji(fearGreedIndex);

  const fearGreedValueDisplay = document.createElement("div");
  fearGreedValueDisplay.className = "fear-greed-value-display";
  fearGreedValueDisplay.textContent = fearGreedIndex;

  const statusDisplayText = document.createElement("div");
  statusDisplayText.className = "fear-greed-status-display-text";
  statusDisplayText.textContent = getFearGreedLabel(fearGreedIndex);

  fearGreedInfo.appendChild(emojiDisplay);
  fearGreedInfo.appendChild(fearGreedValueDisplay);
  fearGreedInfo.appendChild(statusDisplayText);

  const fearGreedGraph = document.createElement("div");
  fearGreedGraph.className = "fear-greed-graph";

  const gauge = document.createElement("div");
  gauge.className = "fear-greed-gauge";
  const indicator = document.createElement("div");
  indicator.className = "fear-greed-indicator";
  indicator.style.left = `${fearGreedIndex}%`;
  gauge.appendChild(indicator);

  const labels = document.createElement("div");
  labels.className = "fear-greed-labels";
  const fearLabel = document.createElement("span");
  fearLabel.textContent = "😨 극도의 공포"; // 이전 답변의 😱에서 변경됨 (conapi.js 기준)
  const neutralLabel = document.createElement("span");
  neutralLabel.textContent = "😐 중립";
  const greedLabel = document.createElement("span");
  greedLabel.textContent = "🤩 극도의 탐욕"; // 이전 답변의 🤑에서 변경됨 (conapi.js 기준)
  labels.appendChild(fearLabel);
  labels.appendChild(neutralLabel);
  labels.appendChild(greedLabel);

  fearGreedGraph.appendChild(gauge);
  fearGreedGraph.appendChild(labels);

  fearGreedContent.appendChild(fearGreedInfo);
  fearGreedContent.appendChild(fearGreedGraph);
  fearGreedPanel.appendChild(fearGreedContent);

  right.appendChild(marketCapPanel);
  right.appendChild(fearGreedPanel);

  main.appendChild(left);
  main.appendChild(right);

  container.appendChild(main);
}
