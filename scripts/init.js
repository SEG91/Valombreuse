Hooks.on("setup", () => {
	console.log("init:Hooksonsetup");
CONFIG.DND5E.spellSchools.AncienBlood = "Manipulation du Sang Ancien";
CONFIG.DND5E.spellSchools.PuissOurs = "Puissance de l'Ours";
CONFIG.DND5E.spellSchools.ComNat = "Communion avec la Nature";
CONFIG.DND5E.spellSchools.Ombre = "Domaine de l'Ombre";
CONFIG.DND5E.spellSchools.Corrupt = "Domaine de la Corruption";
CONFIG.DND5E.spellSchools.Meute = "Pouvoir de la Meute";
CONFIG.DND5E.spellSchools.Alpha = "Domination de l'Alpha";
});

/*Hooks.on('createActor', async function (actor, options, userID) {
  //check current user is the one that triggered the création
  //(we wouldn't want to add abilities to the actor multiple times)
  console.log("init:Hooksoncreateactor");
  if (userID != game.user.id) { return;}
  console.log(actor.system.resources.primary.label);
  actor.system.resources.primary.label="Sang Ancien";
  console.log(actor.system.resources.primary.label);
});

function DebugDisplay(app, html, data) {
	console.log("DebugDisplay>>");
	console.log(data.system.resources.primary.label);
	console.log("<<DebugDisplay");
};

Hooks.on("renderActorSheet", DebugDisplay);*/

function UpdateActorResourceName(actor, data, options, userId) {
//do my things here
console.trace();
actor.system.resources.primary.label="Sang Ancien";
actor.system.resources.primary.max=(actor.system.abilities.int.value -1)*actor.details.level;
};

Hooks.on('updateActor', UpdateActorResourceName);

//function declaration (same context) the argument are declared in the same order as the original call




