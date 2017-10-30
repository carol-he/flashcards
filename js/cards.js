const keywords = {
  "Manifest Destiny":"(heavy in 1840s) belief that US was meant to take over the west",
  "US Mexican War":"(1846) war between US and Mexico for territory",
  "Treaty of Guadelupe Hidalgo":"(1848) formalized annexations",
  "Ethnic Consciousness":"(1846) developed for latinos as discrimination grew apparent, diverse groups came together for one cause",
  "Lynching":"esp during plan de san diego (1915)",
  "Culture of Impunity":"fed into lynching, behavior of texas rangers, and other forms of discrimination, forgetting violence against race",
  "Texas Rangers":"lynched people",
  "Las Gorras Blancas":"(late 1880s - early 1890s) group similar to black panthers",
  "Spanish American War":"(1989)",
  "Age of Empire/Imperialism":"(1890s) (1884-5)europeans jockeying for control over African colonial posessions, Berlin Congress, US industrializes rapidly after suffering series of economic depressions, needed new markets, turn to Carribeans, leads to new manifest destiny Wilson Gorman tariff (1894) - massive tax on foreign sugar, Cuba has sugar and coffee",
  "Platt Amendement":"(1901) Cuba, prevents annexation, put in Cuban constitutition keep Cuba out so they can sell more because they have to pay foreign tax. in addition to teller amendment, reserve and retain right for US intervention to preserve cuban independence. couldn't enter international treaties without US approval, sale of guantanamo bay",
  "Foraker Acts":"(1900) - in Puerto Rico, postal, military, sanitation, trade, and treaty powers to the US, Peso replaced by USD, establishes civil gov and free commerce, forbade island from entering other treaties, restructure gov so exec councel is appointed and elected legistlature, PR education had to include english and US history, became an unincorporated territory of US",
  "Insular Cases":"(1901) insular territories Cuba, philippines, guam, virgin islands, etc, didn't really resolve where Puerto Rico Stands",
  "Jones Act":"(1917) granted statutory citizenship to Puerto Ricans, can be revoked, by law not birth, gives US more direct control over their government, make english official language of PR. beginnings of US imperialism",
  "Operation Bootstrap":"(1930s-80s)",
  "Diaspora":"PR diaspora as a result of bootstrap",
  "Nativism":"idea that justifies racism based on culture",
  "Eugenics":"justifying racism based on 'science'",
  "Great Depression":"(1930s) used mexicans as cheap labor, stock market crashed, massive unemployment, blamed mexicans, and so repatriation became a thing",
  "Repatriation":"(1929-30s) sending people to Mexico because of gret depression, happened in 3 waves, each more forceful than the last",
  "Ambivalent Americanism":"(after WWII) increased belief Mexican Americans were marginalized unfairly",
  "LULAC":"(1929) League of United Latin American Citizens, all about assimilation and proving they are good US citizens, deny working class origins so they ignored parents",
  "MAM":"(1934-50s) Grew out of YMCA, ok with working class origins, self-help and racial uplift, ignored structural barriers",
  "Hurricane Maria":"(Sep-Oct 2017)hit PR hard, Trump seemed against helping out",
  "Bracero Program":"(1942-64) letting mexicans back after repatriation lmao me af, arms work",
  "Zoot Suit Riots":"(1943) wearing extravagant excess suits after bombing of pearl harbor which caused scarcity of wool and textile, retaliation with the 200 sailors",
  "Mendez v. Westminster":"(1947) didnt address segregation like brown v board, accepted the whiteness",
  "Pachuca/o":"people who wore zoot suits, gender stereotyping",
  "Aztlan":"mythical Chicano homeland, became a mobilizing call for poltical power for all levels of society, spirit of Chicano movement",
  "Ixta and Popo":"ancient love story, Ixta is a princess, romanticized images of indigenous past, Ixta committed suicide, popo comes back and they become mountains",
  "Ejido Land Grant":"ejido - area of communal, system introduced as important component of agrarian land reform in Mexico, typical procedure for the establishment of an ejido involved the following steps: landless farmers wo leased lands from wealthy landlords would petition the fed gov for the creation of an ejido in their general area, the federal gov would consult the landlord, the land would be expropriated from landlords if gov approved the ejido and an ajido would be established and the original petitioners would be designated as ejidatarios with certain rights. do not own land but can pass down their rights to use the land",
  "Genizaro Indian":"native american slaves in the southwest, house servants",
  "La Raza Cosmica/Mestizaje":"lol",
  "Chicano Nationalism/Chicanismo":"Chicano",
  "La Raza Unida Party":"LRUP",
  "Chicano Moratorium":"mad that mexicans got drafted a lot",
  "Student Walkouts/Blowouts":"Walkouts in LA schools, actually successful",
  "La Raza":"one race, group",
  "Rodolfo 'Corky' Gonzales":"convened first Chicano youth conference, promoted Plan Espiritual de Aztlan, stresses need for ethnic political unity",
  "Reies Lopez Tijerina":"helped with land grant movement, major figure of early Chicano movement",
  "Land Grant Movement":"(1966-67) Fought for land rights of Chicanos",
  "The Young Lords":"Puerto Rican radical socialist group started in Chicago, responsible for Garbage Offensive and the People's Church Offensive",
  "The Garbage Offensive":"(1969)",
  "People's Church Offensive":"(1968) second time brough guns",
  "Tampa/Ybor City":"Cigar City, used to be a swamp, Martinez Ybor set up streamship line between Havana, Key west, and Tampa, became extremely productive and cigar capital of the country",
  "Cubans in Miami vs. Tampa":"Tampa - radical and lower class, multi-ethnic,  working class, did not have secondary education, listened to news. Miami - elite and upper middle class 1959",
  "Fulgencio Batista":"antidemocratic, rules before Castro, supported by US gov bc he supported economic interestes, steals election in 1940 becomes pres and gov scandals occur",
  "Fidel Castro":"leader of Cuba after Batista",
  "Cuban Revolution":"Batista was declining in support and Guerilla warfare occured, Jan 7 1959 rebels march on Havan, US recognizes, Agrarian Reform Law happens and more socialist stuff, land expropriation, US becomes worried, prohibited foreign ownership of cuban land, 1960 land sugar and fruit company",
  "Cold War":"Cuba aligned w USSR, nuclear arms race, which economic system will take over, fight against communism, fear of communism",
  "Mariel Boatlifts/Marielitos":"the gays first, lavender scare, anxieties about black homo and criminal migrants, increased xenophobia, sanitation job, lumpens",
  "Bay of Pigs":"Failed US invasion into Cuba, bc lack military support from Kennedy, to remove Fidel Castro, got Cubans mad, over 600 failed attemps to kill castro by CIA, anger at democratic party not fighting communism",
  "Refugee Act of 1980":"attempt to stop bias toward Communist refugees",
  "Queer Marielitos":"yeah",
  "Latino Conservatives":"some of them are for trump"
};

