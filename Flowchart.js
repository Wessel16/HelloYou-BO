let readlineSync = require('readline-sync')
text17()

function start(){
console.log("Het is een lange, moeizame dag geweest, je hebt een glas melk opgewarmd en gaat in bed nog een beetje liggen lezen. De zon is al onder en de maan is verscholen achter donkere wolken, waardoor het enige licht in je slaapkamer afkomstig is van de kandelaar naast je hoofdeinde. Na een tijdje leg je het boek naast je neer, blaas je de kaars uit en sluit je je ogen, je vaag bewust zijnde van de regen die buiten op je raam klettert. Langzaam zak je weg en val je in een diepe slaap...");
console.log("")
console.log("Plots schrik je op van een heftige donderstoot. Je weet niet hoe laat het is, maar je ziet nog steeds geen steek, de regen is nog niet opgehouden - integendeel, het is alleen maar harder gaan regenen - en het is zelfs begonnen te onweren. Wanneer een tweede bliksemschicht je raam oplicht zie je tot je afschuw het groene hoofd van een goblin naar binnen turen. Geschokt val je uit je bed en grijp je vergeefs naar het zwaard dat op de gang en dus niet naast je bed ligt. Intussen veegt de goblin de regendruppels van het natte raam en besef je dat hij je heeft gezien. Je besluit om...")
console.log('A. te blijven liggen. B. naar buiten te gaan. ')
antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text14()   
    }
    else{
        text13()
    }   
}

function text14(){
    console.log("Je kruipt snel weer je bed in, trekt je kussen over je hoofd heen en probeert de gebeurtenissen van zo-even te vergeten. Het zal maar je verbeelding zijn geweest, vast te wijten aan het overslaan van het middageten de vorige dag. Verdere bliksemschichten blijven uit, en je begint al enigszins te ontspannen, wanneer er twee korte kloppen bij je voordeur weerklinken. De kloppen blijven maar doorgaan, en je beseft dat je er toch iets aan zult moeten doen. Je...")
    console.log('A. doet de deur open. B. gaat in de kelder schuilen.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text13()
    }
    else{
        text2()
    }
}

function text13(){
    console.log("De kandelaar floept op magische wijze weer aan en plots is de kamer weer prettig verlicht. Je trekt snel een leren wambuis over je nachthemd heen en doet een stevige broek aan. Vervolgens grijp je de kandelaar en loop je met stevige passen richting de voordeur. Onderweg raap je nog je zwaard op en klem je dit stevig in je rechterhand vast.")
    console.log("")
    console.log("Eenmaal bij de voordeur zet je de kandelaar neer en open je voorzichtig de deur op een kier, half verwachtend dat er over enkele ogenblikken een horde goblins naar binnen stormt. Er staat echter maar één goblin, helemaal verzopen en eerder lachwekkend dan angstaanjagend. Snel drukt hij een vochtige brief in je handen, waardoor je je zwaard laat vallen, om vervolgens door een gat in de heg de nacht in te verdwijnen. Je...")
    console.log('A. rent de goblin achterna. B. leest de brief.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text5()
    }
    else{
        text19()
    }
}

function text19(){
    console.log("De kandelaar floept op magische wijze weer aan en plots is de kamer weer prettig verlicht. Je trekt snel een leren wambuis over je nachthemd heen en doet een stevige broek aan. Vervolgens grijp je de kandelaar en loop je met stevige passen richting de voordeur. Onderweg raap je nog je zwaard op en klem je dit stevig in je rechterhand vast.")
    console.log('A. deze "Uri" te ontmoeten. B. het briefje te negeren.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text12()
    }
    else{
        text7()
    }
}

