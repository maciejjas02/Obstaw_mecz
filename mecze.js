fetch("bets_mecze.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("mecze-box");
    container.innerHTML = ""; // czyść

    data.slice(0, 3).forEach(mecz => {
      const [team1, team2] = mecz.Mecz.split(" - ").map(s => s.trim());

      const card = document.createElement("div");
      card.className = "mecz-card";
      card.innerHTML = `
        <div class="team">
          <img src="img/logos/${team1.toLowerCase().replaceAll(' ', '-')}.png" alt="${team1}" />
          <span>${team1}</span>
        </div>
        <div class="vs">vs</div>
        <div class="team">
          <img src="img/logos/${team2.toLowerCase().replaceAll(' ', '-')}.png" alt="${team2}" />
          <span>${team2}</span>
        </div>
        <div class="typy">
          <span>1: ${mecz.Typ1}</span>
          <span>X: ${mecz.TypX}</span>
          <span>2: ${mecz.Typ2}</span>
        </div>
      `;
      container.appendChild(card);
    });
  });
