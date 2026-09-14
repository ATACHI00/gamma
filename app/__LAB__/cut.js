let str = "hello";
if (str.length > 2) {
  const cutted = str.split("", 2).join("");
  console.log(cutted);
}

console.log(str);