function text12(){
    console.log(`Zelfverzekerd baan je je een weg over een bospaadje. Je merkt dat er niet lang geleden nog iemand heeft gelopen, en onwillekeurig controleer je nog eens of je zwaard los genoeg inzijn schede zit. Na enige tijd bereik je een open plek, met in het midden de eik. Onder de boom staat een eenzaam personage gehuld in een purperen mantel, zijn gezicht verborgen in de schaduw van een donkergekleurde hoed. Je zet een laatste stap richting de boom en roept vragend: "Uri?"Op dat moment komt de gestalte in beweging. Zijn gezicht draait zich naar jou toe, en met een verrassend diepe stem vraagt hij: "Heb je de brief bij je?"Je haalt de brief uit je wambuis en houdt hem voor je uit. De vergulde letters van het woord"Uri" glinsteren in het maanlicht. De vreemde man schijnt eindelijk te ontspannen en zet zijn hoed af, waardoor je zijn gezicht kan zien. Zijn donkerbruine haar is kortgeknipt en een goed onderhouden pieksnor priemt op zijn bovenlip, die tot een glimlach is getrokken. "Ik zie dat het Haakneus is gelukt je mijn bericht te overhandigen. Kom nu gauw hier, de nacht duurt niet lang meer en we hebben een hoop te bespreken."De man, die naar eigen zeggen een Uri is, vertelt je dat hij deel uitmaakt van een elitekorps dat verantwoordelijk is voor de veiligheid van het koningshuis: Ulthas' roze informanten. [Leden van dit korps zullen de rest van het verhaal overigens gewoon Uri/Uri's worden genoemd.] Ze hebben sterke vermoedens dat er binnenkort een aanslag zal worden gepleegd op koning Ulthas door de kwaadwillende groep van Uitermate roze getinte infiltranten [die ter algemene verwarring eveneens Uri/Uri's worden genoemd], maar vanwege enkele incidenten in het verleden zijn alle huidige leden van het korps bij deze groep bekend en kunnen ze zelf dus niets onderzoeken zonder de aandacht te trekken. Dat is waar ze jouw hulp voor nodig hebben. Plots hoor je een harde klap en valt Uri voorover in het gras. Achter hem duikt een tweede man op, op dezelfde manier gekleed als hij, maar dan met zwart haar en een forse knuppel. Je...  `)
    console.log('A. valt de man aan. B. hoort de man uit')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text6()
    }
    else{
        text3()
    }
}

function text6(){
    console.log("Zonder verder na te denken maak je een flinke sprong in de richting van de onbekende, en je zwaard komt met een vervaarlijke boog recht op zijn hoofd af. Op het laatste moment zet de man echter een stap opzij, en zonder iets om te raken suist je zwaard vruchteloos door de lucht. Je had je voorbereid op de treffer en duikelt nu machteloos recht op de grond af. Terwijl je bij ligt te komen van de klap voel je een harde tik op je achterhoofd en verlies je het bewustzijn.Wanneer je weer wakker wordt zie je even niets en raak je in paniek bij de gedachte dat je blind bent, tot je beseft dat er überhaupt niets te zien valt en dat het gewoon te donker is om ook maar iets over je omgeving te kunnen waarnemen. Op de vraag van in welk wespennest je nu in hemelsnaam bent beland heb je evenmin een antwoord, wat de situatie alleen maar frustrerender maakt.Bij het geluid van knarsende scharnieren word je opeens klaarwakker, en even later komt een van de tegels naast je omhoog. Althans, dat neem je maar aan. Wie er ook verantwoordelijk is voor de verschuivende tegel, hij of zij heeft geen zichtbare lichtbron bij zich, waardoor het in het vertrek nog steeds gitzwart is. Op hetzelfde moment vliegt er een deur open - zo klinkt het tenminste - en klinken er gehaaste stemmen in de gang. Je...")
    console.log('A. wacht wat er ook door de deur komt niet langer af en duikt op de plek af waar vermoedelijk een gat in de vloer zit. B. besluit de mensen die op je afkomen rustig uit te horen. Ze hebben vast niets dan goeds in de zin.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text4()
    }
    else{
        text4()
    }
}

