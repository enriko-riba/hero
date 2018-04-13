export interface Item {
    id: number;
    desc: string;
    dmg?: number;
    arm?: number;
}

export const items =
[ 
    {"id": 10000, "desc":"HEAD START*************************"},
    {
        "id": 10001,
        "desc":"Cape",
        "dmg": 0,
        "arm": 1
    },

    {"id": 11000, "desc":"NECK START*************************"},
    {
        "id": 11001,
        "desc":"Wooden amulet",
        "dmg": 1,
        "arm": 1
    },

    {"id": 12000, "desc":"BODY START*************************"},
    {
        "id": 12001,
        "desc":"Rugged tunic",
        "dmg": 0,
        "arm": 1
    },

    {"id": 13000, "desc":"HAND START*************************"},
    {
        "id": 13001,
        "desc":"Wooden sword",
        "dmg": 2,
        "arm": 0
    },

    {"id": 14000, "desc":"RING START*************************"},
    {
        "id": 14001,
        "desc":"Small ring",
        "dmg": 0,
        "arm": 1
    },

    {"id": 15000, "desc":"LEG START*************************"},
    {
        "id": 15001,
        "desc":"Cloth leggings",
        "dmg": 0,
        "arm": 1
    },

    {"id": 16000, "desc":"BOOT START*************************"},
    {
        "id": 16001,
        "desc":"Rugged boots",
        "dmg": 0,
        "arm": 1
    }
];