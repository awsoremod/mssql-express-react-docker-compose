class CharacteristicProduct {
	async main(request) {
		let mas = [
			"89, 1, '12 мес.'", // Pro Display XDR
			"89, 2, 'Китай'",
			"89, 4, '32'",
			"89, 5, '218 ppi'",
			"86, 1, '24 мес.'", // Odyssey G7 C27G75TQSI
			"86, 2, 'Китай'",
			"86, 4, '26.9'",
			"86, 5, '109 ppi'",
			"79, 1, '12 мес.'", // V22
			"79, 2, 'Китай'",
			"79, 4, '21.5'",
			"79, 5, '102 ppi'",

			"62, 1, '24 мес.'", // PRO X SUPERLIGHT
			"62, 2, 'Китай'",
			"62, 8, '63 г'",
			"72, 1, '24 мес.'", // ROG Chakram Core
			"72, 2, 'Китай'",
			"72, 8, '97 г'",
			"68, 1, '24 мес.'", // X500
			"68, 2, 'Китай'",
			"68, 8, '106 г'",

			"34, 1, '12 мес.'", // Ryzen 9 5950X
			"34, 2, 'Китай'",
			"34, 3, '2020'",
			"34, 10, '3.4 ГГц'",
			"23, 1, '36 мес.'", // Core i9-12900K
			"23, 2, 'Китай'",
			"23, 3, '2021'",
			"23, 10, '3.2 ГГц'",
			"21, 1, '12 мес.'", // Core i3-10100F
			"21, 2, 'Вьетнам'",
			"21, 3, '2020'",
			"21, 10, '3.6 ГГц'",

			"18, 1, '12 мес.'", // Mate40 Pro
			"18, 2, 'Китай'",
			"18, 3, '2020'",
			"18, 4, '6.76'",
			"18, 5, '455 ppi'",
			"18, 9, 'Kirin 9000'",
			"10, 1, '12 мес.'", // ROG Phone 5
			"10, 2, 'Китай'",
			"10, 3, '2021'",
			"10, 4, '6.78'",
			"10, 5, '395 ppi'",
			"10, 9, 'Snapdragon 888'",
			"12, 1, '12 мес.'", // Y5p
			"12, 2, 'Китай'",
			"12, 3, '2020'",
			"12, 4, '5.45'",
			"12, 5, '295 ppi'",
			"12, 9, 'MediaTek Helio P22 MT6762R'",

			"94, 1, '12 мес.'", // WD80K52E0AX/LP
			"94, 2, 'Китай'",
			"94, 8, '71 кг'",
			"95, 1, '12 мес.'", // WW10T634CLH/LP
			"95, 2, 'Китай'",
			"95, 8, '76 кг'",
			"97, 1, '12 мес.'", // IWSD 51051 CIS
			"97, 8, '62.5 кг'",

			"42, 1, '12 мес.'", // OLED55C1RLA
			"42, 2, 'Россия'",
			"42, 4, '55'",
			"49, 1, '12 мес.'", // QE55Q70AAUXRU
			"49, 2, 'Россия'",
			"49, 4, '55'",
			"46, 1, '12 мес.'", // UE43TU7002UXRU
			"46, 2, 'Китай'",
			"46, 4, '43'",

			"54, 1, '12 мес.'", // GC-B569PMCZ
			"54, 2, 'Китай'",
			"54, 11, '451 л'",
			"53, 1, '12 мес.'", // GA-B509CEWL
			"53, 2, 'Россия'",
			"53, 11, '384 л'",
			"55, 1, '12 мес.'", // ITD 4180 W
			"55, 11, '298 л'",
		];
		for (let str of mas) {
			await request.query(`
			INSERT INTO Characteristic_Product (product_id, characteristic_id, description)
			VALUES (${str})
				`);
			console.log(`Characteristic_Product. add (${str})`);
		}
	}
}

module.exports = new CharacteristicProduct();
