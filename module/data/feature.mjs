import DrawSteelItemBase from "./item-base.mjs";

export default class DrawSteelFeature extends DrawSteelItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Features == Abilities (not ability scores.)
    // Resource Cost
    // Keywords {
    //  Area, Attack, Magic, Melee, Psionic, Ranged, Resistance, Weapon
    // }
    // Type 
    //  {Action, Maneuver, Triggered Action, Free Maneuver, Free 
    //  Triggered Action, Non-Combat}, 
    //  {Trigger}
    // Distance {
    //  Melee, 
    //  Ranged, 
    //  Melee or Ranged
    //  Area {
    //    Aura, Burst, Cube, Line, Wall, Special
    //  }
    // }
    // Target {Creature, Object, Enemy, Ally, Self, All}
    // Power Roll{
    //   Tier 1 (11 or lower)
    //   Tier 2 (12–16)
    //   Tier 3 (17 or more)
    // }
    // More to come... this is a big one.
  
    return schema;
  }

  prepareDerivedData() {
  }
}