const readings = {
  "Talks about how Latinos are united but diverse by country of origin, social classes, citizenship, domestic transnationalism - result of multiple power dynamics, hybrids":"(Re)constructing Latinidad: The Challenge of Latina/o Studies by Frances R. Aparicio",
  "ended the bloodiest and costliest war in American history at the time":"Treaty of Guadalupe Hidalgo (1848)",
  "talks about treaty of Guadalupe Hidalgo, bad effect for Mexicans in Southwest America, impacts of annexations on CA and TX, early manifestations of ethnic awareness": "Legacies of Conquest by David G Gutierrez",
  "NY Times article that talks about the lynching of Mexicans bc of plan de san diego and 7 shepherds for land by texas rangers, white fear of mexican revolution":"When Americans Lynched Mexicans by William D. Carrigan",
  "Letting Puerto Ricans go work in the US, creating PR Diaspora, PR dealing with unemploytment crisis, result of WWII":"Operation Bootstrap",
  "talking about the waves of repatriation, ambivalent americanism, Alien Labor Act in California, agriculture was first casualties, blamed mexicans for depression, only give jobs to real americans, scared people into deportation":"Becoming Mexican American by George Sanchez",
  "Contrasts Mendez and Brown (1954), how they had different goals, also talked about Plessy v Ferguson, de jure - what's legal in the books, de facto - what's really happening, not officially sanctioned":"The Problem of Segregation as Applied to Mexican-Americans by Mark Brilliant",
  "Mendez v Westminter":"Primary Source",
  "blood is power, commits on all levels of Chicano society, nationalism is the common denominator all members of La Raza can agree on, laid out goals and plan of action, unity":"Primary Source: El Plan Espiritual de Aztlan",
  "talks about Chicano Moratorium Committee, Rosalio Munoz first to notice draft was unfair, death of ruben salazar, voters were older so LRUP failed, rodolfo corky gonzales convented first chicano youth conference, promoted Plan Espiritual de Aztlan":"!Mi Raza Primero! by Ernesto Chavez",
  "how the young lords came about, inspired by black panthers, peoples church offensive and garbage collective offensive, two analyses on the struggles of PRs and PR in the US, joining of the limpen and petit bourgeois, july 27 broomes":"Before people called me a spic, they called me a nigger by Pablo Yoruba Guzman",
  "being a lord isnt about accepting life, its about taking ur pushups knowing where things are at trying to change things, trained hard to mature quickly, selflessness instead of individualistic - socialist group in capitalist world. really about revolution within minds before taking power of state which they thought they would be able to do":"We're trying to make a society where opportunity is the rule for everybody by Pablo Yoruba Guzman",
  "documentary - the young lords, also about garbage stuff, movements, racial discrimination, PR tied up w spain tryna get independence, US came but was rude as hell":"!Palante, Siempre Palante! The Young Lords Documentary",
  "AmeriKkkan, capitalization of Power To Puerto Rican People, very accessible language, lists out wants such as liberation, culture recognition, equality, socialism":"Young Lords 13 Point Program",
  "About mariel boatlifts, how queer people left first, leftover fear from lavendar scare, 4% felon 80% no criminal record, castro condone lumpens - homos were automatically lumpens, 'no revolutionary genes so it was a sanitation job'":"Queering Mariel by Julio Capo",
  "Mostly Cubans bc they really hated Castro, but some not, conservatives were not outcasts they were a part of latino culture, appeal to cultural values by Bush and Reagan, Reagan was like Latinos are natural conservatives lol, shared family values, strong work ethic, religion, strong group identity. wealthier meant more likely to be conservative, and latinos were more concerned about hemispheric policies":"The Rise and Fall of Hispanic Conservatism by Geraldo Cadava",
  "Some woman going off about how trump is the best for Latinos, people want trump bc he speaks truth and stuff":"Latinos/as for Trump"
};
const toggle = document.body.querySelector('#toggle');
toggle.addEventListener('click', Toggle);
const card = document.body.querySelector('#card');
let obj = readings;
let set = 0;
card.innerHTML = "READINGS";
let currentTerm = -1;
let state = "back";
let term = Object.keys(obj);
card.addEventListener('click', flipCard);
function Toggle(){
  currentTerm = -1;
  if(set === 0){
    set = 1;
    obj = keywords;
    currentTerm = -1;
    card.innerHTML = "KEYWORDS";
    term = Object.keys(obj);
  }
  else {
    set = 0;
    obj = readings;
    card.innerHTML = "READINGS";
    term = Object.keys(obj);
  }
}
function flipCard(){
  if(state === "back"){
    state = "front";
    card.style.color = 'blue';
    currentTerm++;
    if(currentTerm === term.length) currentTerm = 0;
    card.innerHTML = term[currentTerm];
  }
  else{
    state = "back";
    card.innerHTML = card.innerHTML + "<br/><mark>" + obj[term[currentTerm]] + "</mark>";
  }
}
