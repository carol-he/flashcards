const keywords = {
  "Manifest Destiny":"(heavy in 1840s)",
  "US Mexican War":"(1846)",
  "Treaty of Guadelupe Hidalgo":"(1848)",
  "Ethnic Consciousness":"(1846)",
  "Lynching":"esp during plan de san diego (1915)",
  "Culture of Impunity":"fed into lynching",
  "Texas Rangers":"lynched people",
  "Las Gorras Blancas":"(late 1880s - early 1890s) group similar to black panthers",
  "Spanish American War":"(1989)",
  "Age of Empire/Imperialism":"(1890s) leads to new manifest destiny",
  "Platt Amendement":"(1901) Cuba",
  "Foraker Acts":"(1900) - in Puerto Rico ",
  "Insular Cases":"(1901)",
  "Jones Act":"(1917)",
  "Operation Bootstrap":"(1930s-80s)",
  "Diaspora":"PR diaspora as a result of bootstrap",
  "Nativism":"idea that justifies racism based on culture",
  "Eugenics":"justifying racism based on 'science'",
  "Great Depression":"(1930s) used mexicans as cheap labor, stock market crashed, massive unemployment, blamed mexicans, and so repatriation became a thing",
  "Repatriation":"(1929-30s)",
  "Ambivalent Americanism":"(after WWII) increased belief Mexican Americans were marginalized unfairly",
  "LULAC":"(1929) League of United Latin American Citizens, all about assimilation and proving they are good US citizens, deny working class origins so they ignored parents",
  "MAM":"(1934-50s) Grew out of YNCA, ok with working class origins, self-help and racial uplift, ignored structural barriers",
  "Hurricane Maria":"(Sep-Oct 2017)hit PR hard",
  "Bracero Program":"(1942-64) letting mexicans back after repatriation lmao me af",
  "Zoot Suit Riots":"(1943) wearing extravagant excess suits after bombing of pearl harbor which caused scarcity of wool and textile",
  "Mendez v. Westminster":"(1947) didnt address segregation like brown v board, accepted the whiteness",
  "Pachuca/o":"people who wore zoot suits",
  "Aztlan":"land",
  "Ixta and Popo":"ancient love story",
  "Ejido Land Grant":"idk",
  "Genizaro Indian":"i have no idea",
  "La Raza Cosmica/Mestizaje":"lol",
  "Chicano Nationalism/Chicanismo":"Chicano",
  "La Raza Unida Party":"LRUP",
  "Chicano Moratorium":"mad that mexicans got drafted a lot",
  "Student Walkouts/Blowouts":"Walkouts in LA schools, actually successful",
  "La Raza":"one race, group",
  "Rodolfo 'Corky' Gonzales":"some guy",
  "Reies Lopez Tijerina":"helped with land grant movement",
  "Land Grant Movement":"(1966-67) Fought for land rights of Chicanos",
  "The Young Lords":"Puerto Rican radical socialist group started in Chicago, responsible for Garbage Offensive and the People's Church Offensive",
  "The Garbage Offensive":"1969",
  "People's Church Offensive":"(1968) second time brough guns",
  "Tampa/Ybor City":"Cigar City, used to be a swamp, Martinez Ybor set up streamship line between Havana, Key west, and Tampa, became extremely productive and cigar capital of the country",
  "Cubans in Miami vs. Tampa":"",
  "Fulgencio Batista":"?",
  "Fidel Castro":"leader of Cuba after Raul",
  "Cuban Revolution":"bad",
  "Cold War":"Cuba aligned w USSR",
  "Mariel Boatlifts/Marielitos":"the gays first",
  "Bay of Pigs":"Failed attempt to remove Fidel Castro",
  "Refugee Act of 1980":"attempt to stop bias toward Communist refugees",
  "Queer Marielitos":"yeah",
  "Latino Conservatives":"some of them are for trump"
};

const readings = {
  "Talks about how Latinos are united but diverse by country of origin, social classes, citizenship, domestic transnationalism - result of multiple power dynamics, hybrids":"",
  "ended the bloodiest and costliest war in American history at the time":""
};
const card = document.body.querySelector('#card');
let obj = keywords;
let currentTerm = 0;
let state = "back";
let term = Object.keys(keywords);
card.addEventListener('click', flipCard);
function flipCard(){
  if(state === "back"){
    state = "front";
    card.style.color = 'blue';
    currentTerm++;
    card.innerHTML = term[currentTerm];
  }
  else{
    state = "back";
    card.innerHTML = card.innerHTML + "<br/>" + obj[term[currentTerm]];
  }
}
