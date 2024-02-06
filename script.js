"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var characters;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('It works!');
                return [4 /*yield*/, prisma.characters.createMany({
                        data: [
                            {
                                ID: 1,
                                CharacterName: 'A-Bomb'
                            },
                            {
                                ID: 2,
                                CharacterName: 'Abe Sapien'
                            },
                            {
                                ID: 3,
                                CharacterName: 'Abin Sur'
                            },
                            {
                                ID: 4,
                                CharacterName: 'Abomination'
                            },
                            {
                                ID: 5,
                                CharacterName: 'Abraxas'
                            },
                            {
                                ID: 6,
                                CharacterName: 'Absorbing Man'
                            },
                            {
                                ID: 7,
                                CharacterName: 'Adam Monroe'
                            },
                            {
                                ID: 8,
                                CharacterName: 'Adam Strange'
                            },
                            {
                                ID: 9,
                                CharacterName: 'Agent 13'
                            },
                            {
                                ID: 10,
                                CharacterName: 'Agent Bob'
                            },
                            {
                                ID: 11,
                                CharacterName: 'Agent Zero'
                            },
                            {
                                ID: 12,
                                CharacterName: 'Air-Walker'
                            },
                            {
                                ID: 13,
                                CharacterName: 'Ajax'
                            },
                            {
                                ID: 14,
                                CharacterName: 'Alan Scott'
                            },
                            {
                                ID: 15,
                                CharacterName: 'Alex Mercer'
                            },
                            {
                                ID: 16,
                                CharacterName: 'Alex Woolsly'
                            },
                            {
                                ID: 17,
                                CharacterName: 'Alfred Pennyworth'
                            },
                            {
                                ID: 18,
                                CharacterName: 'Alien'
                            },
                            {
                                ID: 19,
                                CharacterName: 'Allan Quatermain'
                            },
                            {
                                ID: 20,
                                CharacterName: 'Amazo'
                            },
                            {
                                ID: 21,
                                CharacterName: 'Ammo'
                            },
                            {
                                ID: 22,
                                CharacterName: 'Ando Masahashi'
                            },
                            {
                                ID: 23,
                                CharacterName: 'Angel'
                            },
                            {
                                ID: 24,
                                CharacterName: 'Angel'
                            },
                            {
                                ID: 25,
                                CharacterName: 'Angel Dust'
                            },
                            {
                                ID: 26,
                                CharacterName: 'Angel Salvadore'
                            },
                            {
                                ID: 27,
                                CharacterName: 'Angela'
                            },
                            {
                                ID: 28,
                                CharacterName: 'Animal Man'
                            },
                            {
                                ID: 29,
                                CharacterName: 'Annihilus'
                            },
                            {
                                ID: 30,
                                CharacterName: 'Ant-Man'
                            },
                            {
                                ID: 31,
                                CharacterName: 'Ant-Man II'
                            },
                            {
                                ID: 32,
                                CharacterName: 'Anti-Monitor'
                            },
                            {
                                ID: 33,
                                CharacterName: 'Anti-Spawn'
                            },
                            {
                                ID: 34,
                                CharacterName: 'Anti-Venom'
                            },
                            {
                                ID: 35,
                                CharacterName: 'Apocalypse'
                            },
                            {
                                ID: 36,
                                CharacterName: 'Aquababy'
                            },
                            {
                                ID: 37,
                                CharacterName: 'Aqualad'
                            },
                            {
                                ID: 38,
                                CharacterName: 'Aquaman'
                            },
                            {
                                ID: 39,
                                CharacterName: 'Arachne'
                            },
                            {
                                ID: 40,
                                CharacterName: 'Archangel'
                            },
                            {
                                ID: 41,
                                CharacterName: 'Arclight'
                            },
                            {
                                ID: 42,
                                CharacterName: 'Ardina'
                            },
                            {
                                ID: 43,
                                CharacterName: 'Ares'
                            },
                            {
                                ID: 44,
                                CharacterName: 'Ariel'
                            },
                            {
                                ID: 45,
                                CharacterName: 'Armor'
                            },
                            {
                                ID: 46,
                                CharacterName: 'Arsenal'
                            },
                            {
                                ID: 47,
                                CharacterName: 'Astro Boy'
                            },
                            {
                                ID: 48,
                                CharacterName: 'Atlas'
                            },
                            {
                                ID: 49,
                                CharacterName: 'Atlas'
                            },
                            {
                                ID: 50,
                                CharacterName: 'Atom'
                            },
                            {
                                ID: 51,
                                CharacterName: 'Atom'
                            },
                            {
                                ID: 52,
                                CharacterName: 'Atom Girl'
                            },
                            {
                                ID: 53,
                                CharacterName: 'Atom II'
                            },
                            {
                                ID: 54,
                                CharacterName: 'Atom III'
                            },
                            {
                                ID: 55,
                                CharacterName: 'Atom IV'
                            },
                            {
                                ID: 56,
                                CharacterName: 'Aurora'
                            },
                            {
                                ID: 57,
                                CharacterName: 'Azazel'
                            },
                            {
                                ID: 58,
                                CharacterName: 'Azrael'
                            },
                            {
                                ID: 59,
                                CharacterName: 'Aztar'
                            },
                            {
                                ID: 60,
                                CharacterName: 'Bane'
                            },
                            {
                                ID: 61,
                                CharacterName: 'Banshee'
                            },
                            {
                                ID: 62,
                                CharacterName: 'Bantam'
                            },
                            {
                                ID: 63,
                                CharacterName: 'Batgirl'
                            },
                            {
                                ID: 64,
                                CharacterName: 'Batgirl'
                            },
                            {
                                ID: 65,
                                CharacterName: 'Batgirl III'
                            },
                            {
                                ID: 66,
                                CharacterName: 'Batgirl IV'
                            },
                            {
                                ID: 67,
                                CharacterName: 'Batgirl V'
                            },
                            {
                                ID: 68,
                                CharacterName: 'Batgirl VI'
                            },
                            {
                                ID: 69,
                                CharacterName: 'Batman'
                            },
                            {
                                ID: 70,
                                CharacterName: 'Batman'
                            },
                            {
                                ID: 71,
                                CharacterName: 'Batman II'
                            },
                            {
                                ID: 72,
                                CharacterName: 'Battlestar'
                            },
                            {
                                ID: 73,
                                CharacterName: 'Batwoman V'
                            },
                            {
                                ID: 74,
                                CharacterName: 'Beak'
                            },
                            {
                                ID: 75,
                                CharacterName: 'Beast'
                            },
                            {
                                ID: 76,
                                CharacterName: 'Beast Boy'
                            },
                            {
                                ID: 77,
                                CharacterName: 'Beetle'
                            },
                            {
                                ID: 78,
                                CharacterName: 'Ben 10'
                            },
                            {
                                ID: 79,
                                CharacterName: 'Beta Ray Bill'
                            },
                            {
                                ID: 80,
                                CharacterName: 'Beyonder'
                            },
                            {
                                ID: 81,
                                CharacterName: 'Big Barda'
                            },
                            {
                                ID: 82,
                                CharacterName: 'Big Daddy'
                            },
                            {
                                ID: 83,
                                CharacterName: 'Big Man'
                            },
                            {
                                ID: 84,
                                CharacterName: 'Bill Harken'
                            },
                            {
                                ID: 85,
                                CharacterName: 'Billy Kincaid'
                            },
                            {
                                ID: 86,
                                CharacterName: 'Binary'
                            },
                            {
                                ID: 87,
                                CharacterName: 'Bionic Woman'
                            },
                            {
                                ID: 88,
                                CharacterName: 'Bird-Brain'
                            },
                            {
                                ID: 89,
                                CharacterName: 'Bird-Man'
                            },
                            {
                                ID: 90,
                                CharacterName: 'Bird-Man II'
                            },
                            {
                                ID: 91,
                                CharacterName: 'Birdman'
                            },
                            {
                                ID: 92,
                                CharacterName: 'Bishop'
                            },
                            {
                                ID: 93,
                                CharacterName: 'Bizarro'
                            },
                            {
                                ID: 94,
                                CharacterName: 'Black Abbott'
                            },
                            {
                                ID: 95,
                                CharacterName: 'Black Adam'
                            },
                            {
                                ID: 96,
                                CharacterName: 'Black Bolt'
                            },
                            {
                                ID: 97,
                                CharacterName: 'Black Canary'
                            },
                            {
                                ID: 98,
                                CharacterName: 'Black Canary'
                            },
                            {
                                ID: 99,
                                CharacterName: 'Black Cat'
                            },
                            {
                                ID: 100,
                                CharacterName: 'Black Flash'
                            },
                            {
                                ID: 101,
                                CharacterName: 'Black Goliath'
                            },
                            {
                                ID: 102,
                                CharacterName: 'Black Knight III'
                            },
                            {
                                ID: 103,
                                CharacterName: 'Black Lightning'
                            },
                            {
                                ID: 104,
                                CharacterName: 'Black Mamba'
                            },
                            {
                                ID: 105,
                                CharacterName: 'Black Manta'
                            },
                            {
                                ID: 106,
                                CharacterName: 'Black Panther'
                            },
                            {
                                ID: 107,
                                CharacterName: 'Black Widow'
                            },
                            {
                                ID: 108,
                                CharacterName: 'Black Widow II'
                            },
                            {
                                ID: 109,
                                CharacterName: 'Blackout'
                            },
                            {
                                ID: 110,
                                CharacterName: 'Blackwing'
                            },
                            {
                                ID: 111,
                                CharacterName: 'Blackwulf'
                            },
                            {
                                ID: 112,
                                CharacterName: 'Blade'
                            },
                            {
                                ID: 113,
                                CharacterName: 'Blaquesmith'
                            },
                            {
                                ID: 114,
                                CharacterName: 'Bling!'
                            },
                            {
                                ID: 115,
                                CharacterName: 'Blink'
                            },
                            {
                                ID: 116,
                                CharacterName: 'Blizzard'
                            },
                            {
                                ID: 117,
                                CharacterName: 'Blizzard'
                            },
                            {
                                ID: 118,
                                CharacterName: 'Blizzard II'
                            },
                            {
                                ID: 119,
                                CharacterName: 'Blob'
                            },
                            {
                                ID: 120,
                                CharacterName: 'Bloodaxe'
                            },
                            {
                                ID: 121,
                                CharacterName: 'Bloodhawk'
                            },
                            {
                                ID: 122,
                                CharacterName: 'Bloodwraith'
                            },
                            {
                                ID: 123,
                                CharacterName: 'Blue Beetle'
                            },
                            {
                                ID: 124,
                                CharacterName: 'Blue Beetle'
                            },
                            {
                                ID: 125,
                                CharacterName: 'Blue Beetle II'
                            },
                            {
                                ID: 126,
                                CharacterName: 'Blue Beetle III'
                            },
                            {
                                ID: 127,
                                CharacterName: 'Boba Fett'
                            },
                            {
                                ID: 128,
                                CharacterName: 'Bolt'
                            },
                            {
                                ID: 129,
                                CharacterName: 'Bomb Queen'
                            },
                            {
                                ID: 130,
                                CharacterName: 'Boom-Boom'
                            },
                            {
                                ID: 131,
                                CharacterName: 'Boomer'
                            },
                            {
                                ID: 132,
                                CharacterName: 'Booster Gold'
                            },
                            {
                                ID: 133,
                                CharacterName: 'Box'
                            },
                            {
                                ID: 134,
                                CharacterName: 'Box III'
                            },
                            {
                                ID: 135,
                                CharacterName: 'Box IV'
                            },
                            {
                                ID: 136,
                                CharacterName: 'Brainiac'
                            },
                            {
                                ID: 137,
                                CharacterName: 'Brainiac 5'
                            },
                            {
                                ID: 138,
                                CharacterName: 'Brother Voodoo'
                            },
                            {
                                ID: 139,
                                CharacterName: 'Brundlefly'
                            },
                            {
                                ID: 140,
                                CharacterName: 'Buffy'
                            },
                            {
                                ID: 141,
                                CharacterName: 'Bullseye'
                            },
                            {
                                ID: 142,
                                CharacterName: 'Bumblebee'
                            },
                            {
                                ID: 143,
                                CharacterName: 'Bumbleboy'
                            },
                            {
                                ID: 144,
                                CharacterName: 'Bushido'
                            },
                            {
                                ID: 145,
                                CharacterName: 'Cable'
                            },
                            {
                                ID: 146,
                                CharacterName: 'Callisto'
                            },
                            {
                                ID: 147,
                                CharacterName: 'Cameron Hicks'
                            },
                            {
                                ID: 148,
                                CharacterName: 'Cannonball'
                            },
                            {
                                ID: 149,
                                CharacterName: 'Captain America'
                            },
                            {
                                ID: 150,
                                CharacterName: 'Captain Atom'
                            },
                            {
                                ID: 151,
                                CharacterName: 'Captain Britain'
                            },
                            {
                                ID: 152,
                                CharacterName: 'Captain Cold'
                            },
                            {
                                ID: 153,
                                CharacterName: 'Captain Epic'
                            },
                            {
                                ID: 154,
                                CharacterName: 'Captain Hindsight'
                            },
                            {
                                ID: 155,
                                CharacterName: 'Captain Mar-vell'
                            },
                            {
                                ID: 156,
                                CharacterName: 'Captain Marvel'
                            },
                            {
                                ID: 157,
                                CharacterName: 'Captain Marvel'
                            },
                            {
                                ID: 158,
                                CharacterName: 'Captain Marvel II'
                            },
                            {
                                ID: 159,
                                CharacterName: 'Captain Midnight'
                            },
                            {
                                ID: 160,
                                CharacterName: 'Captain Planet'
                            },
                            {
                                ID: 161,
                                CharacterName: 'Captain Universe'
                            },
                            {
                                ID: 162,
                                CharacterName: 'Carnage'
                            },
                            {
                                ID: 163,
                                CharacterName: 'Cat'
                            },
                            {
                                ID: 164,
                                CharacterName: 'Cat II'
                            },
                            {
                                ID: 165,
                                CharacterName: 'Catwoman'
                            },
                            {
                                ID: 166,
                                CharacterName: 'Cecilia Reyes'
                            },
                            {
                                ID: 167,
                                CharacterName: 'Century'
                            },
                            {
                                ID: 168,
                                CharacterName: 'Cerebra'
                            },
                            {
                                ID: 169,
                                CharacterName: 'Chamber'
                            },
                            {
                                ID: 170,
                                CharacterName: 'Chameleon'
                            },
                            {
                                ID: 171,
                                CharacterName: 'Changeling'
                            },
                            {
                                ID: 172,
                                CharacterName: 'Cheetah'
                            },
                            {
                                ID: 173,
                                CharacterName: 'Cheetah II'
                            },
                            {
                                ID: 174,
                                CharacterName: 'Cheetah III'
                            },
                            {
                                ID: 175,
                                CharacterName: 'Chromos'
                            },
                            {
                                ID: 176,
                                CharacterName: 'Chuck Norris'
                            },
                            {
                                ID: 177,
                                CharacterName: 'Citizen Steel'
                            },
                            {
                                ID: 178,
                                CharacterName: 'Claire Bennet'
                            },
                            {
                                ID: 179,
                                CharacterName: 'Clea'
                            },
                            {
                                ID: 180,
                                CharacterName: 'Cloak'
                            },
                            {
                                ID: 181,
                                CharacterName: 'Clock King'
                            },
                            {
                                ID: 182,
                                CharacterName: 'Cogliostro'
                            },
                            {
                                ID: 183,
                                CharacterName: 'Colin Wagner'
                            },
                            {
                                ID: 184,
                                CharacterName: 'Colossal Boy'
                            },
                            {
                                ID: 185,
                                CharacterName: 'Colossus'
                            },
                            {
                                ID: 186,
                                CharacterName: 'Copycat'
                            },
                            {
                                ID: 187,
                                CharacterName: 'Corsair'
                            },
                            {
                                ID: 188,
                                CharacterName: 'Cottonmouth'
                            },
                            {
                                ID: 189,
                                CharacterName: 'Crimson Crusader'
                            },
                            {
                                ID: 190,
                                CharacterName: 'Crimson Dynamo'
                            },
                            {
                                ID: 191,
                                CharacterName: 'Crystal'
                            },
                            {
                                ID: 192,
                                CharacterName: 'Curse'
                            },
                            {
                                ID: 193,
                                CharacterName: 'Cy-Gor'
                            },
                            {
                                ID: 194,
                                CharacterName: 'Cyborg'
                            },
                            {
                                ID: 195,
                                CharacterName: 'Cyborg Superman'
                            },
                            {
                                ID: 196,
                                CharacterName: 'Cyclops'
                            },
                            {
                                ID: 197,
                                CharacterName: 'Cypher'
                            },
                            {
                                ID: 198,
                                CharacterName: 'Dagger'
                            },
                            {
                                ID: 199,
                                CharacterName: 'Danny Cooper'
                            },
                            {
                                ID: 200,
                                CharacterName: 'Daphne Powell'
                            },
                            {
                                ID: 201,
                                CharacterName: 'Daredevil'
                            },
                            {
                                ID: 202,
                                CharacterName: 'Darkhawk'
                            },
                            {
                                ID: 203,
                                CharacterName: 'Darkman'
                            },
                            {
                                ID: 204,
                                CharacterName: 'Darkseid'
                            },
                            {
                                ID: 205,
                                CharacterName: 'Darkside'
                            },
                            {
                                ID: 206,
                                CharacterName: 'Darkstar'
                            },
                            {
                                ID: 207,
                                CharacterName: 'Darth Maul'
                            },
                            {
                                ID: 208,
                                CharacterName: 'Darth Vader'
                            },
                            {
                                ID: 209,
                                CharacterName: 'Dash'
                            },
                            {
                                ID: 210,
                                CharacterName: 'Data'
                            },
                            {
                                ID: 211,
                                CharacterName: 'Dazzler'
                            },
                            {
                                ID: 212,
                                CharacterName: 'Deadman'
                            },
                            {
                                ID: 213,
                                CharacterName: 'Deadpool'
                            },
                            {
                                ID: 214,
                                CharacterName: 'Deadshot'
                            },
                            {
                                ID: 215,
                                CharacterName: 'Deathlok'
                            },
                            {
                                ID: 216,
                                CharacterName: 'Deathstroke'
                            },
                            {
                                ID: 217,
                                CharacterName: 'Demogoblin'
                            },
                            {
                                ID: 218,
                                CharacterName: 'Destroyer'
                            },
                            {
                                ID: 219,
                                CharacterName: 'Diamondback'
                            },
                            {
                                ID: 220,
                                CharacterName: 'DL Hawkins'
                            },
                            {
                                ID: 221,
                                CharacterName: 'Doc Samson'
                            },
                            {
                                ID: 222,
                                CharacterName: 'Doctor Doom'
                            },
                            {
                                ID: 223,
                                CharacterName: 'Doctor Doom II'
                            },
                            {
                                ID: 224,
                                CharacterName: 'Doctor Fate'
                            },
                            {
                                ID: 225,
                                CharacterName: 'Doctor Octopus'
                            },
                            {
                                ID: 226,
                                CharacterName: 'Doctor Strange'
                            },
                            {
                                ID: 227,
                                CharacterName: 'Domino'
                            },
                            {
                                ID: 228,
                                CharacterName: 'Donatello'
                            },
                            {
                                ID: 229,
                                CharacterName: 'Donna Troy'
                            },
                            {
                                ID: 230,
                                CharacterName: 'Doomsday'
                            },
                            {
                                ID: 231,
                                CharacterName: 'Doppelganger'
                            },
                            {
                                ID: 232,
                                CharacterName: 'Dormammu'
                            },
                            {
                                ID: 233,
                                CharacterName: 'Dr Manhattan'
                            },
                            {
                                ID: 234,
                                CharacterName: 'Drax the Destroyer'
                            },
                            {
                                ID: 235,
                                CharacterName: 'Ego'
                            },
                            {
                                ID: 236,
                                CharacterName: 'Elastigirl'
                            },
                            {
                                ID: 237,
                                CharacterName: 'Electro'
                            },
                            {
                                ID: 238,
                                CharacterName: 'Elektra'
                            },
                            {
                                ID: 239,
                                CharacterName: 'Elle Bishop'
                            },
                            {
                                ID: 240,
                                CharacterName: 'Elongated Man'
                            },
                            {
                                ID: 241,
                                CharacterName: 'Emma Frost'
                            },
                            {
                                ID: 242,
                                CharacterName: 'Enchantress'
                            },
                            {
                                ID: 243,
                                CharacterName: 'Energy'
                            },
                            {
                                ID: 244,
                                CharacterName: 'ERG-1'
                            },
                            {
                                ID: 245,
                                CharacterName: 'Ethan Hunt'
                            },
                            {
                                ID: 246,
                                CharacterName: 'Etrigan'
                            },
                            {
                                ID: 247,
                                CharacterName: 'Evil Deadpool'
                            },
                            {
                                ID: 248,
                                CharacterName: 'Evilhawk'
                            },
                            {
                                ID: 249,
                                CharacterName: 'Exodus'
                            },
                            {
                                ID: 250,
                                CharacterName: 'Fabian Cortez'
                            },
                            {
                                ID: 251,
                                CharacterName: 'Falcon'
                            },
                            {
                                ID: 252,
                                CharacterName: 'Fallen One II'
                            },
                            {
                                ID: 253,
                                CharacterName: 'Faora'
                            },
                            {
                                ID: 254,
                                CharacterName: 'Feral'
                            },
                            {
                                ID: 255,
                                CharacterName: 'Fighting Spirit'
                            },
                            {
                                ID: 256,
                                CharacterName: 'Fin Fang Foom'
                            },
                            {
                                ID: 257,
                                CharacterName: 'Firebird'
                            },
                            {
                                ID: 258,
                                CharacterName: 'Firelord'
                            },
                            {
                                ID: 259,
                                CharacterName: 'Firestar'
                            },
                            {
                                ID: 260,
                                CharacterName: 'Firestorm'
                            },
                            {
                                ID: 261,
                                CharacterName: 'Firestorm'
                            },
                            {
                                ID: 262,
                                CharacterName: 'Fixer'
                            },
                            {
                                ID: 263,
                                CharacterName: 'Flash'
                            },
                            {
                                ID: 264,
                                CharacterName: 'Flash Gordon'
                            },
                            {
                                ID: 265,
                                CharacterName: 'Flash II'
                            },
                            {
                                ID: 266,
                                CharacterName: 'Flash III'
                            },
                            {
                                ID: 267,
                                CharacterName: 'Flash IV'
                            },
                            {
                                ID: 268,
                                CharacterName: 'Forge'
                            },
                            {
                                ID: 269,
                                CharacterName: 'Franklin Richards'
                            },
                            {
                                ID: 270,
                                CharacterName: 'Franklin Storm'
                            },
                            {
                                ID: 271,
                                CharacterName: 'Frenzy'
                            },
                            {
                                ID: 272,
                                CharacterName: 'Frigga'
                            },
                            {
                                ID: 273,
                                CharacterName: 'Galactus'
                            },
                            {
                                ID: 274,
                                CharacterName: 'Gambit'
                            },
                            {
                                ID: 275,
                                CharacterName: 'Gamora'
                            },
                            {
                                ID: 276,
                                CharacterName: 'Garbage Man'
                            },
                            {
                                ID: 277,
                                CharacterName: 'Gary Bell'
                            },
                            {
                                ID: 278,
                                CharacterName: 'General Zod'
                            },
                            {
                                ID: 279,
                                CharacterName: 'Genesis'
                            },
                            {
                                ID: 280,
                                CharacterName: 'Ghost Rider'
                            },
                            {
                                ID: 281,
                                CharacterName: 'Ghost Rider II'
                            },
                            {
                                ID: 282,
                                CharacterName: 'Giant-Man'
                            },
                            {
                                ID: 283,
                                CharacterName: 'Giant-Man II'
                            },
                            {
                                ID: 284,
                                CharacterName: 'Giganta'
                            },
                            {
                                ID: 285,
                                CharacterName: 'Gladiator'
                            },
                            {
                                ID: 286,
                                CharacterName: 'Goblin Queen'
                            },
                            {
                                ID: 287,
                                CharacterName: 'Godzilla'
                            },
                            {
                                ID: 288,
                                CharacterName: 'Gog'
                            },
                            {
                                ID: 289,
                                CharacterName: 'Goku'
                            },
                            {
                                ID: 290,
                                CharacterName: 'Goliath'
                            },
                            {
                                ID: 291,
                                CharacterName: 'Goliath'
                            },
                            {
                                ID: 292,
                                CharacterName: 'Goliath'
                            },
                            {
                                ID: 293,
                                CharacterName: 'Goliath IV'
                            },
                            {
                                ID: 294,
                                CharacterName: 'Gorilla Grodd'
                            },
                            {
                                ID: 295,
                                CharacterName: 'Granny Goodness'
                            },
                            {
                                ID: 296,
                                CharacterName: 'Gravity'
                            },
                            {
                                ID: 297,
                                CharacterName: 'Greedo'
                            },
                            {
                                ID: 298,
                                CharacterName: 'Green Arrow'
                            },
                            {
                                ID: 299,
                                CharacterName: 'Green Goblin'
                            },
                            {
                                ID: 300,
                                CharacterName: 'Green Goblin II'
                            },
                            {
                                ID: 301,
                                CharacterName: 'Green Goblin III'
                            },
                            {
                                ID: 302,
                                CharacterName: 'Green Goblin IV'
                            },
                            {
                                ID: 303,
                                CharacterName: 'Groot'
                            },
                            {
                                ID: 304,
                                CharacterName: 'Guardian'
                            },
                            {
                                ID: 305,
                                CharacterName: 'Guy Gardner'
                            },
                            {
                                ID: 306,
                                CharacterName: 'Hal Jordan'
                            },
                            {
                                ID: 307,
                                CharacterName: 'Han Solo'
                            },
                            {
                                ID: 308,
                                CharacterName: 'Hancock'
                            },
                            {
                                ID: 309,
                                CharacterName: 'Harley Quinn'
                            },
                            {
                                ID: 310,
                                CharacterName: 'Harry Potter'
                            },
                            {
                                ID: 311,
                                CharacterName: 'Havok'
                            },
                            {
                                ID: 312,
                                CharacterName: 'Hawk'
                            },
                            {
                                ID: 313,
                                CharacterName: 'Hawkeye'
                            },
                            {
                                ID: 314,
                                CharacterName: 'Hawkeye II'
                            },
                            {
                                ID: 315,
                                CharacterName: 'Hawkgirl'
                            },
                            {
                                ID: 316,
                                CharacterName: 'Hawkman'
                            },
                            {
                                ID: 317,
                                CharacterName: 'Hawkwoman'
                            },
                            {
                                ID: 318,
                                CharacterName: 'Hawkwoman II'
                            },
                            {
                                ID: 319,
                                CharacterName: 'Hawkwoman III'
                            },
                            {
                                ID: 320,
                                CharacterName: 'Heat Wave'
                            },
                            {
                                ID: 321,
                                CharacterName: 'Hela'
                            },
                            {
                                ID: 322,
                                CharacterName: 'Hellboy'
                            },
                            {
                                ID: 323,
                                CharacterName: 'Hellcat'
                            },
                            {
                                ID: 324,
                                CharacterName: 'Hellstorm'
                            },
                            {
                                ID: 325,
                                CharacterName: 'Hercules'
                            },
                            {
                                ID: 326,
                                CharacterName: 'Hiro Nakamura'
                            },
                            {
                                ID: 327,
                                CharacterName: 'Hit-Girl'
                            },
                            {
                                ID: 328,
                                CharacterName: 'Hobgoblin'
                            },
                            {
                                ID: 329,
                                CharacterName: 'Hollow'
                            },
                            {
                                ID: 330,
                                CharacterName: 'Hope Summers'
                            },
                            {
                                ID: 331,
                                CharacterName: 'Howard the Duck'
                            },
                            {
                                ID: 332,
                                CharacterName: 'Hulk'
                            },
                            {
                                ID: 333,
                                CharacterName: 'Human Torch'
                            },
                            {
                                ID: 334,
                                CharacterName: 'Huntress'
                            },
                            {
                                ID: 335,
                                CharacterName: 'Husk'
                            },
                            {
                                ID: 336,
                                CharacterName: 'Hybrid'
                            },
                            {
                                ID: 337,
                                CharacterName: 'Hydro-Man'
                            },
                            {
                                ID: 338,
                                CharacterName: 'Hyperion'
                            },
                            {
                                ID: 339,
                                CharacterName: 'Iceman'
                            },
                            {
                                ID: 340,
                                CharacterName: 'Impulse'
                            },
                            {
                                ID: 341,
                                CharacterName: 'Indiana Jones'
                            },
                            {
                                ID: 342,
                                CharacterName: 'Indigo'
                            },
                            {
                                ID: 343,
                                CharacterName: 'Ink'
                            },
                            {
                                ID: 344,
                                CharacterName: 'Invisible Woman'
                            },
                            {
                                ID: 345,
                                CharacterName: 'Iron Fist'
                            },
                            {
                                ID: 346,
                                CharacterName: 'Iron Man'
                            },
                            {
                                ID: 347,
                                CharacterName: 'Iron Monger'
                            },
                            {
                                ID: 348,
                                CharacterName: 'Isis'
                            },
                            {
                                ID: 349,
                                CharacterName: 'Jack Bauer'
                            },
                            {
                                ID: 350,
                                CharacterName: 'Jack of Hearts'
                            },
                            {
                                ID: 351,
                                CharacterName: 'Jack-Jack'
                            },
                            {
                                ID: 352,
                                CharacterName: 'James Bond'
                            },
                            {
                                ID: 353,
                                CharacterName: 'James T. Kirk'
                            },
                            {
                                ID: 354,
                                CharacterName: 'Jar Jar Binks'
                            },
                            {
                                ID: 355,
                                CharacterName: 'Jason Bourne'
                            },
                            {
                                ID: 356,
                                CharacterName: 'Jean Grey'
                            },
                            {
                                ID: 357,
                                CharacterName: 'Jean-Luc Picard'
                            },
                            {
                                ID: 358,
                                CharacterName: 'Jennifer Kale'
                            },
                            {
                                ID: 359,
                                CharacterName: 'Jesse Quick'
                            },
                            {
                                ID: 360,
                                CharacterName: 'Jessica Cruz'
                            },
                            {
                                ID: 361,
                                CharacterName: 'Jessica Jones'
                            },
                            {
                                ID: 362,
                                CharacterName: 'Jessica Sanders'
                            },
                            {
                                ID: 363,
                                CharacterName: 'Jigsaw'
                            },
                            {
                                ID: 364,
                                CharacterName: 'Jim Powell'
                            },
                            {
                                ID: 365,
                                CharacterName: 'JJ Powell'
                            },
                            {
                                ID: 366,
                                CharacterName: 'Johann Krauss'
                            },
                            {
                                ID: 367,
                                CharacterName: 'John Constantine'
                            },
                            {
                                ID: 368,
                                CharacterName: 'John Stewart'
                            },
                            {
                                ID: 369,
                                CharacterName: 'John Wraith'
                            },
                            {
                                ID: 370,
                                CharacterName: 'Joker'
                            },
                            {
                                ID: 371,
                                CharacterName: 'Jolt'
                            },
                            {
                                ID: 372,
                                CharacterName: 'Jubilee'
                            },
                            {
                                ID: 373,
                                CharacterName: 'Judge Dredd'
                            },
                            {
                                ID: 374,
                                CharacterName: 'Juggernaut'
                            },
                            {
                                ID: 375,
                                CharacterName: 'Junkpile'
                            },
                            {
                                ID: 376,
                                CharacterName: 'Justice'
                            },
                            {
                                ID: 377,
                                CharacterName: 'Jyn Erso'
                            },
                            {
                                ID: 378,
                                CharacterName: 'K-2SO'
                            },
                            {
                                ID: 379,
                                CharacterName: 'Kang'
                            },
                            {
                                ID: 380,
                                CharacterName: 'Kathryn Janeway'
                            },
                            {
                                ID: 381,
                                CharacterName: 'Katniss Everdeen'
                            },
                            {
                                ID: 382,
                                CharacterName: 'Kevin 11'
                            },
                            {
                                ID: 383,
                                CharacterName: 'Kick-Ass'
                            },
                            {
                                ID: 384,
                                CharacterName: 'Kid Flash'
                            },
                            {
                                ID: 385,
                                CharacterName: 'Kid Flash II'
                            },
                            {
                                ID: 386,
                                CharacterName: 'Killer Croc'
                            },
                            {
                                ID: 387,
                                CharacterName: 'Killer Frost'
                            },
                            {
                                ID: 388,
                                CharacterName: 'Kilowog'
                            },
                            {
                                ID: 389,
                                CharacterName: 'King Kong'
                            },
                            {
                                ID: 390,
                                CharacterName: 'King Shark'
                            },
                            {
                                ID: 391,
                                CharacterName: 'Kingpin'
                            },
                            {
                                ID: 392,
                                CharacterName: 'Klaw'
                            },
                            {
                                ID: 393,
                                CharacterName: 'Kool-Aid Man'
                            },
                            {
                                ID: 394,
                                CharacterName: 'Kraven II'
                            },
                            {
                                ID: 395,
                                CharacterName: 'Kraven the Hunter'
                            },
                            {
                                ID: 396,
                                CharacterName: 'Krypto'
                            },
                            {
                                ID: 397,
                                CharacterName: 'Kyle Rayner'
                            },
                            {
                                ID: 398,
                                CharacterName: 'Kylo Ren'
                            },
                            {
                                ID: 399,
                                CharacterName: 'Lady Bullseye'
                            },
                            {
                                ID: 400,
                                CharacterName: 'Lady Deathstrike'
                            },
                            {
                                ID: 401,
                                CharacterName: 'Leader'
                            },
                            {
                                ID: 402,
                                CharacterName: 'Leech'
                            },
                            {
                                ID: 403,
                                CharacterName: 'Legion'
                            },
                            {
                                ID: 404,
                                CharacterName: 'Leonardo'
                            },
                            {
                                ID: 405,
                                CharacterName: 'Lex Luthor'
                            },
                            {
                                ID: 406,
                                CharacterName: 'Light Lass'
                            },
                            {
                                ID: 407,
                                CharacterName: 'Lightning Lad'
                            },
                            {
                                ID: 408,
                                CharacterName: 'Lightning Lord'
                            },
                            {
                                ID: 409,
                                CharacterName: 'Living Brain'
                            },
                            {
                                ID: 410,
                                CharacterName: 'Living Tribunal'
                            },
                            {
                                ID: 411,
                                CharacterName: 'Liz Sherman'
                            },
                            {
                                ID: 412,
                                CharacterName: 'Lizard'
                            },
                            {
                                ID: 413,
                                CharacterName: 'Lobo'
                            },
                            {
                                ID: 414,
                                CharacterName: 'Loki'
                            },
                            {
                                ID: 415,
                                CharacterName: 'Longshot'
                            },
                            {
                                ID: 416,
                                CharacterName: 'Luke Cage'
                            },
                            {
                                ID: 417,
                                CharacterName: 'Luke Campbell'
                            },
                            {
                                ID: 418,
                                CharacterName: 'Luke Skywalker'
                            },
                            {
                                ID: 419,
                                CharacterName: 'Luna'
                            },
                            {
                                ID: 420,
                                CharacterName: 'Lyja'
                            },
                            {
                                ID: 421,
                                CharacterName: 'Mach-IV'
                            },
                            {
                                ID: 422,
                                CharacterName: 'Machine Man'
                            },
                            {
                                ID: 423,
                                CharacterName: 'Magneto'
                            },
                            {
                                ID: 424,
                                CharacterName: 'Magog'
                            },
                            {
                                ID: 425,
                                CharacterName: 'Magus'
                            },
                            {
                                ID: 426,
                                CharacterName: 'Man of Miracles'
                            },
                            {
                                ID: 427,
                                CharacterName: 'Man-Bat'
                            },
                            {
                                ID: 428,
                                CharacterName: 'Man-Thing'
                            },
                            {
                                ID: 429,
                                CharacterName: 'Man-Wolf'
                            },
                            {
                                ID: 430,
                                CharacterName: 'Mandarin'
                            },
                            {
                                ID: 431,
                                CharacterName: 'Mantis'
                            },
                            {
                                ID: 432,
                                CharacterName: 'Martian Manhunter'
                            },
                            {
                                ID: 433,
                                CharacterName: 'Marvel Girl'
                            },
                            {
                                ID: 434,
                                CharacterName: 'Master Brood'
                            },
                            {
                                ID: 435,
                                CharacterName: 'Master Chief'
                            },
                            {
                                ID: 436,
                                CharacterName: 'Match'
                            },
                            {
                                ID: 437,
                                CharacterName: 'Matt Parkman'
                            },
                            {
                                ID: 438,
                                CharacterName: 'Maverick'
                            },
                            {
                                ID: 439,
                                CharacterName: 'Maxima'
                            },
                            {
                                ID: 440,
                                CharacterName: 'Maya Herrera'
                            },
                            {
                                ID: 441,
                                CharacterName: 'Medusa'
                            },
                            {
                                ID: 442,
                                CharacterName: 'Meltdown'
                            },
                            {
                                ID: 443,
                                CharacterName: 'Mephisto'
                            },
                            {
                                ID: 444,
                                CharacterName: 'Mera'
                            },
                            {
                                ID: 445,
                                CharacterName: 'Metallo'
                            },
                            {
                                ID: 446,
                                CharacterName: 'Metamorpho'
                            },
                            {
                                ID: 447,
                                CharacterName: 'Meteorite'
                            },
                            {
                                ID: 448,
                                CharacterName: 'Metron'
                            },
                            {
                                ID: 449,
                                CharacterName: 'Micah Sanders'
                            },
                            {
                                ID: 450,
                                CharacterName: 'Michelangelo'
                            },
                            {
                                ID: 451,
                                CharacterName: 'Micro Lad'
                            },
                            {
                                ID: 452,
                                CharacterName: 'Mimic'
                            },
                            {
                                ID: 453,
                                CharacterName: 'Minna Murray'
                            },
                            {
                                ID: 454,
                                CharacterName: 'Misfit'
                            },
                            {
                                ID: 455,
                                CharacterName: 'Miss Martian'
                            },
                            {
                                ID: 456,
                                CharacterName: 'Mister Fantastic'
                            },
                            {
                                ID: 457,
                                CharacterName: 'Mister Freeze'
                            },
                            {
                                ID: 458,
                                CharacterName: 'Mister Knife'
                            },
                            {
                                ID: 459,
                                CharacterName: 'Mister Mxyzptlk'
                            },
                            {
                                ID: 460,
                                CharacterName: 'Mister Sinister'
                            },
                            {
                                ID: 461,
                                CharacterName: 'Mister Zsasz'
                            },
                            {
                                ID: 462,
                                CharacterName: 'Mockingbird'
                            },
                            {
                                ID: 463,
                                CharacterName: 'MODOK'
                            },
                            {
                                ID: 464,
                                CharacterName: 'Mogo'
                            },
                            {
                                ID: 465,
                                CharacterName: 'Mohinder Suresh'
                            },
                            {
                                ID: 466,
                                CharacterName: 'Moloch'
                            },
                            {
                                ID: 467,
                                CharacterName: 'Molten Man'
                            },
                            {
                                ID: 468,
                                CharacterName: 'Monarch'
                            },
                            {
                                ID: 469,
                                CharacterName: 'Monica Dawson'
                            },
                            {
                                ID: 470,
                                CharacterName: 'Moon Knight'
                            },
                            {
                                ID: 471,
                                CharacterName: 'Moonstone'
                            },
                            {
                                ID: 472,
                                CharacterName: 'Morlun'
                            },
                            {
                                ID: 473,
                                CharacterName: 'Morph'
                            },
                            {
                                ID: 474,
                                CharacterName: 'Moses Magnum'
                            },
                            {
                                ID: 475,
                                CharacterName: 'Mr Immortal'
                            },
                            {
                                ID: 476,
                                CharacterName: 'Mr Incredible'
                            },
                            {
                                ID: 477,
                                CharacterName: 'Ms Marvel II'
                            },
                            {
                                ID: 478,
                                CharacterName: 'Multiple Man'
                            },
                            {
                                ID: 479,
                                CharacterName: 'Mysterio'
                            },
                            {
                                ID: 480,
                                CharacterName: 'Mystique'
                            },
                            {
                                ID: 481,
                                CharacterName: 'Namor'
                            },
                            {
                                ID: 482,
                                CharacterName: 'Namor'
                            },
                            {
                                ID: 483,
                                CharacterName: 'Namora'
                            },
                            {
                                ID: 484,
                                CharacterName: 'Namorita'
                            },
                            {
                                ID: 485,
                                CharacterName: 'Naruto Uzumaki'
                            },
                            {
                                ID: 486,
                                CharacterName: 'Nathan Petrelli'
                            },
                            {
                                ID: 487,
                                CharacterName: 'Nebula'
                            },
                            {
                                ID: 488,
                                CharacterName: 'Negasonic Teenage Warhead'
                            },
                            {
                                ID: 489,
                                CharacterName: 'Nick Fury'
                            },
                            {
                                ID: 490,
                                CharacterName: 'Nightcrawler'
                            },
                            {
                                ID: 491,
                                CharacterName: 'Nightwing'
                            },
                            {
                                ID: 492,
                                CharacterName: 'Niki Sanders'
                            },
                            {
                                ID: 493,
                                CharacterName: 'Nina Theroux'
                            },
                            {
                                ID: 494,
                                CharacterName: 'Nite Owl II'
                            },
                            {
                                ID: 495,
                                CharacterName: 'Northstar'
                            },
                            {
                                ID: 496,
                                CharacterName: 'Nova'
                            },
                            {
                                ID: 497,
                                CharacterName: 'Nova'
                            },
                            {
                                ID: 498,
                                CharacterName: 'Odin'
                            },
                            {
                                ID: 499,
                                CharacterName: 'Offspring'
                            },
                            {
                                ID: 500,
                                CharacterName: 'Omega Red'
                            },
                            {
                                ID: 501,
                                CharacterName: 'Omniscient'
                            },
                            {
                                ID: 502,
                                CharacterName: 'One Punch Man'
                            },
                            {
                                ID: 503,
                                CharacterName: 'One-Above-All'
                            },
                            {
                                ID: 504,
                                CharacterName: 'Onslaught'
                            },
                            {
                                ID: 505,
                                CharacterName: 'Oracle'
                            },
                            {
                                ID: 506,
                                CharacterName: 'Osiris'
                            },
                            {
                                ID: 507,
                                CharacterName: 'Overtkill'
                            },
                            {
                                ID: 508,
                                CharacterName: 'Ozymandias'
                            },
                            {
                                ID: 509,
                                CharacterName: 'Parademon'
                            },
                            {
                                ID: 510,
                                CharacterName: 'Paul Blart'
                            },
                            {
                                ID: 511,
                                CharacterName: 'Penance'
                            },
                            {
                                ID: 512,
                                CharacterName: 'Penance I'
                            },
                            {
                                ID: 513,
                                CharacterName: 'Penance II'
                            },
                            {
                                ID: 514,
                                CharacterName: 'Penguin'
                            },
                            {
                                ID: 515,
                                CharacterName: 'Phantom'
                            },
                            {
                                ID: 516,
                                CharacterName: 'Phantom Girl'
                            },
                            {
                                ID: 517,
                                CharacterName: 'Phoenix'
                            },
                            {
                                ID: 518,
                                CharacterName: 'Plantman'
                            },
                            {
                                ID: 519,
                                CharacterName: 'Plastic Lad'
                            },
                            {
                                ID: 520,
                                CharacterName: 'Plastic Man'
                            },
                            {
                                ID: 521,
                                CharacterName: 'Plastique'
                            },
                            {
                                ID: 522,
                                CharacterName: 'Poison Ivy'
                            },
                            {
                                ID: 523,
                                CharacterName: 'Polaris'
                            },
                            {
                                ID: 524,
                                CharacterName: 'Power Girl'
                            },
                            {
                                ID: 525,
                                CharacterName: 'Power Man'
                            },
                            {
                                ID: 526,
                                CharacterName: 'Predator'
                            },
                            {
                                ID: 527,
                                CharacterName: 'Professor X'
                            },
                            {
                                ID: 528,
                                CharacterName: 'Professor Zoom'
                            },
                            {
                                ID: 529,
                                CharacterName: 'Psylocke'
                            },
                            {
                                ID: 530,
                                CharacterName: 'Punisher'
                            },
                            {
                                ID: 531,
                                CharacterName: 'Purple Man'
                            },
                            {
                                ID: 532,
                                CharacterName: 'Pyro'
                            },
                            {
                                ID: 533,
                                CharacterName: 'Q'
                            },
                            {
                                ID: 534,
                                CharacterName: 'Quantum'
                            },
                            {
                                ID: 535,
                                CharacterName: 'Question'
                            },
                            {
                                ID: 536,
                                CharacterName: 'Quicksilver'
                            },
                            {
                                ID: 537,
                                CharacterName: 'Quill'
                            },
                            {
                                ID: 538,
                                CharacterName: 'Ras Al Ghul'
                            },
                            {
                                ID: 539,
                                CharacterName: 'Rachel Pirzad'
                            },
                            {
                                ID: 540,
                                CharacterName: 'Rambo'
                            },
                            {
                                ID: 541,
                                CharacterName: 'Raphael'
                            },
                            {
                                ID: 542,
                                CharacterName: 'Raven'
                            },
                            {
                                ID: 543,
                                CharacterName: 'Ray'
                            },
                            {
                                ID: 544,
                                CharacterName: 'Razor-Fist II'
                            },
                            {
                                ID: 545,
                                CharacterName: 'Red Arrow'
                            },
                            {
                                ID: 546,
                                CharacterName: 'Red Hood'
                            },
                            {
                                ID: 547,
                                CharacterName: 'Red Hulk'
                            },
                            {
                                ID: 548,
                                CharacterName: 'Red Mist'
                            },
                            {
                                ID: 549,
                                CharacterName: 'Red Robin'
                            },
                            {
                                ID: 550,
                                CharacterName: 'Red Skull'
                            },
                            {
                                ID: 551,
                                CharacterName: 'Red Tornado'
                            },
                            {
                                ID: 552,
                                CharacterName: 'Redeemer II'
                            },
                            {
                                ID: 553,
                                CharacterName: 'Redeemer III'
                            },
                            {
                                ID: 554,
                                CharacterName: 'Renata Soliz'
                            },
                            {
                                ID: 555,
                                CharacterName: 'Rey'
                            },
                            {
                                ID: 556,
                                CharacterName: 'Rhino'
                            },
                            {
                                ID: 557,
                                CharacterName: 'Rick Flag'
                            },
                            {
                                ID: 558,
                                CharacterName: 'Riddler'
                            },
                            {
                                ID: 559,
                                CharacterName: 'Rip Hunter'
                            },
                            {
                                ID: 560,
                                CharacterName: 'Ripcord'
                            },
                            {
                                ID: 561,
                                CharacterName: 'Robin'
                            },
                            {
                                ID: 562,
                                CharacterName: 'Robin II'
                            },
                            {
                                ID: 563,
                                CharacterName: 'Robin III'
                            },
                            {
                                ID: 564,
                                CharacterName: 'Robin V'
                            },
                            {
                                ID: 565,
                                CharacterName: 'Robin VI'
                            },
                            {
                                ID: 566,
                                CharacterName: 'Rocket Raccoon'
                            },
                            {
                                ID: 567,
                                CharacterName: 'Rogue'
                            },
                            {
                                ID: 568,
                                CharacterName: 'Ronin'
                            },
                            {
                                ID: 569,
                                CharacterName: 'Rorschach'
                            },
                            {
                                ID: 570,
                                CharacterName: 'Sabretooth'
                            },
                            {
                                ID: 571,
                                CharacterName: 'Sage'
                            },
                            {
                                ID: 572,
                                CharacterName: 'Sandman'
                            },
                            {
                                ID: 573,
                                CharacterName: 'Sasquatch'
                            },
                            {
                                ID: 574,
                                CharacterName: 'Sauron'
                            },
                            {
                                ID: 575,
                                CharacterName: 'Savage Dragon'
                            },
                            {
                                ID: 576,
                                CharacterName: 'Scarecrow'
                            },
                            {
                                ID: 577,
                                CharacterName: 'Scarlet Spider'
                            },
                            {
                                ID: 578,
                                CharacterName: 'Scarlet Spider II'
                            },
                            {
                                ID: 579,
                                CharacterName: 'Scarlet Witch'
                            },
                            {
                                ID: 580,
                                CharacterName: 'Scorpia'
                            },
                            {
                                ID: 581,
                                CharacterName: 'Scorpion'
                            },
                            {
                                ID: 582,
                                CharacterName: 'Sebastian Shaw'
                            },
                            {
                                ID: 583,
                                CharacterName: 'Sentry'
                            },
                            {
                                ID: 584,
                                CharacterName: 'Shadow King'
                            },
                            {
                                ID: 585,
                                CharacterName: 'Shadow Lass'
                            },
                            {
                                ID: 586,
                                CharacterName: 'Shadowcat'
                            },
                            {
                                ID: 587,
                                CharacterName: 'Shang-Chi'
                            },
                            {
                                ID: 588,
                                CharacterName: 'Shatterstar'
                            },
                            {
                                ID: 589,
                                CharacterName: 'She-Hulk'
                            },
                            {
                                ID: 590,
                                CharacterName: 'She-Thing'
                            },
                            {
                                ID: 591,
                                CharacterName: 'Shocker'
                            },
                            {
                                ID: 592,
                                CharacterName: 'Shriek'
                            },
                            {
                                ID: 593,
                                CharacterName: 'Shrinking Violet'
                            },
                            {
                                ID: 594,
                                CharacterName: 'Sif'
                            },
                            {
                                ID: 595,
                                CharacterName: 'Silk'
                            },
                            {
                                ID: 596,
                                CharacterName: 'Silk Spectre'
                            },
                            {
                                ID: 597,
                                CharacterName: 'Silk Spectre II'
                            },
                            {
                                ID: 598,
                                CharacterName: 'Silver Surfer'
                            },
                            {
                                ID: 599,
                                CharacterName: 'Silverclaw'
                            },
                            {
                                ID: 600,
                                CharacterName: 'Simon Baz'
                            },
                            {
                                ID: 601,
                                CharacterName: 'Sinestro'
                            },
                            {
                                ID: 602,
                                CharacterName: 'Siren'
                            },
                            {
                                ID: 603,
                                CharacterName: 'Siren II'
                            },
                            {
                                ID: 604,
                                CharacterName: 'Siryn'
                            },
                            {
                                ID: 605,
                                CharacterName: 'Skaar'
                            },
                            {
                                ID: 606,
                                CharacterName: 'Snake-Eyes'
                            },
                            {
                                ID: 607,
                                CharacterName: 'Snowbird'
                            },
                            {
                                ID: 608,
                                CharacterName: 'Sobek'
                            },
                            {
                                ID: 609,
                                CharacterName: 'Solomon Grundy'
                            },
                            {
                                ID: 610,
                                CharacterName: 'Songbird'
                            },
                            {
                                ID: 611,
                                CharacterName: 'Space Ghost'
                            },
                            {
                                ID: 612,
                                CharacterName: 'Spawn'
                            },
                            {
                                ID: 613,
                                CharacterName: 'Spectre'
                            },
                            {
                                ID: 614,
                                CharacterName: 'Speedball'
                            },
                            {
                                ID: 615,
                                CharacterName: 'Speedy'
                            },
                            {
                                ID: 616,
                                CharacterName: 'Speedy'
                            },
                            {
                                ID: 617,
                                CharacterName: 'Spider-Carnage'
                            },
                            {
                                ID: 618,
                                CharacterName: 'Spider-Girl'
                            },
                            {
                                ID: 619,
                                CharacterName: 'Spider-Gwen'
                            },
                            {
                                ID: 620,
                                CharacterName: 'Spider-Man'
                            },
                            {
                                ID: 621,
                                CharacterName: 'Spider-Man'
                            },
                            {
                                ID: 622,
                                CharacterName: 'Spider-Man'
                            },
                            {
                                ID: 623,
                                CharacterName: 'Spider-Woman'
                            },
                            {
                                ID: 624,
                                CharacterName: 'Spider-Woman II'
                            },
                            {
                                ID: 625,
                                CharacterName: 'Spider-Woman III'
                            },
                            {
                                ID: 626,
                                CharacterName: 'Spider-Woman IV'
                            },
                            {
                                ID: 627,
                                CharacterName: 'Spock'
                            },
                            {
                                ID: 628,
                                CharacterName: 'Spyke'
                            },
                            {
                                ID: 629,
                                CharacterName: 'Stacy X'
                            },
                            {
                                ID: 630,
                                CharacterName: 'Star-Lord'
                            },
                            {
                                ID: 631,
                                CharacterName: 'Stardust'
                            },
                            {
                                ID: 632,
                                CharacterName: 'Starfire'
                            },
                            {
                                ID: 633,
                                CharacterName: 'Stargirl'
                            },
                            {
                                ID: 634,
                                CharacterName: 'Static'
                            },
                            {
                                ID: 635,
                                CharacterName: 'Steel'
                            },
                            {
                                ID: 636,
                                CharacterName: 'Stephanie Powell'
                            },
                            {
                                ID: 637,
                                CharacterName: 'Steppenwolf'
                            },
                            {
                                ID: 638,
                                CharacterName: 'Storm'
                            },
                            {
                                ID: 639,
                                CharacterName: 'Stormtrooper'
                            },
                            {
                                ID: 640,
                                CharacterName: 'Sunspot'
                            },
                            {
                                ID: 641,
                                CharacterName: 'Superboy'
                            },
                            {
                                ID: 642,
                                CharacterName: 'Superboy-Prime'
                            },
                            {
                                ID: 643,
                                CharacterName: 'Supergirl'
                            },
                            {
                                ID: 644,
                                CharacterName: 'Superman'
                            },
                            {
                                ID: 645,
                                CharacterName: 'Swamp Thing'
                            },
                            {
                                ID: 646,
                                CharacterName: 'Swarm'
                            },
                            {
                                ID: 647,
                                CharacterName: 'Sylar'
                            },
                            {
                                ID: 648,
                                CharacterName: 'Synch'
                            },
                            {
                                ID: 649,
                                CharacterName: 'T-1000'
                            },
                            {
                                ID: 650,
                                CharacterName: 'T-800'
                            },
                            {
                                ID: 651,
                                CharacterName: 'T-850'
                            },
                            {
                                ID: 652,
                                CharacterName: 'T-X'
                            },
                            {
                                ID: 653,
                                CharacterName: 'Taskmaster'
                            },
                            {
                                ID: 654,
                                CharacterName: 'Tempest'
                            },
                            {
                                ID: 655,
                                CharacterName: 'Thanos'
                            },
                            {
                                ID: 656,
                                CharacterName: 'The Cape'
                            },
                            {
                                ID: 657,
                                CharacterName: 'The Comedian'
                            },
                            {
                                ID: 658,
                                CharacterName: 'Thing'
                            },
                            {
                                ID: 659,
                                CharacterName: 'Thor'
                            },
                            {
                                ID: 660,
                                CharacterName: 'Thor Girl'
                            },
                            {
                                ID: 661,
                                CharacterName: 'Thunderbird'
                            },
                            {
                                ID: 662,
                                CharacterName: 'Thunderbird II'
                            },
                            {
                                ID: 663,
                                CharacterName: 'Thunderbird III'
                            },
                            {
                                ID: 664,
                                CharacterName: 'Thunderstrike'
                            },
                            {
                                ID: 665,
                                CharacterName: 'Thundra'
                            },
                            {
                                ID: 666,
                                CharacterName: 'Tiger Shark'
                            },
                            {
                                ID: 667,
                                CharacterName: 'Tigra'
                            },
                            {
                                ID: 668,
                                CharacterName: 'Tinkerer'
                            },
                            {
                                ID: 669,
                                CharacterName: 'Titan'
                            },
                            {
                                ID: 670,
                                CharacterName: 'Toad'
                            },
                            {
                                ID: 671,
                                CharacterName: 'Toxin'
                            },
                            {
                                ID: 672,
                                CharacterName: 'Toxin'
                            },
                            {
                                ID: 673,
                                CharacterName: 'Tracy Strauss'
                            },
                            {
                                ID: 674,
                                CharacterName: 'Trickster'
                            },
                            {
                                ID: 675,
                                CharacterName: 'Trigon'
                            },
                            {
                                ID: 676,
                                CharacterName: 'Triplicate Girl'
                            },
                            {
                                ID: 677,
                                CharacterName: 'Triton'
                            },
                            {
                                ID: 678,
                                CharacterName: 'Two-Face'
                            },
                            {
                                ID: 679,
                                CharacterName: 'Ultragirl'
                            },
                            {
                                ID: 680,
                                CharacterName: 'Ultron'
                            },
                            {
                                ID: 681,
                                CharacterName: 'Utgard-Loki'
                            },
                            {
                                ID: 682,
                                CharacterName: 'Vagabond'
                            },
                            {
                                ID: 683,
                                CharacterName: 'Valerie Hart'
                            },
                            {
                                ID: 684,
                                CharacterName: 'Valkyrie'
                            },
                            {
                                ID: 685,
                                CharacterName: 'Vanisher'
                            },
                            {
                                ID: 686,
                                CharacterName: 'Vegeta'
                            },
                            {
                                ID: 687,
                                CharacterName: 'Venom'
                            },
                            {
                                ID: 688,
                                CharacterName: 'Venom II'
                            },
                            {
                                ID: 689,
                                CharacterName: 'Venom III'
                            },
                            {
                                ID: 690,
                                CharacterName: 'Venompool'
                            },
                            {
                                ID: 691,
                                CharacterName: 'Vertigo II'
                            },
                            {
                                ID: 692,
                                CharacterName: 'Vibe'
                            },
                            {
                                ID: 693,
                                CharacterName: 'Vindicator'
                            },
                            {
                                ID: 694,
                                CharacterName: 'Vindicator'
                            },
                            {
                                ID: 695,
                                CharacterName: 'Violator'
                            },
                            {
                                ID: 696,
                                CharacterName: 'Violet Parr'
                            },
                            {
                                ID: 697,
                                CharacterName: 'Vision'
                            },
                            {
                                ID: 698,
                                CharacterName: 'Vision II'
                            },
                            {
                                ID: 699,
                                CharacterName: 'Vixen'
                            },
                            {
                                ID: 700,
                                CharacterName: 'Vulcan'
                            },
                            {
                                ID: 701,
                                CharacterName: 'Vulture'
                            },
                            {
                                ID: 702,
                                CharacterName: 'Walrus'
                            },
                            {
                                ID: 703,
                                CharacterName: 'War Machine'
                            },
                            {
                                ID: 704,
                                CharacterName: 'Warbird'
                            },
                            {
                                ID: 705,
                                CharacterName: 'Warlock'
                            },
                            {
                                ID: 706,
                                CharacterName: 'Warp'
                            },
                            {
                                ID: 707,
                                CharacterName: 'Warpath'
                            },
                            {
                                ID: 708,
                                CharacterName: 'Wasp'
                            },
                            {
                                ID: 709,
                                CharacterName: 'Watcher'
                            },
                            {
                                ID: 710,
                                CharacterName: 'Weapon XI'
                            },
                            {
                                ID: 711,
                                CharacterName: 'White Canary'
                            },
                            {
                                ID: 712,
                                CharacterName: 'White Queen'
                            },
                            {
                                ID: 713,
                                CharacterName: 'Wildfire'
                            },
                            {
                                ID: 714,
                                CharacterName: 'Winter Soldier'
                            },
                            {
                                ID: 715,
                                CharacterName: 'Wiz Kid'
                            },
                            {
                                ID: 716,
                                CharacterName: 'Wolfsbane'
                            },
                            {
                                ID: 717,
                                CharacterName: 'Wolverine'
                            },
                            {
                                ID: 718,
                                CharacterName: 'Wonder Girl'
                            },
                            {
                                ID: 719,
                                CharacterName: 'Wonder Man'
                            },
                            {
                                ID: 720,
                                CharacterName: 'Wonder Woman'
                            },
                            {
                                ID: 721,
                                CharacterName: 'Wondra'
                            },
                            {
                                ID: 722,
                                CharacterName: 'Wyatt Wingfoot'
                            },
                            {
                                ID: 723,
                                CharacterName: 'X-23'
                            },
                            {
                                ID: 724,
                                CharacterName: 'X-Man'
                            },
                            {
                                ID: 725,
                                CharacterName: 'Yellow Claw'
                            },
                            {
                                ID: 726,
                                CharacterName: 'Yellowjacket'
                            },
                            {
                                ID: 727,
                                CharacterName: 'Yellowjacket II'
                            },
                            {
                                ID: 728,
                                CharacterName: 'Ymir'
                            },
                            {
                                ID: 729,
                                CharacterName: 'Yoda'
                            },
                            {
                                ID: 730,
                                CharacterName: 'Zatanna'
                            },
                            {
                                ID: 731,
                                CharacterName: 'Zoom'
                            }
                        ]
                    })];
            case 1:
                characters = _a.sent();
                console.log(characters);
                return [2 /*return*/];
        }
    });
}); };
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
