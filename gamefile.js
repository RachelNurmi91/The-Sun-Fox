//BUTTONS FOR GAME CONTROL
const lBtn = document.getElementById('leftBtn');
const rBtn = document.getElementById('rightBtn');
//TO CHANGE TEXT
const header = document.getElementById('storyHeader');
const para = document.getElementById('storyPara');
const q = document.getElementById('storyQ');
//TO CHANGE AVATAR
const ava = document.getElementById('avatar');
//BUTTON TOGGLER
function toggleBtns(btnsArray, on) { 
    for (let btn = 0; btn < btnsArray.length; btn++) {
        if (on) {
            btnsArray[btn].style.display = "inline-block"; 
        } else {
            btnsArray[btn].style.display = "none";
        }
    }
}
// GAME FUNCTION
function game({avatar, title, paragraph, question, leftBtn, rightBtn, leftFun, rightFun}) {
  ava.src = avatar;
  header.innerHTML = title;
  para.innerHTML = paragraph;
  q.innerHTML = question;
  lBtn.innerHTML = leftBtn;
  rBtn.innerHTML = rightBtn;
  lBtn.onclick = leftFun;
  rBtn.onclick = rightFun;
};
//ONLOAD
window.onload = (event) => {
    game(path000);
};
//INTO OBJECT
path000 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-neutral.jpg',
  title: 'The Sun Fox',
  paragraph: '<p>It\'s been gloomy for so long that the world has started to seem as if its turning to gray. The forecast has been cloudy with a chance of rain for the last 984 days.</p> <p>You\'re standing outstanding waiting for the bus. An orange light dashes past you. It is the brightest thing you\'ve seen in years. You look around. No one else seems to have noticed and the bus is approaching.</p>',
  question: "→ What do you do?",
  leftBtn: "Get on the Bus",
  rightBtn: "Chase After the Light",
  leftFun: function(){game(path001)},
  rightFun: function(){game(path002)},
};

path001 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: 'Get On The Bus',
  paragraph: '<p>You got on the bus as the rain started to pour down. It looks like another gloomy day ahead and no end in sight.</p>',
  question: '→ Game over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path002 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-suprised.jpg',
  title: 'Chase after the light',
  paragraph: '<p>The bus screeches to a halt. Everyone is starting to board the bus. You look at the bus then you look at the orange light disappearing further into the distance. Something tells you to go for it. You drop everything and run into the forest after the orange light.</p><p>You are starting to catch up to it and notice it has stopped. Just as you\'re starting to make out its shape it darts off into a small dark cave.</p>',
  question: '→ Do you dare to look inside?',
  leftBtn: 'Inspect the Cave',
  rightBtn: 'Leave',
  leftFun: function(){game(path003)},
  rightFun: function(){game(path007)},
};

path003 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-curious.jpg',
  title: 'Inspect the Cave',
  paragraph: '<p>The cave entrance is small. You surely could not fit in it.</p>',
  question: '→ What do you dare?',
  leftBtn: 'Look Inside',
  rightBtn: 'Reach In',
  leftFun: function(){game(path004)},
  rightFun: function(){game(path005)},
};

path004 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-curious.jpg',
  title: 'Look Inside',
  paragraph: '<p>You bend down and look inside the small entrance. Inside you cannot see past the darkness, but you hear the patterning sound of tiny footsteps.</p>',
  question: '→ How do you find out what is inside?',
  leftBtn: 'Reach In',
  rightBtn: 'Wait It Out',
  leftFun: function(){game(path005)},
  rightFun: function(){game(path006)},
};

path005 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-suprised.jpg',
  title: 'Reach In',
  paragraph: '<p>You reach inside and feel something fuzzy. With a surprised yelp it flees your touch. A loud groan startles you. Suddenly the ground starts shaking. The entrance of the cave quickly widens and engulfs you.</p><p>It\'s dark. It\'s silent. You are falling through emptiness.</p>',
  question: '→ How do you react?',
  leftBtn: 'Panic! Reach for Something to Grab Onto',
  rightBtn: 'Let What Happens, Happen',
  leftFun: function(){game(path008)},
  rightFun: function(){game(path009)},
};

path006 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: 'Wait It Out',
  paragraph: '<p>You\'re waiting outside of the cave for a long time. It gets darker. It gets colder. Now the rain is starting to fall. You\'re starting to shiver.</p>',
  question: '→ It\'s getting cold. You need to do something.',
  leftBtn: 'Reach In',
  rightBtn: 'Leave',
  leftFun: function(){game(path005)},
  rightFun: function(){game(path007)},
};

