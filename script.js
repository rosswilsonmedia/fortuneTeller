var fortunes = [
    "Fortune favors the bold",
    "But what if you just didn’t?",
    "Just do it, maybe",
    "Maybe don’t",
    "Give up while you are ahead",
    "It’s all a simulation",
    "Go for it, you go this!",
    "You don’t got this",
    "The circle of life is beautiful, embrace it",
    "Not everything is as it seems, keep trying",
    "Edison failed hundreds of times before making a light bulb, you shall also fail hundreds of times.",
    "Shakira is beautiful and so are you",
    "Maybe next time",
    "Hips sometimes lie",
    "If a tree falls in the forest and no one is around to hear it, is that still deforestation?",
    "That’s got to be the greatest pirate I’ve ever seen",
    "Roses are red, violets are blue, my favorite angles are askew",
    "Roses are red, violets are blue, choo choo kachoo",
    "We all live in a yellow submarine, you just happen to be outside of it",
    "Sometimes inexperience is experience",
    "I am speed",
    "Good luck!",
    "Chapter 2: The boy is now a fish man",
    "Chapter 3: The world has descended into chaos and all humans have mysteriously become cars.",
    "Chapter 4: The chaos realm has descended.",
    "Chapter 5: We have reached universal death",
    "Nuclear meltdown is not reserved for you, only Chernobyl.",
    "Disney is only a facade, you have so much potential.",
    "There’s always someone higher up to pass the buck to.",
    "Are you sure you’re okay?",
    "I predict full system failure",
    "I sense the need for inebriation",
    "Have you considered seizing the means of- I mean, seizing the day?",
    "The person in the mirror is currently not listening.",
    "Nirvana is unobtainable, abandon ship",
    "Congrats, your hips don’t lie",
    "Your hips lie",
    "Consider that you are nothing more than a speck of dust in an infinite plane of matter",
    "Why run faster when you can trip your opponents?",
    "You must master the art of dodging your saboteurs",
    "Better yet, why is the tequila always gone?",
    "Your biggest enemy is still out there",
    "Ka-Chow",
    "I used to be an adventurer like you, you know",
    "You are speed",
    "We are all speed",
    "Chapter 1: There once was a boy, West Philadelphia born and raised...",
    "DOOM IS COMING<play howie scream>",
    "I rate you average",
    "Slightly above-average, such that the average person will designate you as average",
    "Blame your spouse",
    "The person in the mirror will always listen",
    "The future is not always bright.",
    "Try everything",
    "As long as you are faster than the person next to you, the bear won’t eat you.",
    "Never fight hungry!",
    "Why is the rum always gone?",
    "The simulation may be broken.",
    "I know what you did last summer.",
    "The world will burn and that is okay.",
    "Winter is coming",
    "Laugh it off, there is always another night",
    "I drink and know things",
    "What is your excuse now...",
    "Never look back",
    "Hindsight is 20/20",
    "Time is the best teacher, but it will kill you",
    "It can always be worse"
];

var orb={
    el: document.querySelector('#fortuneOrb'),
    hp: 15,
    achievement: document.querySelector('#achievement'),
    ding: document.querySelector('#ding'),
    glitter: document.querySelector('#glitter'),
    input: document.querySelector('#question'),
    output: document.querySelector('#fortune')
}

document.getElementsByTagName('input')[0].onkeydown = function search(a){
    if(a.key=="Enter" && orb.input.value!=""){
        orb.el.style.animation="answeringOrb 1.5s ease-in-out";
        document.body.style.boxShadow="0 0 5em inset lightgray";
        orb.glitter.load();
        orb.glitter.play();
        setTimeout(function(){
            document.body.style.boxShadow="none";
        },1000);
        setTimeout(function(){
            orb.el.style.animation="glowingOrb 4s infinite ease-in-out";
            orb.output.innerText=fortunes[Math.floor(Math.random()*68)];
            orb.output.style.opacity="1";
        },1500);
        setTimeout(function(){
            orb.output.style.opacity="0";
            setTimeout(function(){
                orb.output.innerText="";
            },500);
        },7000);
    }
}

function orbUnlock(){
    if(orb.hp>0){
        orb.hp--;
        if(orb.hp>0){
            clearTimeout(scale);
            orb.el.style.transform="scale(1.02)";
            orb.ding.load();
            orb.ding.play();
            var scale=setTimeout(function(){
                orb.el.style.transform="scale(1)";
            }, 50);
        } else if(orb.hp==0){
            orb.el.style.background="url('img/jimR.jpg') no-repeat";
            orb.el.style.backgroundPosition="center";
            orb.el.style.backgroundSize="cover";
            document.querySelector('input').setAttribute("placeholder", "What would you like to ask Jim?");
            orb.achievement.play();
        }
    }
}