// script.js
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date("2040-01-01");
  let inventory = {};
  // Initial resources remain unchanged
  inventory["Wood"] = 25;
  inventory["Food"] = 20;
  inventory["Colonist"] = 1;

  const timeInterval = 5000; // 5 seconds per day
  const messageLog = document.getElementById("message-log");
  const actionLog = document.getElementById("action-log");
  const inventoryList = document.getElementById("inventory");
  const buildMenu = document.getElementById("build-menu");
  const closeBuildMenu = document.getElementById("close-build-menu");
  // Removed Job Placement Centre element.
  const buildLumberCamp = document.getElementById("build-lumber-camp");
  const buildFishMarket = document.getElementById("build-fish-market");
  const buildHuntingLodge = document.getElementById("build-hunting-lodge");
  const buildBonfire = document.getElementById("build-bonfire"); // New element for Bonfire
  const buildKelpFarm = document.getElementById("build-kelp-farm"); // New element for Kelp Farm

  // Initialize the modal with the starting date
  document.getElementById("current-date-display").textContent = currentDate.toDateString();

  // Helper function to format the date as dd/mm/yyyy
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
      if (inventory["Dead Tree"] > 0) {
        inventory["Dead Tree"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        logAction("Lumber Camp milled 1 Dead Tree into 10 Wood.");
      } else if (inventory["Evergreen"] > 0) {
        inventory["Evergreen"]--;
        // FIX: Using correct property "Wood"
        inventory["Wood"] = (inventory["Wood"] || 0) + 30;
        logAction("Lumber Camp milled 1 Evergreen into 10 Wood.");
      } else {
        logAction("No trees available to mill at the Lumber Camp.");
      }
      updateInventoryDisplay();
    } else if (item === "Hunting Lodge") {
      // We let processHunting handle daily processing.
      logAction("The Hunting Lodge works automatically each day.");
    } else if (item === "Bonfire") {
      // When the player clicks on the Bonfire, consume 1 Colonist Corpse and produce 1 Grave.
      if (inventory["Colonist Corpse"] > 0) {
        inventory["Colonist Corpse"]--;
        inventory["Grave"] = (inventory["Grave"] || 0) + 1;
        logAction("The bonfire consumes a body, converting it into a Grave.");
        updateInventoryDisplay();
      } else {
        logAction("There is no Colonist Corpse to burn.");
      }
    } else {
      convertItem(item);
    }
  }

  // Updated feedColonists function:
  // Old starving colonists require 2 Food each; when fed, they convert to normal Colonists.
  // Normal Colonists need 1 Food each; if unfed, they become starving.
  function feedColonists() {
    let foodAvailable = inventory["Food"] || 0;

    // Process old starving colonists (they need 2 Food each)
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

    // Process normal Colonists (they need 1 Food each)
    let normalColonists = inventory["Colonist"] || 0;
    let newStarving = 0;
    if (normalColonists > 0) {
      if (foodAvailable >= normalColonists) {
        foodAvailable -= normalColonists;
        // Message removed for normal feeding.
      } else {
        let fedNormal = foodAvailable;
        let unfedNormal = normalColonists - fedNormal;
        foodAvailable = 0;
        inventory["Colonist"] = fedNormal;
        newStarving = unfedNormal;
        logAction(`${unfedNormal} Colonists are now starving, sadly.`);
      }
    }

    // Add new starving colonists (from today’s shortage)
    inventory["Starving Colonist"] = (inventory["Starving Colonist"] || 0) + newStarving;

    // Update remaining Food in inventory
    inventory["Food"] = foodAvailable;
  }

  function closeBuildMenuFunction() {
    buildMenu.style.display = "none";
  }

  // Updated processHunting function:
  // The Hunting Lodge converts 1 unit of either White Elk or Plump Hare into 10 Food per turn.
  function processHunting() {
    if (inventory["Plump Hare"] > 0) {
      inventory["Plump Hare"]--;
      inventory["Food"] = (inventory["Food"] || 0) + 10;
      logAction("Hunting Lodge processed 1 Plump Hare into 10 Food.");
    } else if (inventory["White Elk"] > 0) {
      inventory["White Elk"]--;
      inventory["Food"] = (inventory["Food"] || 0) + 10;
      logAction("Hunting Lodge processed 1 White Elk into 10 Food.");
    }
    updateInventoryDisplay();
  }

  // For items with a single resource cost.
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

  // Conversion dictionary updated: "Cache of Books" (formerly Merchant) now converts to Work.
  function convertItem(item) {
    let conversion = {
      "Freshwater Cod": 10,
      "Plump Hare": 5,
      "White Elk": 15,
      "Cache of Books": 25,
      "Dead Tree": 10,
      "Evergreen": 50
    };

    if (conversion[item]) {
      let newItem;
      if (item === "Cache of Books") {
        newItem = "Work";
      } else if (item === "Dead Tree" || item === "Evergreen") {
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

  // Lumber Camp now costs 10 Wood and 50 Work.
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
    buildItem("Fish Market", "Wood", 150);
  });

  // Hunting Lodge now costs 20 Wood and 100 Work.
  buildHuntingLodge.addEventListener("click", function () {
    if ((inventory["Wood"] || 0) >= 20 && (inventory["Work"] || 0) >= 100) {
      inventory["Wood"] -= 20;
      inventory["Work"] -= 100;
      inventory["Hunting Lodge"] = (inventory["Hunting Lodge"] || 0) + 1;
      logAction("Hunting Lodge added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Wood or Work to build Hunting Lodge.");
    }
  });

  // Bonfire now costs 25 Wood and 5 Work to build.
  buildBonfire.addEventListener("click", function () {
    if ((inventory["Wood"] || 0) >= 25 && (inventory["Work"] || 0) >= 5) {
      inventory["Wood"] -= 25;
      inventory["Work"] -= 5;
      // We assume only one Bonfire is allowed.
      inventory["Bonfire"] = 1;
      logAction("Bonfire added to inventory.");
      updateInventoryDisplay();
      closeBuildMenuFunction();
    } else {
      logAction("Not enough Wood or Work to build Bonfire.");
    }
  });

  // Kelp Farm costs 50 Work, 20 Wood, and 10 Food.
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

  function checkDailyEvents() {
    // Process Bonfire consumption at the start of every day.
    if (inventory["Bonfire"] > 0) {
      if ((inventory["Wood"] || 0) >= 5) {
        inventory["Wood"] -= 5;
      } else {
        inventory["Bonfire"] = 0;
        logAction("We have run out of wood and the bonfire has gone out. Oh, bother.");
      }
    }

    if (inventory["Lumber Camp"] && inventory["Lumber Camp"] > 0) {
      inventory["Wood"] = (inventory["Wood"] || 0) + 2 * inventory["Lumber Camp"];
    }

    // Process Hunting Lodge production: each Hunting Lodge converts 1 Plump Hare or White Elk into 10 Food per turn.
    if (inventory["Hunting Lodge"] && inventory["Hunting Lodge"] > 0) {
      for (let i = 0; i < inventory["Hunting Lodge"]; i++) {
        processHunting();
      }
    }

    let plumpHareChance = 0.1 + 0.1 * (inventory["Hunting Lodge"] || 0);
    let freshFishChance = 0.05 + 0.1 * (inventory["Fish Market"] || 0);
    let events = [
      { name: "Colonist", chance: 0.2 },
      { name: "Cache of Books", chance: 0.05 },
      { name: "White Elk", chance: 0.05 },
      { name: "Plump Hare", chance: plumpHareChance },
      { name: "Freshwater Cod", chance: freshFishChance },
      { name: "Dead Tree", chance: 0.05 },
      { name: "Evergreen", chance: 0.1 }
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

    if (inventory["Lumber Camp"]) {
      let treesProcessed = 0;
      if (inventory["Dead Tree"] > 0) {
        inventory["Dead Tree"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        eventMessages.push("Lumber Camp milled 1 Dead Tree into 10 Wood.");
        treesProcessed++;
      }
      if (inventory["Evergreen"] > 0) {
        inventory["Evergreen"]--;
        inventory["Wood"] = (inventory["Wood"] || 0) + 10;
        eventMessages.push("Lumber Camp milled 1 Evergreen into 10 Wood.");
        treesProcessed++;
      }
    }

    eventMessages.forEach((msg) => logMessage(msg));
    updateInventoryDisplay();
  }

  // Updated inventory display function.
  function updateInventoryDisplay() {
    inventoryList.innerHTML = "COLONIST CORPSE";
    const categories = {
      "Store Room": ["Work", "Food", "Wood"],
      "Colony": ["Colonist", "Starving Colonist", "Colonist Corpse", "Grave", "Lumber Camp", "Hunting Lodge", "Fish Market", "Bonfire", "Kelp Farm"],
      "The Wilds": ["Evergreen", "Dead Tree", "Cache of Books", "Freshwater Cod", "White Elk", "Plump Hare"]
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
          entry.textContent = `${item} (${inventory[item]})`;
          entry.dataset.item = item;
          entry.addEventListener("click", () => handleItemClick(item));
          inventoryList.appendChild(entry);
        }
      });
    });
  }

  // This function advances the day:
  // First, Kelp Farms produce 1 Food per farm.
  // Then, colonists are fed.
  // Then, each Colonist produces 1 Work.
  // Finally, the date advances and daily events are processed.
  function advanceDay() {
    // Kelp Farm production at the very start of the day.
    if (inventory["Kelp Farm"] && inventory["Kelp Farm"] > 0) {
      inventory["Food"] = (inventory["Food"] || 0) + 1 * inventory["Kelp Farm"];
    }
    feedColonists();
    // Each Colonist produces 1 Work.
    inventory["Work"] = (inventory["Work"] || 0) + (inventory["Colonist"] || 0);
    currentDate.setDate(currentDate.getDate() + 1);
    document.getElementById("current-date-display").textContent = currentDate.toDateString();
    checkDailyEvents();
  }

  setTimeout(advanceDay, 100); // Prevents double execution on load.
  setInterval(advanceDay, timeInterval);
});
