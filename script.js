document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const grid = document.getElementById('toolsGrid');
  const sound = document.getElementById('clickSound');

  // 50+ टूल्स लिस्ट (रियल काम करने वाले लिंक्स)
  const tools = [
    { name: "Temp Mail", desc: "Instant disposable email generator", icon: "fa-envelope", link: "https://temp-mail.org" },
    { name: "QR Code Generator", desc: "Create QR codes for any link/text", icon: "fa-qrcode", link: "https://www.qr-code-generator.com" },
    { name: "Remove Background", desc: "Remove image background automatically", icon: "fa-cut", link: "https://www.remove.bg" },
    { name: "Instagram Reels Downloader", desc: "Save reels without watermark", icon: "fa-video", link: "https://indown.io/reels" },
    { name: "YouTube Video Downloader", desc: "Download videos & audio in HD", icon: "fa-youtube", link: "https://yt1s.com" },
    { name: "Strong Password Generator", desc: "Create secure random passwords", icon: "fa-key", link: "https://passwordsgenerator.net" },
    { name: "Color Picker", desc: "Pick & copy hex/rgb colors", icon: "fa-palette", link: "https://htmlcolorcodes.com/color-picker" },
    { name: "Image Compressor", desc: "Reduce image file size online", icon: "fa-compress", link: "https://compressjpeg.com" },
    { name: "Text to Speech", desc: "Convert text to natural voice", icon: "fa-volume-up", link: "https://ttsreader.com" },
    { name: "Base64 Encoder/Decoder", desc: "Encode or decode base64 strings", icon: "fa-code", link: "https://www.base64encode.org" },
    { name: "URL Shortener", desc: "Shorten long URLs instantly", icon: "fa-link", link: "https://tinyurl.com" },
    { name: "JSON Formatter & Validator", desc: "Pretty print and validate JSON", icon: "fa-file-code", link: "https://jsonformatter.org" },
    { name: "Fake Name & Identity Generator", desc: "Generate realistic fake identities", icon: "fa-user-secret", link: "https://fakenamegenerator.com" },
    { name: "Emoji Picker & Copy", desc: "Fast copy-paste emojis", icon: "fa-smile", link: "https://getemoji.com" },
    { name: "PDF to Word Converter", desc: "Convert PDF to editable Word", icon: "fa-file-word", link: "https://smallpdf.com/pdf-to-word" },
    { name: "Full Page Screenshot", desc: "Capture entire webpage", icon: "fa-camera", link: "https://www.screenshotapi.net" },
    { name: "Unit Converter", desc: "Convert length, weight, temperature etc", icon: "fa-ruler", link: "https://www.unitconverters.net" },
    { name: "Currency Converter", desc: "Real-time exchange rates", icon: "fa-dollar-sign", link: "https://www.xe.com/currencyconverter" },
    { name: "Barcode Scanner Online", desc: "Scan barcode from image", icon: "fa-barcode", link: "https://online-barcode-reader.inliteresearch.com" },
    { name: "Image Upscaler", desc: "Increase image resolution", icon: "fa-search-plus", link: "https://bigjpg.com" },
    { name: "GIF Maker", desc: "Create GIF from images/videos", icon: "fa-film", link: "https://ezgif.com/maker" },
    { name: "Video Compressor", desc: "Reduce video file size", icon: "fa-video-slash", link: "https://www.youcompress.com" },
    { name: "Text Case Converter", desc: "Uppercase, lowercase, title case", icon: "fa-text-height", link: "https://capitalizemytitle.com" },
    { name: "Markdown to HTML", desc: "Convert markdown to HTML", icon: "fa-markdown", link: "https://markdowntohtml.com" },
    { name: "Hex to RGB Converter", desc: "Convert colors between formats", icon: "fa-fill-drip", link: "https://www.w3schools.com/colors/colors_converter.asp" },
    { name: "Fake Credit Card Generator", desc: "Generate test card numbers", icon: "fa-credit-card", link: "https://www.creditcardgenerator.in" },
    { name: "Lorem Ipsum Generator", desc: "Generate placeholder text", icon: "fa-paragraph", link: "https://www.lipsum.com" },
    { name: "Age Calculator", desc: "Calculate exact age from birthdate", icon: "fa-calendar-alt", link: "https://www.calculator.net/age-calculator.html" },
    { name: "BMI Calculator", desc: "Body Mass Index calculator", icon: "fa-weight", link: "https://www.calculator.net/bmi-calculator.html" },
    { name: "Time Zone Converter", desc: "Convert time between zones", icon: "fa-clock", link: "https://www.timeanddate.com/worldclock/converter.html" },
    { name: "Whois Domain Lookup", desc: "Check domain availability & info", icon: "fa-globe", link: "https://who.is" },
    { name: "IP Address Lookup", desc: "Find IP location & details", icon: "fa-network-wired", link: "https://whatismyipaddress.com/ip-lookup" },
    { name: "Password Strength Checker", desc: "Test password security", icon: "fa-shield-alt", link: "https://howsecureismypassword.net" },
    { name: "File Type Identifier", desc: "Identify unknown file types", icon: "fa-file", link: "https://filext.com" },
    { name: "Reverse Image Search", desc: "Search by image", icon: "fa-image", link: "https://tineye.com" },
    { name: "Meme Generator", desc: "Create memes online", icon: "fa-laugh-beam", link: "https://imgflip.com/memegenerator" },
    { name: "QR Code Scanner", desc: "Scan QR from camera/image", icon: "fa-qrcode", link: "https://scanqr.org" },
    { name: "Hash Generator", desc: "MD5, SHA1, SHA256 hash", icon: "fa-hashtag", link: "https://emn178.github.io/online-tools/md5.html" },
    { name: "Binary to Text Converter", desc: "Convert binary to text", icon: "fa-binary", link: "https://www.binarytranslator.com" },
    { name: "Morse Code Translator", desc: "Text to Morse & vice versa", icon: "fa-code", link: "https://morsecode.world/international/translator.html" },
    { name: "Roman Numeral Converter", desc: "Arabic to Roman numbers", icon: "fa-scroll", link: "https://www.romannumerals.org/converter" },
    { name: "UUID Generator", desc: "Generate unique UUIDs", icon: "fa-fingerprint", link: "https://www.uuidgenerator.net" },
    { name: "Random Number Generator", desc: "Custom range random numbers", icon: "fa-random", link: "https://www.random.org" },
    { name: "Dice Roller", desc: "Virtual dice for games", icon: "fa-dice", link: "https://www.google.com/search?q=roll+dice" },
    { name: "Coin Flip", desc: "Heads or tails simulator", icon: "fa-coin", link: "https://justflipacoin.com" },
    { name: "Stopwatch Online", desc: "Simple online stopwatch", icon: "fa-stopwatch", link: "https://www.google.com/search?q=stopwatch" },
    { name: "World Clock", desc: "Multiple time zones", icon: "fa-globe-europe", link: "https://www.timeanddate.com/worldclock" },
    { name: "Weather Checker", desc: "Current weather by city", icon: "fa-cloud-sun", link: "https://weather.com" },
    { name: "Calculator Online", desc: "Scientific calculator", icon: "fa-calculator", link: "https://www.calculator.net" },
    { name: "Note Pad Online", desc: "Simple text notepad", icon: "fa-sticky-note", link: "https://www.protectedtext.com" },
    { name: "Draw Online", desc: "Simple drawing board", icon: "fa-paint-brush", link: "https://sketch.io/sketchpad" }
  ];

  function renderTools(filteredTools = tools) {
    grid.innerHTML = '';
    filteredTools.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'tool-card';
      card.innerHTML = `
        <i class="fas ${tool.icon}"></i>
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
      `;
      card.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Sound error:", e));
        setTimeout(() => window.open(tool.link, '_blank'), 80);
      });
      grid.appendChild(card);
    });
  }

  renderTools();

  // Real-time search
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = tools.filter(t => 
      t.name.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query)
    );
    renderTools(filtered);
  });
});
