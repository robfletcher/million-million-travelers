import { tableD66 } from './dice';

const gifts = [
  [
    {
  name: 'A Poorly-Preserved Head',
  description: '<p>Skeletal, sardonic. Offers advice.</p>'
},
    {
  name: 'Alien Soul',
  description: '<p>Whispers of the Anunnaki within your mind. Sometimes comprehensible, often not so.</p>'
},
    {
  name: 'Ambrosia Seed',
  description: '<p>Swallow, and all those who behold you for a short while find you irresistably alluring.</p>'
},
    {
  name: 'Black Candle',
  description: '<p>Obsidian-wax candle. Can only be ignited or doused with blood, shines through solid objects. Only lead blocks its light.</p>'
},
    {
  name: 'Black Kudurru',
  description: '<p>Nearly-unreadable fragment of a Word of Creation. Invokes a random word when read aloud.</p>'
},
    {
  name: 'Blank Contract',
  description: '<p>Angelic contract, can be written to make any oath binding. Violating the oath invokes Divine retribution.</p>'
}
  ],
  [
    {
  name: 'Blood Fungus',
  description: '<p>Dessicated mycomorph. A drop of blood will cause it to grow, and grow, and grow.</p>'
},
    {
  name: 'Capnomancy',
  description: '<p>You may consult the spirits through the burning of sacred ashes, usually a fresh corpse. The spirit may be asked questions, but is not compelled to answer truthfully, or at all.</p>'
},
    {
  name: 'Chameleon Cloak',
  description: '<p>Matches the color and pattern of whatever surrounds it.</p>'
},
    {
  name: 'Chitinous Claw',
  description: '<p>A gigantic crab’s pincer. Takes suggestions, but does not obey commands.</p>'
},
    {
  name: 'Corpse Lotus',
  description: '<p>Dried flower that grows in the skulls of ancient dead. Powerful hallucinogen.</p>'
},
    {
  name: 'Corpse Reviver No. 3',
  description: '<p>A potent liquor. Allows for communication with the recently deceased for a very short period of time.</p>'
}
  ],
  [
    {
  name: 'Dehydrated Beast',
  description: '<p>Just add water to cause it to spring to larger-than-life size. It is a (1d6): Gazelle (1), Aurochs (2), Crocodile (3), Boar (4), Lion (5), Hyena (6).</p>'
},
    {
  name: 'Draught of Eld Wine',
  description: '<p>Upon drinking, for one Turn (1d6): A Surge of Strength (1), Speak an Unknowable Tongue (2), Fireballs from your Eyes (3), Shrink to 1/8th Your Size (4), Uncontrollable Melancholy (5), See the Near Future (6).</p>'
},
    {
  name: 'Fertile Soil',
  description: '<p>Any seed planted in this soil will, in a single hour, bloom as if it had been growing for a year.</p>'
},
    {
  name: 'Fool’s Transmute',
  description: 'A thin salve that makes anything it is rubbed take on the sheen and shimmer of gold.</p>'
},
    {
  name: 'Gun-Devil',
  description: '<p>Bound Devil inside a powder-horn. Imbues shot with Hellish energy, but has a bad temper and erodes the confidence of yourself and others.</p>'
},
    {
  name: 'Haruspex',
  description: '<p>You may consult fresh entrails to ask the Chronicler a question. They don’t have to answer truthfully.</p>'
}
  ],
  [
    {
  name: 'Jar of Black Air',
  description: '<p>Swirling black winds within a stoppered jar. Unstopping it sucks out all the air from the room.</p>'
},
    {
  name: 'Jawbone of an Ass',
  description: '<p>Whoever grips it is unable to tell a deliberate falsehood.</p>'
},
    {
  name: 'Joyworm',
  description: '<p>A powerful euphoric hallucinogen. Place within the ear canal.</p>'
},
    {
  name: 'Memetic Blasphemy',
  description: '<p>A thought-virus; if written in blood upon any surface with writing, the blasphemy will obliterate the writing.</p>'
},
    {
  name: 'Nether Key',
  description: '<p>Unlocks anything locked, but permanently destroys the lock.</p>'
},
    {
  name: 'Nightmare Moth',
  description: '<p>A moth tattooed or branded upon your wrist. Touching it will instantly wake you from whatever nightmare plagues you, sorcerous or mundane.</p>'
}
  ],
  [
    {
  name: 'Numeromancy',
  description: '<p>Choose a number between 1-20. When rolling a Save, if you roll exactly your Number, you may re-roll. You must keep the second result.</p>'
},
    {
  name: 'Oneiromancy',
  description: '<p>You are a memetic conduit to the World of Dreams and may, while sleeping, move amidst those shifting mists as an incorporeal whisper. In such a manner you might explore physical spaces undetected, but you must return to your body ere waking or your mind will forever be lost.</p>'
},
    {
  name: 'Sacred Geometry',
  description: '<p>Blessed chalk for drawing hexagrammic wards. Binds immortal beings for as long as the chalk remains.</p>'
},
    {
  name: 'Sandals of the Messenger-God',
  description: '<p>Tireless while worn, but once removed, every inch of the distance crossed is felt all at once.</p>'
},
    {
  name: 'Sandworm Conch',
  description: '<p>Summon a sandworm, if you’re brave.</p>'
},
    {
  name: 'Singing Crystal',
  description: '<p>When struck, hums at a resonant frequency that shatters glass.</p>'
}
  ],
  [
    {
  name: 'Snake Familiar',
  description: '<p>A snake that lives up your sleeve.</p>'
},
    {
  name: 'Sword-That-Is-Not-A-Sword',
  description: '<p>Broken hilt of a broken sword. Can cut through anything bereft of a soul.</p>'
},
    {
  name: 'Vial of Indigo Blood',
  description: '<p>Blood of an ancient dynasty. Glows faintly.</p>'
},
    {
  name: 'Vine Cherry',
  description: '<p>When crushed, a burst of grasping vines emerges from the pit, ensnaring everything within reach.</p>'
},
    {
  name: 'Wish Tonic',
  description: '<p>A sip forces one to reveal their deepest desire.</p>'
},
    {
  name: 'Wyrdspeaking',
  description: '<p>You may appeal to your Patron in times of need. Roll 1d6, spend that much Stamina, and choose an effect:</p><ol><li>Sibilant whispers fill the air, distracting and dismaying.</li><li>Your eyes glow blue. You can see in the dark.</li><li>Your spit is caustic, black ink.</li><li>Time stops for the blink of an eye.</li><li>You can speak and understand the tongue of rats.</li><li>A hideous, grasping tentacle apparates, obeying simple commands.</li></ol>'
}
  ]
]

export const randomGift = () => tableD66(gifts);