function text4(){
    console.log("Zonder verder na te denken maak je een flinke sprong in de richting van de onbekende, en je zwaard komt met een vervaarlijke boog recht op zijn hoofd af. Op het laatste moment zet de man echter een stap opzij, en zonder iets om te raken suist je zwaard vruchteloos door de lucht. Je had je voorbereid op de treffer en duikelt nu machteloos recht op de grond af. Terwijl je bij ligt te komen van de klap voel je een harde tik op je achterhoofd en verlies je het bewustzijn.Wanneer je weer wakker wordt zie je even niets en raak je in paniek bij de gedachte dat je blind bent, tot je beseft dat er überhaupt niets te zien valt en dat het gewoon te donker is om ook maar iets over je omgeving te kunnen waarnemen. Op de vraag van in welk wespennest je nu in hemelsnaam bent beland heb je evenmin een antwoord, wat de situatie alleen maar frustrerender maakt.Bij het geluid van knarsende scharnieren word je opeens klaarwakker, en even later komt een van de tegels naast je omhoog. Althans, dat neem je maar aan. Wie er ook verantwoordelijk is voor de verschuivende tegel, hij of zij heeft geen zichtbare lichtbron bij zich, waardoor het in het vertrek nog steeds gitzwart is. Op hetzelfde moment vliegt er een deur open - zo klinkt het tenminste - en klinken er gehaaste stemmen in de gang. Je...")
    console.log('A. wacht wat er ook door de deur komt niet langer af en duikt op de plek af waar vermoedelijk een gat in de vloer zit. B. besluit de mensen die op je afkomen rustig uit te horen. Ze hebben vast niets dan goeds in de zin.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text10()
    }
    else{
        text8()
    }
}

function text3(){
    console.log("Voordat je ook maar iets kunt doen verschijnt er een derde Uri, die de tweede neerslaat. Zonder vertraging duikt er ook een vierde op, die de derde weer neerslaat, en een vijfde, en een zesde, en zo blijft het even doorgaan. Terwijl de stapel bewusteloze Uri's gestaag groeit neemt je verbazing even gestaag af en begin je je af te vragen wat er nu eigenlijk aan de hand is. Je...")
    console.log('A. besluit de volgende Uri die verschijnt zelf neer te slaan en er dan maar het beste van te maken. B. wacht nog even af.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text11()
    }
    else{
        text17()
    }
}

function text2(){
    console.log("Het kelderluik in de keukenvloer openend herinner je je dat je helemaal geen kelder hebt. Zonder jezelf af te vragen waarom je dan wel een kelderluik hebt begin je ijverig te graven in de steenkoude grond. Na een onbepaalde tijd, tig kilometer en een torenhoog aantal vloeken in de richting van je afgebroken schop hoor je boven je een tweetal mannelijke stemmen. Je graaft direct een weg naar boven.Wanneer je door de laatste laag grond breekt word je haast verblind door het felle daglicht. De twee mannen, die houthakkers blijken te zijn, staan er enigszins verward bij maar beginnen al gauw te gniffelen om je half verscheurde nachthemd. Aan je norse blik en de gigantische wallen onder je ogen zien ze echter dat je hard aan hulp toe bent. Ze besluiten dus om een pauze te nemen en je mee terug te nemen naar hun kamp, waar ze je van een bad, eten, schone kleren en een warm bed voorzien.De volgende ochtend word je wakker en wil je het kleine huisje verlaten, wanneer blijkt dat de deur stevig op slot zit. Er is verder niemand in het huisje en je ziet ook geen sleutel liggen. Je...")
    console.log('A. roept om hulp. B. probeert de deur open te breken. C. wurmt jezelf door het veel te kleine raampje in een poging buiten te geraken')
    antwoord = readlineSync.question('Maak uw keuze (A/B/C): ').toLowerCase()
    if(antwoord == 'a'){
        text18()
    }
    else if(antwoord == 'b'){
        text21()
    }
    else{
        text1()
    }
}

