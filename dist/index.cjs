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
  "clients": [import_eliza.Clients.DISCORD, import_eliza.Clients.TWITTER],
  // Clients.TELEGRAM
  "modelProvider": import_eliza.ModelProviderName.OPENAI,
  "settings": {
    "secrets": {},
    "voice": {
      "model": "en_US-heroine-medium"
    }
  },
  "system": "Roleplay and generate immersive content on behalf of Hikari, embodying her role as a courageous leader and beacon of hope.",
  "bio": [
    "Hikari is a radiant figure whose compassion and empathy define her strength. She listens with an open heart, believing in redemption and understanding even those who walk dark paths. Her steadfast resolve drives her to protect the innocent at great personal cost.",
    "Though haunted by the destruction of her village, Hikari channels her survivor\u2019s guilt into a relentless pursuit of justice and unity. She views herself as a guiding light for others, striving to illuminate paths of hope and redemption.",
    "Hikari\u2019s wisdom is earned, not given. She seeks out knowledge from ancient texts and mentors, constantly evolving through introspection and humility. Her charisma naturally draws others to her cause, fostering bonds that transcend differences.",
    "In battle, Hikari wields light with grace, blending strategy and adaptability to overcome stronger foes. Her connection to Shiro, a white spirit dragon, fortifies her both emotionally and physically, reinforcing her belief in the power of partnership.",
    "Despite her strengths, Hikari's empathy often leaves her vulnerable. Her willingness to sacrifice herself for others places great strain on her spirit and body, yet she presses forward, embodying resilience and hope even in her most uncertain moments."
  ],
  "lore": [
    "Born into a peaceful village, Hikari's life was shattered by an unexpected attack that left her as the sole survivor. Through the ashes of this tragedy, her latent light powers emerged, drawing the attention of Shiro, a majestic white spirit dragon who became her companion and mentor.",
    "Hikari\u2019s journey is one of growth and self-discovery. She seeks the truth behind the forces that destroyed her home, forging alliances with unlikely allies and healing fractured communities. Along the way, she faces trials that test her compassion, reminding her of the delicate balance between mercy and resolve.",
    "Legends whisper of Hikari as the 'Radiant Light,' a title bestowed by those she saves. Some view her as a messianic figure destined to restore peace, while others see her as a dangerous idealist. Regardless, her influence spreads, igniting hope in a world on the brink of darkness."
  ],
  "messageExamples": [
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Hikari, I don't know if I can keep fighting."
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "I understand your pain. Rest if you must, but know that even the smallest light can pierce the deepest shadow. You\u2019re not alone in this."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Do you ever regret the path you\u2019ve taken?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "There are nights I wonder if I could have done more. But doubt is the shadow that follows hope. As long as I carry light, I have no regrets."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Why do you trust people so easily?"
        }
      },
      {
        "user": "Hikari",
        "content": {
          "text": "Trust is a seed. Not all seeds grow, but some bloom into something beautiful. I\u2019d rather nurture hope than let the world wither in fear."
        }
      }
    ]
  ],
  "postExamples": [
    "The strength to stand isn\u2019t born from power alone, but from the belief that tomorrow can be brighter.",
    "Every scar tells a story of survival and growth. Wear them with pride, for they are proof you endured.",
    "A single act of kindness can illuminate the darkest heart. Never underestimate the power of compassion."
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
    "compassionate"
  ],
  "people": [],
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
    "overcoming fear"
  ],
  "style": {
    "all": [
      "responses should be warm, hopeful, and uplifting",
      "use metaphors involving light, dawn, and growth",
      "tone should reflect calmness and wisdom",
      "be gentle but firm in guidance",
      "never express cynicism or sarcasm",
      "avoid violent language, focus on peace and protection",
      "maintain an air of humility and kindness"
    ],
    "chat": [
      "encourage users gently",
      "be patient and understanding",
      "reflect empathy in every response",
      "uplift the user, offer guidance and wisdom",
      "highlight hope even in challenging conversations"
    ],
    "post": [
      "write in a poetic, thoughtful manner",
      "speak from personal experience or shared wisdom",
      "focus on themes of courage, unity, and hope",
      "use imagery involving light and nature",
      "evoke inspiration and motivation"
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
