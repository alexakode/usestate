export const sortModes = {
  newFirst: (a, b) => b.created - a.created,
  oldFirst: (a, b) => a.created - b.created,
  AZ: "az",
  ZA: "za",
};

export const makeSorter = (mode) => {
  return (a, b) => {
    switch (mode) {
      case sortModes.NEW_FIRST:
        return b.created - a.created;
      case sortModes.OLD_FIRST:
        return a.created - b.created;
      case sortModes.AZ:
        return a.text.localeCompare(b.text, ["no", "en"], {
          sensitivity: "base",
        });
      case sortModes.ZA:
        return b.text.localeCompare(a.text, ["no", "en"], {
          sensitivity: "base",
        });
      default:
        return 0;
    }
  };
};
