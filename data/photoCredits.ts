/**
 * Credits for third-party photographs used in the articles. Creative Commons
 * BY / BY-SA photos must show the author, the licence and (when changed) that
 * the image was cropped; CC0 photos need no credit but are listed so their
 * source is on record.
 */
export type PhotoCreditInfo = {
  author: string;
  /** Where the photo is hosted, shown after the author ("Wikimedia Commons"). */
  via?: string;
  license: string;
  licenseUrl?: string;
  /** The file's own page, for attribution and licence checks. */
  source?: string;
  /** Changes made to the original, e.g. "cropped". */
  note?: string;
};

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC_BY_SA_3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";

export const photoCredits = {
  prestigeShantiniketanPark: {
    author: "Sasankv",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:PSN_Central_Park.jpg",
    note: "cropped",
  },
  manyataBusinessPark: {
    author: "KshitizBathwal / Skyscape Photography",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Manyata_Embassy_Business_Park.jpg",
    note: "cropped",
  },
  brigadeMetropolis: {
    author: "Amol.Gaitonde",
    via: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: CC_BY_SA_3,
    source:
      "https://commons.wikimedia.org/wiki/File:Brigade_Metropolis_seen_from_Rohan_Mihira_terrace_8-22-2010_4-58-52_PM.jpg",
  },
  hebbalRoadTraffic: {
    author: "Gpkp",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Hebbal_Road,_Bangalore_(2025)_03.jpg",
  },
  varthurSkyline: {
    author: "SlowPhoton",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source: "https://commons.wikimedia.org/wiki/File:Skyline_of_Varthur,_Bangalore.jpg",
    note: "cropped",
  },
  mgRoadMetro: {
    author: "Gpkp",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source:
      "https://commons.wikimedia.org/wiki/File:Aerial_view_from_Barton_Centre,_MG_Road,_Bangalore_(2024)_08.jpg",
  },
  kempegowdaTerminal2: {
    author: "Sameer2905",
    via: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source:
      "https://commons.wikimedia.org/wiki/File:Terminal_2_Departure_of_Kempegowda_International_Airport.jpg",
    note: "cropped",
  },
  apartmentLivingRoom: {
    author: "rawpixel",
    license: "CC0",
    licenseUrl: CC0,
    source: "https://www.rawpixel.com/image/6043312/photo-image-public-domain-table-living-room",
  },
  apartmentBedroom: {
    author: "rawpixel",
    license: "CC0",
    licenseUrl: CC0,
    source: "https://www.rawpixel.com/image/5920688/photo-image-public-domain-house-home",
  },
  homeOfficeDesk: {
    author: "StockSnap",
    license: "CC0",
    licenseUrl: CC0,
    source: "https://stocksnap.io/photo/home-office-QUU0AQABSN",
  },
} satisfies Record<string, PhotoCreditInfo>;
