
function start() {

	// https://jsonformatter.curiousconcept.com/
	var jsonData		= {"missionTags":[{"id":"male","displayName":"Male","image":"male.png"},{"id":"female","displayName":"Female","image":"female.png"},{"id":"human","displayName":"Human","image":"human.png"},{"id":"animal","displayName":"Animal","image":"animal.png"},{"id":"robot","displayName":"Robot","image":"robot.png"},{"id":"angel","displayName":"Angel","image":"angel.png"},{"id":"demon","displayName":"Demon","image":"demon.png"},{"id":"leprechaun","displayName":"Leprechaun","image":"leprechaun.png"},{"id":"orc","displayName":"Orc","image":"orc.png"},{"id":"elf","displayName":"Elf","image":"elf.png"},{"id":"dwarf","displayName":"Dwarf","image":"dwarf.png"},{"id":"dragon","displayName":"Dragon","image":"dragon.png"},{"id":"magic","displayName":"Magical","image":"magical.png"},{"id":"supernatural","displayName":"Supernatural","image":"supernatural.png"},{"id":"dps","displayName":"DPS","image":"dps.png"},{"id":"tank","displayName":"Tank","image":"tank.png"},{"id":"healer","displayName":"Healer","image":"healer.png"},{"id":"support","displayName":"Support","image":"support.png"},{"id":"gold","displayName":"Gold Finder","image":"gold.png"},{"id":"royal","displayName":"Royal","image":"royal.png"},{"id":"clicker","displayName":"Clicker","image":"clicker.png"},{"id":"event","displayName":"Event","image":"event.png"},{"id":"alien","displayName":"Alien","image":"alien.png"}],"crusaders":[{"displayName":"The Bush Whacker","image":"mini_Bushwacker.jpg","slot":1,"tags":["clicker","human","male"]},{"displayName":"RoboRabbit","image":"mini_RoboRabbit.jpg","slot":1,"tags":["clicker","event","male","robot","support"]},{"displayName":"Jim the Lumberjack","image":"mini_Jim.jpg","slot":2,"tags":["human","male","dps","support"]},{"displayName":"Pilot Pam","image":"mini_Pam.jpg","slot":2,"tags":["human","female","dps","support","event"]},{"displayName":"Emo Werewolf","image":"mini_Emo.jpg","slot":3,"tags":["animal","male","dps","supernatural"]},{"displayName":"Sally the Succubus","image":"mini_Sally.jpg","slot":3,"tags":["demon","female","dps","supernatural","event"]},{"displayName":"Sasha the Fierce Warrior","image":"mini_Sasha.jpg","slot":4,"tags":["human","female","support"]},{"displayName":"Groklok the Orc","image":"mini_Groklok.jpg","slot":4,"tags":["orc","male","support","dps","tank","event"]},{"displayName":"The Washed Up Hermit","image":"mini_Hermit.jpg","slot":5,"tags":["human","male","dps"]},{"displayName":"Kyle the Party Bro","image":"mini_Kyle.jpg","slot":5,"tags":["human","male","dps","event"]},{"displayName":"Detective Kaine","image":"mini_Kaine.jpg","slot":6,"tags":["human","male","gold"]},{"displayName":"Mister the Monkey","image":"mini_Mister.jpg","slot":6,"tags":["animal","male","gold","event"]},{"displayName":"Larry the Leprechaun","image":"mini_Larry.jpg","slot":6,"tags":["leprechaun","male","gold","magic","support","event"]},{"displayName":"The Princess","image":"mini_Princess.jpg","slot":7,"tags":["female","human","support","royal"]},{"displayName":"RoboTurkey","image":"mini_RoboTurkey.jpg","slot":7,"tags":["male","robot","support","event"]},{"displayName":"Natalie Dragon","image":"mini_Natalie.jpg","slot":8,"tags":["female","human","gold","dps"]},{"displayName":"Jack O'Lantern","image":"mini_Jack.jpg","slot":8,"tags":["male","animal","gold","tank","supernatural","event"]},{"displayName":"Jason, Master of Shadows","image":"mini_Jason.jpg","slot":9,"tags":["male","human","gold","dps"]},{"displayName":"Pete the Carney","image":"mini_Pete.jpg","slot":9,"tags":["male","human","support","gold","event"]},{"displayName":"Broot","image":"mini_Broot.jpg","slot":9,"tags":["male","female","support","gold","tank","supernatural","event"]},{"displayName":"Artaxes, the Lion","image":"mini_Artaxes.jpg","slot":10,"tags":["male","animal","support","supernatural"]},{"displayName":"Drizzle the Dark Elf","image":"mini_Drizzle.jpg","slot":10,"tags":["female","elf","support","event"]},{"displayName":"Khouri, the Witch Doctor","image":"mini_Khouri.jpg","slot":11,"tags":["male","human","magic","healer","support"]},{"displayName":"Momma Kaine","image":"mini_Momma.jpg","slot":11,"tags":["female","human","healer","support","event"]},{"displayName":"Brogon, Prince of Dragons","image":"mini_Brogon.jpg","slot":11,"tags":["male","animal","dragon","healer","support","royal","event"]},{"displayName":"Dark Gryphon","image":"mini_Gryphon.jpg","slot":12,"tags":["female","animal","support","supernatural"]},{"displayName":"Rocky the Rockstar","image":"mini_Rocky.jpg","slot":12,"tags":["male","human","dps","event"]},{"displayName":"Sarah, the Collector","image":"mini_Sarah.jpg","slot":13,"tags":["female","human","dps"]},{"displayName":"The Metal Soldierette","image":"mini_Soldierette.jpg","slot":13,"tags":["female","human","robot","dps","tank","event"]},{"displayName":"Gold Panda","image":"mini_Panda.jpg","slot":14,"tags":["female","animal","gold","supernatural"]},{"displayName":"RoboSanta","image":"mini_RoboSanta.jpg","slot":14,"tags":["male","robot","gold","event"]},{"displayName":"Leerion, the Royal Dwarf","image":"mini_Leerion.jpg","slot":14,"tags":["male","human","dwarf","royal","gold","event"]},{"displayName":"Prince Sal, the Merman","image":"mini_Sal.jpg","slot":15,"tags":["male","animal","dps","royal"]},{"displayName":"Wendy the Witch","image":"mini_Wendy.jpg","slot":15,"tags":["female","human","magic","dps","event"]},{"displayName":"Robbie Raccoon","image":"mini_Robbie.jpg","slot":15,"tags":["male","animal","dps","support","event"]},{"displayName":"Fire Phoenix","image":"mini_Phoenix.jpg","slot":16,"tags":["female","animal","support","supernatural"]},{"displayName":"Alan the ArchAngel","image":"mini_Alan.jpg","slot":16,"tags":["male","angel","support","supernatural","event"]},{"displayName":"King Reginald IV","image":"mini_Reginald.jpg","slot":17,"tags":["male","human","support","royal"]},{"displayName":"Queen Siri","image":"mini_Siri.jpg","slot":17,"tags":["female","human","support","gold","royal","event"]},{"displayName":"Thalia, the Thunder King","image":"mini_Thalia.jpg","slot":18,"tags":["male","human","support","tank","magic","royal"]},{"displayName":"Frosty the Snowman","image":"mini_Frosty.jpg","slot":18,"tags":["male","animal","dps","supernatural","event"]},{"displayName":"Merci, the Mad Wizard","image":"mini_Merci.jpg","slot":19,"tags":["male","human","magic","support"]},{"displayName":"The Bat Billionaire","image":"mini_Bat.jpg","slot":19,"tags":["male","human","support","event"]},{"displayName":"Nate Dragon","image":"mini_Nate.jpg","slot":20,"tags":["male","human","dps","support"]},{"displayName":"Kizlblyp, the Alien Traitor","image":"mini_Kizlblyp.jpg","slot":20,"tags":["alien", "dps", "event", "female", "magic", "support"]}]};
	var pchCrusaders 	= document.getElementById("crusaders_holder");
	var htmlResult		= "";
	
	
	/*
	for (var i = 0; i < jsonData.missionTags.length; i++) {
		htmlResult 		+= "<img src='media/tags/" + jsonData.missionTags[i].image + "' title='" + jsonData.missionTags[i].displayName + "' class='img_tag' />";
	}
	*/

	htmlResult = "<table id='tab'>";
	htmlResult += "<thead>";
	htmlResult += "<tr>";
	htmlResult += "<th>Slot</th>";
	htmlResult += "<th colspan='2'>Crusader</th>";
	htmlResult += "<th>Tags</th>";
	htmlResult += "</tr>";
	htmlResult += "</thead>";
	
	for (var i = 0; i < jsonData.crusaders.length; i++) {
		var crusaderHolder = jsonData.crusaders[i];
		
		htmlResult += "<tr>";
		
		htmlResult += "<td>" + crusaderHolder.slot + "</td>";
		htmlResult += "<td><img src='media/portraits/" + crusaderHolder.image + "' class='img_portrait' /></td>";
		htmlResult += "<td>" + crusaderHolder.displayName + "</td>";

		htmlResult += "<td>"
		for (var j = 0; j < jsonData.missionTags.length; j++) {
			var tagHolder = jsonData.missionTags[j];
			var tagCssClass = (crusaderHolder.tags.indexOf(tagHolder.id) != -1) ? "img_tag" : "img_tag_off";
			
			htmlResult 		+= "<img src='media/tags/" + tagHolder.image + "' title='" + tagHolder.displayName + "' class='" + tagCssClass + "' />";
		}
		htmlResult += "</td>";

		htmlResult += "</tr>";
	}
	
	htmlResult += "</table>";
	
	pchCrusaders.innerHTML = htmlResult;
}






window.onload = start();

