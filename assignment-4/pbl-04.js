function password(obj) {
  for (let key in obj) {
    if (
      !obj[key] || (key === "birthYear" && obj[key].toString().length !== 4)
    ) {
      return "invalid";
    }
  }

  let siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  const Password = `${siteName} # ${obj.name} @ ${obj.birthYear}`;

  return Password;
}



const obj = { name: 'rahat' , birthYear: 2002, siteName: 'faceBook' };

console.log(password(obj));
