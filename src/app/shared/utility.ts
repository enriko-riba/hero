import { Building, BuildingType } from "./messages/server2client/Building";

export type TimeStringUnit = 'ms' | 's';

/**
 * Converts the given seconds/milliseconds to string.
 * @param t 
 * @param unit unit of t: 'ms' for milliseconds, 's' for seconds
 */
export function timeString(t: number, unit?: TimeStringUnit) {
	let sec = unit == 's' ? t : t / 1000;
	let h = Math.floor(sec / 3600);
	sec -= h * 3600;
	let min = Math.floor(sec / 60);
	sec -= min * 60;
	var result = "";
	if (h) {
		result += `${h}h:`;
		if (min || sec)
			result += `${min}m`;
		if (sec)
			result += `:${Math.floor(sec)}s`;
	} else {
		if (min) {
			result += `${min}m`;
			if (sec)
				result += `:${Math.floor(sec)}s`;
		}
		else if (sec)
			result += `${Math.floor(sec)}s`;
	}

	return result;
}

/**
 * Returns a timestring for buildings remaining build time.
 * @param b 
 */
export function calcTimeLeft(b: Building): string {
	return (b && b.buildTimeLeft > 0) ? timeString(b.buildTimeLeft) : "";
}

export function getImage(b: Building) {
    switch (b.type) {
      case BuildingType.Farm: return "assets/images/b_food_01.png";
      case BuildingType.WoodCutter: return "assets/images/b_wood_01.png";
      case BuildingType.Quarry: return "assets/images/b_stone_01.png";
      case BuildingType.Storage: return "assets/images/b_storage_01.png";
    }
  }