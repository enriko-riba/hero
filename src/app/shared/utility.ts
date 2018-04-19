import { Building } from "./messages/server2client/Building";

export type TimeStringUnit = 'ms' | 's';

/**
 * Converts the given seconds/milliseconds to string
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
    if (h)
      result += `${h}h : `;
    if (min)
      result += `${min}m : `;

    result += `${Math.floor(sec)}s`;
    return result;
  }