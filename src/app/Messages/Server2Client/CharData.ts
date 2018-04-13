export interface CharData {
    slots: Array<number>;   //  item for each inventory slot, even empty
    equiped: Array<number>; //  item for each equipment slot, even empty
}

export enum EquipmentSlots{
    Head,
    Neck,
    HandL,
    Body,
    HandR,
    RingL,
    Legs,
    RingR,
    Boots,
}