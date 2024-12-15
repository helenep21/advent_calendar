// Days 1 to 25 with fixed layout order
const days = Array.from({ length: 24 }, (_, i) => i + 1);

const contentForDays = {
  1: `Welcome to December ! 🎄<br>
  Up until a few months ago, it wasn't one of my favorite month.<br>
  But now, it has become really special to me because it's the birth month of my favorite person :)<br>
  <br>
  Since I know your love of advent calendar, this is my version of one !<br>
  Every day, you will get find out one thing I love about you (it's not in a preference order)<br>
  <br>
  ❤ I love you very much ❤<br>
  <br>
  Today's pick is how much you expand my world. Since I met you, I've discovered<br>
  new shows, new books, new artists, new knowledge, and most of all I keep discovering new<br>
  reasons to love and admire you !<br>
  So, much like the universe, my love for you seems to expand infinitely (it's science yes!)
  `,//expand world
  2: `Second day of the month, second thing I love about you !<br>
  I love how beautiful, pretty, cute, stunning, hot, DROP DEAD GORGEOUS you are !!<br>
  I don't mean that in a superficial way, I mean it in what you would call a holistical way<br>
  (still not sure of what it means lol)<br>
  From the moment you wake up, with your hair all tousled and sleepy eyes,<br>
  to getting dressed ready for your day,<br>
  at work in your little blue vest,<br>
  on a date (with me, duh) in a fancy outfit,<br>
  to back in bed tucked in for a goodnight's sleep,<br>
  you're always the most fascinating thing to look at in any room.<br>
  I will never get tired of looking at you, barely listening to what you're saying<br>
  because i'm getting distracted by how pretty you are ❤<br>`, //beautiful
  3: `I hope you're enjoying this little advent calendar so far my girl !<br>
  Today's reason to love you is : your resilience.<br>
  I'm always quite in awe of how you manage to deal with everything that is thrown your way,<br>
  big or small, you stay the little ray of sunshine in everyone's life and I find that incredibly beautiful.<br>
  Even when times get a little hard, you always find your way through.<br>
  I know you sometimes have a lot going on, but it's important that you remember the following : <br>
  - you've done a lot of hard things already<br>
  - you've always recovered from any difficulty<br>
  - you always have people you can lean on<br>
  and now you'll also always have me to figure things out !<br>
  You're my tough girl, and I'm  beyong proud of you ❤<br>`,//resilient
  4: `Today's my favorite number, so perfect time to have a little message for my perfect girl !<br>
  A reason to love you is your enthusiasm for everything.<br>
  Doing life with you is so exciting because you're the best adventure partner one could ask for.<br>
  You're always down to join me on random activities, and have ideas of your own for our dates.<br>
  Whenever I tell you some random fun fact and you just look at me like I'm telling you the most<br>
  fascinating story ever makes me feel all the butterflies ❤<br>`,//enthusiasm
  5: `Good morning my love !<br>
  One of my favorite thing about you is your softness, both in how you are and how you look.<br>
  That's why I always want to cover your face in kisses !!<br>
  But more importantly, you're so soft towards me and that always makes me feel so safe<br>
  and taken care of.<br>
  You are so precious, and I hope you always only feel softness from me because you should<br>
  be handled with great care.<br>
  You're like a little cloud that made a wish to be human, the sweetest cotton candy every ❤<br>`,
  //softness
  6: `Hello pretty girl ❤<br>
  I hope you're agreeing with all of the points so far, and there's many more to come !<br>
  Do you know, how precious you are ?<br>
  I mean, specifically you are one of a kind and that makes me feel very privileged to be with you.<br>
  I'm aware of how lucky I am to be your girlfriend, every day, first thing i think about<br>
  when I wake up and last thing on my mind when I drift to sleep.<br>
  You have so many qualities, so many reasons to love you, in any kind of relationships honestly.<br>
  I do think being you're partner allows me to see even more closely how precious you are, <br>
  and that's a HUGE honor to be chosen by you.<br>
  I cherish every second how precious you are, to me, and to everyone that knows you !<br>`,
  //precious
  7: `Today will be very simple.<br>
  Life with you is just so fun !<br>
  You always come up with new date ideas, new places to discover together,<br>
  cities to visit, things to try, meals to cook, path to do our little spaziergang, and much more.<br>
  You're also incredibly funny, not a day goes by without you making me laugh.<br>
  I know you can also be very serious when you need to, but I appreciate your ability to also be silly<br>
  with me (god knows how silly I can be...)<br>
  It means that even when life is not going great for me, I can always count on you to make me smile,<br>
  and distract my brain from not-so-fun stuff ❤<br>`,
  //fun
  8: `Today's pick is something I believe you forget sometimes about yourself, but something<br>
  so obvious to everyone that meets you even once.<br>
  You're one of the kindest person I've ever met, and you extend that gift to so many people.<br>
  It comes so naturally to you, to be empathic, to listen, to show support, to be there for those you love.<br>
  It's such a privilege to be on the receiving end of that quality, but it's almost a bigger one to<br>
  witness you extend it to anyone lucky enough to cross your path.<br>
  You're such a good person, and it's very gratifying to be loved by someone as kind as you.<br>
  I don't think I will ever be able to fully understand why or how I got to be this lucky,<br>
  but your kindness is something so amazing, that I'm so in awe of.<br>
  I hope you know you'll never lose anything by being this kind, because it makes you incredibly loveable ❤<br>`,
  //kind
  9: `By this point we should be waking up together in Aalen, so I hope you got many hugs already !<br>
  (1 000 sounds like a good start already, if I haven't fullfilled that amount yet this is your claim)<br>
  <br>
  Speaking of hugs, one of the reason I fell so easily in love with you is because of how affectionate you are.<br>
  Wherever we go, you always reach for me and that never fails to melt my heart.<br>
  You give me so much love through little gestures, like holding my hand everywhere, kissing me, hugging me<br>
  and I hope you know I'll never tired of it !<br>
  It's like constant reminders of the fact that YOU love ME (for some reason ?), and always makes the<br>
  butterflies that have taken up residency in my stomach since June go crazy ❤<br>
  I hope you never stop that, or else I'd have to simply hug you very very tightly until you do it back :)<br>`,
  //affectionate
  10: `Today is a special day !!<br>
  My favorite girl's birthday !!!!<br>
  The PRINCESS' day !!!!!!<br>
  I love you so much baby ❤❤ and today is going to be the best day for you !<br>
  I'm so happy to celebrate YOU today, but I already do every day.<br>
  You're the best thing in my life (and that's considering I already had a lot of good things)<br>
  Life by your side is amazing, and the perspective of spending my whole life with you is so exciting !<br>
  <br>
  So today's reason I love you is how much you love your birthday haha<br>
  I think it's absolutely adorable to see you be even more of a princess for the next 24 hours,<br>
  and even better to spend it by your side, with your family too.<br>
  It's really cute of you to see it as a special day (because it is),<br> 
  and a testament to the magic of every day !<br>
  Life with you is magic, but today a little bit more than usual.<br>
  I hope you have the best day today, because you deserve to feel all the love surrounding you !<br>`,
  //love bday
  11: `So, anyone that knows me would tell you I decide very quickly if I want to be with someone.<br>
  Obviously with you it took literally 10 minutes and i was LOCKED IN<br>
  But what made me even more sure, was how invested you were also.<br>
  I don't think I've ever had someone make me feel as secure as you do, someone to <br>
  match my level of investment. Our relationship feels so stable to me, I always know you're there for me.<br>
  Even tho you honestly hid it well until June hahaha (miss chill girl was just a facade)<br>
  You always talk about projects with me, wether they're for next week or in 10 years.<br>
  You tell me you love me every day, multiple times a day actually.<br>
  I don't remember what life was without you, and I never feel like I'll have to find out ❤<br>`,
  //invested
  12: `First things first, HAPPY FIVE MONTHS ANNIVERSARY MY LOVE !!!<br>
  Time flies by when you're having fun, and life with you is so fun !<br>
  Thank you for making me so happy, every day for the past five months.<br>
  To celebrate that, I will tell you today the main reason I love you : your brightness.<br>
  Not only are you incredibly smart (I could listen to you explain things to me for hours),<br>
  but you're also such a ray of sunshine.<br>
  I'll never forget that day in Flora, when I saw you walked in, and it's like the sun itself was entering<br>
  the room. Even from a few meters, I could not tear my eyes off of you, your presence so captivating.<br>
  And then you sat down, and that was it for me : I simply HAVE to marry that girl !<br>
  You are so bright, you brighten my life so much and I couldn't be more grateful to have you <br>
  Your cute smile is so contagious, it's almost blinding !`,
  //bright
  13: `Now I can officially start saying we've been dating for "almost" 6 months hehehe<br>
  Over the last few months, I got to witness upclose how incredibly mature you are.<br>
  I'm so in awe of how much of an adult you had to be early, and how well adjusted you are.<br>
  This was probably not easy to deal with, but it revealed just another one of your strength !<br>
  That makes you such a solid partner, an amazing communicator and a very level headed person.<br>
  Anytime I need someone to come to deal with a complicated emotion, you're always there to help<br>
  me unknot my brain and my thoughts.<br>
  I just hope I can do the same for you sometimes, in return ❤<br>
  <br>
  `,
  //mature
  14: `Today's pick is going to sound a little weird at first, but I think you'll appreciate it !<br>
  I love how femme you are hahaha<br>
  Not because I only love feminity in women, I love it specifically on you.<br>
  Because it's not just an aesthetic to you, but an identity you're proud of, and<br>
  you embody it fully.<br>
  With your purse, your lipstick and your little dress is when you look the most yourself to me ❤<br>
  I also love how you claim it, and how you defend that as an identity, I also think you have a very<br>
  bright point of view on that topic.<br>
  You're the cutest femme princess, and you're well aware of it !<br>
  <br>
  `,
  //femme
  15: `I know I haven't had the privilege of reading a piece of yours yet, but I don't need to <br>
  to know it's brilliant, moving and amazing.<br>
  You're naturally poetic, you see poetry and beauty in everything around you, you're a great writer<br>
  even through simple texts, and you're incredibly smart.<br>
  All of that is enough to know you're a great writer too.<br>
  I think it's even more impressive that you're able to produce art pieces out of tough times.<br>
  There's something beautiful and tender about that, which only makes more sense for you.<br>
  <br>
  I hope one day I'll get to read some of it :)<br>
  <br>`,
  //writing
  16: `So I mentioned before how bright you are, so this might sound similar but to me it's not exactly the same.<br>
  You're so incredibly SMART ! I always learn so much from you, and I love nothing more than hearing<br>
  you explain something complex to me (sorry sometimes I can barely hear what you say because my<br>
  brain just goes I LOVE YOU I LOVE YOU I LOVE YOU very loudly).<br>
  It also means I can always rely on you to help me untangle things and figure out life, <br>
  you always help me find a solution to problems.<br>
  Who knew such a tiny person could have the space for such a big brain !<br>
  You're so smart you even KNOW you're smart hahaha<br>
  Having a partner as smart as you is a huge blessing, and a big help in life ❤
  <br>`,
  //smart
  17: ``,
  18: ``,
  19: ``,
  20: ``,
  21: ``,
  22: ``,
  23: ``,
  24: ``,
};

