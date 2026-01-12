document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const toolsGrid = document.getElementById('tools');
  const clickSound = document.getElementById('clickSound');

  // तुम यहाँ 50+ टूल्स ऐड कर सकते हो (काम करने वाले लिंक डालना)
  const toolsList = [
    { name: "Temp Mail", desc: "Instant disposable email", icon: "fa-envelope", link: "https://temp-mail.org" },
    { name: "QR Code Generator", desc: "Create QR codes fast", icon: "fa-qrcode", link: "https://www.qr-code-generator.com" },
    { name: "Remove BG", desc: "Remove image background", icon: "fa-cut", link: "https://www.remove.bg" },
    { name: "Reels Downloader", desc: "Save Instagram reels", icon: "fa-video", link: "https://indown.io/reels" },
    { name: "YouTube Downloader", desc: "Download YT videos", icon: "fa-youtube", link: "https://yt1s.com" },
    { name: "Password Generator", desc: "Strong secure passwords", icon: "fa-key", link: "https://passwordsgenerator.net" },
    // ...और टूल्स ऐड करो (कुल 50+ तक बढ़ाओ)
  ];

  function renderTools(toolsToShow = toolsList) {
    toolsGrid.innerHTML = '';
    toolsToShow.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <i class="fas ${tool.icon}"></i>
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
      `;
      card.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
        window.open(tool.link, '_blank');
      });
      toolsGrid.appendChild(card);
    });
  }

  renderTools();

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = toolsList.filter(tool =>
      tool.name.toLowerCase().includes(query) || tool.desc.toLowerCase().includes(query)
    );
    renderTools(filtered);
  });
});
