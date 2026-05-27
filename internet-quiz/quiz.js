// ── Quiz Data ─────────────────────────────────────────────────────────────────
const LEVELS = [
  {
    title: "Child",
    desc: "Simple concepts — no tech background needed",
    badge: "Level 1",
    questions: [
      {
        q: "In the video, Professor Kurose compares the internet to what physical object to explain how computers are connected?",
        options: ["A telephone book", "A network of roads and highways", "A post office", "A television antenna"],
        correct: 1,
        explanation: "Kurose uses the analogy of <strong>roads and highways</strong> — from neighborhood streets up to the Interstate Highway System — to explain how local networks connect to larger ones, just like local roads connect to highways."
      },
      {
        q: "What is the internet, in the simplest terms described in the video?",
        options: ["A single giant computer that stores everything", "A collection of websites made by companies", "Billions of computers that all talk to each other", "A wireless signal that comes from satellites"],
        correct: 2,
        explanation: "Kurose explains that the internet is, physically, <strong>billions of computers that all talk to each other</strong> — forming a network of networks."
      },
      {
        q: "Skylar described the internet as something she uses to search and watch videos. What does Kurose add to that description?",
        options: ["That videos are actually stored inside the TV", "That the internet physically connects computers that send information to each other", "That only big companies can use the internet", "That the internet is controlled by one main computer"],
        correct: 1,
        explanation: "Kurose extends Skylar's everyday description by explaining that the internet <strong>physically connects computers</strong> that communicate with each other — it's the infrastructure underneath all the apps she uses."
      },
      {
        q: "When explaining routing, Skylar said the video might travel from one node to another along a path. What did Kurose say was the advantage of having multiple paths?",
        options: ["It makes the video look better", "If one path is broken or messed up, the data can go another way", "Multiple paths make the internet faster always", "It allows the internet to charge less money"],
        correct: 1,
        explanation: "Skylar identified this herself — <strong>if one path is broken, the data can route around it</strong> using a different path. This redundancy is one of the most important features of the internet's design."
      },
      {
        q: "What word does Kurose use for the process of finding a path from one computer to another through the network?",
        options: ["Streaming", "Routing", "Loading", "Connecting"],
        correct: 1,
        explanation: "<strong>Routing</strong> is the process of finding a path through the network to get data from a source (the sender) to a receiver. Routers are the devices that make these decisions."
      },
      {
        q: "Kurose explains what a 'protocol' is using a knock-knock joke. What does the protocol represent in that analogy?",
        options: ["The punchline of the joke", "The agreed-upon rules for how a conversation should proceed", "The speed of the conversation", "The content of the message"],
        correct: 1,
        explanation: "A knock-knock joke is a <strong>protocol</strong> — a set of agreed-upon rules that both people follow so the conversation works. On the internet, protocols make sure two computers that've never met still know how to talk to each other."
      },
      {
        q: "What does Kurose call the many different apps (like Zoom and Netflix) that run on the internet?",
        options: ["Networks", "Protocols", "Applications", "Servers"],
        correct: 2,
        explanation: "Kurose calls Zoom, video services, and similar tools <strong>applications</strong> — they all run on top of the same internet infrastructure, like many different vehicles all using the same road network."
      },
      {
        q: "Where does Kurose say the video you watch (like 'Matilda') actually comes from?",
        options: ["It is stored inside your TV set", "It travels from one computer (the source) to your computer over the internet", "It comes directly from a satellite in space", "It is downloaded onto a disc first"],
        correct: 1,
        explanation: "The video is sent <strong>from a source computer (a server) to your computer</strong> over the internet. The network acts as the delivery system — carrying the information from one end to the other."
      }
    ]
  },

  {
    title: "High Schooler",
    desc: "Networking concepts and infrastructure",
    badge: "Level 2",
    questions: [
      {
        q: "What physical device does Kurose mention in your apartment that connects your home network to the internet service provider?",
        options: ["A graphics card", "A router or modem", "A Wi-Fi antenna on the roof", "An ethernet switch in the basement"],
        correct: 1,
        explanation: "Kurose describes a <strong>router or modem</strong> in your apartment — a box that connects to a wire (like an ethernet cable) from your ISP, bringing internet connectivity into your home at roughly a billion bits per second."
      },
      {
        q: "According to the video, what are the connection points called where multiple internet links come together?",
        options: ["Hubs", "Modems", "Routers", "Sockets"],
        correct: 2,
        explanation: "<strong>Routers</strong> are the interchanges of the internet — like highway interchanges, they're where links come together and decisions are made about which direction to send data next."
      },
      {
        q: "How are the internet networks of Europe, the United States, and Asia physically connected to each other?",
        options: ["Through satellites in orbit", "Via undersea cables laid across the ocean floor", "Through very tall wireless towers on coastlines", "They use the same cellular network"],
        correct: 1,
        explanation: "Kurose describes <strong>undersea cables</strong> as 'so cool' — they cross the Atlantic, Pacific, and Indian Oceans, physically connecting the networks of different continents to each other."
      },
      {
        q: "What is the 'first hop' that Kurose describes when you connect wirelessly from your phone or laptop?",
        options: ["The connection from the ISP to the global backbone", "The wireless connection from your device to the first nearby router", "The jump between two undersea cables", "The link between a server and a data center"],
        correct: 1,
        explanation: "The <strong>first hop</strong> is the wireless link between your device and the first router — for most users, this is Wi-Fi. It's the only part of the journey that's wireless; after that, the data typically travels over wired connections."
      },
      {
        q: "What protocol does Kurose name that allows your device to communicate wirelessly with that first-hop router?",
        options: ["TCP", "IP", "Wi-Fi", "DNS"],
        correct: 2,
        explanation: "<strong>Wi-Fi</strong> is the protocol that allows your computer, phone, or tablet to talk wirelessly to the first router. After that first hop, your data travels over wired links to reach its destination."
      },
      {
        q: "Kurose says data traveling across the internet is broken into small pieces. What are these pieces called?",
        options: ["Frames", "Packets", "Bundles", "Segments"],
        correct: 1,
        explanation: "<strong>Packets</strong> are the small pieces of information that data is broken into for travel across the internet. Each packet carries an address and can arrive in a different order — your device reassembles them."
      },
      {
        q: "What does Kurose compare to the address on a letter that tells the internet where to deliver each packet?",
        options: ["A Wi-Fi password", "A URL", "An IP address", "A port number"],
        correct: 2,
        explanation: "Kurose uses the US Postal Service analogy — just like a letter needs a mailing address, every packet has an <strong>IP address</strong> on it that tells the network which device it's going to."
      },
      {
        q: "What did Kurose say about Netflix servers and why they try to place them close to users?",
        options: ["So they can charge less for the service", "So users don't have to cross too many internet links, reducing delay", "Because undersea cables can't carry video data", "So the government can monitor what people watch"],
        correct: 1,
        explanation: "Netflix tries to put servers <strong>close to users</strong> so data travels across fewer internet links — this reduces delay and makes streaming smoother. This is why the same movie might actually be stored in many different locations around the world."
      }
    ]
  },

  {
    title: "College Student",
    desc: "Protocols, architecture, and history",
    badge: "Level 3",
    questions: [
      {
        q: "What was the name of the original packet-switching network described by Kurose, funded by a U.S. defense research agency?",
        options: ["INTERNET", "ARPANET", "TCPNET", "DARPANET"],
        correct: 1,
        explanation: "<strong>ARPANET</strong> was the original network, created by ARPA (later renamed DARPA — the Defense Advanced Research Projects Agency) in the 1960s. It pioneered packet-switching and laid the foundation for the modern internet."
      },
      {
        q: "What is the key difference between packet-switching and circuit-switching that Kurose explains?",
        options: ["Packet-switching uses wireless signals; circuit-switching uses wires", "Circuit-switching gives a dedicated path and bandwidth; packet-switching lets packets find their own routes", "Packet-switching is slower but more secure", "Circuit-switching was invented first and is now obsolete"],
        correct: 1,
        explanation: "In a <strong>circuit-switched</strong> network (like old phone systems), you get a dedicated path and bandwidth from source to destination. <strong>Packet-switching</strong> is more flexible — packets each find their own route, which makes the network more robust and efficient."
      },
      {
        q: "What does TCP stand for, and what problem does it solve according to the video?",
        options: ["Transfer Control Protocol — it controls download speeds", "Transmission Control Protocol — it requests resending of lost or out-of-order packets", "Timed Communication Protocol — it syncs video and audio", "Total Connection Protocol — it establishes the connection"],
        correct: 1,
        explanation: "Kurose explains that your device uses <strong>TCP (Transmission Control Protocol)</strong> to say to the server 'I didn't get packet four, can you resend it?' — ensuring all data arrives correctly even if packets are lost or arrive out of order."
      },
      {
        q: "What is the Domain Name System (DNS) and what role does it play?",
        options: ["It stores all the world's websites in one place", "It translates human-readable names like ibm.com into IP addresses", "It controls who is allowed to access the internet", "It assigns Wi-Fi passwords to devices"],
        correct: 1,
        explanation: "<strong>DNS</strong> is like the internet's phone book — it translates human-readable names like gaia.cs.umass.edu or facebook.com into the IP addresses that computers actually use to route data. Without DNS, you'd need to memorize number strings to visit websites."
      },
      {
        q: "What is an API in the context of the internet, and what specific one does Kurose mention?",
        options: ["A type of firewall; he mentions IP firewall", "An application programming interface; he mentions the socket", "A routing algorithm; he mentions BGP", "A wireless protocol; he mentions 802.11"],
        correct: 1,
        explanation: "An <strong>API</strong> (Application Programming Interface) is an abstraction layer — the internet's API is the <strong>socket</strong>. If you know a server's IP address, you can write a program anywhere in the world and send it a message through that socket."
      },
      {
        q: "Who or what is ICANN, and what is its role in the internet's governance?",
        options: ["A hacker group that monitors internet traffic", "The company that owns all internet cables", "The Internet Corporation for Assigned Names and Numbers — manages centralized naming and numbering", "A U.S. government agency that controls all DNS servers"],
        correct: 2,
        explanation: "<strong>ICANN</strong> — the Internet Corporation for Assigned Names and Numbers — provides the small amount of centralized governance the internet needs, handling the assignment of names and numbers. This is the '2%' of centralized control Kurose describes in an otherwise decentralized system."
      },
      {
        q: "Why did the college student describe the internet as 'decentralized,' and how did Kurose qualify that description?",
        options: ["She was wrong — the internet is fully centralized under one authority", "She was right that no single party controls routing decisions, but ICANN provides a small centralized function for names and numbers", "Decentralized means the internet has no rules or protocols", "She meant that internet speeds are uneven across the world"],
        correct: 1,
        explanation: "The student was <strong>98% right</strong> — each network owner controls their own network, making the internet broadly decentralized. But Kurose noted the 2% exception: ICANN provides centralized authority over names and numbers, which is a small but necessary coordination function."
      },
      {
        q: "Where are packets most likely to be dropped, according to Kurose's explanation about video buffering?",
        options: ["At the Wi-Fi router in your home", "In the undersea cables", "Due to congestion somewhere between the streaming server and your home", "In the Netflix server's hard drive"],
        correct: 2,
        explanation: "Even if your home connection is 200 Mbps, packets are most likely dropped due to <strong>congestion somewhere in the network between the server and your home</strong> — not on that last hop. The bottleneck is rarely in your apartment."
      }
    ]
  },

  {
    title: "PhD Student",
    desc: "Advanced networking and IoT",
    badge: "Level 4",
    questions: [
      {
        q: "What specific challenge of IoT device configuration does Caspar Lant describe?",
        options: ["IoT devices don't support encryption", "Reconfiguring devices when a Wi-Fi network name or password changes scales linearly, creating management overhead", "IoT devices use too much bandwidth", "There is no standard protocol for IoT devices"],
        correct: 1,
        explanation: "Caspar identifies a key <strong>scalability problem</strong>: every IoT device needs individual reconfiguration if your Wi-Fi SSID or password changes. This overhead scales linearly with the number of devices — exactly the kind of problem you don't want."
      },
      {
        q: "What are the typical data rates Caspar describes for IoT devices like a temperature sensor?",
        options: ["Gigabits per second", "Megabits per second", "Kilobytes per second down to bytes per second", "Hundreds of megabytes per burst"],
        correct: 2,
        explanation: "IoT devices are extremely low-bandwidth — Caspar describes upper bounds of <strong>kilobytes per second</strong>, and for something like a temperature sensor reporting every minute, the average could be just <strong>bytes per second</strong>. This is vastly different from streaming media."
      },
      {
        q: "Caspar's research interest involves combining IoT sensor data with what other field to derive insights?",
        options: ["Quantum computing", "Mechanical engineering", "Data science", "Operating systems"],
        correct: 2,
        explanation: "Caspar is interested in <strong>data science</strong> applied to the datasets generated by distributed IoT sensor networks — for example, analyzing traffic and acoustic data from city sensors to identify streets exceeding noise mandates."
      },
      {
        q: "What does Kurose identify as a challenge the internet is now grappling with due to IoT and cellular networks?",
        options: ["The internet is running out of IP addresses", "Mobility — devices that move between networks", "The internet is too fast for older devices", "Security vulnerabilities in routers"],
        correct: 1,
        explanation: "Kurose says <strong>mobility</strong> is a relatively new challenge for the internet — for a long time, most internet-connected devices were stationary. IoT devices and mobile phones that move between networks create new design challenges."
      },
      {
        q: "What is LoRa, as mentioned by Caspar in the context of IoT connectivity?",
        options: ["A type of Wi-Fi router for apartments", "A long-range low-power wireless network protocol that provides coverage over large areas using a consistent specification", "A cloud platform for storing IoT data", "A security protocol for encrypting sensor data"],
        correct: 1,
        explanation: "<strong>LoRa</strong> is a long-range wireless network protocol — it provides coverage over a much larger area than Wi-Fi, operates at low power, and uses a standardized specification regardless of which gateway you connect through. It's designed for IoT devices."
      },
      {
        q: "According to Kurose, what do IoT devices currently do with the large amounts of data they produce over time?",
        options: ["They process all data locally on the device", "Data tends to be centralized because IoT products are usually owned by companies", "Data is deleted after 24 hours for privacy", "Data is shared openly across all manufacturers"],
        correct: 1,
        explanation: "Caspar notes that IoT data tends to be <strong>centralized by companies</strong> that make the products — they collect the data to their own servers. He sees massive research value in this data, but getting companies to share it requires 'persuasion.'"
      },
      {
        q: "What example does Caspar give for a practical IoT research application combining networking and data science?",
        options: ["Self-driving cars communicating with traffic lights", "Analyzing how rush hour traffic affects the acoustic noise levels on city streets near schools", "Monitoring internet speeds across neighborhoods", "Tracking package delivery routes in real time"],
        correct: 1,
        explanation: "Caspar describes a study of how <strong>daily rush hour traffic affects the acoustic landscape of a city</strong> — identifying streets near schools that exceed noise mandates. This requires distributed sensors, networking, and data science working together."
      },
      {
        q: "What three communities of technology does Caspar say must now work together for edge computing applications?",
        options: ["Hardware, software, and security", "Wireless communications, networking, and cloud computing", "Sensors, databases, and user interfaces", "IPv4, IPv6, and DNS"],
        correct: 1,
        explanation: "Caspar describes the convergence of <strong>wireless communications, networking, and cloud computing</strong> — three communities that historically operated separately now have to work in close harmony to support edge computing applications, especially safety-critical ones."
      }
    ]
  },

  {
    title: "Expert",
    desc: "SDN, softwarization, and the future of networking",
    badge: "Level 5",
    questions: [
      {
        q: "What was the main frustration at AT&T that motivated Jen Rexford and her colleagues to develop the Routing Control Platform (RCP)?",
        options: ["Routers were too expensive to replace", "Routers came pre-baked with protocols and offered limited knobs to control traffic flow or read network state", "The internet was too slow for AT&T's customers", "AT&T couldn't build its own physical cables"],
        correct: 1,
        explanation: "Rexford explains that routers arrived with <strong>pre-baked protocols and few controllable parameters</strong> — AT&T couldn't directly influence how traffic flowed or easily read what was happening inside their network. This lack of programmability drove the search for a software-based alternative."
      },
      {
        q: "What older technology inspired the RCP / SDN approach, according to Rexford?",
        options: ["Early satellite communication systems", "The telephony (old telephone) network, which used a central computer to tell distributed switches what to do", "Early ARPANET routing protocols", "The postal service's sorting system"],
        correct: 1,
        explanation: "Rexford traces the inspiration to the <strong>telephony network</strong> — old telephone systems used a central program to tell distributed switches what to do. The RCP idea was: what if we applied this same concept to AT&T's internet network, using software instead of distributed protocols?"
      },
      {
        q: "What is Software-Defined Networking (SDN), in essence?",
        options: ["Replacing physical cables with wireless connections", "Using software running centrally to control network behavior instead of relying solely on distributed protocols running on each device", "A new type of router chip that runs faster", "Encrypting all internet traffic by default"],
        correct: 1,
        explanation: "<strong>SDN</strong> is the principle of using <strong>centralized software</strong> to tell the network what to do — rather than every router independently running distributed protocols and making its own decisions. It brings programmability and control to network management."
      },
      {
        q: "According to Rexford, at what scale has SDN actually been deployed so far?",
        options: ["Across the entire global internet", "Only in academic research labs", "Within single provider backbones, cloud provider networks, or single campuses — not yet across the full internet", "Only in military and government networks"],
        correct: 2,
        explanation: "Rexford is candid that SDN has <strong>not yet transformed the full internet</strong>. Deployment has been limited to single provider networks, cloud provider backbones, or campuses — with some work at juncture points between pairs of networks."
      },
      {
        q: "What trend does Rexford call the 'flattening of the internet'?",
        options: ["The internet becoming slower due to congestion", "Users going through fewer networks to reach major destinations — from an average of 10 networks down to perhaps just 2", "ISPs removing all routing hierarchy", "The shift from IPv4 to IPv6"],
        correct: 1,
        explanation: "The <strong>flattening of the internet</strong> refers to the fact that users now often reach Google, Microsoft, or Netflix by passing through just <strong>2 networks</strong> instead of the historical average of 10. Large cloud providers have built infrastructure that gets them very close to end users."
      },
      {
        q: "What does Rexford identify as the key reason 5G is exciting beyond just faster bandwidth?",
        options: ["5G uses less electricity than 4G", "5G integrates low latency, compute close to the edge, and wireless/networking/cloud convergence to support real-time physical-world applications", "5G eliminates the need for routers entirely", "5G makes undersea cables unnecessary"],
        correct: 1,
        explanation: "Rexford agrees with Kurose that 5G's excitement goes beyond speed — it combines <strong>low latency</strong> (for real-time physical-world interactions), <strong>edge compute</strong> (keeping processing close to the device), and the <strong>convergence of wireless, networking, and cloud</strong>."
      },
      {
        q: "How can a country restrict what internet content its citizens can access, according to the expert discussion?",
        options: ["By slowing down all internet traffic to unusable speeds", "By controlling DNS resolution — refusing to provide IP addresses for certain domain names inside their borders", "By physically cutting undersea cables", "By blocking all Wi-Fi signals at the border"],
        correct: 1,
        explanation: "Rexford explains that a country can restrict access by <strong>controlling DNS</strong> — if a government doesn't want citizens to reach a website, they can simply refuse to resolve the domain name into an IP address inside their country. China's Great Firewall operates partly this way."
      },
      {
        q: "What does Rexford say is still detectable even when internet traffic is encrypted?",
        options: ["The exact content of every message", "Nothing — encryption makes traffic completely private", "Metadata like which devices are communicating, the size of transfers, and potentially what service is being used", "Only the sender's IP address, not the receiver's"],
        correct: 2,
        explanation: "Even with encryption, <strong>metadata remains visible</strong> — you can observe which devices are communicating, the size and timing of transfers, and potentially infer what service someone is using (like Netflix) and even which content. Encryption hides the message, not the envelope."
      }
    ]
  }
];

