import { tableD66 } from "./dice";

const complications = [
  [
    'Compulsion: Dominance',
    'Compulsion: Gambling',
    'Compulsion: Intoxicants',
    'Compulsion: Sorcery',
    'Compulsion: Theft',
    'Compulsion: Thrill-Seeking'
  ],
  [
    'Debt: Dead God',
    'Debt: Hedonist Noble',
    'Debt: Merchant-Prince',
    'Debt: Underworld Kingpin',
    'Debt: Voice in the Flames',
    'Debt: Warlord'
  ],
  [
    'Duty: Ancient Order',
    'Duty: Bound by Geas',
    'Duty: Family Ties',
    'Duty: Outlaw Band',
    'Duty: Secret Society',
    'Duty: Swore an Oath'
  ],
  [
    'Enemy: Apocalyptic Cult',
    'Enemy: Former Master',
    'Enemy: Spurned Ex-Lover',
    'Enemy: Thing From Beyond',
    'Enemy: Vengeful Satrap',
    'Enemy: Wasteland Warlord'
  ],
  [
    'Hunted: Amoral Sorcerer',
    'Hunted: Extraplanar Entity',
    'Hunted: Guild Debt-Collectors',
    'Hunted: Relentless Force',
    'Hunted: Vile Cult',
    'Hunted: Your Rival'
  ],
  [
    'Secret: Ancient Relic',
    'Secret: Buried Treasure',
    'Secret: Dark Bargain',
    'Secret: Deadly Prophecy',
    'Secret: Murder Most Foul',
    'Secret: Secret Identity'
  ],
];

export const randomComplication = () => tableD66(complications);
