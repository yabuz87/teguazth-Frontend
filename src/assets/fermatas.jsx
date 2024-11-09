export function Fermatas(e) {
    if (e === "Hawassa") {
      return [
        "hawassa bus station",
        "shashemene tantostina",
        "shashemene Gebriel",
        "Shashemene mobile",
        "shashemene nock"
      ];
    } else if (e === "Addis Ababa") {
      return [
        "lamberete",
        "haile garment",
        "tulu Dimtu",
      ];
    } else if (e === "DireDawa") {
      return [
        "diredawa bus station",
        "diredawa market",
        "diredawa town"
      ];
    } else {
      return []; // Return an empty array if none of the conditions match
    }
  }
  