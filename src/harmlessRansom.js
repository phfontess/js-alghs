const harmlessHansomNote = (noteText, textMagazine) => {
  let noteTextArr = noteText.split(' ');
  let textMagazineArr = textMagazine.split(' ');
  let textMagazineObj = {};
  textMagazineArr.forEach(element => {
    if(!textMagazineObj[element]) textMagazineObj[element] = 0;
    textMagazineObj[element] ++;
  });
  let noteIsPossible = true;
  noteTextArr.forEach( word => {
    if(!!textMagazineObj[word]) {
      textMagazineObj[word]--;
      if(textMagazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else noteIsPossible = false;
  })
  console.log(noteIsPossible);
}

harmlessHansomNote('bla ', 'test if this works and how it works');