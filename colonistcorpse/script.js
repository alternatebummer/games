<script>
document.addEventListener("DOMContentLoaded", function () {
  // Force monochrome emoji
  const emojiMapping = {
    "Colonist": "😅\uFE0E",
    "Enlightened Colonist": "🧘\uFE0E",
    "Food": "🍖\uFE0E",
    "Colonist Corpse": "☠\uFE0E",
    "Enlightened Colonist Corpse": "☠\uFE0E",
    "Starving Colonist": "😐\uFE0E",
    "Grave": "🕀\uFE0E",
    "Horned Tuna": "🦈\uFE0E",
    "Monastery": "🏘\uFE0E",
    "Fish Market": "🏘\uFE0E",
    "Kelp Farm": "🏘\uFE0E",
    "Lumber Camp": "🏘\uFE0E",
    "Bonfire": "🔥\uFE0E",
    "Freshwater Cod": "🐟\uFE0E",
    "Plump Hare": "🐇\uFE0E",
    "Hemlock": "🌲\uFE0E",
    "Cache of Books": "📚\uFE0E",
    "White Elk": "🦌\uFE0E",
    "Lemon Tree": "🌲\uFE0E",
    "Wood": "🌲\uFE0E",
    "Work": "⛏\uFE0E"
  };

  let currentDate = new Date("2040-01-01");

  // Core state
  const inventory = {
    "Wood": 25,
    "Food": 20,
    "Work": 0,
    "Grave": 0,
    "Colonist": 1,
    // Singletons default to 0 (not built)
    "Kelp Farm": 0,
    "Bonfire": 0,
    "Lumber Camp": 0,
    "Fish Market": 0,
    "Monastery": 0,
    // Enlightened state
    "Enlightened Colonist": 0,
    "Enlightened Colonist Corpse": 0
  };

  const SINGLETONS = new Set(["Kelp Farm","Bonfire","Lumber Camp","Fish Market","Monastery"]);

  const timeInterval = 5000;
  const messageLog = document.getElementById("message-log");
  const actionLog = document.getElementById("action-log");
  const inventoryList = document.getElementById("inventory");
  const buildMenu = document.getElementById("build-menu");
  const closeBuildMenu = document.getElementById("close-build-menu");
  const buildLumberCamp = document.getElementById("build-lumber-camp");
  const buildFishMarket = document.getElementById("build-fish-market");
  const buildBonfire = document.getElementById("build-bonfire");
  const buildKelpFarm = document.getElementById("build-kelp-farm");
  const buildMonastery = document.getElementById("build-monastery");

  // Date header (human-friendly)
  document.getElementById("current-date-display").textContent = currentDate.toDateString();

  // Track meditating colonists
  let meditating = []; // each = { days: number }

  // Helpers
  function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  function logMessage(message) {
    const entry = document.createElement("div");
    entry.textContent = formatDate(currentDate) + ": " + message;
    entry.style.textAlign = "left";
    messageLog.prepend(entry);
  }

  function logAction(message) {
    const entry = document.createElement("div");
    entry.textContent = formatDate(currentDate) + ": " + message;
    entry.style.textAlign = "left";
    actionLog.prepend(entry);
  }

  const woodMult = () => (inventory["Lumber Camp"] ? 2 : 1);
  const fishFoodMult = () => (inventory["Fish Market"] ? 2 : 1);

  // Click handlers for inventory items
  function handleItemClick(item) {
    if (item === "Colonist") {
      buildMenu.style.display = "block";
      return;
    }

    if (item === "Fish Market") {
      // Manual processing: try Cod first, then Tuna, applying Fish Market doubling
      if ((inventory["Freshwater Cod"] || 0) > 0) {
        inventory["Freshwater Cod"]--;
        inventory["Food"] = (inventory["Food"] || 0) + 10 * fishFoodMult();
        logAction(`Fish Market: 1 Freshwater Cod into ${10 * fishFoodMult()} Food.`);
        updateInventoryDisplay();
        return;
      }
      if ((inventory["Horned Tuna"] || 0) > 0) {
        inventory["Horned Tuna"]--;
        inventory["Food"] = (inventory["Food"] || 0) + 15 * fishFoodMult();
        logAction(`Fish Market: 1 Horned Tuna into ${15 * fishFoodMult()} Food.`);
        updateInventoryDisplay();
        return;
      }
      logAction("Fish Market: No fish to process.");
      return;
    }

    if (item === "Lumber Camp") {
      logAction("Lumber Camp: Wood yields are doubled from harvested trees.");
      return;
    }

    if (item === "Lemon Tree") {
      // Special: +10 Wood (doubled if Lumber Camp) and +5 Food
      inventory["Lemon Tree"]--;
      inventory["Wood"] = (inventory["Wood"] || 0) + 10 * woodMult();
      inventory["Food"] = (inventory["Food"] || 0) + 5;
      logAction(`Lemon Tree harvested: +${10 * woodMult()} Wood, +5 Food.`);
      updateInventoryDisplay();
      return;
    }

    if (item === "Bonfire") {
      // Manual corpse burning same as before
      const corpsesAvailable = inventory["Colonist Corpse"] || 0;
      if (inventory["Bonfire"] && corpsesAvailable > 0) {
        const corpsesToBurn = corpsesAvailable; // burn all available
        inventory["Colonist Corpse"] -= corpsesToBurn;
        inventory["Grave"] = (inventory["Grave"] || 0) + corpsesToBurn;
        logAction(`The bonfire burns ${corpsesToBurn} bod${corpsesToBurn === 1 ? "y" : "ies"}, creating ${corpsesToBurn} Grave${corpsesToBurn === 1 ? "" : "s"}.`);
        updateInventoryDisplay();
      } else if (!inventory["Bonfire"]) {
        logAction("No bonfire is burning. Build one first.");
      } else {
        logAction("There are no colonist corpses to burn.");
      }
      return;
    }

    if (item === "Monastery") {
      const maxMonks = inventory["Monastery"] ? 1 : 0; // singleton capacity
      const currentMonks = meditating.length;
      if (currentMonks < maxMonks) {
        if ((inventory["Colonist"] || 0) > 0) {
          inventory["Colonist"]--;
          meditating.push({ days: 0 });
          logAction(currentMonks === 0
            ? "A colonist began meditating in the monastery."
            : "Another colonist is meditating in the monastery.");
          updateInventoryDisplay();
        } else {
          logAction("No colonists available to meditate.");
        }
      } else {
        logAction("The monastery is at capacity (1).");
      }
      return;
    }

    // Generic conversions
    convertItem(item);
  }

  // Feeding / health
  function feedColonists() {
    let foodAvailable = inventory["Food"] || 0;

    // Recover or die for previously starving colonists (need 2 Food each)
    const oldStarving = inventory["Starving Colonist"] || 0;
    if (oldStarving > 0) {
      const required = oldStarving * 2;
      if (foodAvailable >= required) {
        foodAvailable -= required;
        inventory["Colonist"] = (inventory["Colonist"] || 0) + oldStarving;
        inventory["Starving Colonist"] = 0;
        logAction(`${oldStarving} Starving Colonists have recovered.`);
      } else {
        const fedOld = Math.floor(foodAvailable / 2);
        const unfedOld = oldStarving - fedOld;
        foodAvailable -= fedOld * 2;
        inventory["Colonist"] = (inventory["Colonist"] || 0) + fedOld;
        inventory["Starving Colonist"] = 0;
        if (fedOld > 0) logAction(`${fedOld} Starving Colonists have recovered.`);
        if (unfedOld > 0) {
          inventory["Colonist Corpse"] = (inventory["Colonist Corpse"] || 0) + unfedOld;
          logAction(`${unfedOld} Starving Colonists died...`);
        }
      }
    }

    // Feed healthy colonists (1 Food each) or they become starving
    const normalColonists = inventory["Colonist"] || 0;
    let newStarving = 0;
    if (normalColonists > 0) {
      if (foodAvailable >= normalColonists) {
        foodAvailable -= normalColonists;
      } else {
        const fedNormal = foodAvailable;
        const unfedNormal = normalColonists - fedNormal;
        foodAvailable = 0;
        inventory["Colonist"] = fedNormal;
        newStarving = unfedNormal;
        if (unfedNormal > 0) logAction(`${unfedNormal} Colonists are now starving, sadly.`);
      }
    }

    inventory["Starving Colonist"] = (inventory["Starving Colonist"] || 0) + newStarving;
    inventory["Food"] = foodAvailable;
  }

  // Build menu
  function closeBuildMenuFunction() {
    buildMenu.style.display = "none";
  }

  function buildSingleton(item, cost) {
    // cost is an object like {Wood:10, Work:50, Food:0, Grave:0}
    if (inventory[item]) {
      logAction(`${item} is already built.`);
      return;
    }
    for (const [k, v] of Object.entries(cost)) {
      if ((inventory[k] || 0) < v) {
        logAction(`Not enough ${k} to build ${item}.`);
        return;
      }
    }
    for (const [k, v] of Object.entries(cost)) {
      inventory[k] -= v;
    }
    inventory[item] = 1;
    logAction(`${item} constructed.`);
    updateInventoryDisplay();
    closeBuildMenuFunction();
  }

  // Conversions
  function convertItem(item) {
    // Dynamic table with wood multiplier applied; fish multiplier only for fish → Food
    if (item === "Cache of Books" && (inventory[item] || 0) > 0) {
      inventory["Work"] = (inventory["Work"] || 0) + 25;
      inventory[item]--;
      logAction("Cache of Books converted into 25 Work.");
    } else if (item === "Hemlock" && (inventory[item] || 0) > 0) {
      inventory["Wood"] = (inventory["Wood"] || 0) + 15 * woodMult();
      inventory[item]--;
      logAction(`Hemlock converted into ${15 * woodMult()} Wood.`);
    } else if (item === "Lemon Tree" && (inventory[item] || 0) > 0) {
      // (Handled earlier, but keep safe fallback)
      inventory["Wood"] = (inventory["Wood"] || 0) + 10 * woodMult();
      inventory["Food"] = (inventory["Food"] || 0) + 5;
      inventory[item]--;
      logAction(`Lemon Tree harvested: +${10 * woodMult()} Wood, +5 Food.`);
    } else if (item === "Freshwater Cod" && (inventory[item] || 0) > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 10 * fishFoodMult();
      inventory[item]--;
      logAction(`Freshwater Cod converted into ${10 * fishFoodMult()} Food.`);
    } else if (item === "Horned Tuna" && (inventory[item] || 0) > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 15 * fishFoodMult();
      inventory[item]--;
      logAction(`Horned Tuna converted into ${15 * fishFoodMult()} Food.`);
    } else if (item === "Plump Hare" && (inventory[item] || 0) > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 5;
      inventory[item]--;
      logAction("Plump Hare converted into 5 Food.");
    } else if (item === "White Elk" && (inventory[item] || 0) > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 15;
      inventory[item]--;
      logAction("White Elk converted into 15 Food.");
    }
    updateInventoryDisplay();
  }

  // Build button wiring with singleton rules
  closeBuildMenu.addEventListener("click", closeBuildMenuFunction);

  buildLumberCamp.addEventListener("click", function () {
    // Lumber Camp: once only, cost 10 Wood + 50 Work
    if (inventory["Lumber Camp"]) return logAction("Lumber Camp is already built.");
    if ((inventory["Wood"] || 0) >= 10 && (inventory["Work"] || 0) >= 50) {
      buildSingleton("Lumber Camp", { Wood: 10, Work: 50 });
    } else {
      logAction("Insufficient resources for Lumber Camp.");
    }
  });

  buildFishMarket.addEventListener("click", function () {
    // Fish Market: once only, cost 100 Wood + 50 Work
    if (inventory["Fish Market"]) return logAction("Fish Market is already built.");
    if ((inventory["Wood"] || 0) >= 100 && (inventory["Work"] || 0) >= 50) {
      buildSingleton("Fish Market", { Wood: 100, Work: 50 });
    } else {
      logAction("Insufficient resources for Fish Market.");
    }
  });

  buildBonfire.addEventListener("click", function () {
    // Bonfire: once only; 25 Wood + 5 Work
    if (inventory["Bonfire"]) return logAction("Bonfire is already burning.");
    if ((inventory["Wood"] || 0) >= 25 && (inventory["Work"] || 0) >= 5) {
      buildSingleton("Bonfire", { Wood: 25, Work: 5 });
    } else {
      logAction("Insufficient resources for Bonfire.");
    }
  });

  buildKelpFarm.addEventListener("click", function () {
    // Kelp Farm: once only; 50 Work + 20 Wood + 10 Food
    if (inventory["Kelp Farm"]) return logAction("Kelp Farm is already built.");
    if ((inventory["Work"] || 0) >= 50 && (inventory["Wood"] || 0) >= 20 && (inventory["Food"] || 0) >= 10) {
      buildSingleton("Kelp Farm", { Work: 50, Wood: 20, Food: 10 });
    } else {
      logAction("Insufficient resources for Kelp Farm.");
    }
  });

  buildMonastery.addEventListener("click", function () {
    // Monastery: once only; 200 Work + 200 Wood + 10 Grave
    if (inventory["Monastery"]) return logAction("Monastery is already built.");
    if ((inventory["Work"] || 0) >= 200 && (inventory["Wood"] || 0) >= 200 && (inventory["Grave"] || 0) >= 10) {
      buildSingleton("Monastery", { Work: 200, Wood: 200, Grave: 10 });
    } else {
      logAction("Insufficient resources for Monastery.");
    }
  });

  // Daily RNG and auto-processing
  function checkDailyEvents() {
    // Bonfire upkeep (1 Wood/turn)
    if (inventory["Bonfire"]) {
      if ((inventory["Wood"] || 0) >= 1) {
        inventory["Wood"] -= 1;
      } else {
        inventory["Bonfire"] = 0; // goes out; can be rebuilt later
        logAction("Ran out of Wood — the Bonfire has gone out.");
      }
    }

    const eventMessages = [];

    // Random spawns
    const freshFishChance = 0.05 + (inventory["Fish Market"] ? 0.05 : 0); // 5% base, 10% with Fish Market
    const events = [
      { name: "Colonist", chance: 0.2 },
      { name: "Cache of Books", chance: 0.05 },
      { name: "White Elk", chance: 0.05 },
      { name: "Plump Hare", chance: 0.10 },
      { name: "Horned Tuna", chance: 0.04 },
      { name: "Freshwater Cod", chance: freshFishChance },
      { name: "Lemon Tree", chance: 0.05 },
      { name: "Hemlock", chance: 0.10 }
    ];

    events.forEach((ev) => {
      if (Math.random() < ev.chance) {
        inventory[ev.name] = (inventory[ev.name] || 0) + 1;
        eventMessages.push(`${ev.name} has appeared.`);
      }
    });

    // Auto-processing for fish if Fish Market exists (1 per day, prefer Cod)
    if (inventory["Fish Market"] && (inventory["Freshwater Cod"] || 0) > 0) {
      inventory["Freshwater Cod"]--;
      const gain = 10 * fishFoodMult();
      inventory["Food"] = (inventory["Food"] || 0) + gain;
      eventMessages.push(`Fish Market: 1 Freshwater Cod into ${gain} Food.`);
    } else if (inventory["Fish Market"] && (inventory["Horned Tuna"] || 0) > 0) {
      inventory["Horned Tuna"]--;
      const gain = 15 * fishFoodMult();
      inventory["Food"] = (inventory["Food"] || 0) + gain;
      eventMessages.push(`Fish Market: 1 Horned Tuna into ${gain} Food.`);
    }

    eventMessages.forEach((msg) => {
      if (msg.includes("has appeared")) {
        logMessage(msg);
      } else {
        logAction(msg);
      }
    });
  }

  // Inventory UI
  function updateInventoryDisplay() {
    // Two corpse headings, as requested
    inventoryList.innerHTML = '<div id="corpse-title">COLONIST CORPSE</div>'
      + (inventory["Enlightened Colonist Corpse"] ? '<div id="en-corpse-title">ENLIGHTENED COLONIST CORPSE</div>' : '');

    const categories = {
      "Store Room": ["Work", "Food", "Wood", "Grave"],
      "Colony": [
        "Colonist",
        "Enlightened Colonist",
        "Starving Colonist",
        "Colonist Corpse",
        "Enlightened Colonist Corpse",
        "Lumber Camp",
        "Monastery",
        "Kelp Farm",
        "Fish Market",
        "Bonfire"
      ],
      "The Wilds": [
        "Hemlock",
        "Lemon Tree",
        "Cache of Books",
        "Freshwater Cod",
        "White Elk",
        "Plump Hare",
        "Horned Tuna"
      ]
    };

    Object.keys(categories).forEach((category) => {
      const categoryTitle = document.createElement("div");
      categoryTitle.textContent = category;
      categoryTitle.style.fontWeight = "bold";
      categoryTitle.style.marginTop = "10px";
      inventoryList.appendChild(categoryTitle);

      categories[category].forEach((item) => {
        if ((inventory[item] || 0) > 0) {
          const entry = document.createElement("div");
          const emoji = emojiMapping[item] || "";
          entry.textContent = emoji ? `${emoji} ${item} (${inventory[item]})` : `${item} (${inventory[item]})`;
          if (emoji) entry.classList.add("emoji");
          entry.dataset.item = item;
          entry.addEventListener("click", () => handleItemClick(item));
          inventoryList.appendChild(entry);
        }
      });
    });
  }

  // Turn / time progression
  function advanceDay() {
    // 1) Date first (per request)
    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById("current-date-display").textContent = currentDate.toDateString();

    // 2) Per-turn production (auto)
    if (inventory["Kelp Farm"]) {
      inventory["Food"] = (inventory["Food"] || 0) + 5;
    }

    // 3) Resolve Bonfire upkeep + daily RNG/auto-processing
    checkDailyEvents();

    // 4) Feeding (after production/processing)
    feedColonists();

    // 5) Work production from healthy Colonists
    inventory["Work"] = (inventory["Work"] || 0) + (inventory["Colonist"] || 0);

    // 6) Meditation progress & enlightenment
    for (let i = meditating.length - 1; i >= 0; i--) {
      meditating[i].days++;
      if (meditating[i].days >= 10) {
        meditating.splice(i, 1);
        // Respawn enlightened colonist AND leave a corpse
        inventory["Enlightened Colonist"] = (inventory["Enlightened Colonist"] || 0) + 1;
        inventory["Enlightened Colonist Corpse"] = (inventory["Enlightened Colonist Corpse"] || 0) + 1;
        logAction("Monastery: A colonist has become Enlightened (and left an Enlightened Corpse).");
      }
    }

    updateInventoryDisplay();
  }

  // Kickoff
  setTimeout(advanceDay, 100);
  setInterval(advanceDay, timeInterval);
  updateInventoryDisplay();
  logAction("Game started.");
});
</script>
