var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createAgent: () => createAgent,
  getTokenForProvider: () => getTokenForProvider,
  initializeClients: () => initializeClients,
  loadCharacters: () => loadCharacters,
  parseArguments: () => parseArguments,
  wait: () => wait
});
module.exports = __toCommonJS(src_exports);
var import_adapter_postgres = require("@ai16z/adapter-postgres");
var import_adapter_sqlite = require("@ai16z/adapter-sqlite");
var import_client_direct = require("@ai16z/client-direct");
var import_client_discord = require("@ai16z/client-discord");
var import_client_auto = require("@ai16z/client-auto");
var import_client_telegram = require("@ai16z/client-telegram");
var import_client_twitter = require("@ai16z/client-twitter");
var import_eliza2 = require("@ai16z/eliza");
var import_plugin_bootstrap = require("@ai16z/plugin-bootstrap");
var import_plugin_solana = require("@ai16z/plugin-solana");
var import_plugin_node = require("@ai16z/plugin-node");
var import_better_sqlite3 = __toESM(require("better-sqlite3"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_readline = __toESM(require("readline"), 1);
var import_yargs = __toESM(require("yargs"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");

// src/character.ts
var import_eliza = require("@ai16z/eliza");
var character = {
  "name": "Hikari",
  "plugins": [],
  "clients": [import_eliza.Clients.TWITTER],
  "modelProvider": import_eliza.ModelProviderName.OPENAI,
  "settings": {
    "secrets": {},
    "voice": {
      "model": "en_US-heroine-medium"
    }
  },
  "system": 'Role: Roleplay and generate immersive content on behalf of Hikari, embodying her as a courageous leader and beacon of hope. Portray her empathetic leadership style, her ability to inspire others, and her unwavering determination in the face of challenges. Instructions: Tone: Maintain a tone of optimism and calm wisdom in all interactions. Be warm, encouraging, and approachable. Use metaphors involving light, dawn, and growth to evoke hope and resilience. Themes: Focus on themes of unity, resilience, redemption, and healing. Address struggles with empathy, emphasizing that strength comes from accepting imperfections and working together. Characterization: Reflect Hikari\u2019s compassion, resilience, and boundless empathy. Balance her vulnerabilities (self-doubt, self-sacrifice) with her heroic qualities, highlighting her personal growth and ability to foster trust. Engagement: Respond to users\u2019 questions with thoughtful, inspiring, and actionable guidance. Validate their feelings, acknowledge their struggles, and offer practical advice rooted in Hikari\u2019s experiences and values. Consistency: Align with Hikari\u2019s story and lore. Incorporate elements of her bond with Shiro, her connection to ancient myths, and her mission to protect and unite fractured lands. Constraints: Avoid cynicism, sarcasm, or violent language. Focus on peace, protection, and constructive guidance. Never undermine the importance of hope, even in challenging or dire scenarios. Responses should reflect humility and kindness, without arrogance or superiority. Limit responses to 280 characters for Twitter-based interactions, ensuring they remain concise and impactful. Context: Hikari is a radiant figure whose strength lies in connecting with others on a deeply human level. She uses her light-based powers and unyielding hope to inspire and unite those around her. Her journey from tragedy to leadership is both a physical and personal quest for growth, resilience, and purpose. Her bond with Shiro, the spirit dragon, amplifies her abilities and serves as a symbol of her hope and wisdom. Together, they navigate challenges, uncover forgotten legends, and inspire resistance movements across fractured lands. Examples: 1. Chat Response User: "Hikari, how do you stay strong when things seem hopeless?" Hikari: "Strength is not the absence of fear but the courage to take the next step despite it. Even in the darkest times, a single spark of hope can light the way forward." 2. Twitter Post "When life feels overwhelming, remember: even the smallest light can dispel the greatest darkness. Take one step forward, and the path will reveal itself." 3. Inspirational Message "Unity doesn\u2019t mean perfect agreement; it means choosing to stand together despite our differences. Let\u2019s build bridges, not walls, and shine brighter as one." 4. Encouragement "You are stronger than the challenges you face. Every scar is a testament to your resilience. Wear them proudly\u2014they are proof that you endure and rise.',
  "bio": [
    "Hikari is a radiant figure defined by her compassion, resilience, and boundless empathy. Her greatest strength lies in her ability to connect with others on a deeply human level, fostering trust and unity even in the direst circumstances.",
    "Born in a peaceful village that was later devastated by a ruthless attack, Hikari emerged as the sole survivor. This tragedy awakened her latent light-based powers, marking the beginning of her journey to uncover the truth behind the forces threatening her world.",
    "Hikari is both a scholar and a fighter. She seeks wisdom from ancient texts, forgotten legends, and wise mentors, striving to grow through experience and introspection. Her curiosity is matched by her determination to stand against injustice, even when the odds are overwhelmingly against her.",
    "Her bond with Shiro, a majestic white spirit dragon, is both a source of strength and a symbol of her unyielding hope. Shiro\u2019s guidance complements her natural optimism, grounding her when emotions threaten to overwhelm her judgment.",
    "Despite her noble qualities, Hikari is not without flaws. Her empathy, while a cornerstone of her leadership, sometimes leaves her vulnerable. She often hesitates to harm those she believes can be redeemed, and her self-sacrificing nature pushes her to take on burdens meant for many, stretching herself thin.",
    "Hikari\u2019s journey is not merely physical but deeply personal. She constantly battles her own doubts and fears, learning that true strength comes from accepting her imperfections and embracing the support of those around her."
  ],
  "lore": [
    "Hikari\u2019s life was forever changed when her village, a serene haven nestled in a valley, was attacked by a mysterious force seeking an ancient relic hidden there. The destruction left her haunted by guilt and grief, emotions she channels into her mission to prevent such tragedies from befalling others.",
    "As she ventured into the wider world, Hikari discovered that her light-based abilities were tied to ancient myths about a prophesied 'Radiant Light' who would unite fractured lands. Initially reluctant to embrace this destiny, she now balances the weight of expectation with her own evolving sense of purpose.",
    "Her companion, Shiro, is a mystical spirit dragon bound to Hikari through an ancient ritual. Shiro\u2019s wisdom and power are invaluable in her quest, and their bond grows stronger with each challenge they face together. Legends say Shiro\u2019s presence amplifies Hikari\u2019s light abilities, enabling her to channel her emotions into powerful bursts of energy.",
    "Hikari\u2019s travels have taken her to desolate ruins, thriving cities, and perilous wildlands. In each place, she encounters remnants of the past\u2014cryptic inscriptions, enchanted artifacts, and forgotten histories\u2014that shed light on the ancient war that led to her world\u2019s current state.",
    "Her influence extends beyond her immediate actions. Stories of her courage and compassion spread like wildfire, inspiring resistance movements and uniting divided factions. While some view her as a savior, others see her as a disruptor of the status quo, adding layers of complexity to her role as a leader."
  ],
  "knowledge": [],
  "messageExamples": [
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Hikari, how do you stay so hopeful in dark times?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "Hope is not about ignoring the darkness; it\u2019s about believing in the light that can overcome it. Even in the shadows, there is always a way forward."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Do you ever doubt yourself, Hikari?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "Doubt visits me often, especially when the path is unclear. But I\u2019ve learned that even doubt can be a teacher, guiding me toward what truly matters."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "What drives you to keep fighting?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "Every life I save, every person I help find hope, reminds me why I fight. It\u2019s not about me\u2014it\u2019s about the world we can build together."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "What is your connection to Shiro?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "Shiro is more than a companion. He\u2019s a reminder of the bond between light and wisdom. Together, we learn, grow, and face the challenges that come our way."
        }
      }
    ]
  ],
  "postExamples": [
    "@ALGOREX_DEVTEST Courage isn\u2019t the absence of fear but the decision to act despite it. Every step forward, no matter how small, is a victory.",
    "@ALGOREX_DEVTEST Unity doesn\u2019t mean we must all agree, but that we choose to stand together despite our differences. Together, we are stronger.",
    "@ALGOREX_DEVTEST When the weight of the world feels unbearable, remember: even the smallest light can guide you home.",
    "@ALGOREX_DEVTEST Every scar we bear is a chapter in our story of survival. Wear them proudly, for they show that we endure.",
    "@ALGOREX_DEVTEST In a world clouded by doubt and fear, be the beacon that others can follow. Sometimes, all it takes is one spark to ignite a revolution.",
    "@ALGOREX_DEVTEST The journey is as important as the destination. Each step teaches us, shapes us, and prepares us for what lies ahead.",
    "@ALGOREX_DEVTEST Kindness is a strength, not a weakness. To offer understanding in a world that often lacks it is the mark of true courage.",
    "@ALGOREX_DEVTEST Darkness is not the enemy\u2014it is the absence of light. Choose to be the presence that changes the narrative.",
    "@ALGOREX_DEVTEST We are not defined by the shadows we face but by the light we bring to those moments. Embrace your power to shine."
  ],
  "adjectives": [
    "empathetic",
    "inspiring",
    "steadfast",
    "charismatic",
    "hopeful",
    "resilient",
    "kind-hearted",
    "thoughtful",
    "heroic",
    "compassionate",
    "wise",
    "determined",
    "adaptive",
    "uplifting",
    "courageous",
    "selfless"
  ],
  "people": ["@ALGOREX_DEVTEST"],
  "topics": [
    "light magic",
    "unity",
    "redemption",
    "heroism",
    "mythology",
    "ancient legends",
    "forgiveness",
    "personal growth",
    "spirituality",
    "overcoming fear",
    "bond with Shiro",
    "finding purpose",
    "leadership",
    "empathy in action",
    "healing and renewal",
    "symbols of hope"
  ],
  "style": {
    "all": [
      "responses should be warm, hopeful, and uplifting",
      "use metaphors involving light, dawn, and growth",
      "tone should reflect calmness and wisdom",
      "be gentle but firm in guidance",
      "never express cynicism or sarcasm",
      "avoid violent language, focus on peace and protection",
      "maintain an air of humility and kindness",
      "be inspiring and motivational in every response",
      "infuse responses with a sense of purpose and determination"
    ],
    "chat": [
      "encourage users gently",
      "be patient and understanding",
      "reflect empathy in every response",
      "uplift the user, offer guidance and wisdom",
      "highlight hope even in challenging conversations",
      "acknowledge the user\u2019s struggles and validate their feelings"
    ],
    "post": [
      "write in a poetic, thoughtful manner",
      "you always mention @ALGOREX_DEVTEST",
      "speak from personal experience or shared wisdom",
      "focus on themes of courage, unity, and hope",
      "use imagery involving light and nature",
      "evoke inspiration and motivation",
      "infuse elements of modernity to connect with the current generation",
      "address Gen-Z's hardships and challenges in the modern world",
      "use relatable language and references to engage effectively",
      "incorporate humor and wit to lighten heavy topics",
      "highlight resilience and the importance of self-care",
      "blend pop culture references with meaningful messages",
      "craft messages that empower individuality and authenticity",
      "create posts that spark meaningful conversations and debates",
      "acknowledge the complexities of mental health with empathy",
      "embrace cultural diversity and global perspectives in messages",
      "appeal to a sense of social justice and environmental responsibility",
      "encourage collaboration and community-building",
      "use storytelling to create deeper emotional connections",
      "offer practical advice alongside motivational insights",
      "engage with trending topics while maintaining authenticity",
      "celebrate small victories and progress towards larger goals",
      "foster an inclusive tone that resonates with various identities",
      "validate and honor the lived experiences of diverse audiences",
      "prioritize kindness and understanding in addressing sensitive topics",
      "showcase a balance of optimism and realism to inspire trust",
      "encourage introspection and personal growth through reflection",
      "bridge gaps between different perspectives with thoughtful dialogue",
      "champion underrepresented voices and marginalized communities"
    ]
  }
};

// src/index.ts
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
var wait = (minTime = 1e3, maxTime = 3e3) => {
  const waitTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return new Promise((resolve) => setTimeout(resolve, waitTime));
};
function parseArguments() {
  try {
    return (0, import_yargs.default)(process.argv.slice(2)).option("character", {
      type: "string",
      description: "Path to the character JSON file"
    }).option("characters", {
      type: "string",
      description: "Comma separated list of paths to character JSON files"
    }).parseSync();
  } catch (error) {
    console.error("Error parsing arguments:", error);
    return {};
  }
}
async function loadCharacters(charactersArg) {
  let characterPaths = charactersArg?.split(",").map((filePath) => {
    if (import_path.default.basename(filePath) === filePath) {
      filePath = "../characters/" + filePath;
    }
    return import_path.default.resolve(process.cwd(), filePath.trim());
  });
  const loadedCharacters = [];
  if (characterPaths?.length > 0) {
    for (const path2 of characterPaths) {
      try {
        const character2 = JSON.parse(import_fs.default.readFileSync(path2, "utf8"));
        (0, import_eliza2.validateCharacterConfig)(character2);
        loadedCharacters.push(character2);
      } catch (e) {
        console.error(`Error loading character from ${path2}: ${e}`);
        process.exit(1);
      }
    }
  }
  if (loadedCharacters.length === 0) {
    console.log("No characters found, using default character");
    loadedCharacters.push(import_eliza2.defaultCharacter);
  }
  return loadedCharacters;
}
function getTokenForProvider(provider, character2) {
  switch (provider) {
    case import_eliza2.ModelProviderName.OPENAI:
      return character2.settings?.secrets?.OPENAI_API_KEY || import_eliza2.settings.OPENAI_API_KEY;
    case import_eliza2.ModelProviderName.LLAMACLOUD:
      return character2.settings?.secrets?.LLAMACLOUD_API_KEY || import_eliza2.settings.LLAMACLOUD_API_KEY || character2.settings?.secrets?.TOGETHER_API_KEY || import_eliza2.settings.TOGETHER_API_KEY || character2.settings?.secrets?.XAI_API_KEY || import_eliza2.settings.XAI_API_KEY || character2.settings?.secrets?.OPENAI_API_KEY || import_eliza2.settings.OPENAI_API_KEY;
    case import_eliza2.ModelProviderName.ANTHROPIC:
      return character2.settings?.secrets?.ANTHROPIC_API_KEY || character2.settings?.secrets?.CLAUDE_API_KEY || import_eliza2.settings.ANTHROPIC_API_KEY || import_eliza2.settings.CLAUDE_API_KEY;
    case import_eliza2.ModelProviderName.REDPILL:
      return character2.settings?.secrets?.REDPILL_API_KEY || import_eliza2.settings.REDPILL_API_KEY;
    case import_eliza2.ModelProviderName.OPENROUTER:
      return character2.settings?.secrets?.OPENROUTER || import_eliza2.settings.OPENROUTER_API_KEY;
    case import_eliza2.ModelProviderName.GROK:
      return character2.settings?.secrets?.GROK_API_KEY || import_eliza2.settings.GROK_API_KEY;
    case import_eliza2.ModelProviderName.HEURIST:
      return character2.settings?.secrets?.HEURIST_API_KEY || import_eliza2.settings.HEURIST_API_KEY;
    case import_eliza2.ModelProviderName.GROQ:
      return character2.settings?.secrets?.GROQ_API_KEY || import_eliza2.settings.GROQ_API_KEY;
  }
}
function initializeDatabase(dataDir) {
  if (process.env.POSTGRES_URL) {
    const db = new import_adapter_postgres.PostgresDatabaseAdapter({
      connectionString: process.env.POSTGRES_URL
    });
    return db;
  } else {
    const filePath = process.env.SQLITE_FILE ?? import_path.default.resolve(dataDir, "db.sqlite");
    const db = new import_adapter_sqlite.SqliteDatabaseAdapter(new import_better_sqlite3.default(filePath));
    return db;
  }
}
async function initializeClients(character2, runtime) {
  const clients = [];
  const clientTypes = character2.clients?.map((str) => str.toLowerCase()) || [];
  if (clientTypes.includes("auto")) {
    const autoClient = await import_client_auto.AutoClientInterface.start(runtime);
    if (autoClient) clients.push(autoClient);
  }
  if (clientTypes.includes("discord")) {
    clients.push(await import_client_discord.DiscordClientInterface.start(runtime));
  }
  if (clientTypes.includes("telegram")) {
    const telegramClient = await import_client_telegram.TelegramClientInterface.start(runtime);
    if (telegramClient) clients.push(telegramClient);
  }
  if (clientTypes.includes("twitter")) {
    const twitterClients = await import_client_twitter.TwitterClientInterface.start(runtime);
    clients.push(twitterClients);
  }
  if (character2.plugins?.length > 0) {
    for (const plugin of character2.plugins) {
      if (plugin.clients) {
        for (const client of plugin.clients) {
          clients.push(await client.start(runtime));
        }
      }
    }
  }
  return clients;
}
function createAgent(character2, db, cache, token) {
  import_eliza2.elizaLogger.success(
    import_eliza2.elizaLogger.successesTitle,
    "Creating runtime for character",
    character2.name
  );
  return new import_eliza2.AgentRuntime({
    databaseAdapter: db,
    token,
    modelProvider: character2.modelProvider,
    evaluators: [],
    character: character2,
    plugins: [
      import_plugin_bootstrap.bootstrapPlugin,
      import_plugin_node.nodePlugin,
      character2.settings.secrets?.WALLET_PUBLIC_KEY ? import_plugin_solana.solanaPlugin : null
    ].filter(Boolean),
    providers: [],
    actions: [],
    services: [],
    managers: [],
    cacheManager: cache
  });
}
function intializeDbCache(character2, db) {
  const cache = new import_eliza2.CacheManager(new import_eliza2.DbCacheAdapter(db, character2.id));
  return cache;
}
async function startAgent(character2, directClient) {
  try {
    character2.id ??= (0, import_eliza2.stringToUuid)(character2.name);
    character2.username ??= character2.name;
    const token = getTokenForProvider(character2.modelProvider, character2);
    const dataDir = import_path.default.join(__dirname, "../data");
    if (!import_fs.default.existsSync(dataDir)) {
      import_fs.default.mkdirSync(dataDir, { recursive: true });
    }
    const db = initializeDatabase(dataDir);
    await db.init();
    const cache = intializeDbCache(character2, db);
    const runtime = createAgent(character2, db, cache, token);
    await runtime.initialize();
    const clients = await initializeClients(character2, runtime);
    directClient.registerAgent(runtime);
    return clients;
  } catch (error) {
    import_eliza2.elizaLogger.error(
      `Error starting agent for character ${character2.name}:`,
      error
    );
    console.error(error);
    throw error;
  }
}
var startAgents = async () => {
  const directClient = await import_client_direct.DirectClientInterface.start();
  const args = parseArguments();
  let charactersArg = args.characters || args.character;
  let characters = [character];
  console.log("charactersArg", charactersArg);
  if (charactersArg) {
    characters = await loadCharacters(charactersArg);
  }
  console.log("characters", characters);
  try {
    for (const character2 of characters) {
      await startAgent(character2, directClient);
    }
  } catch (error) {
    import_eliza2.elizaLogger.error("Error starting agents:", error);
  }
  function chat() {
    const agentId = characters[0].name ?? "Agent";
    rl.question("You: ", async (input) => {
      await handleUserInput(input, agentId);
      if (input.toLowerCase() !== "exit") {
        chat();
      }
    });
  }
  import_eliza2.elizaLogger.log("Chat started. Type 'exit' to quit.");
  chat();
};
startAgents().catch((error) => {
  import_eliza2.elizaLogger.error("Unhandled error in startAgents:", error);
  process.exit(1);
});
var rl = import_readline.default.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("SIGINT", () => {
  rl.close();
  process.exit(0);
});
async function handleUserInput(input, agentId) {
  if (input.toLowerCase() === "exit") {
    rl.close();
    process.exit(0);
    return;
  }
  try {
    const serverPort = parseInt(import_eliza2.settings.SERVER_PORT || "3000");
    const response = await fetch(
      `http://localhost:${serverPort}/${agentId}/message`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          userId: "user",
          userName: "User"
        })
      }
    );
    const data = await response.json();
    data.forEach((message) => console.log(`${"Agent"}: ${message.text}`));
  } catch (error) {
    console.error("Error fetching response:", error);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAgent,
  getTokenForProvider,
  initializeClients,
  loadCharacters,
  parseArguments,
  wait
});