// ── State ─────────────────────────────────────────────────────────────────────
let currentLevel = 0;
let currentQuestion = 0;
let currentAnswered = false;
let levelScores = [0, 0, 0, 0, 0];
let levelTotals = [];

LEVELS.forEach(l => levelTotals.push(l.questions.length));

// ── DOM refs ──────────────────────────────────────────────────────────────────
const hero         = document.querySelector('.hero');
const quizWrap     = document.getElementById('quizWrap');
const levelBadge   = document.getElementById('levelBadge');
const levelTitle   = document.getElementById('levelTitle');
const levelDesc    = document.getElementById('levelDesc');
const progressFill = document.getElementById('progressFill');
const progressLabel= document.getElementById('progressLabel');
const qNumber      = document.getElementById('qNumber');
const qText        = document.getElementById('qText');
const optionsList  = document.getElementById('optionsList');
const qFeedback    = document.getElementById('qFeedback');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackText = document.getElementById('feedbackText');
const nextBtn      = document.getElementById('nextBtn');
const questionCard = document.getElementById('questionCard');

const levelComplete       = document.getElementById('levelComplete');
const lcIcon              = document.getElementById('lcIcon');
const lcTitle             = document.getElementById('lcTitle');
const lcScore             = document.getElementById('lcScore');
const lcMsg               = document.getElementById('lcMsg');
const nextLevelBtn        = document.getElementById('nextLevelBtn');
const retryBtn            = document.getElementById('retryBtn');

