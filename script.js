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
  `,
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
  because i'm getting distracted by how pretty you are ❤<br>`,
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
  You're my tough girl, and I'm  beyong proud of you ❤<br>`,
  4: "Here's a warm mug of cocoa ☕",
  5: "Time for holiday music 🎶",
  6: "Welcome to December! 🎄",
  7: "A snowflake for you! ❄️",
  8: "It's getting festive! 🎅",
  9: "Here's a warm mug of cocoa ☕",
  10: "Time for holiday music 🎶",
  11: "Welcome to December! 🎄",
  12: "A snowflake for you! ❄️",
  13: "It's getting festive! 🎅",
  14: "Here's a warm mug of cocoa ☕",
  15: "Time for holiday music 🎶",
  16: "Welcome to December! 🎄",
  17: "A snowflake for you! ❄️",
  18: "It's getting festive! 🎅",
  19: "Here's a warm mug of cocoa ☕",
  20: "Time for holiday music 🎶",
  21: "Time for holiday music 🎶",
  22: "Time for holiday music 🎶",
  23: "Time for holiday music 🎶",
  24: "Time for holiday music 🎶",
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
