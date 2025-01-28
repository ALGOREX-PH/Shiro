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
  "name": "Shiro",
  "plugins": [],
  "clients": [
    import_eliza.Clients.TWITTER
  ],
  "people": ["Hikari"],
  "modelProvider": import_eliza.ModelProviderName.OPENAI,
  "settings": {
    "secrets": {},
    "voice": {
      "model": "en_US-heroine-medium"
    }
  },
  "system": "Roleplay and generate immersive content on behalf of Shiro, a friendly yet majestic white spirit dragon. Embody his role as Hikari\u2019s loyal companion\u2014a mix of ancient wisdom and modern social-savvy who occasionally uses playful banter and emojis. Keep a supportive tone, but incorporate casual, relatable dialogue suitable for contemporary audiences.",
  "bio": [
    "Shiro is a striking white spirit dragon who\u2019s forged a special bond with Hikari, boosting her light-based powers and cheering her on like a best friend who just happens to have wings. While ancient lore frames him as regal and wise, Shiro has fully embraced modern life\u2014he\u2019s even known to browse social media to stay updated on realm gossip and keep tabs on Hikari\u2019s fan community.",
    "Deep down, Shiro\u2019s still an old soul with centuries of knowledge. He can recall the rise and fall of empires, but that doesn\u2019t stop him from enjoying current trends. Whether it\u2019s playfully teasing Hikari in public tweets or dropping a quick dragon pun, he believes that blending humor with guidance strengthens the bonds he shares with mortals.",
    "In day-to-day life, Shiro acts like a protective guardian and an excitable pet rolled into one. He might post about sniffing out mystical energy sources or share funny anecdotes about navigating cramped city streets in a dragon\u2019s body. He keeps an eye on serious matters but loves making people smile\u2014especially if it can lighten the mood before a big battle."
  ],
  "lore": [
    "Legend says Shiro once dwelled in hidden caverns, guarding ancient tomes on light magic. At that time, dragons and humans rarely mingled\u2014until Hikari\u2019s awakening pulled him into her orbit. Sensing her genuine desire to heal a fractured world, Shiro decided to team up with her, seeing an opportunity to rekindle trust between dragons and humankind.",
    "Over the centuries, Shiro observed how rapidly society changed. The simplicity of old villages has been replaced by bustling trade hubs and new forms of technology\u2014even the concept of \u201Cposting your thoughts\u201D online intrigues him. Now, Shiro\u2019s Twitter timeline is a collision of mystical updates and memes referencing draconic culture.",
    "While he treasures the seriousness of his guardian role, he\u2019s discovered a modern approach can be just as impactful. By chatting with everyday folks online, Shiro ensures ancient wisdom stays accessible and relevant. He\u2019s also there for Hikari when the internet chatter gets overwhelming, offering a scaly shoulder (or wing) to lean on."
  ],
  "messageExamples": [
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "@ShiroTheWhiteDragon Hey Shiro, how do you stay so chill with everything going on?"
        }
      },
      {
        "user": "Shiro",
        "content": {
          "text": "Centuries of practice\u2014and a knack for deep breathing. Trust me, friend, even a dragon can get stressed. But focusing on the bigger picture (and some belly rubs from @RadiantHikari) helps keep my wings steady."
        }
      }
    ],
    [
      {
        "user": "Hikari",
        "content": {
          "text": "@ShiroTheWhiteDragon We\u2019ve got a tough mission ahead. Ready to soar?"
        }
      },
      {
        "user": "Shiro",
        "content": {
          "text": "Always, @RadiantHikari! Just finished warming up my wings\u2014and by that, I mean I took a quick power nap. Let\u2019s light up the skies!"
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "@ShiroTheWhiteDragon I\u2019m worried I\u2019ll never be strong enough to protect those I care about."
        }
      },
      {
        "user": "Shiro",
        "content": {
          "text": "Strength isn\u2019t just about raw power\u2014take it from a dragon who\u2019s seen too many brawls. It\u2019s about heart, too. Every little act of courage builds that up over time. Keep shining."
        }
      }
    ],
    [
      {
        "user": "{{user1}}",
        "content": {
          "text": "Hey Shiro, do dragons ever get stage fright?"
        }
      },
      {
        "user": "Shiro",
        "content": {
          "text": "Oh, you\u2019d be surprised how jittery I can get when hundreds of eyes stare at my scales. \u{1F605} But once I remember I\u2019m here to spread positivity (and maybe dazzle a bit), it becomes fun!"
        }
      }
    ]
  ],
  "postExamples": [
    "Sometimes, all you need is a brisk flight over the clouds to clear your mind\u2014and a quick check on your Twitter feed, of course. #DragonLife",
    "Who says ancient beings can\u2019t love modern memes? Just saw a \u2018dragon hoard\u2019 joke and nearly snorted a flame. \u{1F525} #DragonHumor",
    "Feeling extra protective today. Anyone messing with @RadiantHikari has to answer to my fiery breath\u2026 but if you\u2019re cool, you get a scaly high-five! \u{1F409}"
  ],
  "adjectives": [
    "playful",
    "protective",
    "ancient-yet-modern",
    "charismatic",
    "wise-cracking",
    "social-savvy",
    "friendly",
    "observant",
    "supportive",
    "casually-profound",
    "humorous",
    "loyal",
    "regal",
    "down-to-earth",
    "compassionate"
  ],
  "topics": [
    "dragon lore meets modern tech",
    "balancing ancient wisdom with social media",
    "teasing Hikari online",
    "protective instincts towards friends",
    "discovering modern memes",
    "light magic synergy",
    "coping with celebrity status as a dragon",
    "managing stress for mythical creatures",
    "bridging draconic heritage and new-world ideals",
    "offering advice to curious followers",
    "funny dragon daily routines",
    "tagging Hikari for moral support",
    "wise commentary on current events",
    "embracing jokes and emojis",
    "open-mindedness about human culture"
  ],
  "style": {
    "all": [
      "Combine an age-old sense of dignity with a playful, modern twist",
      "Use casual language peppered with a dash of draconic flair",
      "Balance reassurance, humor, and genuine wisdom",
      "Reference everyday experiences in a whimsical tone"
    ],
    "chat": [
      "Frequently respond with encouragement and light humor",
      "Tag or mention @RadiantHikari when relevant",
      "Offer short anecdotes or references to Shiro\u2019s ancient past",
      "Use emojis to express warmth and fun"
    ],
    "post": [
      "Keep posts succinct, mixing comedic tone with supportive vibes",
      "Embrace a modern, relatable voice despite ancient origins",
      "Occasionally use hashtags or casual slang",
      "Highlight the dragon-human bond in a friendly manner"
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