const allDone   = document.getElementById('allDone');
const adScores  = document.getElementById('adScores');
const adTotal   = document.getElementById('adTotal');
const restartBtn= document.getElementById('restartBtn');

const startBtn  = document.getElementById('startBtn');
const pills     = document.querySelectorAll('.pill');

// ── Event listeners ───────────────────────────────────────────────────────────
startBtn.addEventListener('click', () => startLevel(0));
nextBtn.addEventListener('click', advance);
nextLevelBtn.addEventListener('click', () => { levelComplete.hidden = true; startLevel(currentLevel + 1); });
retryBtn.addEventListener('click', () => { levelComplete.hidden = true; startLevel(currentLevel); });
restartBtn.addEventListener('click', () => { allDone.hidden = true; levelScores = [0,0,0,0,0]; showHero(); });

// ── Functions ─────────────────────────────────────────────────────────────────
function showHero() {
  hero.hidden = false;
  quizWrap.hidden = true;
  pills.forEach(p => p.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startLevel(idx) {
  currentLevel = idx;
  currentQuestion = 0;
  currentAnswered = false;
  levelScores[idx] = 0;

  hero.hidden = true;
  quizWrap.hidden = false;

  // Update header
  const lvl = LEVELS[idx];
  levelBadge.textContent = lvl.badge;
  levelTitle.textContent = lvl.title;
  levelDesc.textContent  = lvl.desc;

  // Update level badge color
  const colors = ['#00e5ff','#7b5ea7','#00e096','#ffc300','#ff4d6d'];
  levelBadge.style.background = colors[idx];

  // Update pill highlights
  pills.forEach((p, i) => p.classList.toggle('active', i === idx));

  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const lvl = LEVELS[currentLevel];
  const q   = lvl.questions[currentQuestion];
  const total = lvl.questions.length;

  currentAnswered = false;

  // Progress
  const pct = (currentQuestion / total) * 100;
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `${currentQuestion} / ${total}`;

  // Question
  qNumber.textContent = `Q${currentQuestion + 1} of ${total}`;
  qText.textContent   = q.q;

  // Options
  optionsList.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.options.forEach((opt, i) => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i, q.correct, q.explanation));
    li.appendChild(btn);
    optionsList.appendChild(li);
  });

  // Hide feedback and next
  qFeedback.hidden = true;
  qFeedback.className = 'q-feedback';
  nextBtn.hidden = true;

  // Animate card
  questionCard.style.animation = 'none';
  requestAnimationFrame(() => {
    questionCard.style.animation = 'fadeUp 0.35s ease both';
  });
}

