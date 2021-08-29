import { roll1d2, roll1d3, roll3d6, roll3d6dropLowest, table1D6, table2D6, tableD20, tableD66 } from './dice';
import { backgrounds } from './backgrounds';
import { vocations } from './vocations';
import { randomArmor } from './armor';
import { randomWeapons } from './weapons';
import { randomItems } from './belongings';
import { randomGift } from './gifts';
import { randomComplication } from './complications';
import { randomWords } from './words';
import { randomArchetype } from './archetypes';

export class Traveler {
  constructor() {
    this.background = tableD20(backgrounds);
    this.name = '';
    this.description = [];
    this.attributes = {
      silver: roll3d6dropLowest(),
      salt: roll3d6dropLowest(),
      iron: roll3d6dropLowest()
    };
    this.archetype = randomArchetype();
    this.level = 1;
    this.xp = 0;
    this.will = 0;
    this.stamina = 0;
    this.vocations = [tableD66(vocations)];
    this.blackGlass = roll3d6() + 10;
    this.inventory = {
      slots: 10,
      gearBubbles: 5,
      weapons: [],
      armor: [randomArmor()],
      belongings: randomItems(3),
      gift: randomGift()
    };
    this.extra = table1D6(this.#extras)();
    this.complication = randomComplication();
    this.words = [];

    this.applyBackground(this.background);
    this.applyArchetype(this.archetype);
  };

  #extras = [
    () => { 
      const add = roll1d3();
      this.attributes.silver += add;
      return '+1d3 (' + add + ') Silver.';
    },
    () => { 
      const add = roll1d3();
      this.attributes.salt += add;
      return '+1d3 (' + add + ') Salt.';
    },
    () => { 
      const add = roll1d3();
      this.attributes.iron += add;
      return '+1d3 (' + add + ') Iron.';
    },
    () => {
      this.inventory.slots += 2;
      return '+2 inventory slots.';
    },
    () => {
      this.inventory.gearBubbles += 1;
      return '+1 Gear Bubble.';
    },
    () => {
      this.vocations.push(tableD66(vocations));
      return 'Gain another vocation.';
    }
  ];

  applyArchetype = () => {
    this.will = this.archetype.will;
    this.stamina = this.archetype.stamina;
    this.inventory.weapons = randomWeapons(this.archetype.weapons);
    this.words = randomWords(this.archetype.words);
  };

  applyBackground = () => {
    this.name = table2D6(this.background.names);
    this.description = [];
    this.background.tables.forEach(table => {
      this.description.push({ title: table.title, value: table2D6(table.table) });
    });
    this.description = this.description;
  };

  usedSlots = () => {
    const mapper = (it) => it.slots
    const reducer = (a, b) => a + b;
    return this.inventory.weapons.map(mapper).reduce(reducer) 
         + this.inventory.armor.map(mapper).reduce(reducer) 
         + this.inventory.belongings.map(mapper).reduce(reducer)
         + this.words.length;
  }
}