function text18(){
    console.log("Je schreeuwt een paar keer flink in de hoop dat iemand het oppikt, maar tot je verontwaardiging weerklinkt er aan de andere kant van de deur alleen het gemene en totaal niet onderdrukte gegrinnik van iemand die je benarde situatie duidelijk grappig vindt. Om het allemaal erger te maken heeft de kerel op de een of andere manier de slappe grinnik gekregen, waardoor het nare geluid maar blijft voortzetten.Na ruim een halfuur grinniken klinkt er opeens een flinke 'BONK' en houdt het gegrinnik direct op. Even later beginnen er flinke klappen op de deur te weerklinken en zie je de eerste barsten al ontstaan. Na nog een drietal rake stoten vliegen er vier mannen in roze gewaden met een halve boomstam naar binnen, om met een flinke smak tegen de muur tot stilstand te komen. Je kan je lachen nog net inhouden en stapt op ze af. Voor je ze bereikt rennen er plots nog vijf mannen in roze naar binnen. Een van hen stapt naar voren en gebaart je met de volgende woorden naar buiten: De tijd dringt, dus ik kan je op dit moment helaas niets meer vertellen. Weet echter dat we je hulp hard nodig hebben.Je besluit niet verder aan te dringen en stapt op het paard dat een van de mannen je buiten aanbiedt. Met de groep galoppeer je vervolgens naar het noorden. Onder het rijden weet een van de mannen, die zich Uri's noemen, je te vertellen dat er een aanslag zal worden gepleegd op koning Ulthas, en dat jij het schakelpunt bent in hun plan om deze aanslag te verijdelen.")
    console.log('A. Je stemt in met het plan, nog steeds zonder goed te weten wat het eigenlijk inhoudt. B. Je begint een beetje moe te worden van alle geheimzinnigheid en eist opheldering voordat je ook nog maar één poot verzet.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text10()
    }
    else{
        text8()
    }
}

function text1(){
    console.log("Je slaat het raampje gauw in en verwijdert zorgvuldig het glas. Je onbewust van de in roze geklede mannen achter je wurm je je bovenlijf door het ontstane gat, tot je rond je middel toch echt klem komt te zitten. Beseffend dat je niet verder vooruit zult komen probeer je je terug te trekken, maar ook dit wilt niet meer gaan. Op dat moment grijpen de roze mannen in en trekken ze je hardvochtig terug uit het gat in het raam. Met een schreeuw van pijn en een fikse snee in je zij beland je op de grond, waar je nog net ziet hoe de arm van een van de mannen met een zwarte knuppel hard op je slaap neerkomt.Wanneer je weer wakker wordt zie je even niets en raak je in paniek bij de gedachte dat je blind bent, tot je beseft dat er überhaupt niets te zien valt en dat het gewoon te donker is om ook maar iets over je omgeving te kunnen waarnemen. Op de vraag van in welk wespennest je nu in hemelsnaam bent beland heb je evenmin een antwoord, wat de situatie alleen maar frustrerender maakt.Bij het geluid van knarsende scharnieren word je opeens klaarwakker, en even later komt een van de tegels naast je omhoog. Althans, dat neem je maar aan. Wie er ook verantwoordelijk is voor de verschuivende tegel, hij of zij heeft geen zichtbare lichtbron bij zich, waardoor het in het vertrek nog steeds gitzwart is. Op hetzelfde moment vliegt er een deur open - zo klinkt het tenminste - en klinken er gehaaste stemmen in de gang. Je...")
    console.log('A. wacht wat er ook door de deur komt niet langer af en duikt op de plek af waar vermoedelijk een gat in de vloer zit. B. besluit de mensen die op je afkomen rustig uit te horen. Ze hebben vast niets dan goeds in de zin.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text4()
    }
    else{
        text4()
    }
}

