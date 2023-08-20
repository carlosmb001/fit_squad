module.exports = {
  format_date: (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  getMoodEmoji: (arg1) =>{
    let emoji = "";
    switch (arg1) {
      case "Very Happy":
        emoji = "😀";
        break;
      case "Happy":
        emoji = "🙂";
        break;
      case "Neutral":
        emoji = "😐";
        break;
      case "Not Happy":
        emoji = "🙁";
        break;
      case "Exhausted":
        emoji = "😤";
        break;
      default:
        emoji = "";
        break;
    }
    return emoji
  },
};