path007 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: 'Leave',
  paragraph: '<p>You walk home in the pouring rain. As you do you take a look at your phone and scroll through the weather forecast. At this rate it looks like the sun will never return.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path008 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-scared.jpg',
  title: 'Leave',
  title: 'Panic! Reach for Something to Grab Onto',
  paragraph: '<p>You reach out all around you but can\'t seem to grab onto anything. The more you panic the faster you fall.</p><p>After what feels like a lifetime you hit the ground hard. You hear multiple shrieks and feet scurrying away. You\'re in pain but if you wait too long you might lose them.</p>',
  question: '→ Do you want to keep following?',
  leftBtn: 'Follow the Sounds',
  rightBtn: 'Just Lay There',
  leftFun: function(){game(path012)},
  rightFun: function(){game(path013)},
};

path009 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-smile.jpg',
  title: 'Leave',
  title: 'Let What Happens, Happen',
  paragraph: '<p>You feel weightless. You float through the darkness like a feather. Eventually you come to a soft landing upon what feels like a giant balloon. </p><p>After a moment it pops and your bottom hits the ground, but you are more surprised by a series of high pitch giggling. You look up to see the glowing white lights. Your eyes adjust to the sudden brightness and you realize its three small glowing mice.</p>',
  question: '→ How does one react to glowing mice?',
  leftBtn: 'Ask Where You Are',
  rightBtn: 'Just Stare',
  leftFun: function(){game(path010)},
  rightFun: function(){game(path011)},
};

path010 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-surprised.jpg',
  title: 'Leave',
  title: 'Ask Where You Are',
  paragraph: '<p>Your logic tells you mice don\'t talk. But today has been so strange that you decide to give it a chance. \"Where am I?,\" you ask. The mice giggle. The three start down a long hall. One stops and turns to you. It motions for you to follow.</p>',
  question: '→ Dare you follow?',
  leftBtn: 'Follow Their Lead',
  rightBtn: 'Skeptical, You Stay Put',
  leftFun: function(){game(path014)},
  rightFun: function(){game(path015)},
};

path011 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-neutral.jpg',
  title: 'Leave',
  title: 'Just Stare',
  paragraph: '<p>You stare at the mice. They stop giggling and stare back. The three whisper amongst each other. After consulting each other they leave you alone and start down a long hall. One stops and turns to you. It motions for you to follow.</p>',
  question: '→ Do you follow the glowing mice?',
  leftBtn: 'Follow Their Lead',
  rightBtn: 'Skeptical, You Stay Put',
  leftFun: function(){game(path014)},
  rightFun: function(){game(path015)},
};

path012 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-curious.jpg',
  title: 'Leave',
  title: 'Follow the Sounds',
  paragraph: '<p>You limp off in the direction that you hear the pitter patter of little feet. Your leg throbs from the pain of the impact. Eventually you see the white lights of the mysterious glow in front of you but your leg gives out and you fall.</p>',
  question: '→ Ouch!',
  leftBtn: 'Try to Get Up and Follow',
  rightBtn: 'Just Lay There',
  leftFun: function(){game(path017)},
  rightFun: function(){game(path013)},
};

path013 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: 'Leave',
  title: 'Just Lay There',
  paragraph: '<p>Your body aches as you lay still in the darkness. Getting up and chasing the mysterious lights no longer is of importance to you. You tell yourself you should have just taken the bus. Gradually you feel a slight mist. You get sleepy. </p><p>When you wake up you find you were fast asleep at the bus stop. It must have all been a dream. </p><p>The bus pulls up and everyone around you gets on. You step on the bus as the rain trickles down. When you sit in your seat you find that your body aches.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path014 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-smile.jpg',
  title: 'Leave',
  title: 'Follow Their Lead',
  paragraph: '<p>Something about this is very amusing to you. You can\'t remember the last time you felt so excited. You run to catch up with them. They are the only things that light up the long tunnel. </p><p>After several twists and turns you find yourself in a round room that is lit up by the glow of torches on the wall. There is a door in front of you. There is writing all along the wall. After the initial surprise you realize the mice are gone.</p>',
  question: '→ What do you do in the room?',
  leftBtn: 'Backtrack to Look for the Mice',
  rightBtn: 'Read the Writing',
  leftFun: function(){game(path017)},
  rightFun: function(){game(path019)},
};

