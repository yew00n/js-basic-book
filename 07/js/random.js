var sentence = [];

sentence[0] = "진인사대천명";
sentence[1] = "자존심은 어리석은 자의 소유물이다";

var randomPick = sentence[Math.floor(Math.random() * sentence.length)];

document.write("<p>" + randomPick + "</p>");