// Function to render the calendar grid
const renderCalendar = () => {
  const today = new Date();
  // const today = new Date(2024,11,18);
  // const todayStr = `Today is: ${today.toDateString()}!`;
  // document.getElementById("today-date").innerText = todayStr;

  const grid = document.getElementById("calendar-grid");
  grid.innerHTML = ""; // Clear grid before rendering

  days.forEach((day) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = day;

    // Add wiggle effect for today's date
    const isToday = day === today.getDate();
    if (isToday) {
      box.classList.add("wiggle");
    }

    // Handle click events
    box.addEventListener("click", () => {
      if (day > today.getDate()) {
        alert("You can't open this yet, be patient!");
      } else {
        showDayContent(day);
      }
    });

    grid.appendChild(box);
  });
};

// Function to display content for a specific day
const showDayContent = (day) => {
  const content = document.createElement("div");
  content.classList.add("popup");
  content.innerHTML = `
    <div class="popup-content">
      <button class="close-btn" onclick="closePopup()">×</button>
      <h2>Day ${day} !</h2>
      <p>${contentForDays[day] || 'No content for this day.'}</p>
    </div>
  `;
  document.body.appendChild(content);
};

// Function to close the popup
const closePopup = () => {
  const popup = document.querySelector(".popup");
  if (popup) popup.remove();
};

// Render calendar (you can set a manual date for testing)
renderCalendar(new Date()); // Replace `new Date()` with `new Date(2024, 11, 10)` to test Dec 10, 2024