path015 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-scared.jpg',
  title: 'Leave',
  title: 'Skeptical, You Stay Put',
  paragraph: '<p>It somehow grows darker and becomes more silent. You wonder if you made the right decision.</p> <p>The next time you blink you find yourself alone in the woods. The memories of todays events start to fade from your memory.</p> <p>Why are you in the middle of the woods? The rain starts to fall. You get up and head back towards the bus stop. It\'s time to go home.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path016 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-confident.jpg',
  title: 'Leave',
  title: 'Try to Get Up and Follow',
  paragraph: '<p>Something unreal and magical is going on and you are not about to let it slip away because of a little pain. You push yourself up and follow down what seems like it may be a hall. You come to a stop when you see the three white lights are waiting for you. Squinting your eyes you make out their forms. Three glowing mice are eagerly guestering for you to follow.</p>',
  question: '→ What is your next action?',
  leftBtn: 'Follow Their Lead',
  rightBtn: 'Ask Where You Are',
  leftFun: function(){game(path014)},
  rightFun: function(){game(path010)},
};

path017 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: 'Leave',
  title: 'Backtrack to Look for the Mice',
  paragraph: '<p>You backtrack to try and find the mice, but everything is too dark. There is nothing but blackness. Your only option is returning to the room. You can still see the hint of light from the torches.</p>',
  question: '→ What is the best choice?',
  leftBtn: 'Keep Looking',
  rightBtn: 'Inspect the Writing',
  leftFun: function(){game(path018)},
  rightFun: function(){game(path019)},
};

path018 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-neutral.jpg',
  title: 'Leave',
  title: 'Keep Looking',
  paragraph: '<p>You are in darkness and there is no sign of them anywhere. The darkness is starting to overcome you and you start to feel very tired. Your eyes become heavy.</p> <p>You hear a faint whisper, \"You lost sight of the light…\"</p> <p>You feel rain hit your face. You open your eyes and you are back to a different point in time. People all around you are making their way onto the bus. You are the last person standing. You shake your head. It seemed so real but it must have been a dream. You step on the bus.</p> <p>Another gloomy day.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path019 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-surprised.jpg',
  title: 'Leave',
  title: 'Read the Writing',
  paragraph: '<p>You inspect the wall and start to read outloud. As you do each word that you read lights up.</p><p>There was a time the sun did fall.<br>Darkness overtook us all.<br>When we thought it was death to light.<br>There came one tall and bright.<br>We praise the Sun Fox every day.<br>With hopes that the light will stay.<p><p>The light from the letters start to glow intensely and the wall starts to crack.</p>',
  question: '→ Oh no! What should you do?',
  leftBtn: 'Stand Your Ground',
  rightBtn: 'Flee',
  leftFun: function(){game(path020)},
  rightFun: function(){game(path021)},
};

path020 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-confident.jpg',
  title: 'Stand Your Ground',
  paragraph: '<p>The stone walls begin to crumble around you. The ground starts to shake. You lose your balance and fall on your behind as the rocks give beneath you. You start falling. Falling…Falling…Until you hit the ground hard. It knocks you out.</p><p>When you come to you can hardly open your eyes because of a bright yellow light that fills the room.</p>',
  question: '→ You can hardly see but need to make a choice!',
  leftBtn: 'Let Your Eyes Adjust',
  rightBtn: 'Get Out of There',
  leftFun: function(){game(path022)},
  rightFun: function(){game(path023)},
};

path021 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-scared.jpg',
  title: 'Flee',
  paragraph: '<p>The lights that once lit the room quickly burn out. You start to run away but you cannot find the path back. The darkness is too dense. You feel the ground give out under you and you fall into darkness.</p><p>The next time you open your eyes you see dense trees all around you. You are laying on the ground. The rain has soaked your clothes. Everything must have been a dream. You stand up and head back to the bus stop. \'How did I get in the woods in the first place?\' you wonder.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path022 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-suprised.jpg',
  title: 'Let Your Eyes Adjust',
  paragraph: '<p>It is painful and it takes a few minutes but eventually your eyes adjust to the bright light. The yellow light is omitted from a small orange fox. It’s not a normal fox. It is glowing bright and it\'s eyes are completely white. Without moving its mouth you hear it speak. </p><p>\"My light once shined much brighter. It lit up the morning skies.\" </p><p>It pauses and you have a chance to speak.</p>',
  question: '→ How do you reply?',
  leftBtn: '\"What happened to your light?\"',
  rightBtn: '\"What exactly are you?\"',
  leftFun: function(){game(path024)},
  rightFun: function(){game(path025)},
};

