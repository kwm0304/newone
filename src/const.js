const skills = [
    {name: "Acrobatics", value: "Acrobatics", modifiers: "(Dex)"},
    {name: "AnimalHandling", value: "Animal Handling", modifiers: "(Wis)"},
    {name: "Arcana", value: "Arcana", modifiers: "(Int)"},
    {name: "Athletics", value: "Athletics", modifiers: "(Str)"},
    {name: "Deception", value: "Deception", modifiers: "(Cha)"},
    {name: "History", value: "History", modifiers: "(Int)"},
    {name: "Insight", value: "Insight", modifiers: "(Wis)"},
    {name: "Intimidation", value: "Intimidation", modifiers: "(Cha)"},
    {name: "Investigation", value: "Investigation", modifiers: "(Wis)"},
    {name: "Medicine", value: "Medicine", modifiers: "(Wis)"},
    {name: "Nature", value: "Nature", modifiers: "(Int)"},
    {name: "Perception", value: "Perception", modifiers: "(Wis)"},
    {name: "Performance", value: "Performance", modifiers: "(Cha)"},
    {name: "Persuasion", value: "Persuasion", modifiers: "(Cha)"},
    {name: "Religion", value: "Religion", modifiers: "(Int)"},
    {name: "Slight of Hand", value: "SlightOfHand", modifiers: "(Dex)"},
    {name: "Stealth", value: "Stealth", modifiers: "(Dex)"},
    {name: "Survival", value: "Survival", modifiers: "(Wis)"},
];