function text4(){
    console.log("Gek genoeg maakte je vorige keuze niets uit. Beide ploegen - want het bleek om twee groepen te gaan die zich allebei Uri's noemen - waren namelijk van plan om jou te redden, maar vanwege een miscommunicatie wisten ze dit niet van elkaar. Via de inderhaast gegraven ondergrondse gang verlaten jullie het voor jou nog steeds onbekende complex, en tot je immense vreugde zie je enkele minuten later weer daglicht - en een tiental gezadelde paarden!Terwijl jullie naar het noorden galopperen word je gauw bijgepraat over de situatie. Het blijkt dat de groep die de aanslag op koning Ulthas wilt plegen beter is geïnformeerd dan gehoopt en dat ze je daarom hadden onderschept. De wachtposten die zijn overmeesterd tijdens je bevrijding bevestigden het vermoeden dat de aanslag nog eerder zal plaatsvinden dan gehoopt, waardoor het hele plan een week wordt vervroegd!")
    console.log('A. Je stemt in met het plan, nog steeds zonder goed te weten wat het eigenlijk inhoudt. B. Je begint een beetje moe te worden van alle geheimzinnigheid en eist opheldering voordat je ook nog maar één poot verzet.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text10()
    }
    else{
        text8()
    }
}

function text10(){
    console.log("Eenmaal aangekomen bij het kasteel van koning Ulthas loodsen de Uri's je via een achterpoortje naar de koninklijke vertrekken. Wanneer je voor de koning staat moet je, ongeacht je bedoelingen, toegeven dat je toch echt wel onder de indruk bent. De beste man blijkt een beer van een vent te zijn met een volle, rossige haardos en een snor die even imposant is als zijn borstkas. Zijn kleren zijn goed onderhouden maar eenvoudig, en de eenvoudige kroon die bovenop zijn hoofd prijkt maakt het totaalplaatje af. Alles bij elkaar genomen komt hij over als een sterke, betrouwbare vorst.De koning groet je joviaal en met een brede lach, en even ben je verbaasd wanneer hij je hand met beide handen grijpt en hem vervolgens flink op en neer schudt. Wanneer je rondkijkt in het vertrek zie je dat het even eenvoudig is aangekleed als de bewoner zelf, met als uitzondering de verscheidene jachttrofeeën die aan de muur pronken. Je oog valt op het wapenrek waar enkele grote kruisbogen aan hangen, en je vraagt je af hoe iemand het in zijn hoofd zou halen het tegen deze man op te nemen.De volgende dag rijd je samen met de koning en een tweetal vertrouwelingen, op de dagelijkse jachttocht waar de koning zo verzot op is. Je hebt inmiddels van de koning te horen gekregen - of herhaald gekregen - dat het jouw taak is om sluipmoordenaars uit te schakelen voor ze hem iets aan kunnen doen. Met deze informatie in je achterhoofd ben je steeds op je hoede en schrik je op bij elke ritselende struik en bij elke omhoog springende graspol. Met gemengde gevoelens neem je nog eens een kijkje in de zak met explosieve dwergmarmotten die de Uri's speciaal voor dit soort gelegenheden schijnen te fokken. Je werpt een blik op de grote kruisboog die aan het zadel van koning Ulthas hangt en wenst uit de grond van je hart dat je er ook zo een had meegekregen en dat je het niet moest hebben van extreem licht ontvlambare knaagdieren.Naarmate de middag vordert en er nog steeds niets is gebeurd begin je je af te vragen of de inlichtingen wel klopten. Ulthas heeft inmiddels al drie herten en een wild zwijn buitgemaakt en maakt zich onderhand klaar om terug te gaan naar het kasteel. Wanneer jullie echter de volgende bocht omgaan bemerk je een metalen flikkering in het struikgewas. Je...")
    console.log('A. neemt geen risicos en werpt direct een dwergmarmot naar de struik. B. besluit dat het je aandacht niet waard is - of dat je het helemaal niet erg vindt als de koning sterft - en kijkt opvallend nonchalant strak de andere kant op.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text9()
    }
    else{
        text15()
    }
}