path023 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-scared.jpg',
  title: 'Get out of There',
  paragraph: '<p>You could hardly open your eyes, but something told you to run. You start running not knowing where you are going. You can hear a deafening cry of sorrow as you flee. The light intensifies and blinds you.</p><p>When you finally can open your eyes you find yourself running through the trees back to the bus stop. As you stop to catch your breath you look around. The scene is ordinary. The trees are damp. The street is full of puddles. The sky is gray.</p><p>The bus pulls up and you see everyone across the street getting on. You run to catch it before it leaves.</p><p>You can’t pinpoint why but inside you there is a deep feeling of loss.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path024 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg',
  title: '\"What happened to your light?\"',
  paragraph: '<p>\"What happened to your light?\" As you speak you notice the three glowing mice run from behind you and over to the fox. They have bouquets of herbs in their hands.</p><p>\"I came to this world centuries ago. Like all things, my time must come to an end. My plan was to have a successor ready to carry the light before I passed, but my time has been cut short by your kind.\" For the first time you notice a small wound on the foxes back. The mice are doing their best to treat it with herbal remedies.</p>',
  question: '→ Now is your time to get answers.',
  leftBtn: '\"Cut Short?\"',
  rightBtn: '\"What Exactly Are You?\"',
  leftFun: function(){game(path026)},
  rightFun: function(){game(path025)},
};

path025 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-curious.jpg'
  title: '\"What Exactly Are You?\"',
  paragraph: '<p>While there is silence you speak up. \"Who are you?\" When you ask this question you see the three mice run up to you with big eyes. One looks at you with a gasp. Something about mice knowing something you don\'t makes you blush.</p><p>\"I am the Sun Fox.\" As the glowing figure speaks his name you can hear the muffled sound of praises. Of course. You had just read the story after all.</p><p>\"Don\'t be embarrassed, child. My story has long been forgotten by your kind. I am not an animal, I am not a god. I am something in between…but my time was cut short.\"</p>',
  question: '→ You want to know more, but what?',
  leftBtn: '\"What Happened to Your Light?\"',
  rightBtn: '\"Cut Short?\"',
  leftFun: function(){game(path024)},
  rightFun: function(){game(path026)},
};

path026 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-surprised.jpg'
  title: '\"Cut Short?\"',
  paragraph: '<p>\"Why was it cut short?\" You notice the wound on its back is not glowing. Instead it is the darkest spot on the Sun Fox.</p><p>\"A human...\" As the Sun Fox begins to tell the story you see it animate in the lights. \"I was finishing my trip around the world, bringing sun to all, when I was marked by a human. You see, I have met humans many times before. Some spread my legend in awe and thank me for my time. Others have thought me to be a great trophy. I had met the wrong fate that day.\" </p>',
  question: '→ What answers do you need?',
  leftBtn: '\"How Can I Help?\"',
  rightBtn: '\"Why Did You Bring Me Here?\"',
  leftFun: function(){game(path030)},
  rightFun: function(){game(path027)},
};

path027 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-smile.jpg'
  title: '\"Why Did You Bring Me Here?\"',
  paragraph: '<p>\"Why did you bring me here?\" Asking felt rude but you needed to know.<p>\"I am dying. Soon my light will run out and the world will once again descend into darkness. With little time left I sent my friends out to find someone worthy. And since a human took my soul. It needs to be a human to replace it. You see not everyone can see the light. It takes someone with a soul that is pure.\" </p>',
  question: '→ Pure soul...You?',
  leftBtn: '\"Why Me?\"',
  rightBtn: '\"How Can I Help?\"',
  leftFun: function(){game(path028)},
  rightFun: function(){game(path030)},
};

path028 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg'
  title: '\"Why Me?\"',
  paragraph: '<p>You made an old lady drop her newly baked pie last week because you almost knocked her over on your way to school. You didn\'t stop because you didn\'t want to be late. You didn\'t feel like a pure soul. \"Why me?\" The honor felt too great.</p><p>\"To be honest,\" the Sun Fox said. \"There are many souls that are pure. Many came down here, but most either never made it to me or were too afraid to help. You are not the first soul that is pure, nor the last. Though, I\'m afraid there is no time left and you are my last hope.\"</p>',
  question: '→ Does that sound like something you want?',
  leftBtn: '\"I Can\'t Do It\"',
  rightBtn: '\"How Can I Help?\"',
  leftFun: function(){game(path029)},
  rightFun: function(){game(path030)},
};

