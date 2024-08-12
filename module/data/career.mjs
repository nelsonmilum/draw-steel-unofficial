import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelCareer extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Skills - Parse list

    // Project Points OR Renown - number

    // Career Title - text

    // Inciting Incident - block text
  
    return schema;
  }

  prepareDerivedData() {
  }
}

// ARTISAN {CRIMINAL/GLADIATOR/LABOURER/MAGE'S APPRENTICE/PERFORMER/SAGE/SOLDIER}
// You started off making and selling art or useful wares. In
// defining your career, think about the following 
// questions:
// •  What did you create?
// •  Who taught you your craft?
// •  Was there any particular creation you were known for?
// •  Did you have a shop, or did you travel to sell your
//    wares?

// You gain the following career benefits:
// •  Skills: Two skills from the crafting skill group
// •  Languages: One language
// •  Project Points: 100 (could be renown also)
// •  Title—Expert Artisan: Whenever you make a test as
//    part of a research or crafting project that uses a skill you
//    have from the crafting skill group, you can roll the test
//    twice and use either roll.