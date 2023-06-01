export function getRandomName() {
    const firstName = ["Monica", "Rachel", "Chandler", "Ross", "Joey", "Phoebe", "Penny", "Sheldon", "Leonard", "Howard", "Amy", "Raj", "Bernadette", "Stuart", "Will"];
    const lastName = ["Geller", "Green", "Bing", "Bang", "Tribbiani", "Buffay", "Hofstader", "Teller", "Cooper", "Wolowitz", "Fowler", "Koothrappali", "Rostenkowski", "Bloom", "Wheaton"];
    return (
      firstName[Math.floor(Math.random() * firstName.length)] +
      "_" +
      lastName[Math.floor(Math.random() * lastName.length)]
    );
  }

export function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}