const classes = [
    {
        name: "Barbarian",
        description:"A fierce warrior of primitive background who can enter a battle rage.",
        hitDie: "d12",
        primaryAbility: "Strength",
        savingThrows: ["Strength", "Constitution"],
        armorAndWeaponProf: "Light and medium armor, shields, simple and martial weapons.",
        features: ["Rage", "Unarmored Defense"],
        proficiencyBonus: +2,
        rages: 2,
        rageDamage: +2,
        skills: 2,
        skillsArray: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        tools: null,
        equipment: [{"greataxe" : "martial melee weapon"}]
     },
    {
        name: "Bard",
        description:"An inspiring magician whose power echoes the music of creation.",
        hitDie: "d8",
        primaryAbility: "Charisma",
        savingThrows: ["Dexterity", "Charisma"],
        armorAndWeaponProf: "Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords.",
        features: ["Spellcasting", "Bardic Inspiration(d6)"],
        proficiencyBonus: +2,
        cantripsKnown: 2,
        spellsKnown: 4,
        skills: 3,
        skillsArray: [...skills],
        tools: ["Musical Instrument", "Musical Instrument", "Musical Instrument"],
        equipment: {
            first: ["rapier", "longsword", "simple weapon"],
            second: ["diplomat's pack", "entertainer's pack"],
            third: ["lute", "musical instrument"],
            fourth: "Leather armor and dagger"
        }
     },
    {
        name: "Cleric",
        description:"A priestly champion who wields divine magic in service of a higher power.",
        hitDie: "d8",
        primaryAbility: "Wisdom",
        savingThrows: ["Wisdom", "Charisma"],
        armorAndWeaponProf: "Light and medium armor, shields, simple weapons.",
        features: ["Spellcasting", "Divine Domain"],
        proficiencyBonus: +2,
        cantripsKnown: 3,
        skills: 2,
        skillsArray: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        tools: null,
        equipment: {
            first: ["mace", "warhammer"],
            second: ["scale mail", "leather armor", "chain mail"],
            third: ["light crossbow and 20 bolts", "simple weapon"],
            fourth: ["priest's pack", "explorer's pack"],
            fifth: "shield and a holy symbol"
        }
     },
    {
        name: "Druid",
        description:"A priest of the Old Faith, wielding the powers of nature - moonlight and plant growth, fire and lightning - and adopting animal forms.",
        hitDie: "d8",
        primaryAbility: "Wisdom",
        savingThrows: ["Intelligence", "Wisdom"],
        armorAndWeaponProf: "Light and medium armor(nonmetal), shields(nonmetal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears.",
        features: ["Druidic", "Spellcasting"],
        proficiencyBonus: +2,
        cantripsKnown: 2,
        skills: 2,
        skillsArray: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        tools: "Herbalism kit",
        equipment: {
            first: ["wooden shield", "simple weapon"],
            second: ["scimitar", "simple melee weapon"],
            third: "leather armor, explorer's pack, druidic focus"
        }
     },
    {
        name: "Fighter",
        description:"A master of martial combat, skilled with a variety of weapons and armor.",
        hitDie: "d10",
        primaryAbility: ["Strength" || "Dexterity"],
        savingThrows: ["Strength", "Constitution"],
        armorAndWeaponProf: "All armor, shields, simple and martial weapons.",
        features: ["Fighting Style", "Second Wind"],
        proficiencyBonus: +2,
        skills: 2,
        skillsArray: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        tools: null,
        equipment: {
            first: ["chain mail", "leather armor, longbow, 20 arrows"],
            second: ["martial weapon and a shield", "two martial weapons"],
            third: ["light crossbow and 20 bolts", "two handaxes"],
            fourth: ["dungeoneer's pack", "explorer's pack"]
        }
     },
    {
        name: "Monk",
        description:"A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
        hitDie: "d8",
        primaryAbility: ["Dexterity", "Wisdom"],
        savingThrows: ["Strength", "Dexterity"],
        armorAndWeaponProf: "Simple weapons, shortswords.",
        features: ["Unarmored Defense", "Martial Arts"],
        proficiencyBonus: +2,
        martialArts: "1d4",
        kiPoints: 0,
        unarmoredMovement: 0,
        skills: 2,
        skillsArray: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        tools: ["Artisan tool" || "Musical Instrument"],
        equipment: {
            first: ["shortsword", "simple weapon"],
            second: ["dungeoneer's pack", "explorer's pack"],
            third: "10 darts"
        }
     },
    {
        name: "Paladin",
        description:"A holy warrior bound to a sacred oath.",
        hitDie: "d10",
        primaryAbility: ["Strength", "Charisma"],
        savingThrows: ["Wisdom", "Charisma"],
        armorAndWeaponProf: "All armor, shields, simple and martial weapons.",
        features: ["Divine Sense", "Lay on Hands"],
        proficiencyBonus: +2,
        skills: 2,
        skillsArray: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        tools: null,
        equipment: {
            first: ["martial weapon and shield", "two martial weapons"],
            second: ["five javelins", "simple melee weapon"],
            third: ["priest's pack", "explorer's pack"],
            fourth: "chain mail and a holy symbol"
        }

     },
    {
        name: "Ranger",
        description:"A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.",
        hitDie: "d10",
        primaryAbility: ["Dexterity", "Wisdom"],
        savingThrows: ["Strength", "Dexterity"],
        armorAndWeaponProf: "Light and medium armor, shields, simple and martial weapons.",
        features: ["Favored Enemy", "Natural Explorer"],
        spellsKnown: 0,
        proficiencyBonus: +2,
        skills: 3,
        skillsArray: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        tools: null,
        equipment: {
            first: ["scale mail", "leather armor"],
            second: ["two shortswords", "two simple melee weapons"],
            third: ["dungeoneer's pack", "explorer's pack"],
            fourth: "longbow and quiver of 20 arrows"
        }
     },
    {
        name: "Rogue",
        description:"A scoundrel who uses stealth and trickery to overcome obstacles and enemies.",
        hitDie: "d8",
        primaryAbility: "Dexterity",
        savingThrows: ["Dexterity", "Intelligence"],
        armorAndWeaponProf: "Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords.",
        features: ["Expertise", "Sneak Attack", "Thieves' Cant"],
        proficiencyBonus: +2,
        sneakAttack: "1d6"
     },
    {
        name: "Sorcerer",
        description:"A spellcaster who draws on inherit magic from a gift or bloodline.",
        hitDie: "d6",
        primaryAbility: "Charisma",
        savingThrows: ["Constitution", "Charisma"],
        armorAndWeaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows."
     },
    {
        name: "Warlock",
        description:"A wielder of magic that is derived from a bargain with an extraplanar entity.",
        hitDie: "d8",
        primaryAbility: "Charisma",
        savingThrows: ["Wisdom", "Charisma"],
        armorAndWeaponProf: "Light aarmor, simple weapons."
     },
    {
        name: "Wizard",
        description:"A scholarly magic-user capable of manipulating the structures of reality.",
        hitDie: "d6",
        primaryAbility: "Intelligence",
        savingThrows: ["Intelligence", "Wisdom"],
        armorAndWeaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows."
     },
]