function text8(){
    console.log("Een van de Uri's begint je erop te wijzen dat het je paard is dat poten verzet en dat jij daar niets over te zeggen heeft, maar wanneer je hem met een goed gemikte kaakstoot van zijn eigen paard af laat duikelen besluit de rest om maar te luisteren. De overgebleven Uri's leggen je uit dat jij de koning moet vergezellen op zijn dagelijkse jachttocht in het naburige bos om hem voor loerende sluipmoordenaars te beschermen")
    console.log("")
    console.log("Of je nu goede of kwade bedoelingen voor de koning hebt, met het plan instemmen is in alle gevallen de voor de hand liggende keuze. Zonder goed te weten waarom ga je dus akkoord en ga je verder bij.")
    text10()
}

function text9(){
    console.log("Eenmaal aangekomen bij het kasteel van koning Ulthas loodsen de Uri's je via een achterpoortje naar de koninklijke vertrekken. Wanneer je voor de koning staat moet je, ongeacht je bedoelingen, toegeven dat je toch echt wel onder de indruk bent. De beste man blijkt een beer van een vent te zijn met een volle, rossige haardos en een snor die even imposant is als zijn borstkas. Zijn kleren zijn goed onderhouden maar eenvoudig, en de eenvoudige kroon die bovenop zijn hoofd prijkt maakt het totaalplaatje af. Alles bij elkaar genomen komt hij over als een sterke, betrouwbare vorst.De koning groet je joviaal en met een brede lach, en even ben je verbaasd wanneer hij je hand met beide handen grijpt en hem vervolgens flink op en neer schudt. Wanneer je rondkijkt in het vertrek zie je dat het even eenvoudig is aangekleed als de bewoner zelf, met als uitzondering de verscheidene jachttrofeeën die aan de muur pronken. Je oog valt op het wapenrek waar enkele grote kruisbogen aan hangen, en je vraagt je af hoe iemand het in zijn hoofd zou halen het tegen deze man op te nemen.De volgende dag rijd je samen met de koning en een tweetal vertrouwelingen, op de dagelijkse jachttocht waar de koning zo verzot op is. Je hebt inmiddels van de koning te horen gekregen - of herhaald gekregen - dat het jouw taak is om sluipmoordenaars uit te schakelen voor ze hem iets aan kunnen doen. Met deze informatie in je achterhoofd ben je steeds op je hoede en schrik je op bij elke ritselende struik en bij elke omhoog springende graspol. Met gemengde gevoelens neem je nog eens een kijkje in de zak met explosieve dwergmarmotten die de Uri's speciaal voor dit soort gelegenheden schijnen te fokken. Je werpt een blik op de grote kruisboog die aan het zadel van koning Ulthas hangt en wenst uit de grond van je hart dat je er ook zo een had meegekregen en dat je het niet moest hebben van extreem licht ontvlambare knaagdieren.Naarmate de middag vordert en er nog steeds niets is gebeurd begin je je af te vragen of de inlichtingen wel klopten. Ulthas heeft inmiddels al drie herten en een wild zwijn buitgemaakt en maakt zich onderhand klaar om terug te gaan naar het kasteel. Wanneer jullie echter de volgende bocht omgaan bemerk je een metalen flikkering in het struikgewas. Je...")
    console.log('A. neemt geen risicos en werpt direct een dwergmarmot naar de struik. B. besluit dat het je aandacht niet waard is - of dat je het helemaal niet erg vindt als de koning sterft - en kijkt opvallend nonchalant strak de andere kant op.')
    antwoord = readlineSync.question('Maak uw keuze (A/B): ').toLowerCase()
    if(antwoord == 'a'){
        text20()
    }
    else{
        text16()
    }
}

