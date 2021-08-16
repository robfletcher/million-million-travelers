import { tableD66 } from './dice';

const gifts = [
  [
    'A Poorly-Preserved Head: Skeletal, sardonic. Offers advice.',
    'Alien Soul: Whispers of the Anunnaki within your mind. Sometimes comprehensible, often not so.',
    'Ambrosia Seed: Swallow, and all those who behold you for a short while find you irresistably alluring.',
    'Black Candle: Obsidian-wax candle. Can only be ignited or doused with blood, shines through solid objects. Only lead blocks its light.',
    'Black Kudurru: Nearly-unreadable fragment of a Word of Creation. Invokes a random word when read aloud.',
    'Blank Contract: Angelic contract, can be written to make any oath binding. Violating the oath invokes Divine retribution.'
  ],
  [
    'Blood Fungus: Dessicated mycomorph. A drop of blood will cause it to grow, and grow, and grow.',
    'Capnomancy: You may consult the spirits through the burning of sacred ashes, usually a fresh corpse. The spirit may be asked questions, but is not compelled to answer truthfully, or at all.',
    'Chameleon Cloak: Matches the color and pattern of whatever surrounds it.',
    'Chitinous Claw: A gigantic crab’s pincer. Takes suggestions, but does not obey commands.',
    'Corpse Lotus: Dried flower that grows in the skulls of ancient dead. Powerful hallucinogen.',
    'Corpse Reviver No. 3: A potent liquor. Allows for communication with the recently deceased for a very short period of time.'
  ],
  [
    'Dehydrated Beast: Just add water to cause it to spring to larger-than-life size. It is a (1d6): Gazelle (1), Aurochs (2), Crocodile (3), Boar (4), Lion (5), Hyena (6).',
    'Draught of Eld Wine: Upon drinking, for one Turn (1d6): A Surge of Strength (1), Speak an Unknowable Tongue (2), Fireballs from your Eyes (3), Shrink to 1/8th Your Size (4), Uncontrollable Melancholy (5), See the Near Future (6).',
    'Fertile Soil: Any seed planted in this soil will, in a single hour, bloom as if it had been growing for a year.',
    'Fool’s Transmute: A thin salve that makes anything it is rubbed take on the sheen and shimmer of gold.',
    'Gun-Devil: Bound Devil inside a powder-horn. Imbues shot with Hellish energy, but has a bad temper and erodes the confidence of yourself and others.',
    'Haruspex: You may consult fresh entrails to ask the Chronicler a question. They don’t have to answer truthfully.'
  ],
  [
    'Jar of Black Air: Swirling black winds within a stoppered jar. Unstopping it sucks out all the air from the room.',
    'Jawbone of an Ass: Whoever grips it is unable to tell a deliberate falsehood.',
    'Joyworm: A powerful euphoric hallucinogen. Place within the ear canal.',
    'Memetic Blasphemy: A thought-virus; if written in blood upon any surface with writing, the blasphemy will obliterate the writing.',
    'Nether Key: Unlocks anything locked, but permanently destroys the lock.',
    'Nightmare Moth: A moth tattooed or branded upon your wrist. Touching it will instantly wake you from whatever nightmare plagues you, sorcerous or mundane.'
  ],
  [
    'Numeromancy: Choose a number between 1-20. When rolling a Save, if you roll exactly your Number, you may re-roll. You must keep the second result.',
    'Oneiromancy: You are a memetic conduit to the World of Dreams and may, while sleeping, move amidst those shifting mists as an incorporeal whisper. In such a manner you might explore physical spaces undetected, but you must return to your body ere waking or your mind will forever be lost.',
    'Sacred Geometry: Blessed chalk for drawing hexagrammic wards. Binds immortal beings for as long as the chalk remains.',
    'Sandals of the Messenger-God: Tireless while worn, but once removed, every inch of the distance crossed is felt all at once.',
    'Sandworm Conch: Summon a sandworm, if you’re brave.',
    'Singing Crystal: When struck, hums at a resonant frequency that shatters glass.'
  ],
  [
    'Snake Familiar: A snake that lives up your sleeve.',
    'Sword-That-Is-Not-A-Sword: Broken hilt of a broken sword. Can cut through anything bereft of a soul.',
    'Vial of Indigo Blood: Blood of an ancient dynasty. Glows faintly.',
    'Vine Cherry: When crushed, a burst of grasping vines emerges from the pit, ensnaring everything within reach.',
    'Wish Tonic: A sip forces one to reveal their deepest desire.',
    'Wyrdspeaking: You may appeal to your Patron in times of need. Roll 1d6, spend that much Stamina, and choose an effect:<ol><li>Sibilant whispers fill the air, distracting and dismaying.</li><li>Your eyes glow blue. You can see in the dark.</li><li>Your spit is caustic, black ink.</li><li>Time stops for the blink of an eye.</li><li>You can speak and understand the tongue of rats.</li><li>A hideous, grasping tentacle apparates, obeying simple commands.</li></ol>'
  ]
]

export const randomGift = () => tableD66(gifts);