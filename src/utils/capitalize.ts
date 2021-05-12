export const capitalize = (sentence: string) => {
  if (!sentence) return sentence;

  const sentenceSplitArray = sentence.toLowerCase().split(" ");
  for (let i = 0; i < sentenceSplitArray.length; i++) {
    sentenceSplitArray[i] =
      sentenceSplitArray[i].charAt(0).toUpperCase() +
      sentenceSplitArray[i].substring(1);
  }
  return sentenceSplitArray.join(" ");
};