function text15(){
    console.log("Je had beter moeten weten, maar toch negeer je de verdekt opgestelde sluipschutter. Dit had goed kunnen uitpakken, ware het niet dat door een stomtoevallige speling van het lot (en door een iets minder toevallige ingeving van de schrijver) de schutter uit het niets wordt aangevallen door een zwerm muggen. Ongelukkig genoeg gaat zijn kruisboog ook nog eens af, maar in plaats van het hart van de koning boort de dodelijk bedoelde schicht zich in de bips van je paard.Geschrokken holt je rijdier het bos in, jou dwingend je met beide handen vast te klampen aan de zadelknop om niet tegen een uitstekende tak aan te rijden. Daarbij laat je onwillekeurig de dwergmarmot los, die met een zachte plof in je schoot belandt. Vanwege de traumatiserende opleiding van het beestje is het onder alle omstandigheden bijzonder gestrest, maar gelukkig schrikt het zich net niet dood - dit had het namelijk tot ontploffing gebracht. Jammer genoeg besluit het kreng zich daarentegen in je linkerarm vast te bijten om niet van het op hol geslagen paard te vallen.Jezelf gelukkig prijzend dat je te maken hebt met kleine marmotten en niet met volgroeide bevers begin je het beestje met je vrije hand te meppen om het los te krijgen. Uiteraard kiest je paard juist dit moment om van een egel te schrikken en te steigeren, waardoor je achterover, hoofd voorop recht in de zak met dwergmarmotten duikelt die achter je zadel hangt. In de daarop volgende verblindende en oorverdovende explosie word je verspreid over het hele bos, daarmee een einde brengend aan je verhaal.")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text20(){
    console.log("Je tilt de bewusteloze Ulthas onder zijn paard vandaan en legt hem dwars over het zadel van je eigen paard, dat tijdens de hele toestand op miraculeuze wijze ongedeerd is gebleven. Met een rustig drafje rijd je terug naar het kasteel, waar je de koning overdraagt aan de Uri's (de goede, welteverstaan).Dankzij de goede zorg van de heelmeesters van het kasteel genezen je hoofdwonden voorspoedig. Als naaste adviseur en vertrouweling van de koning heb je een mooie woonplaats in het oosten van Ardougne gekregen, waar eens in de week de twee zonen van de koning en een jolige groep Uri's over de vloer komt voor een gezellig avondje bijpraten -en drinken. Zo af en toe komt koning Ulthas zelf ook nog mee. Op zo'n avond, terwijl jullie beiden, onder het genot van een glas koel bier op het balkon van de zonsondergang zitten te genieten, denk je terug aan de toevallige gebeurtenissen die tot dit alles leidden en ben je blij dat je de goede keuzes hebt gemaakt.")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text16(){
    console.log("Zonder enige aarzeling grijp je de kruisboog, en met een welgemikt schot maak je de koning voor eeuwig onschadelijk. Vervolgens rijd je in galop terug naar het kasteel en meld je de Uri's het gruwelijke nieuws. Zoals je vermoedde twijfelen ze niet aan je verhaal en hebben ze nog steeds alle vertrouwen in je eerlijkheid.Zonder de koning om ze te beschermen vormen zijn nog jonge zoontjes geen probleem. Nadat de twee jongens op mysterieuze en beter niet beschreven wijze zijn verdwenen zit Ardougne met een opvolgingsprobleem. Wanneer jij jezelf naar voren schuift nemen ze je aanbod graag aan, en zo is je tirannische bewind gevestigd. Jaren later kijk je met een glas cognac in je hand uit een van de ramen van je vertrekken naar buiten. Bij het zicht van de immens veranderde stad en de groepjes Uri's die de straten patrouilleren hef je je glas nogmaals naar de hemel, en met een kwaadaardige grijns op je gezicht breng je Ulthas een laatste groet.")
    console.log("            .-.  ")                             
    console.log("           /  \\   ")                             
    console.log("      .---/-+--||  ")                             
    console.log("     |  K=====++-> ")                            
    console.log("      '---\-+--||  ")                             
    console.log("           \  //   ")                              
    console.log("            `-'  ")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text5(){
    console.log("Na je zwaard weer opgeraapt te hebben storm je roekeloos achter de goblin aan door de heg heen. Als je een lichtbron had gehad was de roerloze groene gestalte iets verderop je misschien opgevallen en had je wellicht ook de flikkering van pas geslepen metaal in het struikgewas opgemerkt. Wat je daarentegen wel goed merkt is de harde 'twang' van een afgaande boogpees en de donkere schacht die het volgende ogenblik uit je borstkas steekt.")

console.log(" __-----_________________{]__________________________________________________")
console.log("{&&&&&&&#%%&#%&%&%&%&%#%&|]__________________________________________________/ ")
console.log("                         {] ")
console.log("")
console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text21(){
    console.log("Terwijl je met een flinke aanloop - voor zover dat mogelijk is in het kleine huisje - en je schouder diep voorover gebogen op de deur af stormt komt het ding plotseling met een grote, houten grijns tot leven en staar je recht in een gapend gat vol splinterige tanden! Je probeert nog af te remmen en om te keren, maar het baat allemaal niet, en even later sluiten de hardeiken kaken zich voorgoed achter je.")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text7(){
    console.log("Je besluit dat je nachtrust al genoeg is verstoord en dat het allemaal niets met jou te maken heeft. Geeuwend ruim je je zwaard op en ga je weer in je bed liggen, waar je al gauw in slaap valt. Terwijl je de volgende ochtend naar de bakker loopt om brood te halen hoor je de mensen praten over een vreemde dode in het Takkenbos. Tevreden dat jij er niet bijbetrokken bent geraakt sluit je dit verhaal weer af.")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text11(){
    console.log("Je besluit dat het grapje lang genoeg heeft geduurd en begint aan je weg omhoog, over de stapel Uri's heen klimmend in een poging de top te bereiken. Hier en daar glijd je uit over een uitstekend lichaamsdeel en val je een paar meter naar beneden voor je je weer vast kan klampen aan een arm of been, maar onvermoeibaar zet je door op je tocht naar de top!Na wat een eeuwigheid leek sta je eindelijk bovenop de hoop Uri's, maar tot je verbazing staat er verder niemand. Je bemerkt voor het eerst dat je enkele tientallen meters boven het bos uitsteekt en dat je vanaf hier je huisje kan zien, dat in lichterlaaie staat. Op dat moment voel je opeens een hand zich om je been sluiten en word je omver getrokken door een Uri die zich bewusteloos veinsde. Na een korte worsteling zweven jullie beide een paar meter naast de stapel, om vervolgens met een noodvaart naar beneden te storten")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

function text17(){
    console.log("De stapel Uri's begint astronomische proporties aan te nemen, en met je handen boven je ogen probeer je de bovenkant van de hoop nog te zien. Op dat moment scheidt een stip zich van de hoop en even later landt er een Uri met een misselijkmakende smak naast je op de grond. Dan pas begint het tot je te dagen dat het wellicht geen goed idee om naast de stapel te blijven staan als deze eindelijk instort. Terwijl deze gedachte door je hoofd schiet beginnen er meer Uri's uit de stapel te vallen. De onderste Uri's begonnen ook weer tot bewustzijn te komen en destabiliseren de al vrij instabiele stapel alleen maar meer met hun pogingen weg te komen.Ondanks de wanhopige pogingen van je hersenen om je motorische zenuwen te bereiken in een poging om weg te rennen blijken je benen niet in staat om je tijdig in veiligheid te brengen. Je laatste gedachten gaan uit naar je warme bed, terwijl je je afvraagt waarom je toch niet bent blijven liggen in plaats van bedolven te worden onder een regen van roze gewaden en zwarte hoeden.")
    console.log("")
    console.log ("Bedankt voor het spelen van mijn Textbased adventure!")
}

