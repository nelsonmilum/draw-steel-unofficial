import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelClass extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Starting Characteristics - Mod Ability Scores

    // Starting Stamina & progression

    // Recoveries - Additional to base.

    // Skills - No overlap with career please.

    // Level Progression chart?? Level/Features/Abilities
  
    return schema;
  }

  prepareDerivedData() {
  }
}