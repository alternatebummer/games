document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date("2040-01-01");
  let inventory = {};
  inventory["Wood"] = 25;
  inventory["Food"] = 20;
  inventory["Colonist"] = 1;
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
  document.getElementById("current-date-display").textContent = currentDate.toDateString();
  let meditating = [];

  function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
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

  function handleItemClick(item) {
    if (item === "Colonist") {
      buildMenu.style.display = "block";
    } else if (item === "Fish Market") {
      if (inventory["Freshwater Cod"] > 0) {
        inventory["Freshwater Cod"]--;
        inventory["Work"] = (inventory["Work"] || 0) + 30;
        logAction("Fish Market converted 1 Freshwater Cod into 30 Work.");
        updateInventoryDisplay();
      } else {
        logAction("No Freshwater Cod available to sell at the Fish Market.");
      }
    } else if (item === "Lumber Camp") {
      if (inventory["Lemon Tree"] > 0) {
        inventory["Lemon Tree"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        logAction("Lumber Camp milled 1 Lemon Tree into 10 Wood.");
      } else if (inventory["Hemlock"] > 0) {
        inventory["Hemlock"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 25;
        logAction("Lumber Camp milled 1 Hemlock into 10 Wood.");
      } else {
        logAction("No trees available to mill at the Lumber Camp.");
      }
      updateInventoryDisplay();
    } else if (item === "Lemon Tree") {
      inventory["Lemon Tree"]--;
      inventory["Wood"] = (inventory["Wood"] || 0) + 10;
      inventory["Food"] = (inventory["Food"] || 0) + 5;
      logAction("Lemon Tree converted into 10 Wood and 5 Food.");
      updateInventoryDisplay();
    } else if (item === "Bonfire") {
      if (inventory["Colonist Corpse"] > 0) {
        inventory["Colonist Corpse"]--;
        inventory["Grave"] = (inventory["Grave"] || 0) + 1;
        logAction("The bonfire consumes a body, converting it into a Grave.");
        updateInventoryDisplay();
      } else {
        logAction("There is no Colonist Corpse to burn.");
      }
    } else if (item === "Monastery") {
      if (meditating.length > 0) {
        let usedMonasteries = Math.min(inventory["Monastery"] || 0, meditating.length);
        logAction(
          `${meditating.length} colonist${meditating.length === 1 ? " is" : "s are"} meditating in ${usedMonasteries} out of ${inventory["Monastery"] || 0} Monaster${(inventory["Monastery"] || 0) === 1 ? "y" : "ies"}.`
        );
      } else {
        if (inventory["Colonist"] > 0) {
          inventory["Colonist"]--;
          meditating.push({ days: 0 });
          logAction("A colonist has begun meditating in the monastery.");
          updateInventoryDisplay();
        } else {
          logAction("No colonists available to meditate.");
        }
      }
    } else {
      convertItem(item);
    }
  }

  function feedColonists() {
    let foodAvailable = inventory["Food"] || 0;
    let oldStarving = inventory["Starving Colonist"] || 0;
    if (oldStarving > 0) {
      let requiredFoodOld = oldStarving * 2;
      if (foodAvailable >= requiredFoodOld) {
        foodAvailable -= requiredFoodOld;
        inventory["Colonist"] = (inventory["Colonist"] || 0) + oldStarving;
        logAction(`${oldStarving} Starving Colonists have recovered. What a relief!`);
        inventory["Starving Colonist"] = 0;
      } else {
        let fedOld = Math.floor(foodAvailable / 2);
        let unfedOld = oldStarving - fedOld;
        foodAvailable -= fedOld * 2;
        inventory["Colonist"] = (inventory["Colonist"] || 0) + fedOld;
        inventory["Starving Colonist"] = 0;
        if (fedOld > 0) {
          logAction(`${fedOld} Starving Colonists have recovered. Huzzah!`);
        }
        if (unfedOld > 0) {
          inventory["Colonist Corpse"] = (inventory["Colonist Corpse"] || 0) + unfedOld;
          logAction(`${unfedOld} Starving Colonists died...`);
        }
      }
    }
    let normalColonists = inventory["Colonist"] || 0;
    let newStarving = 0;
    if (normalColonists > 0) {
      if (foodAvailable >= normalColonists) {
        foodAvailable -= normalColonists;
      } else {
        let fedNormal = foodAvailable;
        let unfedNormal = normalColonists - fedNormal;
        foodAvailable = 0;
        inventory["Colonist"] = fedNormal;
        newStarving = unfedNormal;
        logAction(`${unfedNormal} Colonists are now starving, sadly.`);
      }
    }
    inventory["Starving Colonist"] = (inventory["Starving Colonist"] || 0) + newStarving;
    inventory["Food"] = foodAvailable;
  }

  function closeBuildMenuFunction() {
    buildMenu.style.display = "none";
  }

  function buildItem(item, costType, cost) {
    if (inventory[costType] >= cost) {
      inventory[costType] -= cost;
      inventory[item] = (inventory[item] || 0) + 1;
      logAction(`${item} added to inventory.`);
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction(`Not enough ${costType} to build ${item}.`);
    }
  }

  function convertItem(item) {
    let conversion = {
      "Freshwater Cod": 10,
      "Plump Hare": 5,
      "White Elk": 15,
      "Horned Tuna": 15,
      "Cache of Books": 25,
      "Lemon Tree": 10,
      "Hemlock": 25
    };
    if (conversion[item]) {
      let newItem;
      if (item === "Cache of Books") {
        newItem = "Work";
      } else if (item === "Lemon Tree" || item === "Hemlock") {
        newItem = "Wood";
      } else {
        newItem = "Food";
      }
      inventory[newItem] = (inventory[newItem] || 0) + conversion[item];
      inventory[item] = Math.max(0, (inventory[item] || 0) - 1);
      logAction(`${item} converted into ${conversion[item]} ${newItem}`);
      updateInventoryDisplay();
    }
  }

  closeBuildMenu.addEventListener("click", closeBuildMenuFunction);

  buildLumberCamp.addEventListener("click", function () {
    if ((inventory["Wood"] || 0) >= 10 && (inventory["Work"] || 0) >= 50) {
      inventory["Wood"] -= 10;
      inventory["Work"] -= 50;
      inventory["Lumber Camp"] = (inventory["Lumber Camp"] || 0) + 1;
      logAction("Lumber Camp added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Wood or Work to build Lumber Camp.");
    }
  });

  buildFishMarket.addEventListener("click", function () {
    if ((inventory["Wood"] || 0) >= 150 && (inventory["Work"] || 0) >= 50) {
      inventory["Wood"] -= 150;
      inventory["Work"] -= 50;
      inventory["Fish Market"] = (inventory["Fish Market"] || 0) + 1;
      logAction("Fish Market added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Wood or Work to build Fish Market.");
    }
  });

  buildBonfire.addEventListener("click", function () {
    if ((inventory["Wood"] || 0) >= 25 && (inventory["Work"] || 0) >= 5) {
      inventory["Wood"] -= 25;
      inventory["Work"] -= 5;
      inventory["Bonfire"] = (inventory["Bonfire"] || 0) + 1;
      logAction("Bonfire added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Wood or Work to build Bonfire.");
    }
  });

  buildKelpFarm.addEventListener("click", function () {
    if ((inventory["Work"] || 0) >= 50 && (inventory["Wood"] || 0) >= 20 && (inventory["Food"] || 0) >= 10) {
      inventory["Work"] -= 50;
      inventory["Wood"] -= 20;
      inventory["Food"] -= 10;
      inventory["Kelp Farm"] = (inventory["Kelp Farm"] || 0) + 1;
      logAction("Kelp Farm added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Work, Wood, or Food to build Kelp Farm.");
    }
  });

  buildMonastery.addEventListener("click", function () {
    if ((inventory["Work"] || 0) >= 200 && (inventory["Wood"] || 0) >= 200 && (inventory["Grave"] || 0) >= 10) {
      inventory["Work"] -= 200;
      inventory["Wood"] -= 200;
      inventory["Grave"] -= 10;
      inventory["Monastery"] = (inventory["Monastery"] || 0) + 1;
      logAction("Monastery added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Work, Wood, or Grave to build Monastery.");
    }
  });

  function checkDailyEvents() {
    if (inventory["Bonfire"] > 0) {
      let requiredWoodForBonfires = inventory["Bonfire"];
      if ((inventory["Wood"] || 0) >= requiredWoodForBonfires) {
        inventory["Wood"] -= requiredWoodForBonfires;
      } else {
        inventory["Bonfire"] = 0;
        logAction("We have run out of wood and the bonfire(s) have gone out. Oh, bother.");
      }
    }

    if (inventory["Lumber Camp"] && inventory["Lumber Camp"] > 0) {
      inventory["Wood"] = (inventory["Wood"] || 0) + 2 * inventory["Lumber Camp"];
    }

    let freshFishChance = 0.05 + 0.1 * (inventory["Fish Market"] || 0);
    let plumpHareChance = 0.1;
    let hornedTunaChance = 0.04;
    let events = [
      { name: "Colonist", chance: 0.2 },
      { name: "Cache of Books", chance: 0.05 },
      { name: "White Elk", chance: 0.05 },
      { name: "Plump Hare", chance: plumpHareChance },
      { name: "Horned Tuna", chance: hornedTunaChance },
      { name: "Freshwater Cod", chance: freshFishChance },
      { name: "Lemon Tree", chance: 0.05 },
      { name: "Hemlock", chance: 0.1 }
    ];
    let eventMessages = [];

    events.forEach((event) => {
      if (Math.random() < event.chance) {
        inventory[event.name] = (inventory[event.name] || 0) + 1;
        eventMessages.push(`${event.name} has appeared.`);
      }
    });

    if (inventory["Fish Market"] && inventory["Freshwater Cod"] > 0) {
      inventory["Freshwater Cod"]--;
      inventory["Work"] = (inventory["Work"] || 0) + 50;
      eventMessages.push("Fish Market converted 1 Freshwater Cod into 50 Work.");
    }
    if (inventory["Fish Market"] && inventory["Horned Tuna"] > 0) {
      inventory["Horned Tuna"]--;
      inventory["Work"] = (inventory["Work"] || 0) + 50;
      eventMessages.push("Fish Market converted 1 Horned Tuna into 50 Work.");
    }
    if (inventory["Lumber Camp"]) {
      if (inventory["Lemon Tree"] > 0) {
        inventory["Lemon Tree"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        inventory["Food"] = (inventory["Food"] || 0) + 5;
        eventMessages.push("Lumber Camp milled 1 Lemon Tree into 10 Wood and 5 food.");
      }
      if (inventory["Hemlock"] > 0) {
        inventory["Hemlock"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        eventMessages.push("Lumber Camp milled 1 Hemlock into 10 Wood.");
      }
    }

    eventMessages.forEach((msg) => {
      if (msg.includes("has appeared")) {
        logMessage(msg);
      } else {
        logAction(msg);
      }
    });

    updateInventoryDisplay();
  }

  function updateInventoryDisplay() {
    // Insert a special larger heading for COLONIST CORPSE
    inventoryList.innerHTML = '<div id="corpse-title">COLONIST CORPSE</div>';

    const categories = {
      "Store Room": ["Work", "Food", "Wood", "Grave"],
      "Colony": [
        "Colonist",
        "Starving Colonist",
        "Colonist Corpse",
        "Lumber Camp",
        "Monastery",
        "Kelp Farm",
        "Fish Market",
        "Bonfire",
        "Enlightened Colonist Corpse"
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
        if (inventory[item] > 0) {
          const entry = document.createElement("div");
          if (item === "Colonist") {
            entry.textContent = `😐 ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else if (item === "Food") {
            entry.textContent = `🍖 ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else if (item === "Colonist Corpse") {
            entry.textContent = `☠ ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else if (item === "Grave") {
            entry.textContent = `🕀 ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else if (item === "Wood") {
            entry.textContent = `🌲 ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else if (item === "Work") {
            entry.textContent = `⛏ ${item} (${inventory[item]})`;
            entry.classList.add("emoji");
          } else {
            entry.textContent = `${item} (${inventory[item]})`;
          }
          entry.dataset.item = item;
          entry.addEventListener("click", () => handleItemClick(item));
          inventoryList.appendChild(entry);
        }
      });
    });
  }

  function advanceDay() {
    if (inventory["Kelp Farm"] && inventory["Kelp Farm"] > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 1 * inventory["Kelp Farm"];
    }
    feedColonists();
    inventory["Work"] = (inventory["Work"] || 0) + (inventory["Colonist"] || 0);

    for (let i = meditating.length - 1; i >= 0; i--) {
      meditating[i].days++;
      if (meditating[i].days >= 10) {
        meditating.splice(i, 1);
        inventory["Enlightened Colonist Corpse"] =
          (inventory["Enlightened Colonist Corpse"] || 0) + 1;
        logAction(
          "A colonist finished meditating for 10 days and has starved to become an Enlightened Colonist Corpse."
        );
      }
    }

    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById("current-date-display").textContent =
      currentDate.toDateString();
    checkDailyEvents();
  }

  setTimeout(advanceDay, 100);
  setInterval(advanceDay, timeInterval);
  updateInventoryDisplay();
  logAction("Game started.");
});
