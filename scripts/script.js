let poem = [
    'Once upon a midnight dreary, while I pondered, weak and weary,\nOver many a quaint and curious volume of forgotten lore—\nWhile I nodded, nearly napping, suddenly there came a tapping,\nAs of some one gently rapping, rapping at my chamber door.\n“’Tis some visitor,” I muttered, “tapping at my chamber door—\nOnly this and nothing more.”',
    'Ah, distinctly I remember it was in the bleak December;\nAnd each separate dying ember wrought its ghost upon the floor.\nEagerly I wished the morrow; vainly I had sought to borrow\nFrom my books surcease of sorrow — sorrow for the lost Lenore—\nFor the rare and radiant maiden whom the angels name Lenore—\nNameless here for evermore.',
    'And the silken, sad, uncertain rustling of each purple curtain\nThrilled me—filled me with fantastic terrors never felt before;\nSo that now, to still the beating of my heart, I stood repeating\n“Tis some visitor entreating entrance at my chamber door\nSome late visitor entreating entrance at my chamber door;—\nThis it is and nothing more.',
    'Presently my soul grew stronger; hesitating then no longer,\n“Sir,” said I, “or Madam, truly your forgiveness I implore;\nBut the fact is I was napping, and so gently you came rapping,\nAnd so faintly you came tapping, tapping at my chamber door,\nThat I scarce was sure I heard you” here I opened wide the door; \nDarkness there and nothing more.',
    'Deep into that darkness peering, long I stood there wondering, fearing,\nDoubting, dreaming dreams no mortal ever dared to dream before;\nBut the silence was unbroken, and the stillness gave no token,\nAnd the only word there spoken was the whispered word, “Lenore ?”\nThis I whispered, and an echo murmured back the word, “Lenore!”—\nMerely this and nothing more.',
    'Back into the chamber turning, all my soul within me burning,\nSoon again I heard a tapping somewhat louder than before.\n“Surely,” said I, “surely that is something at my window lattice;\nLet me see, then, what thereat is, and this mystery explore—\nLet my heart be still a moment and this mystery explore;—\n’Tis the wind and nothing more!”',
    'Open here I flung the shutter, when, with many a flirt and flutter,\nIn there stepped a stately Raven of the saintly days of yore;\nNot the least obeisance made he; not a minute stopped or stayed he;\nBut, with mien of lord or lady, perched above my chamber door—\nPerched upon a bust of Pallas just above my chamber door—\nPerched, and sat, and nothing more.',
    'Then this ebony bird beguiling my sad fancy into smiling,\nBy the grave and stern decorum of the countenance it wore,\n"Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,\nGhastly grim and ancient Raven wandering from the Nightly shore—\nTell me what thy lordly name is on the Night’s Plutonian shore!”\nQuoth the Raven “Nevermore.”',
    'Much I marvelled this ungainly fowl to hear discourse so plainly,\nThough its answer little meaning—little relevancy bore;\nFor we cannot help agreeing that no living human being\nEver yet was blessed with seeing bird above his chamber door—\nBird or beast upon the sculptured bust above his chamber door,\nWith such name as “Nevermore.”',
    'But the Raven, sitting lonely on the placid bust, spoke only\nThat one word, as if his soul in that one word he did outpour.\nNothing farther then he uttered—not a feather then he fluttered—\nTill I scarcely more than muttered “Other friends have flown \nOn the morrow he will leave me, as my Hopes have flown before.”\n Then the bird said “Nevermore.”',
    'Startled at the stillness broken by reply so aptly spoken,\n“Dougbtless,” said I, “what it utters is its only stock and store\nCaught from some unhappy master whom unmerciful Disaster\n Followed fast and followed faster till his songs one burden bore—\nTill the dirges of his Hope that melancholy burden bore\nOf ‘Never—nevermore’.”',
    'But the Raven still beguiling all my fancy into smiling,\nStraight I wheeled a cushioned seat in front of bird, and bust and door;\nThen, upon the velvet sinking, I betook myself to linking\nFancy unto fancy, thinking what this ominous bird of yore—\nWhat this grim, ungainly, ghastly, gaunt, and ominous bird of yore\nMeant in croaking “Nevermore.”',
    'This I sat engaged in guessing, but no syllable expressing\nTo the fowl whose fiery eyes now burned into my bosom’s core;\nThis and more I sat divining, with my head at ease reclining\nOn the cushion’s velvet lining that the lamp - light gloated o’er,\nBut whose velvet - violet lining with the lamp - light gloating o’er,\n She shall press, ah, nevermore!',
    'Then, methought, the air grew denser, perfumed from an unseen censer\nSwung by Seraphim whose foot - falls tinkled on the tufted floor.\n “Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent thee\nRespite—respite and nepenthe from thy memories of Lenore;\nQuaff, oh quaff this kind nepenthe and forget this lost Lenore!”\nQuoth the Raven “Nevermore.”',
    '“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!—\nWhether Tempter sent, or whether tempest tossed thee here ashore,\n Desolate yet all undaunted, on this desert land enchanted—\nOn this home by Horror haunted—tell me truly, I implore—\nIs there—is there balm in Gilead ?—tell me—tell me, I implore!”\nQuoth the Raven “Nevermore.”',
    '“Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—\n“Get thee back into the tempest and the Night’s Plutonian shore!\nLeave no black plume as a token of that lie thy soul hath spoken!\nLeave my loneliness unbroken!—quit the bust above my door!\nTake thy beak from out my heart, and take thy form from off my door!”\n Quoth the Raven “Nevermore.”',
    'And the Raven, never flitting, still is sitting, still is sitting\n On the pallid bust of Pallas just above my chamber door;\nAnd his eyes have all the seeming of a demons that is dreaming,\nAnd the lamp - light o’er him streaming throws his shadow on the floor;\n And my soul from out that shadow that lies floating on the floor\nShall be lifted - nevermore!'
];

