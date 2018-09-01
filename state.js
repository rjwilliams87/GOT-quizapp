const state = {
  currentQuestion: 1, 
  score: 0,
  questions: [
      { 
        title: `What is the relationship between Jon Arryn, Ned Stark, and Robert Baratheon`,
        answers: [`Jon is their uncle`, `Ned and Robert were raised by Jon as his wards`, `Robert and Ned owe Jon Arryn fealty`, `Robert and Ned married Jon's daughters`],
        correctAnswer: 1
      },

      {
        title: `Jon Arryn, Robert Baratheon, and Ned Stark led the rebellion. Why did Robert become king?`,
        answers: [`He organized the rebellion`, `He later Ned and Jon for the crown`, `He had the best claim through his bloodline`,`He was elected by the rebelling houses`],
        correctAnswer: 2
      },

      {
        title: `Why does Ned Stark despise Jaime Lannister?`,
        answers: [`Jaime killed Ned's brother` , `Jaime wounded Robert in battle`, `Jaime conspired to place his father on the throne`, `Jaime broke his oath to the King's Guard`],
        correctAnswer: 3
      },
  
      {
        title: `What famous swordsman did Ned fight at the "Tower of Joy"?`,
        answers: [`Barristan Selmy`, `Howland Reed`, `Sandor Clegane`, `Arthur Dayne`],
        correctAnswer: 3
      },
  
      {
        title: `Why was Davos Seaworth knighted?`,
        answers: [`He smuggled food to Storm's End`, `He rescued Stannis on the battlefield`, `He fought against Robert for Stannis`, `His victories at sea`],
        correctAnswer: 0
      },
  
      {
        title: `Robert killed Rhaegar at the battle of the...`,
        answers: [`Flowers`, `Trident`, `Fingers`, `Stormlands`],
        correctAnswer: 1
      },
  
      {
        title: `Before marrying Ned, Catelyn Tully(Stark) was promised to whom?`,
        answers: [`Robert Baratheon`, `Brandon Stark`, `Petyr Baelish`, `Randyll Tarly`],
        correctAnswer: 1
      },
  
      {
        title: `This man served as "Hand" to Aerys II for 20 years before the start of the rebellion.`,
        answers: [`Tywin Lannister`, `Jon Arryn`, `Rhaegar Targaryen`, `Barristan Selmy`],
        correctAnswer: 0
      },
  
      {
        title: `Who was the only other survior, besides Ned, of the "Tower of Joy"?`,
        answers: [`Tyrion Lannister`, `Lyanna Stark`, `Hoster Tully`, `Howland Reed`],
        correctAnswer: 3
      },
  
      {
        title: `What type of jewels were worn on Rhaegar's armor?`,
        answers: [`Sapphires`, `Rubies`, `Diamonds`, `Pearls`],
        correctAnswer: 1
      }
  ],
};