const backgrounds = [
    {
        name: "Acolyte",
        proficiencies: ["Insight", "Religion"],
        toolsAndLanguages: ["Language", "Language"],
        feature: "Shelter of the Faithful"
    },
    {
        name: "Charletan",
        proficiencies: ["Deception", "Sleight-of-Hand"],
        toolsAndLanguages: ["Disguise kit", "Forgery kit"],
        feature: "False Identity"
    },
    {
        name: "Criminal",
        proficiencies: ["Deception", "Stealth"],
        toolsAndLanguages: ["Gaming set", "Thieves' tools"],
        feature: "Criminal Contact"
    },
    {
        name: "Entertainer",
        proficiencies: ["Acrobatics", "Performance"],
        toolsAndLanguages: ["Disguise kit", "Musical instrument"],
        feature: "By Popular Demand"
    },
    {
        name: "Folk Hero",
        proficiencies: ["Animal Handling", "Survival"],
        toolsAndLanguages: ["Artisan's tools", "Vehicles(land)"],
        feature: "Rustic Hospitality"
    },
    {
        name: "Gladiator",
        proficiencies: ["Acrobatics", "Performance"],
        toolsAndLanguages: ["Disguise kit", "Musical instrument"],
        feature: "By Popular Demand"
    },
    {
        name: "Guild Artisan",
        proficiencies: ["Insight", "Persuasion"],
        toolsAndLanguages: ["Artisan's tools", "Language"],
        feature: "Guild Membership"
    },
    {
        name: "Guild Merchant",
        proficiencies: ["Insight", "Persuasion"],
        toolsAndLanguages: ["Navigator's tools", "Language"],
        feature: "Guild Membership"
    },
    {
        name: "Hermit",
        proficiencies: ["Medicine", "Religion"],
        toolsAndLanguages: ["Herbalism kit", "Language"],
        feature: "Discovery"
    },
    {
        name: "Knight",
        proficiencies: ["History", "Persuasion"],
        toolsAndLanguages: ["Gaming set", "Language"],
        feature: "Retainers"
    },
    {
        name: "Noble",
        proficiencies: ["History", "Persuasion"],
        toolsAndLanguages: ["Gaming set", "Language"],
        feature: "Position of Privelege"
    },
    {
        name: "Outlander",
        proficiencies: ["Athletics", "Survival"],
        toolsAndLanguages: ["Musical instrument", "Language"],
        feature: "Wanderer"
    },
    {
        name: "Pirate",
        proficiencies: ["Athletics", "Perception"],
        toolsAndLanguages: ["Navigator's tools", "Vehicles(water)"],
        feature: "Bad Reputation"
    },
    {
        name: "Sage",
        proficiencies: ["Arcana", "History"],
        toolsAndLanguages: ["Language", "Language"],
        feature: "Shelter of the Faithful"
    },
    {
        name: "Sailor",
        proficiencies: ["Athletics", "Perception"],
        toolsAndLanguages: ["Navigator's tools", "Vehicles(water)"],
        feature: "Ship's Passage"
    },
    {
        name: "Soldier",
        proficiencies: ["Athletics", "Intimidation"],
        toolsAndLanguages: ["Gaming set", "Vehicles(land)"],
        feature: "Military Rank"
    },
    {
        name: "Spy",
        proficiencies: ["Deception", "Stealth"],
        toolsAndLanguages: ["Gaming set", "Thieves' tools"],
        feature: "Criminal Contact"
    },
    {
        name: "Urchin",
        proficiencies: ["Sleight-of-Hand", "Stealth"],
        toolsAndLanguages: ["Disguise kit", "Thieves' tools"],
        feature: "City Secrets"
    }
];

const factions = [
    {
        name: "The Lords Alliance",
        description: "The Lords' Alliance is a political and economic coalition of cities spread throughout the North and the Sword Coast. The alliance owes its success to effective cooperation and diplomacy between its members, who work to align their separate settlements toward a mutual purpose. This cooperation is easier during times of crisis, making the Lords' Alliance a powerful force when threats require a united front.",
    },
    {
        name: "The Harpers",
        description: "Members of this clandestine network of spellcasters and spies pride themselves on being incorruptible defenders of the greater good and champions of the oppressed. The organization is benevolent, knowledgeable, and secretive.",
    },
    {
        name: "The Order of the Gauntlet",
        description: "The Order of the Gauntlet is a dedicated, tightly knit group of holy-minded crusaders driven by a finely honed sense of duty and honor. They seek to uphold justice as best they can, and to continually test their mettle against the forces of evil.",
    },
    {
        name: "The Emerald Enclave",
        description: "The reach of the Emerald Enclave stretches far and wide across Faerun. Living deep in the wilderness demands great fortitude and the mastery of certain fighting and survival skills. The enclave is charged with defending sacred groves, protecting endangered beasts that cannot fend for themselves, and preserving the natural balance.",
    },
    {
        name: "The Zhentarim",
        description: "Members of the shadowy Black Network consider themselves part of an extended family, and rely on the larger organization for resources and security. Zhentarim bonds of oath and honor hold the network together and galvanize its members in united purpose. When a merchant caravan needs an escort, a noble needs bodyguards, or a city needs trained soldiers, the Zhentarim provides the best-trained fighting forces money can buy.",
    }
]