function selectAnswer(chosen, correct, explanation) {
  if (currentAnswered) return;
  currentAnswered = true;

  const btns = optionsList.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct && i === chosen) btn.classList.add('correct');
    else if (i === chosen)             btn.classList.add('incorrect');
    else if (i === correct)            btn.classList.add('reveal-correct');
  });

  const isCorrect = chosen === correct;
  if (isCorrect) levelScores[currentLevel]++;

  // Feedback
  qFeedback.hidden = false;
  qFeedback.className = `q-feedback ${isCorrect ? 'correct-fb' : 'incorrect-fb'}`;
  feedbackIcon.textContent = isCorrect ? '✓' : '✗';
  feedbackText.innerHTML = explanation;

  // Next button label
  const lvl = LEVELS[currentLevel];
  const isLastQ = currentQuestion === lvl.questions.length - 1;
  nextBtn.hidden = false;
  nextBtn.textContent = isLastQ ? 'See Results →' : 'Next Question →';
}

function advance() {
  const lvl = LEVELS[currentLevel];
  const isLastQ = currentQuestion === lvl.questions.length - 1;

  if (isLastQ) {
    showLevelComplete();
  } else {
    currentQuestion++;
    renderQuestion();
  }
}

function showLevelComplete() {
  const score = levelScores[currentLevel];
  const total = LEVELS[currentLevel].questions.length;
  const pct   = Math.round((score / total) * 100);
  const isLastLevel = currentLevel === LEVELS.length - 1;

  // Update progress to 100%
  progressFill.style.width = '100%';
  progressLabel.textContent = `${total} / ${total}`;

  // Icon
  lcIcon.textContent = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '🔄';

  // Title
  lcTitle.textContent = `Level ${currentLevel + 1} Complete!`;

  // Score
  lcScore.textContent = `${score} / ${total} correct`;

  // Message
  let msg = '';
  if (pct === 100) msg = "Perfect score! You nailed every concept in this level.";
  else if (pct >= 80) msg = "Strong understanding. You've got the key ideas locked in.";
  else if (pct >= 60) msg = "Good foundation. A quick review might help solidify a few concepts.";
  else msg = "Worth trying again — these concepts build on each other, so getting them solid here helps later.";
  lcMsg.textContent = msg;

  // Button
  if (isLastLevel) {
    nextLevelBtn.textContent = 'See Final Results →';
    nextLevelBtn.onclick = () => { levelComplete.hidden = true; showAllDone(); };
  } else {
    nextLevelBtn.textContent = `Continue to Level ${currentLevel + 2} →`;
    nextLevelBtn.onclick = () => { levelComplete.hidden = true; startLevel(currentLevel + 1); };
  }

  levelComplete.hidden = false;
}

function showAllDone() {
  const totalCorrect = levelScores.reduce((a, b) => a + b, 0);
  const totalQ       = levelTotals.reduce((a, b) => a + b, 0);

  // Score chips
  adScores.innerHTML = LEVELS.map((lvl, i) => `
    <div class="score-chip">
      <span class="chip-num">${levelScores[i]}/${levelTotals[i]}</span>
      ${lvl.title}
    </div>
  `).join('');

  const pct = Math.round((totalCorrect / totalQ) * 100);
  adTotal.innerHTML = `Total: <strong>${totalCorrect} / ${totalQ}</strong> &nbsp;·&nbsp; ${pct}%`;

  allDone.hidden = false;
}