let levels = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false

};

function stanzaLeveler() {
    let stanzas = {};
    for (let i = 0; i < poem.length; i++) {
        stanzas[i] = false;

    }
    return stanzas;
}

let stanza;

let stanzas = stanzaLeveler();

for (let i = poem.length; i >= 0; i--) {
    if (stanzas[i] === false) {
        stanza = poem[i];
        break;
    }
}

function removePercentage(poem, wordLength) {
    const other = document.querySelector("#stanza-container");
    const stanza = document.createElement("p");
    stanza.setAttribute("id", "para");
    console.log(poem);
    let poemLines = poem.split("\n");
    for (let line of poemLines) {
        let lineArray = line.split(" ");
        for (let word = 0; word < lineArray.length; word++) {
            if (lineArray[word].length >= wordLength) {
                let newInput = `<input type="text" name="${lineArray[word]}" class="words" size="${lineArray[word].lenght}">`
                stanza.innerHTML += newInput;
                stanza.innerHTML += " ";

            } else {
                stanza.innerHTML += lineArray[word];
                stanza.innerHTML += " ";

            }
        }
        stanza.innerHTML += "<br>";
    }
    other.appendChild(stanza);
}

const submit = document.querySelectorAll(".submit");

function checkWords(parentId, level) {
    let parentIdname = "#" + parentId;
    const parent = document.querySelector(parentIdname);
    const words = parent.querySelectorAll(".words");
    const incorrectText = parent.querySelector(".incorrectText");
    let incorrect = 0;
    for (let word of words) {
        if (word.value === word.name) {
            word.classList.add("correct");

        } else {
            word.classList.add("incorrect");
            word.size = '20';
            word.value += `   ${word.name}`;
            incorrect++;
        }
    }
    incorrectText.innerHTML = `Incorrect Words: ${incorrect}`;
    if (incorrect === 0) {
        if (level === 5) {
            stanzas[0] = true;
        }
        levels[level] = true;

    }
}

for (let btn of submit) {
    btn.addEventListener("click", (event) => {
        let parentId = event.target.parentElement.id;
        let level;
        if (levels[1] === false) {
            level = 1;
        } else if (levels[2] === false) {
            level = 2;
        } else if (levels[3] === false) {
            level = 3;
        } else if (levels[4] === false) {
            level = 4;
        } else {
            level = 5;
        }
        checkWords(parentId, level);
    })
}

const nextLevel = document.querySelector("#nextLevel");
nextLevel.addEventListener("click", () => {
    levelUp(stanza);
});

function levelUp(stanza) {
    try {
        const para = document.querySelector("#para");
        para.parentNode.removeChild(para);
    } catch {
        console.log("Nothing There");
    }
    if (levels[1] === false) {
        removePercentage(stanza, 8);
    } else if (levels[2] === false) {
        removePercentage(stanza, 6);
    } else if (levels[3] === false) {
        removePercentage(stanza, 5);
    } else if (levels[4] === false) {
        removePercentage(stanza, 4);
    } else {
        removePercentage(stanza, 1);
    }
}