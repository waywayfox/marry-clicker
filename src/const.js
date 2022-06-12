export const BUILDING_MAX = 19;


export const UpgradeMode = {
UNUSED: -1,
LOCK: 0,
UNLOCK: 1,
OWNED: 2,
};

export const UpgradeDetailList = [
// cursor tiered upgrade
  {
      id: 0,
      price: 100,
      title: "倍速もちもち",
      description: "aaaa"
  },
  {
      id: 1,
      price: 500,
      title: "cursorT1",
      description: "upgrade1 description"
  },
  {
    id: 2,
    price: 10000,
    title: "cursorT2",
    description: "upgrade2 description"
  },
  {
    id: 3,
    price: 100000,
    title: "thousand mochiru",
    description: "upgrade3 description"
  },
  {
    id: 4,
    price: 1e7,
    title: "cursorT4",
    description: "upgrade4 description"
  },
  {
    id: 5,
    price: 1e8,
    title: "cursorT5",
    description: "upgrade5 description"
  },
  {
    id: 6,
    price: 1e9,
    title: "cursorT6",
    description: "upgrade6 description"
  },
  {
    id: 7,
    price: 1e10,
    title: "cursorT7",
    description: "upgrade7 description"
  },
  {
    id: 8,
    price: 1e13,
    title: "cursorT8",
    description: "upgrade8 description"
  },
  {
    id: 9,
    price: 1e16,
    title: "cursorT9",
    description: "upgrade9 description"
  },
  {
    id: 10,
    price: 1e19,
    title: "cursorT10",
    description: "upgrade10 description"
  },
  {
    id: 11,
    price: 1e22,
    title: "cursorT11",
    description: "upgrade11 description"
  },
  {
    id: 12,
    price: 1e25,
    title: "cursorT12",
    description: "upgrade12 description"
  },
  {
    id: 13,
    price: 1e28,
    title: "cursorT13",
    description: "upgrade13 description"
  },

  // grandma tiered upgrade
  {
    id: 14,
    price: 1000,
    title: "grandmaT1",
    description: "upgrade13 description"
  },
  {
    id: 15,
    price: 5000,
    title: "grandmaT2",
    description: "upgrade14 description"
  },
  {
    id: 16,
    price: 50000,
    title: "grandmaT3",
    description: "upgrade15 description"
  },
  {
    id: 17,
    price: 5e6,
    title: "grandmaT4",
    description: "upgrade16 description"
  },
  {
    id: 18,
    price: 5e8,
    title: "grandmaT5",
    description: "upgrade17 description"
  },
  {
    id: 19,
    price: 5e10,
    title: "grandmaT6",
    description: "upgrade18 description"
  },
  {
    id: 20,
    price: 5e13,
    title: "grandmaT7",
    description: "upgrade19 description"
  },
  {
    id: 21,
    price: 5e16,
    title: "grandmaT8",
    description: "upgrade20 description"
  },
  {
    id: 22,
    price: 5e19,
    title: "grandmaT9",
    description: "upgrade21 description"
  },
  {
    id: 23,
    price: 5e22,
    title: "grandmaT10",
    description: "upgrade22 description"
  },
  {
    id: 24,
    price: 5e26,
    title: "grandmaT11",
    description: "upgrade23 description"
  },
  {
    id: 25,
    price: 5e30,
    title: "grandmaT12",
    description: "upgrade24 description"
  },
  {
    id: 26,
    price: 5e34,
    title: "grandmaT13",
    description: "upgrade25 description"
  },
  {
    id: 27,
    price: 5e38,
    title: "grandmaT14",
    description: "upgrade26 description"
  },

  //farm tiered upgrade
  {
    id: 28,
    price: 11000,
    title: "farmT1",
    description: "double the farm production."
  },
  {
    id: 29,
    price: 55000,
    title: "farmT2",
    description: "double the farm production."
  },
  {
    id: 30,
    price: 550000,
    title: "farmT3",
    description: "double the farm production."
  },
  {
    id: 31,
    price: 5.5e7,
    title: "farmT4",
    description: "double the farm production."
  },
  {
    id: 32,
    price: 5.5e9,
    title: "farmT5",
    description: "double the farm production."
  },
  {
    id: 33,
    price: 5.5e11,
    title: "farmT6",
    description: "double the farm production."
  },
  {
    id: 34,
    price: 5.5e14,
    title: "farmT7",
    description: "double the farm production."
  },
  {
    id: 35,
    price: 5.5e17,
    title: "farmT8",
    description: "double the farm production."
  },
  {
    id: 36,
    price: 5.5e20,
    title: "farmT9",
    description: "double the farm production."
  },
  {
    id: 37,
    price: 5.5e23,
    title: "farmT10",
    description: "double the farm production."
  },
  {
    id: 38,
    price: 5.5e27,
    title: "farmT11",
    description: "double the farm production."
  },
  {
    id: 39,
    price: 5.5e31,
    title: "farmT12",
    description: "double the farm production."
  },
  {
    id: 40,
    price: 5.5e35,
    title: "farmT13",
    description: "double the farm production."
  },
  {
    id: 41,
    price: 5.5e39,
    title: "farmT14",
    description: "double the farm production."
  },


  // mine tiered upgrade
  {
    id: 42,
    price: 120000,
    title: "MineT1",
    description: "double the Mine production."
  },
  {
    id: 43,
    price: 600000,
    title: "MineT2",
    description: "double the Mine production."
  },
  {
    id: 44,
    price: 6e6,
    title: "MineT3",
    description: "double the Mine production."
  },
  {
    id: 45,
    price: 6e8,
    title: "MineT4",
    description: "double the Mine production."
  },
  {
    id: 46,
    price: 6e10,
    title: "MineT5",
    description: "double the Mine production."
  },
  {
    id: 47,
    price: 6e12,
    title: "MineT6",
    description: "double the Mine production."
  },
  {
    id: 48,
    price: 6e15,
    title: "MineT7",
    description: "double the Mine production."
  },
  {
    id: 49,
    price: 6e18,
    title: "MineT8",
    description: "double the Mine production."
  },
  {
    id: 50,
    price: 6e21,
    title: "MineT9",
    description: "double the Mine production."
  },
  {
    id: 51,
    price: 6e24,
    title: "MineT10",
    description: "double the Mine production."
  },
  {
    id: 52,
    price: 6e28,
    title: "MineT11",
    description: "double the Mine production."
  },
  {
    id: 53,
    price: 6e32,
    title: "MineT12",
    description: "double the Mine production."
  },
  {
    id: 54,
    price: 6e36,
    title: "MineT13",
    description: "double the Mine production."
  },
  {
    id: 55,
    price: 6e40,
    title: "MineT14",
    description: "double the Mine production."
  },

  // Factory tiered upgrade
  {
    id: 56,
    price: 1.3e6,
    title: "FactoryT1",
    description: "double the Factory production."
  },
  {
    id: 57,
    price: 6.5e6,
    title: "FactoryT2",
    description: "double the Factory production."
  },
  {
    id: 58,
    price: 6.5e7,
    title: "FactoryT3",
    description: "double the Factory production."
  },
  {
    id: 59,
    price: 6.5e9,
    title: "FactoryT4",
    description: "double the Factory production."
  },
  {
    id: 60,
    price: 6.5e11,
    title: "FactoryT5",
    description: "double the Factory production."
  },
  {
    id: 61,
    price: 6.5e13,
    title: "FactoryT6",
    description: "double the Factory production."
  },
  {
    id: 62,
    price: 6.5e16,
    title: "FactoryT7",
    description: "double the Factory production."
  },
  {
    id: 63,
    price: 6.5e19,
    title: "FactoryT8",
    description: "double the Factory production."
  },
  {
    id: 64,
    price: 6.5e22,
    title: "FactoryT9",
    description: "double the Factory production."
  },
  {
    id: 65,
    price: 6.5e25,
    title: "FactoryT10",
    description: "double the Factory production."
  },
  {
    id: 66,
    price: 6.5e29,
    title: "FactoryT11",
    description: "double the Factory production."
  },
  {
    id: 67,
    price: 6.5e33,
    title: "FactoryT12",
    description: "double the Factory production."
  },
  {
    id: 68,
    price: 6.5e37,
    title: "FactoryT13",
    description: "double the Factory production."
  },
  {
    id: 69,
    price: 6.5e41,
    title: "FactoryT14",
    description: "double the Factory production."
  },

  // Bank tiered upgrade
  {
    id: 70,
    price: 1.4e7,
    title: "BankT1",
    description: "double the Bank production."
  },
  {
    id: 71,
    price: 7e7,
    title: "BankT2",
    description: "double the Bank production."
  },
  {
    id: 72,
    price: 7e8,
    title: "BankT3",
    description: "double the Bank production."
  },
  {
    id: 73,
    price: 7e10,
    title: "BankT4",
    description: "double the Bank production."
  },
  {
    id: 74,
    price: 7e12,
    title: "BankT5",
    description: "double the Bank production."
  },
  {
    id: 75,
    price: 7e14,
    title: "BankT6",
    description: "double the Bank production."
  },
  {
    id: 76,
    price: 7e17,
    title: "BankT7",
    description: "double the Bank production."
  },
  {
    id: 77,
    price: 7e20,
    title: "BankT8",
    description: "double the Bank production."
  },
  {
    id: 78,
    price: 7e23,
    title: "BankT9",
    description: "double the Bank production."
  },
  {
    id: 79,
    price: 7e26,
    title: "BankT10",
    description: "double the Bank production."
  },
  {
    id: 80,
    price: 7e30,
    title: "BankT11",
    description: "double the Bank production."
  },
  {
    id: 81,
    price: 7e34,
    title: "BankT12",
    description: "double the Bank production."
  },
  {
    id: 82,
    price: 7e38,
    title: "BankT13",
    description: "double the Bank production."
  },
  {
    id: 83,
    price: 7e42,
    title: "BankT14",
    description: "double the Bank production."
  },

  // Temple tiered upgrade
  {
    id: 84,
    price: 2e8,
    title: "TempleT1",
    description: "double the Temple production."
  },
  {
    id: 85,
    price: 1e9,
    title: "TempleT2",
    description: "double the Temple production."
  },
  {
    id: 86,
    price: 1e10,
    title: "TempleT3",
    description: "double the Temple production."
  },
  {
    id: 87,
    price: 1e12,
    title: "TempleT4",
    description: "double the Temple production."
  },
  {
    id: 88,
    price: 1e14,
    title: "TempleT5",
    description: "double the Temple production."
  },
  {
    id: 89,
    price: 1e16,
    title: "TempleT6",
    description: "double the Temple production."
  },
  {
    id: 90,
    price: 1e19,
    title: "TempleT7",
    description: "double the Temple production."
  },
  {
    id: 91,
    price: 1e22,
    title: "TempleT8",
    description: "double the Temple production."
  },
  {
    id: 92,
    price: 1e25,
    title: "TempleT9",
    description: "double the Temple production."
  },
  {
    id: 93,
    price: 1e28,
    title: "TempleT10",
    description: "double the Temple production."
  },
  {
    id: 94,
    price: 1e32,
    title: "TempleT11",
    description: "double the Temple production."
  },
  {
    id: 95,
    price: 1e36,
    title: "TempleT12",
    description: "double the Temple production."
  },
  {
    id: 96,
    price: 1e40,
    title: "TempleT13",
    description: "double the Temple production."
  },
  {
    id: 97,
    price: 1e44,
    title: "TempleT14",
    description: "double the Temple production."
  },

  // Wizard tiered upgrade
  {
    id: 98,
    price: 3.3e9,
    title: "WizardT1",
    description: "double the Wizard production."
  },
  {
    id: 99,
    price: 1.65e10,
    title: "WizardT2",
    description: "double the Wizard production."
  },
  {
    id: 100,
    price: 1.65e11,
    title: "WizardT3",
    description: "double the Wizard production."
  },
  {
    id: 101,
    price: 1.65e13,
    title: "WizardT4",
    description: "double the Wizard production."
  },
  {
    id: 102,
    price: 1.65e15,
    title: "WizardT5",
    description: "double the Wizard production."
  },
  {
    id: 103,
    price: 1.65e17,
    title: "WizardT6",
    description: "double the Wizard production."
  },
  {
    id: 104,
    price: 1.65e20,
    title: "WizardT7",
    description: "double the Wizard production."
  },
  {
    id: 105,
    price: 1.65e23,
    title: "WizardT8",
    description: "double the Wizard production."
  },
  {
    id: 106,
    price: 1.65e26,
    title: "WizardT9",
    description: "double the Wizard production."
  },
  {
    id: 107,
    price: 1.65e29,
    title: "WizardT10",
    description: "double the Wizard production."
  },
  {
    id: 108,
    price: 1.65e33,
    title: "WizardT11",
    description: "double the Wizard production."
  },
  {
    id: 109,
    price: 1.65e36,
    title: "WizardT12",
    description: "double the Wizard production."
  },
  {
    id: 110,
    price: 1.65e41,
    title: "WizardT13",
    description: "double the Wizard production."
  },
  {
    id: 111,
    price: 1.65e45,
    title: "WizardT13",
    description: "double the Wizard production."
  },

  // shipment tiered upgrade
  {
    id: 112,
    price: 5.1e10,
    title: "ShipmentT1",
    description: "double the Shipment production."
  },
  {
    id: 113,
    price: 2.55e11,
    title: "ShipmentT2",
    description: "double the Shipment production."
  },
  {
    id: 114,
    price: 2.55e12,
    title: "ShipmentT3",
    description: "double the Shipment production."
  },
  {
    id: 115,
    price: 2.55e14,
    title: "ShipmentT4",
    description: "double the Shipment production."
  },
  {
    id: 116,
    price: 2.55e16,
    title: "ShipmentT5",
    description: "double the Shipment production."
  },
  {
    id: 117,
    price: 2.55e18,
    title: "ShipmentT6",
    description: "double the Shipment production."
  },
  {
    id: 118,
    price: 2.55e21,
    title: "ShipmentT7",
    description: "double the Shipment production."
  },
  {
    id: 119,
    price: 2.55e24,
    title: "ShipmentT8",
    description: "double the Shipment production."
  },
  {
    id: 120,
    price: 2.55e27,
    title: "ShipmentT9",
    description: "double the Shipment production."
  },
  {
    id: 121,
    price: 2.55e30,
    title: "ShipmentT10",
    description: "double the Shipment production."
  },
  {
    id: 122,
    price: 2.55e34,
    title: "ShipmentT11",
    description: "double the Shipment production."
  },
  {
    id: 123,
    price: 2.55e38,
    title: "ShipmentT12",
    description: "double the Shipment production."
  },
  {
    id: 124,
    price: 2.55e42,
    title: "ShipmentT13",
    description: "double the Shipment production."
  },
  {
    id: 125,
    price: 2.55e46,
    title: "ShipmentT14",
    description: "double the Shipment production."
  },

  // Alchemy tiered upgrade
  {
    id: 126,
    price: 7.5e11,
    title: "AlchemyT1",
    description: "double the Alchemy production."
  },
  {
    id: 127,
    price: 3.75e12,
    title: "AlchemyT2",
    description: "double the Alchemy production."
  },
  {
    id: 128,
    price: 3.75e13,
    title: "AlchemyT3",
    description: "double the Alchemy production."
  },
  {
    id: 129,
    price: 3.75e15,
    title: "AlchemyT4",
    description: "double the Alchemy production."
  },
  {
    id: 130,
    price: 3.75e17,
    title: "AlchemyT5",
    description: "double the Alchemy production."
  },
  {
    id: 131,
    price: 3.75e19,
    title: "AlchemyT6",
    description: "double the Alchemy production."
  },
  {
    id: 132,
    price: 3.75e22,
    title: "AlchemyT7",
    description: "double the Alchemy production."
  },
  {
    id: 133,
    price: 3.75e25,
    title: "AlchemyT8",
    description: "double the Alchemy production."
  },
  {
    id: 134,
    price: 3.75e28,
    title: "AlchemyT9",
    description: "double the Alchemy production."
  },
  {
    id: 135,
    price: 3.75e31,
    title: "AlchemyT10",
    description: "double the Alchemy production."
  },
  {
    id: 136,
    price: 3.75e35,
    title: "AlchemyT11",
    description: "double the Alchemy production."
  },
  {
    id: 137,
    price: 3.75e39,
    title: "AlchemyT12",
    description: "double the Alchemy production."
  },
  {
    id: 138,
    price: 3.75e43,
    title: "AlchemyT13",
    description: "double the Alchemy production."
  },
  {
    id: 139,
    price: 3.75e47,
    title: "AlchemyT14",
    description: "double the Alchemy production."
  },

  // Portal tiered upgrade
  {
    id: 140,
    price: 1e13,
    title: "PortalT1",
    description: "double the Portal production."
  },
  {
    id: 141,
    price: 5e13,
    title: "PortalT2",
    description: "double the Portal production."
  },
  {
    id: 142,
    price: 5e14,
    title: "PortalT3",
    description: "double the Portal production."
  },
  {
    id: 143,
    price: 5e16,
    title: "PortalT4",
    description: "double the Portal production."
  },
  {
    id: 144,
    price: 5e18,
    title: "PortalT5",
    description: "double the Portal production."
  },
  {
    id: 145,
    price: 5e20,
    title: "PortalT6",
    description: "double the Portal production."
  },
  {
    id: 146,
    price: 5e23,
    title: "PortalT7",
    description: "double the Portal production."
  },
  {
    id: 147,
    price: 5e26,
    title: "PortalT8",
    description: "double the Portal production."
  },
  {
    id: 148,
    price: 5e29,
    title: "PortalT9",
    description: "double the Portal production."
  },
  {
    id: 149,
    price: 5e32,
    title: "PortalT10",
    description: "double the Portal production."
  },
  {
    id: 150,
    price: 5e36,
    title: "PortalT11",
    description: "double the Portal production."
  },
  {
    id: 151,
    price: 5e40,
    title: "PortalT12",
    description: "double the Portal production."
  },
  {
    id: 152,
    price: 5e44,
    title: "PortalT13",
    description: "double the Portal production."
  },
  {
    id: 153,
    price: 5e48,
    title: "PortalT14",
    description: "double the Portal production."
  },

  // timamachine tiered upgrade
  {
    id: 154,
    price: 1.4e14,
    title: "TimeMachineT1",
    description: "double the TimeMachine production."
  },
  {
    id: 155,
    price: 7e14,
    title: "TimeMachineT2",
    description: "double the TimeMachine production."
  },
  {
    id: 156,
    price: 7e15,
    title: "TimeMachineT3",
    description: "double the TimeMachine production."
  },
  {
    id: 157,
    price: 7e17,
    title: "TimeMachineT4",
    description: "double the TimeMachine production."
  },
  {
    id: 158,
    price: 7e19,
    title: "TimeMachineT5",
    description: "double the TimeMachine production."
  },
  {
    id: 159,
    price: 7e21,
    title: "TimeMachineT6",
    description: "double the TimeMachine production."
  },
  {
    id: 160,
    price: 7e24,
    title: "TimeMachineT7",
    description: "double the TimeMachine production."
  },
  {
    id: 161,
    price: 7e27,
    title: "TimeMachineT8",
    description: "double the TimeMachine production."
  },
  {
    id: 162,
    price: 7e30,
    title: "TimeMachineT9",
    description: "double the TimeMachine production."
  },
  {
    id: 163,
    price: 7e33,
    title: "TimeMachineT10",
    description: "double the TimeMachine production."
  },
  {
    id: 164,
    price: 7e37,
    title: "TimeMachineT11",
    description: "double the TimeMachine production."
  },
  {
    id: 165,
    price: 7e41,
    title: "TimeMachineT12",
    description: "double the TimeMachine production."
  },
  {
    id: 166,
    price: 7e45,
    title: "TimeMachineT13",
    description: "double the TimeMachine production."
  },
  {
    id: 167,
    price: 7e49,
    title: "TimeMachineT14",
    description: "double the TimeMachine production."
  },

  // antimattercondenser tiered upgrade
  {
    id: 168,
    price: 1.7e15,
    title: "AntimatterCondenserT1",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 169,
    price: 8.5e15,
    title: "AntimatterCondenserT2",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 170,
    price: 8.5e16,
    title: "AntimatterCondenserT3",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 171,
    price: 8.5e18,
    title: "AntimatterCondenserT4",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 172,
    price: 8.5e20,
    title: "AntimatterCondenserT5",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 173,
    price: 8.5e22,
    title: "AntimatterCondenserT6",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 174,
    price: 8.5e25,
    title: "AntimatterCondenserT7",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 175,
    price: 8.5e28,
    title: "AntimatterCondenserT8",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 176,
    price: 8.5e31,
    title: "AntimatterCondenserT9",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 177,
    price: 8.5e34,
    title: "AntimatterCondenserT10",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 178,
    price: 8.5e38,
    title: "AntimatterCondenserT11",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 179,
    price: 8.5e42,
    title: "AntimatterCondenserT12",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 180,
    price: 8.5e46,
    title: "AntimatterCondenserT13",
    description: "double the AntimatterCondenser production."
  },
  {
    id: 181,
    price: 8.5e50,
    title: "AntimatterCondenserT14",
    description: "double the AntimatterCondenser production."
  },

  // prism tiered upgrade
  {
    id: 182,
    price: 2.1e16,
    title: "PrismT1",
    description: "double the Prism production."
  },
  {
    id: 183,
    price: 1.05e17,
    title: "PrismT2",
    description: "double the Prism production."
  },
  {
    id: 184,
    price: 1.05e18,
    title: "PrismT3",
    description: "double the Prism production."
  },
  {
    id: 185,
    price: 1.05e20,
    title: "PrismT4",
    description: "double the Prism production."
  },
  {
    id: 186,
    price: 1.05e22,
    title: "PrismT5",
    description: "double the Prism production."
  },
  {
    id: 187,
    price: 1.05e24,
    title: "PrismT6",
    description: "double the Prism production."
  },
  {
    id: 188,
    price: 1.05e27,
    title: "PrismT7",
    description: "double the Prism production."
  },
  {
    id: 189,
    price: 1.05e30,
    title: "PrismT8",
    description: "double the Prism production."
  },
  {
    id: 190,
    price: 1.05e33,
    title: "PrismT9",
    description: "double the Prism production."
  },
  {
    id: 191,
    price: 1.05e36,
    title: "PrismT10",
    description: "double the Prism production."
  },
  {
    id: 192,
    price: 1.05e40,
    title: "PrismT11",
    description: "double the Prism production."
  },
  {
    id: 193,
    price: 1.05e44,
    title: "PrismT12",
    description: "double the Prism production."
  },
  {
    id: 194,
    price: 1.05e48,
    title: "PrismT13",
    description: "double the Prism production."
  },
  {
    id: 195,
    price: 1.05e52,
    title: "PrismT14",
    description: "double the Prism production."
  },

  // fractalengine tiered upgrade
  {
    id: 196,
    price: 2.6e17,
    title: "FractalEngineT1",
    description: "double the FractalEngine production."
  },
  {
    id: 197,
    price: 1.3e18,
    title: "FractalEngineT2",
    description: "double the FractalEngine production."
  },
  {
    id: 198,
    price: 1.3e19,
    title: "FractalEngineT3",
    description: "double the FractalEngine production."
  },
  {
    id: 199,
    price: 1.3e21,
    title: "FractalEngineT4",
    description: "double the FractalEngine production."
  },
  {
    id: 200,
    price: 1.3e23,
    title: "FractalEngineT5",
    description: "double the FractalEngine production."
  },
  {
    id: 201,
    price: 1.3e25,
    title: "FractalEngineT6",
    description: "double the FractalEngine production."
  },
  {
    id: 202,
    price: 1.3e28,
    title: "FractalEngineT7",
    description: "double the FractalEngine production."
  },
  {
    id: 203,
    price: 1.3e31,
    title: "FractalEngineT8",
    description: "double the FractalEngine production."
  },
  {
    id: 204,
    price: 1.3e34,
    title: "FractalEngineT9",
    description: "double the FractalEngine production."
  },
  {
    id: 205,
    price: 1.3e37,
    title: "FractalEngineT10",
    description: "double the FractalEngine production."
  },
  {
    id: 206,
    price: 1.3e41,
    title: "FractalEngineT11",
    description: "double the FractalEngine production."
  },
  {
    id: 207,
    price: 1.3e45,
    title: "FractalEngineT12",
    description: "double the FractalEngine production."
  },
  {
    id: 208,
    price: 1.3e49,
    title: "FractalEngineT13",
    description: "double the FractalEngine production."
  },
  {
    id: 209,
    price: 1.3e53,
    title: "FractalEngineT14",
    description: "double the FractalEngine production."
  },

  // chancemaker tiered upgrade
  {
    id: 210,
    price: 3.1e18,
    title: "ChancemakerT1",
    description: "double the Chancemaker production."
  },
  {
    id: 211,
    price: 1.55e19,
    title: "ChancemakerT2",
    description: "double the Chancemaker production."
  },
  {
    id: 212,
    price: 1.55e20,
    title: "ChancemakerT3",
    description: "double the Chancemaker production."
  },
  {
    id: 213,
    price: 1.55e22,
    title: "ChancemakerT4",
    description: "double the Chancemaker production."
  },
  {
    id: 214,
    price: 1.55e24,
    title: "ChancemakerT5",
    description: "double the Chancemaker production."
  },
  {
    id: 215,
    price: 1.55e26,
    title: "ChancemakerT6",
    description: "double the Chancemaker production."
  },
  {
    id: 216,
    price: 1.55e29,
    title: "ChancemakerT7",
    description: "double the Chancemaker production."
  },
  {
    id: 217,
    price: 1.55e32,
    title: "ChancemakerT8",
    description: "double the Chancemaker production."
  },
  {
    id: 218,
    price: 1.55e35,
    title: "ChancemakerT9",
    description: "double the Chancemaker production."
  },
  {
    id: 219,
    price: 1.55e38,
    title: "ChancemakerT10",
    description: "double the Chancemaker production."
  },
  {
    id: 220,
    price: 1.55e42,
    title: "ChancemakerT11",
    description: "double the Chancemaker production."
  },
  {
    id: 221,
    price: 1.55e46,
    title: "ChancemakerT12",
    description: "double the Chancemaker production."
  },
  {
    id: 222,
    price: 1.55e50,
    title: "ChancemakerT13",
    description: "double the Chancemaker production."
  },
  {
    id: 223,
    price: 1.55e54,
    title: "ChancemakerT14",
    description: "double the Chancemaker production."
  },

  // javascriptconsole tiered upgrade
  {
    id: 224,
    price: 7.1e20,
    title: "Javascript ConsoleT1",
    description: "double the Javascript Console production."
  },
  {
    id: 225,
    price: 3.55e21,
    title: "Javascript ConsoleT2",
    description: "double the Javascript Console production."
  },
  {
    id: 226,
    price: 3.55e22,
    title: "Javascript ConsoleT3",
    description: "double the Javascript Console production."
  },
  {
    id: 227,
    price: 3.55e24,
    title: "Javascript ConsoleT4",
    description: "double the Javascript Console production."
  },
  {
    id: 228,
    price: 3.55e26,
    title: "Javascript ConsoleT5",
    description: "double the Javascript Console production."
  },
  {
    id: 229,
    price: 3.55e28,
    title: "Javascript ConsoleT6",
    description: "double the Javascript Console production."
  },
  {
    id: 230,
    price: 3.55e31,
    title: "Javascript ConsoleT7",
    description: "double the Javascript Console production."
  },
  {
    id: 231,
    price: 3.55e34,
    title: "Javascript ConsoleT8",
    description: "double the Javascript Console production."
  },
  {
    id: 232,
    price: 3.55e37,
    title: "Javascript ConsoleT9",
    description: "double the Javascript Console production."
  },
  {
    id: 233,
    price: 3.55e40,
    title: "Javascript ConsoleT10",
    description: "double the Javascript Console production."
  },
  {
    id: 234,
    price: 3.55e44,
    title: "Javascript ConsoleT11",
    description: "double the Javascript Console production."
  },
  {
    id: 235,
    price: 3.55e48,
    title: "Javascript ConsoleT12",
    description: "double the Javascript Console production."
  },
  {
    id: 236,
    price: 3.55e52,
    title: "Javascript ConsoleT13",
    description: "double the Javascript Console production."
  },
  {
    id: 237,
    price: 3.55e56,
    title: "Javascript ConsoleT14",
    description: "double the Javascript Console production."
  },

  // idleverse tiered upgrade
  {
    id: 238,
    price: 1.2e23,
    title: "IdleverseT1",
    description: "double the Idleverse production."
  },
  {
    id: 239,
    price: 6e23,
    title: "IdleverseT2",
    description: "double the Idleverse production."
  },
  {
    id: 240,
    price: 6e24,
    title: "IdleverseT3",
    description: "double the Idleverse production."
  },
  {
    id: 241,
    price: 6e26,
    title: "IdleverseT4",
    description: "double the Idleverse production."
  },
  {
    id: 242,
    price: 6e28,
    title: "IdleverseT5",
    description: "double the Idleverse production."
  },
  {
    id: 243,
    price: 6e30,
    title: "IdleverseT6",
    description: "double the Idleverse production."
  },
  {
    id: 244,
    price: 6e33,
    title: "IdleverseT7",
    description: "double the Idleverse production."
  },
  {
    id: 245,
    price: 6e36,
    title: "IdleverseT8",
    description: "double the Idleverse production."
  },
  {
    id: 246,
    price: 6e39,
    title: "IdleverseT9",
    description: "double the Idleverse production."
  },
  {
    id: 247,
    price: 6e42,
    title: "IdleverseT10",
    description: "double the Idleverse production."
  },
  {
    id: 248,
    price: 6e46,
    title: "IdleverseT11",
    description: "double the Idleverse production."
  },
  {
    id: 249,
    price: 6e50,
    title: "IdleverseT12",
    description: "double the Idleverse production."
  },
  {
    id: 250,
    price: 6e54,
    title: "IdleverseT13",
    description: "double the Idleverse production."
  },
  {
    id: 251,
    price: 6e58,
    title: "IdleverseT14",
    description: "double the Idleverse production."
  },

  // cortex baker tiered upgrade
  {
    id: 252,
    price: 1.9e25,
    title: "CortexBakerT1",
    description: "double the CortexBaker production."
  },
  {
    id: 253,
    price: 9.5e25,
    title: "CortexBakerT2",
    description: "double the CortexBaker production."
  },
  {
    id: 254,
    price: 9.5e26,
    title: "CortexBakerT3",
    description: "double the CortexBaker production."
  },
  {
    id: 255,
    price: 9.5e28,
    title: "CortexBakerT4",
    description: "double the CortexBaker production."
  },
  {
    id: 256,
    price: 9.5e30,
    title: "CortexBakerT5",
    description: "double the CortexBaker production."
  },
  {
    id: 257,
    price: 9.5e32,
    title: "CortexBakerT6",
    description: "double the CortexBaker production."
  },
  {
    id: 258,
    price: 9.5e35,
    title: "CortexBakerT7",
    description: "double the CortexBaker production."
  },
  {
    id: 259,
    price: 9.5e38,
    title: "CortexBakerT8",
    description: "double the CortexBaker production."
  },
  {
    id: 260,
    price: 9.5e41,
    title: "CortexBakerT9",
    description: "double the CortexBaker production."
  },
  {
    id: 261,
    price: 9.5e44,
    title: "CortexBakerT10",
    description: "double the CortexBaker production."
  },
  {
    id: 262,
    price: 9.5e48,
    title: "CortexBakerT11",
    description: "double the CortexBaker production."
  },
  {
    id: 263,
    price: 9.5e52,
    title: "CortexBakerT12",
    description: "double the CortexBaker production."
  },
  {
    id: 264,
    price: 9.5e56,
    title: "CortexBakerT13",
    description: "double the CortexBaker production."
  },
  {
    id: 265,
    price: 9.5e60,
    title: "CortexBakerT14",
    description: "double the CortexBaker production."
  },

  // grandma type upgrade
  {
    id: 266,
    price: 55000,
    title: "farmMachoType",
    description: "double the grandma production, per grandma have +1% farm prodeuction."
  },
  {
    id: 267,
    price: 600000,
    title: "MineMachoType",
    description: "double the grandma production, per grandma have +1% Mine prodeuction."
  },
  {
    id: 268,
    price: 6.5e6,
    title: "FactoryMachoType",
    description: "double the grandma production, per grandma have +1% Factory prodeuction."
  },
  {
    id: 269,
    price: 7e7,
    title: "BankMachoType",
    description: "double the grandma production, per grandma have +1% Bank prodeuction."
  },
  {
    id: 270,
    price: 1e9,
    title: "TempleMachoType",
    description: "double the grandma production, per grandma have +1% Temple prodeuction."
  },
  {
    id: 271,
    price: 1.65e10,
    title: "WizardMachoType",
    description: "double the grandma production, per grandma have +1% Wizard prodeuction."
  },
  {
    id: 272,
    price: 2.55e11,
    title: "ShipmentMachoType",
    description: "double the grandma production, per grandma have +1% Shipment prodeuction."
  },
  {
    id: 273,
    price: 3.75e12,
    title: "AlchemyMachoType",
    description: "double the grandma production, per grandma have +1% Alchemy prodeuction."
  },
  {
    id: 274,
    price: 5e13,
    title: "PortalMachoType",
    description: "double the grandma production, per grandma have +1% Portal prodeuction."
  },
  {
    id: 275,
    price: 7e14,
    title: "TimeMachineMachoType",
    description: "double the grandma production, per grandma have +1% TimeMachine prodeuction."
  },
  {
    id: 276,
    price: 8.5e15,
    title: "AntimatterCondenserMachoType",
    description: "double the grandma production, per grandma have +1% AntimatterCondenser prodeuction."
  },
  {
    id: 277,
    price: 1.05e17,
    title: "PrismMachoType",
    description: "double the grandma production, per grandma have +1% Prism prodeuction."
  },
  {
    id: 278,
    price: 1.3e18,
    title: "FractalEngineMachoType",
    description: "double the grandma production, per grandma have +1% FractalEngine prodeuction."
  },
  {
    id: 279,
    price: 1.55e19,
    title: "ChancemakerMachoType",
    description: "double the grandma production, per grandma have +1% Chancemaker prodeuction."
  },
  {
    id: 280,
    price: 3.55e21,
    title: "Javascript ConsoleMachoType",
    description: "double the grandma production, per grandma have +1% Javascript Console prodeuction."
  },
  {
    id: 281,
    price: 6e23,
    title: "IdleverseMachoType",
    description: "double the grandma production, per grandma have +1% Idleverse prodeuction."
  },
  {
    id: 282,
    price: 9.5e25,
    title: "CortexBakerMachoType",
    description: "double the grandma production, per grandma have +1% CortexBaker prodeuction."
  },


  // synergies Upgrade
  {
    id: 283,
    price: 2.8e18,
    title: "synergies1",
    description: "upgrade250 description"
  },
  {
    id: 284,
    price: 4e18,
    title: "synergies2",
    description: "upgrade251 description"
  },
  {
    id: 285,
    price: 6.6e13,
    title: "synergies3",
    description: "upgrade252 description"
  },
  {
    id: 286,
    price: 1e21,
    title: "synergies4",
    description: "upgrade253 description"
  },
  {
    id: 287,
    price: 3.4e19,
    title: "synergies5",
    description: "upgrade254 description"
  },
  {
    id: 288,
    price: 2.8e24,
    title: "synergies6",
    description: "upgrade255 description"
  },
  {
    id: 289,
    price: 2e17,
    title: "synergies7",
    description: "upgrade256 description"
  },
  {
    id: 290,
    price: 5.4e17,
    title: "synergies8",
    description: "upgrade257 description"
  },
  {
    id: 291,
    price: 2e17,
    title: "synergies9",
    description: "upgrade258 description"
  },
  {
    id: 292,
    price: 3.4e25,
    title: "synergies10",
    description: "upgrade259 description"
  },
  {
    id: 293,
    price: 1.5e16,
    title: "synergies11",
    description: "upgrade260 description"
  },
  {
    id: 294,
    price: 6.6e19,
    title: "synergies12",
    description: "upgrade261 description"
  },
  {
    id: 295,
    price: 1e15,
    title: "synergies13",
    description: "upgrade262 description"
  },
  {
    id: 296,
    price: 1e21,
    title: "synergies14",
    description: "upgrade263 description"
  },
  {
    id: 297,
    price: 1.5e16,
    title: "synergies15",
    description: "upgrade264 description"
  },
  {
    id: 298,
    price: 1.5e22,
    title: "synergies16",
    description: "upgrade265 description"
  },
  {
    id: 299,
    price: 2e17,
    title: "synergies17",
    description: "upgrade266 description"
  },
  {
    id: 300,
    price: 4.22e26,
    title: "synergies18",
    description: "upgrade267 description"
  },
  {
    id: 301,
    price: 2.8e18,
    title: "synergies19",
    description: "upgrade268 description"
  },
  {
    id: 302,
    price: 4.48e26,
    title: "synergies20",
    description: "upgrade269 description"
  },
  {
    id: 303,
    price: 3.4e19,
    title: "synergies21",
    description: "upgrade270 description"
  },
  {
    id: 304,
    price: 3.4e25,
    title: "synergies22",
    description: "upgrade271 description"
  },
  {
    id: 305,
    price: 4.2e20,
    title: "synergies23",
    description: "upgrade272 description"
  },
  {
    id: 306,
    price: 4.2e26,
    title: "synergies24",
    description: "upgrade273 description"
  },
  {
    id: 307,
    price: 5.2e21,
    title: "synergies25",
    description: "upgrade274 description"
  },
  {
    id: 308,
    price: 5.5e27,
    title: "synergies26",
    description: "upgrade275 description"
  },
  {
    id: 309,
    price: 6.6e22,
    title: "synergies27",
    description: "upgrade276 description"
  },
  {
    id: 310,
    price: 6.2e28,
    title: "synergies28",
    description: "upgrade277 description"
  },
  {
    id: 311,
    price: 1.4e25,
    title: "synergies29",
    description: "upgrade278 description"
  },
  {
    id: 312,
    price: 14,
    title: "synergies30",
    description: "upgrade279 description"
  },
  {
    id: 313,
    price: 2.4e27,
    title: "synergies31",
    description: "upgrade280 description"
  },
  {
    id: 314,
    price: 2.4e33,
    title: "synergies32",
    description: "upgrade281 description"
  },

  // flavored cookie
  {
    id: 315,
    price: 999999,
    title: "standard1",
    description: "increase 1% production"
  },
  {
    id: 316,
    price: 5e6,
    title: "standard2",
    description: "increase 1% production"
  },
  {
    id: 317,
    price: 1e7,
    title: "standard3",
    description: "increase 1% production"
  },
  {
    id: 318,
    price: 5e7,
    title: "standard4",
    description: "increase 2% production"
  },
  {
    id: 319,
    price: 1e8,
    title: "standard5",
    description: "increase 2% production"
  },
  {
    id: 320,
    price: 5e8,
    title: "standard6",
    description: "increase 2% production"
  },
  {
    id: 321,
    price: 1e9,
    title: "standard7",
    description: "increase 2% production"
  },
  {
    id: 322,
    price: 5e9,
    title: "standard8",
    description: "increase 2% production"
  },
  {
    id: 323,
    price: 1e10,
    title: "standard9",
    description: "increase 2% production"
  },
  {
    id: 324,
    price: 5e10,
    title: "standard10",
    description: "increase 2% production"
  },
  {
    id: 325,
    price: 1e11,
    title: "standard11",
    description: "increase 5% production"
  },
  {
    id: 326,
    price: 1e11,
    title: "standard12",
    description: "increase 5% production"
  },
  {
    id: 327,
    price: 5e11,
    title: "standard13",
    description: "increase 2% production"
  },
  {
    id: 328,
    price: 1e12,
    title: "standard14",
    description: "increase 2% production"
  },
  {
    id: 329,
    price: 5e12,
    title: "standard15",
    description: "increase 2% production"
  },
  {
    id: 330,
    price: 1e13,
    title: "standard16",
    description: "increase 2% production"
  },
  {
    id: 331,
    price: 5e13,
    title: "standard17",
    description: "increase 2% production"
  },
  {
    id: 332,
    price: 1e14,
    title: "standard18",
    description: "increase 2% production"
  },
  {
    id: 333,
    price: 5e14,
    title: "standard19",
    description: "increase 2% production"
  },
  {
    id: 334,
    price: 5e14,
    title: "standard20",
    description: "increase 2% production"
  },
  {
    id: 335,
    price: 1e15,
    title: "standard21",
    description: "increase 2% production"
  },
  {
    id: 336,
    price: 1e15,
    title: "standard22",
    description: "increase 2% production"
  },
  {
    id: 337,
    price: 1e16,
    title: "standard23",
    description: "increase 2% production"
  },
  {
    id: 338,
    price: 1e16,
    title: "standard24",
    description: "increase 2% production"
  },
  {
    id: 339,
    price: 5e16,
    title: "standard25",
    description: "increase 1% production"
  },
  {
    id: 340,
    price: 5e16,
    title: "standard26",
    description: "increase 5% production"
  },
  {
    id: 341,
    price: 1e17,
    title: "standard27",
    description: "increase 3% production"
  },
  {
    id: 342,
    price: 5e17,
    title: "standard28",
    description: "increase 3% production"
  },
  {
    id: 343,
    price: 1e18,
    title: "standard29",
    description: "increase 3% production"
  },
  {
    id: 344,
    price: 5e18,
    title: "standard30",
    description: "increase 3% production"
  },
  {
    id: 345,
    price: 1e19,
    title: "standard31",
    description: "increase 3% production"
  },
  {
    id: 346,
    price: 5e19,
    title: "standard32",
    description: "increase 3% production"
  },
  {
    id: 347,
    price: 1e20,
    title: "standard33",
    description: "increase 4% production"
  },
  {
    id: 348,
    price: 5e20,
    title: "standard34",
    description: "increase 4% production"
  },
  {
    id: 349,
    price: 1e21,
    title: "standard35",
    description: "increase 4% production"
  },
  {
    id: 350,
    price: 5e21,
    title: "standard36",
    description: "increase 4% production"
  },
  {
    id: 351,
    price: 1e22,
    title: "standard37",
    description: "increase 4% production"
  },
  {
    id: 352,
    price: 5e22,
    title: "standard38",
    description: "increase 4% production"
  },
  {
    id: 353,
    price: 1e23,
    title: "standard39",
    description: "increase 4% production"
  },
  {
    id: 354,
    price: 5e23,
    title: "standard40",
    description: "increase 4% production"
  },
  {
    id: 355,
    price: 1e24,
    title: "standard41",
    description: "increase 4% production"
  },
  {
    id: 356,
    price: 5e24,
    title: "standard42",
    description: "increase 4% production"
  },
  {
    id: 357,
    price: 1e25,
    title: "standard43",
    description: "increase 4% production"
  },
  {
    id: 358,
    price: 5e25,
    title: "standard44",
    description: "increase 4% production"
  },
  {
    id: 359,
    price: 1e26,
    title: "standard45",
    description: "increase 4% production"
  },
  {
    id: 360,
    price: 5e26,
    title: "standard46",
    description: "increase 4% production"
  },
  {
    id: 361,
    price: 1e27,
    title: "standard47",
    description: "increase 4% production"
  },
  {
    id: 362,
    price: 5e27,
    title: "standard48",
    description: "increase 4% production"
  },
  {
    id: 363,
    price: 1e28,
    title: "standard49",
    description: "increase 4% production"
  },
  {
    id: 364,
    price: 5e28,
    title: "standard50",
    description: "increase 4% production"
  },
  {
    id: 365,
    price: 1e29,
    title: "standard51",
    description: "increase 1% production"
  },
  {
    id: 366,
    price: 5e29,
    title: "standard52",
    description: "increase 4% production"
  },
  {
    id: 367,
    price: 1e30,
    title: "standard53",
    description: "increase 4% production"
  },
  {
    id: 368,
    price: 5e30,
    title: "standard54",
    description: "increase 4% production"
  },
  {
    id: 369,
    price: 1e31,
    title: "standard55",
    description: "increase 4% production"
  },
  {
    id: 370,
    price: 5e31,
    title: "standard56",
    description: "increase 4% production"
  },
  {
    id: 371,
    price: 1e32,
    title: "standard57",
    description: "increase 4% production"
  },
  {
    id: 372,
    price: 5e32,
    title: "standard58",
    description: "increase 4% production"
  },
  {
    id: 373,
    price: 1e33,
    title: "standard59",
    description: "increase 4% production"
  },
  {
    id: 374,
    price: 5e33,
    title: "standard60",
    description: "increase 4% production"
  },
  {
    id: 375,
    price: 1e34,
    title: "standard61",
    description: "increase 4% production"
  },
  {
    id: 376,
    price: 5e34,
    title: "standard62",
    description: "increase 4% production"
  },
  {
    id: 377,
    price: 1e35,
    title: "standard63",
    description: "increase 4% production"
  },
  {
    id: 378,
    price: 5e35,
    title: "standard64",
    description: "increase 4% production"
  },
  {
    id: 379,
    price: 1e36,
    title: "standard65",
    description: "increase 1% production"
  },
  {
    id: 380,
    price: 5e36,
    title: "standard66",
    description: "increase 1% production"
  },
  {
    id: 381,
    price: 1e37,
    title: "standard67",
    description: "increase 1% production"
  },
  {
    id: 382,
    price: 1e8,
    title: "standard68",
    description: "increase 2% production"
  },
  {
    id: 383,
    price: 1e8,
    title: "standard69",
    description: "increase 2% production"
  },
  {
    id: 384,
    price: 1e8,
    title: "standard70",
    description: "increase 2% production"
  },
  {
    id: 385,
    price: 5e37,
    title: "standard71",
    description: "increase 4% production"
  },
  {
    id: 386,
    price: 1e38,
    title: "standard72",
    description: "increase 4% production"
  },
  {
    id: 387,
    price: 5e38,
    title: "standard73",
    description: "increase 5% production"
  },
  {
    id: 388,
    price: 1e39,
    title: "standard74",
    description: "increase 5% production"
  },
  {
    id: 389,
    price: 3.1e39,
    title: "standard75",
    description: "increase 5% production"
  },
  {
    id: 390,
    price: 1e40,
    title: "standard76",
    description: "increase 5% production"
  },
  {
    id: 391,
    price: 3.1e40,
    title: "standard77",
    description: "increase 5% production"
  },
  {
    id: 392,
    price: 1e41,
    title: "standard78",
    description: "increase 5% production"
  },
  {
    id: 393,
    price: 3.16e41,
    title: "standard79",
    description: "increase 5% production"
  },
  {
    id: 394,
    price: 1e42,
    title: "standard80",
    description: "increase 5% production"
  },
  {
    id: 395,
    price: 3.1e42,
    title: "standard81",
    description: "increase 5% production"
  },
  {
    id: 396,
    price: 1e43,
    title: "standard82",
    description: "increase 5% production"
  },
  {
    id: 397,
    price: 3.1e43,
    title: "standard83",
    description: "increase 5% production"
  },
  {
    id: 398,
    price: 3.1e43,
    title: "standard84",
    description: "increase 5% production"
  },
  {
    id: 399,
    price: 1e43,
    title: "standard85",
    description: "increase 5% production"
  },
  {
    id: 400,
    price: 3.16e44,
    title: "standard86",
    description: "increase 5% production"
  },
  {
    id: 401,
    price: 1e45,
    title: "standard87",
    description: "increase 5% production"
  },
  {
    id: 402,
    price: 3.1e45,
    title: "standard88",
    description: "increase 5% production"
  },
  {
    id: 403,
    price: 1e46,
    title: "standard89",
    description: "increase 5% production"
  },
  {
    id: 404,
    price: 3.1e46,
    title: "standard90",
    description: "increase 5% production"
  },
  {
    id: 405,
    price: 3.1e46,
    title: "standard91",
    description: "increase 5% production"
  },
  {
    id: 406,
    price: 1e47,
    title: "standard92",
    description: "increase 5% production"
  },
  {
    id: 407,
    price: 3.16e47,
    title: "standard93",
    description: "increase 5% production"
  },
  {
    id: 408,
    price: 1e48,
    title: "standard94",
    description: "increase 5% production"
  },
  {
    id: 409,
    price: 1e48,
    title: "standard95",
    description: "increase 5% production"
  },
  {
    id: 410,
    price: 3.16e48,
    title: "standard96",
    description: "increase 5% production"
  },
  {
    id: 411,
    price: 1e49,
    title: "standard97",
    description: "increase 5% production"
  },
  {
    id: 412,
    price: 3.1e49,
    title: "standard98",
    description: "increase 5% production"
  },
  {
    id: 413,
    price: 1e50,
    title: "standard99",
    description: "increase 5% production"
  },
  {
    id: 414,
    price: 3.16e50,
    title: "standard100",
    description: "increase 5% production"
  },
  {
    id: 415,
    price: 3.1e40,
    title: "standard101",
    description: "increase 5% production"
  },
  {
    id: 416,
    price: 1e51,
    title: "standard102",
    description: "increase 5% production"
  },
  {
    id: 417,
    price: 3.1e51,
    title: "standard103",
    description: "increase 5% production"
  },
  {
    id: 418,
    price: 1e52,
    title: "standard104",
    description: "increase 5% production"
  },
  {
    id: 419,
    price: 3.1e52,
    title: "standard105",
    description: "increase 5% production"
  },
  {
    id: 420,
    price: 1e53,
    title: "standard106",
    description: "increase 5% production"
  },
  {
    id: 421,
    price: 3.16e53,
    title: "standard107",
    description: "increase 5% production"
  },
  {
    id: 422,
    price: 1e54,
    title: "standard108",
    description: "increase 5% production"
  },
  {
    id: 423,
    price: 3.1e54,
    title: "standard109",
    description: "increase 5% production"
  },
  {
    id: 424,
    price: 1e55,
    title: "standard110",
    description: "increase 5% production"
  },
  {
    id: 425,
    price: 3.1e55,
    title: "standard111",
    description: "increase 5% production"
  },
  {
    id: 426,
    price: 1e56,
    title: "standard112",
    description: "increase 5% production"
  },
  {
    id: 427,
    price: 3.16e56,
    title: "standard113",
    description: "increase 5% production"
  },
  {
    id: 428,
    price: 1e57,
    title: "standard114",
    description: "increase 5% production"
  },
  {
    id: 429,
    price: 3.1e57,
    title: "standard115",
    description: "increase 5% production"
  },
  {
    id: 430,
    price: 1e58,
    title: "standard116",
    description: "increase 5% production"
  },
  {
    id: 431,
    price: 3.1e58,
    title: "standard117",
    description: "increase 5% production"
  },
  {
    id: 432,
    price: 1e59,
    title: "standard118",
    description: "increase 5% production"
  },
  {
    id: 433,
    price: 3.16e59,
    title: "standard119",
    description: "increase 5% production"
  },
  {
    id: 434,
    price: 3.16e59,
    title: "standard120",
    description: "increase 5% production"
  },
  {
    id: 435,
    price: 1e8,
    title: "standard121",
    description: "increase 2% production"
  },
  {
    id: 436,
    price: 5e8,
    title: "standard122",
    description: "increase 2% production"
  },
  {
    id: 437,
    price: 1e60,
    title: "standard123",
    description: "increase 5% production"
  },
  {
    id: 438,
    price: 3.16e60,
    title: "standard124",
    description: "increase 5% production"
  },
  {
    id: 439,
    price: 1e61,
    title: "standard125",
    description: "increase 5% production"
  },
  {
    id: 440,
    price: 3.16e61,
    title: "standard126",
    description: "increase 5% production"
  },
  {
    id: 441,
    price: 1e62,
    title: "standard127",
    description: "increase 5% production"
  },
  {
    id: 442,
    price: 3.16e62,
    title: "standard128",
    description: "increase 5% production"
  },
  {
    id: 443,
    price: 1e63,
    title: "standard129",
    description: "increase 5% production"
  },
  {
    id: 444,
    price: 3.16e63,
    title: "standard130",
    description: "increase 5% production"
  },
  {
    id: 445,
    price: 1e64,
    title: "standard131",
    description: "increase 5% production"
  },
  {
    id: 446,
    price: 3.16e64,
    title: "standard132",
    description: "increase 5% production"
  },
  {
    id: 447,
    price: 1e14,
    title: "britishTea1",
    description: "increase 2% production"
  },
  {
    id: 448,
    price: 1e14,
    title: "britishTea2",
    description: "increase 2% production"
  },
  {
    id: 449,
    price: 1e14,
    title: "britishTea3",
    description: "increase 2% production"
  },
  {
    id: 450,
    price: 1e14,
    title: "britishTea4",
    description: "increase 2% production"
  },
  {
    id: 451,
    price: 1e14,
    title: "britishTea5",
    description: "increase 2% production"
  },
  {
    id: 452,
    price: 1e14,
    title: "britishTea6",
    description: "increase 2% production"
  },
  {
    id: 453,
    price: 1e16,
    title: "brand1",
    description: "increase 3% production"
  },
  {
    id: 454,
    price: 1e16,
    title: "brand2",
    description: "increase 3% production"
  },
  {
    id: 455,
    price: 1e16,
    title: "brand3",
    description: "increase 3% production"
  },
  {
    id: 456,
    price: 1e16,
    title: "brand4",
    description: "increase 3% production"
  },
  {
    id: 457,
    price: 5e15,
    title: "brand5",
    description: "increase 2% production"
  },
  {
    id: 458,
    price: 5e15,
    title: "brand6",
    description: "increase 2% production"
  },
  {
    id: 459,
    price: 5e15,
    title: "brand7",
    description: "increase 2% production"
  },
  {
    id: 460,
    price: 5e15,
    title: "brand8",
    description: "increase 2% production"
  },
  {
    id: 461,
    price: 5e15,
    title: "brand9",
    description: "increase 2% production"
  },
  {
    id: 462,
    price: 5e21,
    title: "brand10",
    description: "increase 3% production"
  },
  {
    id: 463,
    price: 5e21,
    title: "brand11",
    description: "increase 3% production"
  },
  {
    id: 464,
    price: 5e24,
    title: "brand12",
    description: "increase 2% production"
  },
  {
    id: 465,
    price: 5e27,
    title: "brand13",
    description: "increase 2% production"
  },
  {
    id: 466,
    price: 5e30,
    title: "brand14",
    description: "increase 2% production"
  },
  {
    id: 467,
    price: 5e33,
    title: "brand15",
    description: "increase 2% production"
  },
  {
    id: 468,
    price: 5e36,
    title: "brand16",
    description: "increase 2% production"
  },
  {
    id: 469,
    price: 9999,
    title: "macarons1",
    description: "increase 3% production"
  },
  {
    id: 470,
    price: 1e7,
    title: "macarons2",
    description: "increase 3% production"
  },
  {
    id: 471,
    price: 1e10,
    title: "macarons3",
    description: "increase 3% production"
  },
  {
    id: 472,
    price: 1e13,
    title: "macarons4",
    description: "increase 3% production"
  },
  {
    id: 473,
    price: 1e16,
    title: "macarons5",
    description: "increase 3% production"
  },
  {
    id: 474,
    price: 1e19,
    title: "macarons6",
    description: "increase 3% production"
  },
  {
    id: 475,
    price: 1e22,
    title: "macarons7",
    description: "increase 3% production"
  },
  {
    id: 476,
    price: 1e25,
    title: "macarons8",
    description: "increase 3% production"
  },
  {
    id: 477,
    price: 1e28,
    title: "macarons9",
    description: "increase 3% production"
  },
  {
    id: 478,
    price: 1e23,
    title: "butter1",
    description: "increase 4% production"
  },
  {
    id: 479,
    price: 5e23,
    title: "butter2",
    description: "increase 4% production"
  },
  {
    id: 480,
    price: 1e24,
    title: "butter3",
    description: "increase 4% production"
  },
  {
    id: 481,
    price: 5e24,
    title: "butter4",
    description: "increase 4% production"
  },
  {
    id: 482,
    price: 1e25,
    title: "butter5",
    description: "increase 4% production"
  },
  {
    id: 483,
    price: 1e35,
    title: "maybe1",
    description: "increase 4% production"
  },
  {
    id: 484,
    price: 1e37,
    title: "maybe2",
    description: "increase 4% production"
  },
  {
    id: 485,
    price: 1e39,
    title: "maybe3",
    description: "increase 4% production"
  },
  {
    id: 486,
    price: 1e41,
    title: "maybe4",
    description: "increase 4% production"
  },
  {
    id: 487,
    price: 1e43,
    title: "maybe5",
    description: "increase 4% production"
  },
  {
    id: 488,
    price: 1e45,
    title: "maybe6",
    description: "increase 4% production"
  },
  {
    id: 489,
    price: 1e47,
    title: "maybe7",
    description: "increase 5% production"
  },
  {
    id: 490,
    price: 1e34,
    title: "not1",
    description: "increase 4% production"
  },
  {
    id: 491,
    price: 1e36,
    title: "not2",
    description: "increase 4% production"
  },
  {
    id: 492,
    price: 1e38,
    title: "not3",
    description: "increase 4% production"
  },
  {
    id: 493,
    price: 1e40,
    title: "not4",
    description: "increase 4% production"
  },
  {
    id: 494,
    price: 1e42,
    title: "not5",
    description: "increase 1% production"
  },
  {
    id: 495,
    price: 1e44,
    title: "not6",
    description: "increase 5% production"
  },
  {
    id: 496,
    price: 1e46,
    title: "not7",
    description: "increase 5% production"
  },
  {
    id: 497,
    price: 1e31,
    title: "pastries1",
    description: "increase 4% production"
  },
  {
    id: 498,
    price: 1e33,
    title: "pastries2",
    description: "increase 4% production"
  },
  {
    id: 499,
    price: 1e35,
    title: "pastries3",
    description: "increase 4% production"
  },
  {
    id: 500,
    price: 1e37,
    title: "pastries4",
    description: "increase 4% production"
  },
  {
    id: 501,
    price: 1e39,
    title: "pastries5",
    description: "increase 4% production"
  },
  {
    id: 502,
    price: 1e41,
    title: "pastries6",
    description: "increase 4% production"
  },
  {
    id: 503,
    price: 1e43,
    title: "pastries7",
    description: "increase 4% production"
  },
  {
    id: 504,
    price: 1e45,
    title: "pastries8",
    description: "increase 4% production"
  },
  {
    id: 505,
    price: 100,
    title: "lagacy1",
    description: "increase 1% production"
  },
  {
    id: 506,
    price: 1e12,
    title: "lagacy2",
    description: "increase 10% production"
  },
  {
    id: 507,
    price: 1e29,
    title: "chocolatebutter1",
    description: "increase 10% production"
  },
  {
    id: 508,
    price: 1e32,
    title: "chocolatebutter2",
    description: "increase 10% production"
  },
  {
    id: 509,
    price: 1e35,
    title: "chocolatebutter3",
    description: "increase 10% production"
  },
  {
    id: 510,
    price: 1e38,
    title: "chocolatebutter4",
    description: "increase 10% production"
  },
  {
    id: 511,
    price: 1e41,
    title: "chocolatebutter5",
    description: "increase 10% production"
  },
  {
    id: 512,
    price: 1e44,
    title: "chocolatebutter6",
    description: "increase 10% production"
  },
  {
    id: 513,
    price: 1e47,
    title: "chocolatebutter7",
    description: "increase 10% production"
  },
  {
    id: 514,
    price: 1e50,
    title: "chocolatebutter8",
    description: "increase 10% production"
  },
  {
    id: 515,
    price: 1e53,
    title: "chocolatebutter9",
    description: "increase 10% production"
  },
  {
    id: 516,
    price: 1e56,
    title: "chocolatebutter10",
    description: "increase 10% production"
  },
  {
    id: 517,
    price: 1e59,
    title: "chocolatebutter11",
    description: "increase 10% production"
  },
  {
    id: 518,
    price: 1e62,
    title: "chocolatebutter12",
    description: "increase 10% production"
  },

  // kitten
  {
    id: 519,
    price: 9e6,
    title: "kitten1",
    description: "increase 0.100000 factor"
  },
  {
    id: 520,
    price: 9e9,
    title: "kitten2",
    description: "increase 0.125000 factor"
  },
  {
    id: 521,
    price: 9e13,
    title: "kitten3",
    description: "increase 0.150000 factor"
  },
  {
    id: 522,
    price: 9e16,
    title: "kitten4",
    description: "increase 0.175000 factor"
  },
  {
    id: 523,
    price: 9e20,
    title: "kitten5",
    description: "increase 0.200000 factor"
  },
  {
    id: 524,
    price: 9e23,
    title: "kitten6",
    description: "increase 0.200000 factor"
  },
  {
    id: 525,
    price: 9e26,
    title: "kitten7",
    description: "increase 0.200000 factor"
  },
  {
    id: 526,
    price: 9e29,
    title: "kitten8",
    description: "increase 0.200000 factor"
  },
  {
    id: 527,
    price: 9e32,
    title: "kitten9",
    description: "increase 0.200000 factor"
  },
  {
    id: 528,
    price: 9e35,
    title: "kitten10",
    description: "increase 0.175000 factor"
  },
  {
    id: 529,
    price: 9e38,
    title: "kitten11",
    description: "increase 0.150000 factor"
  },
  {
    id: 530,
    price: 9e41,
    title: "kitten12",
    description: "increase 0.125000 factor"
  },
  {
    id: 531,
    price: 9e44,
    title: "kitten13",
    description: "increase 0.115000 factor"
  },
  {
    id: 532,
    price: 9e47,
    title: "kitten14",
    description: "increase 0.110000 factor"
  },



  {
    id: 521,
    price: 100,
    title: "Upgrade487",
    description: "upgrade487 description"
  },
  {
    id: 522,
    price: 100,
    title: "Upgrade488",
    description: "upgrade488 description"
  },
  {
    id: 523,
    price: 100,
    title: "Upgrade489",
    description: "upgrade489 description"
  },
  {
    id: 524,
    price: 100,
    title: "Upgrade490",
    description: "upgrade490 description"
  },
  {
    id: 525,
    price: 100,
    title: "Upgrade491",
    description: "upgrade491 description"
  },
  {
    id: 526,
    price: 100,
    title: "Upgrade492",
    description: "upgrade492 description"
  },
  {
    id: 527,
    price: 100,
    title: "Upgrade493",
    description: "upgrade493 description"
  },
  {
    id: 528,
    price: 100,
    title: "Upgrade494",
    description: "upgrade494 description"
  },
  {
    id: 529,
    price: 100,
    title: "Upgrade495",
    description: "upgrade495 description"
  },
  {
    id: 530,
    price: 100,
    title: "Upgrade496",
    description: "upgrade496 description"
  },
  {
    id: 531,
    price: 100,
    title: "Upgrade497",
    description: "upgrade497 description"
  },
  {
    id: 532,
    price: 100,
    title: "Upgrade498",
    description: "upgrade498 description"
  },
  {
    id: 533,
    price: 100,
    title: "Upgrade499",
    description: "upgrade499 description"
  },
  {
    id: 534,
    price: 100,
    title: "Upgrade500",
    description: "upgrade500 description"
  },
  {
    id: 535,
    price: 100,
    title: "Upgrade501",
    description: "upgrade501 description"
  },
  {
    id: 536,
    price: 100,
    title: "Upgrade502",
    description: "upgrade502 description"
  },
  {
    id: 537,
    price: 100,
    title: "Upgrade503",
    description: "upgrade503 description"
  },
  {
    id: 538,
    price: 100,
    title: "Upgrade504",
    description: "upgrade504 description"
  },
  {
    id: 539,
    price: 100,
    title: "Upgrade505",
    description: "upgrade505 description"
  },
  {
    id: 540,
    price: 100,
    title: "Upgrade506",
    description: "upgrade506 description"
  },
  {
    id: 541,
    price: 100,
    title: "Upgrade507",
    description: "upgrade507 description"
  },
  {
    id: 542,
    price: 100,
    title: "Upgrade508",
    description: "upgrade508 description"
  },
  {
    id: 543,
    price: 100,
    title: "Upgrade509",
    description: "upgrade509 description"
  },
  {
    id: 544,
    price: 100,
    title: "Upgrade510",
    description: "upgrade510 description"
  },
  {
    id: 545,
    price: 100,
    title: "Upgrade511",
    description: "upgrade511 description"
  },
  {
    id: 546,
    price: 100,
    title: "Upgrade512",
    description: "upgrade512 description"
  },
  {
    id: 547,
    price: 100,
    title: "Upgrade513",
    description: "upgrade513 description"
  },
  {
    id: 548,
    price: 100,
    title: "Upgrade514",
    description: "upgrade514 description"
  },
  {
    id: 549,
    price: 100,
    title: "Upgrade515",
    description: "upgrade515 description"
  },
  {
    id: 550,
    price: 100,
    title: "Upgrade516",
    description: "upgrade516 description"
  },
  {
    id: 551,
    price: 100,
    title: "Upgrade517",
    description: "upgrade517 description"
  },
  {
    id: 552,
    price: 100,
    title: "Upgrade518",
    description: "upgrade518 description"
  },
  {
    id: 553,
    price: 100,
    title: "Upgrade519",
    description: "upgrade519 description"
  },
  {
    id: 554,
    price: 100,
    title: "Upgrade520",
    description: "upgrade520 description"
  },
  {
    id: 555,
    price: 100,
    title: "Upgrade521",
    description: "upgrade521 description"
  },
  {
    id: 556,
    price: 100,
    title: "Upgrade522",
    description: "upgrade522 description"
  },
  {
    id: 557,
    price: 100,
    title: "Upgrade523",
    description: "upgrade523 description"
  },
  {
    id: 558,
    price: 100,
    title: "Upgrade524",
    description: "upgrade524 description"
  },
  {
    id: 559,
    price: 100,
    title: "Upgrade525",
    description: "upgrade525 description"
  },
  {
    id: 560,
    price: 100,
    title: "Upgrade526",
    description: "upgrade526 description"
  },
  {
    id: 561,
    price: 100,
    title: "Upgrade527",
    description: "upgrade527 description"
  },
  {
    id: 562,
    price: 100,
    title: "Upgrade528",
    description: "upgrade528 description"
  },
  {
    id: 563,
    price: 100,
    title: "Upgrade529",
    description: "upgrade529 description"
  },
  {
    id: 564,
    price: 100,
    title: "Upgrade530",
    description: "upgrade530 description"
  },
  {
    id: 565,
    price: 100,
    title: "Upgrade531",
    description: "upgrade531 description"
  },
  {
    id: 566,
    price: 100,
    title: "Upgrade532",
    description: "upgrade532 description"
  },
  {
    id: 567,
    price: 100,
    title: "Upgrade533",
    description: "upgrade533 description"
  },
  {
    id: 568,
    price: 100,
    title: "Upgrade534",
    description: "upgrade534 description"
  },
  {
    id: 569,
    price: 100,
    title: "Upgrade535",
    description: "upgrade535 description"
  },
  {
    id: 570,
    price: 100,
    title: "Upgrade536",
    description: "upgrade536 description"
  },
  {
    id: 571,
    price: 100,
    title: "Upgrade537",
    description: "upgrade537 description"
  },
  {
    id: 572,
    price: 100,
    title: "Upgrade538",
    description: "upgrade538 description"
  },
  {
    id: 573,
    price: 100,
    title: "Upgrade539",
    description: "upgrade539 description"
  },
  {
    id: 574,
    price: 100,
    title: "Upgrade540",
    description: "upgrade540 description"
  },
  {
    id: 575,
    price: 100,
    title: "Upgrade541",
    description: "upgrade541 description"
  },
  {
    id: 576,
    price: 100,
    title: "Upgrade542",
    description: "upgrade542 description"
  },
  {
    id: 577,
    price: 100,
    title: "Upgrade543",
    description: "upgrade543 description"
  },
  {
    id: 578,
    price: 100,
    title: "Upgrade544",
    description: "upgrade544 description"
  },
  {
    id: 579,
    price: 100,
    title: "Upgrade545",
    description: "upgrade545 description"
  },
  {
    id: 580,
    price: 100,
    title: "Upgrade546",
    description: "upgrade546 description"
  },
  {
    id: 581,
    price: 100,
    title: "Upgrade547",
    description: "upgrade547 description"
  },
  {
    id: 582,
    price: 100,
    title: "Upgrade548",
    description: "upgrade548 description"
  },
  {
    id: 583,
    price: 100,
    title: "Upgrade549",
    description: "upgrade549 description"
  },
  {
    id: 584,
    price: 100,
    title: "Upgrade550",
    description: "upgrade550 description"
  },
  {
    id: 585,
    price: 100,
    title: "Upgrade551",
    description: "upgrade551 description"
  },
  {
    id: 586,
    price: 100,
    title: "Upgrade552",
    description: "upgrade552 description"
  },
  {
    id: 587,
    price: 100,
    title: "Upgrade553",
    description: "upgrade553 description"
  },
  {
    id: 588,
    price: 100,
    title: "Upgrade554",
    description: "upgrade554 description"
  },
  {
    id: 589,
    price: 100,
    title: "Upgrade555",
    description: "upgrade555 description"
  },
  {
    id: 590,
    price: 100,
    title: "Upgrade556",
    description: "upgrade556 description"
  },
  {
    id: 591,
    price: 100,
    title: "Upgrade557",
    description: "upgrade557 description"
  },
  {
    id: 592,
    price: 100,
    title: "Upgrade558",
    description: "upgrade558 description"
  },
  {
    id: 593,
    price: 100,
    title: "Upgrade559",
    description: "upgrade559 description"
  },
  {
    id: 594,
    price: 100,
    title: "Upgrade560",
    description: "upgrade560 description"
  },
  {
    id: 595,
    price: 100,
    title: "Upgrade561",
    description: "upgrade561 description"
  },
  {
    id: 596,
    price: 100,
    title: "Upgrade562",
    description: "upgrade562 description"
  },
  {
    id: 597,
    price: 100,
    title: "Upgrade563",
    description: "upgrade563 description"
  },
  {
    id: 598,
    price: 100,
    title: "Upgrade564",
    description: "upgrade564 description"
  },
  {
    id: 599,
    price: 100,
    title: "Upgrade565",
    description: "upgrade565 description"
  },
  {
    id: 600,
    price: 100,
    title: "Upgrade566",
    description: "upgrade566 description"
  },
  {
    id: 601,
    price: 100,
    title: "Upgrade567",
    description: "upgrade567 description"
  },
  {
    id: 602,
    price: 100,
    title: "Upgrade568",
    description: "upgrade568 description"
  },
  {
    id: 603,
    price: 100,
    title: "Upgrade569",
    description: "upgrade569 description"
  },
  {
    id: 604,
    price: 100,
    title: "Upgrade570",
    description: "upgrade570 description"
  },
  {
    id: 605,
    price: 100,
    title: "Upgrade571",
    description: "upgrade571 description"
  },
  {
    id: 606,
    price: 100,
    title: "Upgrade572",
    description: "upgrade572 description"
  },
  {
    id: 607,
    price: 100,
    title: "Upgrade573",
    description: "upgrade573 description"
  },
  {
    id: 608,
    price: 100,
    title: "Upgrade574",
    description: "upgrade574 description"
  },
  {
    id: 609,
    price: 100,
    title: "Upgrade575",
    description: "upgrade575 description"
  },
  {
    id: 610,
    price: 100,
    title: "Upgrade576",
    description: "upgrade576 description"
  },
  {
    id: 611,
    price: 100,
    title: "Upgrade577",
    description: "upgrade577 description"
  },
  {
    id: 612,
    price: 100,
    title: "Upgrade578",
    description: "upgrade578 description"
  },
  {
    id: 613,
    price: 100,
    title: "Upgrade579",
    description: "upgrade579 description"
  },
  {
    id: 614,
    price: 100,
    title: "Upgrade580",
    description: "upgrade580 description"
  },
  {
    id: 615,
    price: 100,
    title: "Upgrade581",
    description: "upgrade581 description"
  },
  {
    id: 616,
    price: 100,
    title: "Upgrade582",
    description: "upgrade582 description"
  },
  {
    id: 617,
    price: 100,
    title: "Upgrade583",
    description: "upgrade583 description"
  },
  {
    id: 618,
    price: 100,
    title: "Upgrade584",
    description: "upgrade584 description"
  },
  {
    id: 619,
    price: 100,
    title: "Upgrade585",
    description: "upgrade585 description"
  },
  {
    id: 620,
    price: 100,
    title: "Upgrade586",
    description: "upgrade586 description"
  },
  {
    id: 621,
    price: 100,
    title: "Upgrade587",
    description: "upgrade587 description"
  },
  {
    id: 622,
    price: 100,
    title: "Upgrade588",
    description: "upgrade588 description"
  },
  {
    id: 623,
    price: 100,
    title: "Upgrade589",
    description: "upgrade589 description"
  },
  {
    id: 624,
    price: 100,
    title: "Upgrade590",
    description: "upgrade590 description"
  },
  {
    id: 625,
    price: 100,
    title: "Upgrade591",
    description: "upgrade591 description"
  },
  {
    id: 626,
    price: 100,
    title: "Upgrade592",
    description: "upgrade592 description"
  },
  {
    id: 627,
    price: 100,
    title: "Upgrade593",
    description: "upgrade593 description"
  },
  {
    id: 628,
    price: 100,
    title: "Upgrade594",
    description: "upgrade594 description"
  },
  {
    id: 629,
    price: 100,
    title: "Upgrade595",
    description: "upgrade595 description"
  },
  {
    id: 630,
    price: 100,
    title: "Upgrade596",
    description: "upgrade596 description"
  },
  {
    id: 631,
    price: 100,
    title: "Upgrade597",
    description: "upgrade597 description"
  },
  {
    id: 632,
    price: 100,
    title: "Upgrade598",
    description: "upgrade598 description"
  },
  {
    id: 633,
    price: 100,
    title: "Upgrade599",
    description: "upgrade599 description"
  },
  {
    id: 634,
    price: 100,
    title: "Upgrade600",
    description: "upgrade600 description"
  },
  {
    id: 635,
    price: 100,
    title: "Upgrade601",
    description: "upgrade601 description"
  },
  {
    id: 636,
    price: 100,
    title: "Upgrade602",
    description: "upgrade602 description"
  },
  {
    id: 637,
    price: 100,
    title: "Upgrade603",
    description: "upgrade603 description"
  },
  {
    id: 638,
    price: 100,
    title: "Upgrade604",
    description: "upgrade604 description"
  },
  {
    id: 639,
    price: 100,
    title: "Upgrade605",
    description: "upgrade605 description"
  },
  {
    id: 640,
    price: 100,
    title: "Upgrade606",
    description: "upgrade606 description"
  },
  {
    id: 641,
    price: 100,
    title: "Upgrade607",
    description: "upgrade607 description"
  },
  {
    id: 642,
    price: 100,
    title: "Upgrade608",
    description: "upgrade608 description"
  },
  {
    id: 643,
    price: 100,
    title: "Upgrade609",
    description: "upgrade609 description"
  },
  {
    id: 644,
    price: 100,
    title: "Upgrade610",
    description: "upgrade610 description"
  },
  {
    id: 645,
    price: 100,
    title: "Upgrade611",
    description: "upgrade611 description"
  },
  {
    id: 646,
    price: 100,
    title: "Upgrade612",
    description: "upgrade612 description"
  },
  {
    id: 647,
    price: 100,
    title: "Upgrade613",
    description: "upgrade613 description"
  },
  {
    id: 648,
    price: 100,
    title: "Upgrade614",
    description: "upgrade614 description"
  },
  {
    id: 649,
    price: 100,
    title: "Upgrade615",
    description: "upgrade615 description"
  },
  {
    id: 650,
    price: 100,
    title: "Upgrade616",
    description: "upgrade616 description"
  },
  {
    id: 651,
    price: 100,
    title: "Upgrade617",
    description: "upgrade617 description"
  },
  {
    id: 652,
    price: 100,
    title: "Upgrade618",
    description: "upgrade618 description"
  },
  {
    id: 653,
    price: 100,
    title: "Upgrade619",
    description: "upgrade619 description"
  },
  {
    id: 654,
    price: 100,
    title: "Upgrade620",
    description: "upgrade620 description"
  },
  {
    id: 655,
    price: 100,
    title: "Upgrade621",
    description: "upgrade621 description"
  },
  {
    id: 656,
    price: 100,
    title: "Upgrade622",
    description: "upgrade622 description"
  },
  {
    id: 657,
    price: 100,
    title: "Upgrade623",
    description: "upgrade623 description"
  },
  {
    id: 658,
    price: 100,
    title: "Upgrade624",
    description: "upgrade624 description"
  },
  {
    id: 659,
    price: 100,
    title: "Upgrade625",
    description: "upgrade625 description"
  },
  {
    id: 660,
    price: 100,
    title: "Upgrade626",
    description: "upgrade626 description"
  },
  {
    id: 661,
    price: 100,
    title: "Upgrade627",
    description: "upgrade627 description"
  },
  {
    id: 662,
    price: 100,
    title: "Upgrade628",
    description: "upgrade628 description"
  },
  {
    id: 663,
    price: 100,
    title: "Upgrade629",
    description: "upgrade629 description"
  },
  {
    id: 664,
    price: 100,
    title: "Upgrade630",
    description: "upgrade630 description"
  },
  {
    id: 665,
    price: 100,
    title: "Upgrade631",
    description: "upgrade631 description"
  },
  {
    id: 666,
    price: 100,
    title: "Upgrade632",
    description: "upgrade632 description"
  },
  {
    id: 667,
    price: 100,
    title: "Upgrade633",
    description: "upgrade633 description"
  },
  {
    id: 668,
    price: 100,
    title: "Upgrade634",
    description: "upgrade634 description"
  },
  {
    id: 669,
    price: 100,
    title: "Upgrade635",
    description: "upgrade635 description"
  },
  {
    id: 670,
    price: 100,
    title: "Upgrade636",
    description: "upgrade636 description"
  },
  {
    id: 671,
    price: 100,
    title: "Upgrade637",
    description: "upgrade637 description"
  },
  {
    id: 672,
    price: 100,
    title: "Upgrade638",
    description: "upgrade638 description"
  },
  {
    id: 673,
    price: 100,
    title: "Upgrade639",
    description: "upgrade639 description"
  },
  {
    id: 674,
    price: 100,
    title: "Upgrade640",
    description: "upgrade640 description"
  },
  {
    id: 675,
    price: 100,
    title: "Upgrade641",
    description: "upgrade641 description"
  },
  {
    id: 676,
    price: 100,
    title: "Upgrade642",
    description: "upgrade642 description"
  },
  {
    id: 677,
    price: 100,
    title: "Upgrade643",
    description: "upgrade643 description"
  },
  {
    id: 678,
    price: 100,
    title: "Upgrade644",
    description: "upgrade644 description"
  },
  {
    id: 679,
    price: 100,
    title: "Upgrade645",
    description: "upgrade645 description"
  },
  {
    id: 680,
    price: 100,
    title: "Upgrade646",
    description: "upgrade646 description"
  },
  {
    id: 681,
    price: 100,
    title: "Upgrade647",
    description: "upgrade647 description"
  },
  {
    id: 682,
    price: 100,
    title: "Upgrade648",
    description: "upgrade648 description"
  },
  {
    id: 683,
    price: 100,
    title: "Upgrade649",
    description: "upgrade649 description"
  },
  {
    id: 684,
    price: 100,
    title: "Upgrade650",
    description: "upgrade650 description"
  },
  {
    id: 685,
    price: 100,
    title: "Upgrade651",
    description: "upgrade651 description"
  },
  {
    id: 686,
    price: 100,
    title: "Upgrade652",
    description: "upgrade652 description"
  },
  {
    id: 687,
    price: 100,
    title: "Upgrade653",
    description: "upgrade653 description"
  },
  {
    id: 688,
    price: 100,
    title: "Upgrade654",
    description: "upgrade654 description"
  },
  {
    id: 689,
    price: 100,
    title: "Upgrade655",
    description: "upgrade655 description"
  },
  {
    id: 690,
    price: 100,
    title: "Upgrade656",
    description: "upgrade656 description"
  },
  {
    id: 691,
    price: 100,
    title: "Upgrade657",
    description: "upgrade657 description"
  },
  {
    id: 692,
    price: 100,
    title: "Upgrade658",
    description: "upgrade658 description"
  },
  {
    id: 693,
    price: 100,
    title: "Upgrade659",
    description: "upgrade659 description"
  },
  {
    id: 694,
    price: 100,
    title: "Upgrade660",
    description: "upgrade660 description"
  },
  {
    id: 695,
    price: 100,
    title: "Upgrade661",
    description: "upgrade661 description"
  },
  {
    id: 696,
    price: 100,
    title: "Upgrade662",
    description: "upgrade662 description"
  },
  {
    id: 697,
    price: 100,
    title: "Upgrade663",
    description: "upgrade663 description"
  },
  {
    id: 698,
    price: 100,
    title: "Upgrade664",
    description: "upgrade664 description"
  },
  {
    id: 699,
    price: 100,
    title: "Upgrade665",
    description: "upgrade665 description"
  },
  {
    id: 700,
    price: 100,
    title: "Upgrade666",
    description: "upgrade666 description"
  },
  {
    id: 701,
    price: 100,
    title: "Upgrade667",
    description: "upgrade667 description"
  },
  {
    id: 702,
    price: 100,
    title: "Upgrade668",
    description: "upgrade668 description"
  },
  {
    id: 703,
    price: 100,
    title: "Upgrade669",
    description: "upgrade669 description"
  },
  {
    id: 704,
    price: 100,
    title: "Upgrade670",
    description: "upgrade670 description"
  },
  {
    id: 705,
    price: 100,
    title: "Upgrade671",
    description: "upgrade671 description"
  },
  {
    id: 706,
    price: 100,
    title: "Upgrade672",
    description: "upgrade672 description"
  },
  {
    id: 707,
    price: 100,
    title: "Upgrade673",
    description: "upgrade673 description"
  },
  {
    id: 708,
    price: 100,
    title: "Upgrade674",
    description: "upgrade674 description"
  },
  {
    id: 709,
    price: 100,
    title: "Upgrade675",
    description: "upgrade675 description"
  },
  {
    id: 710,
    price: 100,
    title: "Upgrade676",
    description: "upgrade676 description"
  },
  {
    id: 711,
    price: 100,
    title: "Upgrade677",
    description: "upgrade677 description"
  },
  {
    id: 712,
    price: 100,
    title: "Upgrade678",
    description: "upgrade678 description"
  },
  {
    id: 713,
    price: 100,
    title: "Upgrade679",
    description: "upgrade679 description"
  },
  {
    id: 714,
    price: 100,
    title: "Upgrade680",
    description: "upgrade680 description"
  },
  {
    id: 715,
    price: 100,
    title: "Upgrade681",
    description: "upgrade681 description"
  },
  {
    id: 716,
    price: 100,
    title: "Upgrade682",
    description: "upgrade682 description"
  },
  {
    id: 717,
    price: 100,
    title: "Upgrade683",
    description: "upgrade683 description"
  },
  {
    id: 718,
    price: 100,
    title: "Upgrade684",
    description: "upgrade684 description"
  },
  {
    id: 719,
    price: 100,
    title: "Upgrade685",
    description: "upgrade685 description"
  },
  {
    id: 720,
    price: 100,
    title: "Upgrade686",
    description: "upgrade686 description"
  },
  {
    id: 721,
    price: 100,
    title: "Upgrade687",
    description: "upgrade687 description"
  },
  {
    id: 722,
    price: 100,
    title: "Upgrade688",
    description: "upgrade688 description"
  },
  {
    id: 723,
    price: 100,
    title: "Upgrade689",
    description: "upgrade689 description"
  },
  {
    id: 724,
    price: 100,
    title: "Upgrade690",
    description: "upgrade690 description"
  },
  {
    id: 725,
    price: 100,
    title: "Upgrade691",
    description: "upgrade691 description"
  },
  {
    id: 726,
    price: 100,
    title: "Upgrade692",
    description: "upgrade692 description"
  },
  {
    id: 727,
    price: 100,
    title: "Upgrade693",
    description: "upgrade693 description"
  },
  {
    id: 728,
    price: 100,
    title: "Upgrade694",
    description: "upgrade694 description"
  },
  {
    id: 729,
    price: 100,
    title: "Upgrade695",
    description: "upgrade695 description"
  },
  {
    id: 730,
    price: 100,
    title: "Upgrade696",
    description: "upgrade696 description"
  },
  {
    id: 731,
    price: 100,
    title: "Upgrade697",
    description: "upgrade697 description"
  },
  {
    id: 732,
    price: 100,
    title: "Upgrade698",
    description: "upgrade698 description"
  },
  {
    id: 733,
    price: 100,
    title: "Upgrade699",
    description: "upgrade699 description"
  },
  {
    id: 734,
    price: 100,
    title: "Upgrade700",
    description: "upgrade700 description"
  },
  {
    id: 735,
    price: 100,
    title: "Upgrade701",
    description: "upgrade701 description"
  },
  {
    id: 736,
    price: 100,
    title: "Upgrade702",
    description: "upgrade702 description"
  },
  {
    id: 737,
    price: 100,
    title: "Upgrade703",
    description: "upgrade703 description"
  },
  {
    id: 738,
    price: 100,
    title: "Upgrade704",
    description: "upgrade704 description"
  },
  {
    id: 739,
    price: 100,
    title: "Upgrade705",
    description: "upgrade705 description"
  },
  {
    id: 740,
    price: 100,
    title: "Upgrade706",
    description: "upgrade706 description"
  },
  {
    id: 741,
    price: 100,
    title: "Upgrade707",
    description: "upgrade707 description"
  },
  {
    id: 742,
    price: 100,
    title: "Upgrade708",
    description: "upgrade708 description"
  },
  {
    id: 743,
    price: 100,
    title: "Upgrade709",
    description: "upgrade709 description"
  },
  {
    id: 744,
    price: 100,
    title: "Upgrade710",
    description: "upgrade710 description"
  },
  {
    id: 745,
    price: 100,
    title: "Upgrade711",
    description: "upgrade711 description"
  },
  {
    id: 746,
    price: 100,
    title: "Upgrade712",
    description: "upgrade712 description"
  },
  {
    id: 747,
    price: 100,
    title: "Upgrade713",
    description: "upgrade713 description"
  },
  {
    id: 748,
    price: 100,
    title: "Upgrade714",
    description: "upgrade714 description"
  },
  {
    id: 749,
    price: 100,
    title: "Upgrade715",
    description: "upgrade715 description"
  },
  {
    id: 750,
    price: 100,
    title: "Upgrade716",
    description: "upgrade716 description"
  },
  {
    id: 751,
    price: 100,
    title: "Upgrade717",
    description: "upgrade717 description"
  },
  {
    id: 752,
    price: 100,
    title: "Upgrade718",
    description: "upgrade718 description"
  },
  {
    id: 753,
    price: 100,
    title: "Upgrade719",
    description: "upgrade719 description"
  },
  {
    id: 754,
    price: 100,
    title: "Upgrade720",
    description: "upgrade720 description"
  },
  {
    id: 755,
    price: 100,
    title: "Upgrade721",
    description: "upgrade721 description"
  },
  {
    id: 756,
    price: 100,
    title: "Upgrade722",
    description: "upgrade722 description"
  },
  {
    id: 757,
    price: 100,
    title: "Upgrade723",
    description: "upgrade723 description"
  },
  {
    id: 758,
    price: 100,
    title: "Upgrade724",
    description: "upgrade724 description"
  },
  {
    id: 759,
    price: 100,
    title: "Upgrade725",
    description: "upgrade725 description"
  },
  {
    id: 760,
    price: 100,
    title: "Upgrade726",
    description: "upgrade726 description"
  },
  {
    id: 761,
    price: 100,
    title: "Upgrade727",
    description: "upgrade727 description"
  },
  {
    id: 762,
    price: 100,
    title: "Upgrade728",
    description: "upgrade728 description"
  },
  {
    id: 763,
    price: 100,
    title: "Upgrade729",
    description: "upgrade729 description"
  },
]
