import { Building } from "./messages/server2client/Building";

export function buildTime(b: Building) {
    let sec = b.buildTime;
    let h = Math.floor(sec / 3600);
    sec -= h * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    var result = "";
    if (h)
      result += `${h}h : `;
    if (min)
      result += `${min}m : `;

    result += `${sec}s`;
    return result;
  }