path029 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-scared.jpg'
  title: '\"I Can\'t Do It\"',
  paragraph: '<p>With your rejection, the Sun Fox spoke, \"A soul who can\'t is a soul who won\'t\".</p><p>You blink and you are back at the bus stop. People all around you are running from the bus. They seem to be frantic. Your phone pings and you see an alert that a flash flood is coming.</p><p>You must live with the choice you made.</p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path030 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-confident.jpg'
  title: '\"How Can I Help?\"',
  paragraph: '<p>You are eager. Whatever it is you will do. \"How can I help?\" You find your blood pumping. A large smile is plastered on your face. You are the chosen one, or whatever, and — </p><p>Your thoughts are broken by the Sun Foxes reply. \"You must sacrifice your soul and become the new Sun Guardian. You must leave everyone you love behind and take on the life of a demi-god. Neither God nor human. You will spend your days with the spirits of nature until your time ends. You will spend your existence bringing light to the lands.\"</p><p>You think of your friends, your family, your future. That was not the reply you expected. You think of how worried your mother will be when you\'re not in time for dinner. Your little sister is probably at the window waiting for your return home.</p><p>\"Will you take on this burden?\"</p>',
  question: '→ Well, will you?',
  leftBtn: 'Take It On',
  rightBtn: 'Turn It Down',
  leftFun: function(){game(path032)},
  rightFun: function(){game(path031)},
};

path031 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-worried.jpg'
  title: 'Turn It Down',
  paragraph: '<p>You were prepared for a lot but you weren\'t prepared for that. You have too many people who care about you and too many people you care about. You can’t just vanish from existence! \"I\'m sorry.\" You hang your head. \"But I can’t do that.\" You look up at the Sun Fox. You can see that even in the short time you\'ve spoken he has seem to have dimmed. \"There has to be someone else!\" You plead.</p><p>The Sun Fox doesn\'t say a word. It just nods. As it does the room flashes and blinds you. You are being shaken awake. You can see you are at the bus stop and an older man is above you. \"Wake up! We need to go!\" You recognize him as one of the daily commuters that takes the bus with you. He pulls you up to your feet and you stumble. \"A tsunami! A tsunami is coming!\"</p><p>You can feel your heart beat out of your chest. You realize you made a major mistake.<p>',
  question: '→ Game Over',
  leftBtn: 'Retry',
  rightBtn: 'Quit',
  leftFun: function(){game(path000)},
  rightFun: function(){game(path)},
};

path032 = {
  avatar: 'https://rachelnurmi91.github.io/TheSunFox/avatars/avatar-sun.jpg'
  title: 'Take It On',
  paragraph: '<p>You were prepared for a lot but you weren\'t prepared for that. You have many people who care about you and many people you care about. But… What good is that if the light is gone? What good is your love if life on earth succumbs to complete darkness? You are, after all, the last shot. There isn\'t someone else who can take your place. And if there was, would they?</p><p>Your loved ones will miss you, but they will be safe. They will move on. \"I\'ll do it.\"</p><p>The light from the Sun Fox tunnels up into a ball above it. \"You are the one worthy of this. I know the fear you must feel and the pain of losing those you love. I will make sure the hearts of your loved ones are at peace.\" You can see he is now just a normal wounded fox. In that moment you wish you could save him too. The yellow ball of light shoots straight into your heart. It doesn’t hurt. In fact you don\'t feel anything other than a soft radiating warmth. </p><p>There is a bright flash of light.</p><p>When you can see again, the Sun Fox is gone from existence. The white glowing mice run up to you. One runs up onto your shoulder and checks you out. It alerts you to the fact that you are now just the glowing shape of the human you once were. </p><p>You think about the surface and you suddenly are there. You have somehow brought yourself to the hill above your family\'s home. Things are different now. You don\'t yet understand your power but soon you will.</p><p>When you look down at the valley below, you smile. The world is no longer shades of gray. It is bright colors. Your little sister run outside with your mom in tow. She points to a rainbow. There hasn\'t been a rainbow in years.</p>',
  question: '→ You have saved the world, Sun Child.',
  leftBtn: '',
  rightBtn: '',
  leftFun: function(){game(path)},
  rightFun: function(){game(path)},
};
