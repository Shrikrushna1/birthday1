function changeMessage() {
    const messages = [
        "Wishing you a day filled with love and cheer!",
        "Happy Birthday! Have a wonderful year ahead!",
        "May your birthday be filled with lots of joy and happiness!",
        "Cheers to another year of success, happiness, and fun!",
        "Sending you smiles for every moment of your special day!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('wish-message').innerText = messages[randomIndex];
}
