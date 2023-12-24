//normal for loop
star = "*";
for (let i = 0; i < 6; i++) {
  console.log(star.repeat(i));
}

//nested
for (let i = 0; i < 1; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(star.repeat(j));
  }
}
