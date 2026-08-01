const registrationUrl = "";

mountScrollWorld(document.getElementById("world"), {
  brand: {
    name: "בית וספר",
    href: "#top",
    logo: "assets/brand/logo-bait-vasefer.webp",
    logoAlt: "בית וספר",
  },
  nav: false,
  cta: {
    label: "לשיעור התנסות",
    href: "#registration-dialog",
    action: "register",
  },
  routeLabel: "תחנות במסע הסקרנות",
  hint: "גללו כדי להיכנס",
  autoplay: {
    duration: 74,
    playLabel: "טיסה אוטומטית",
    pauseLabel: "עצירת הטיסה",
  },
  diveScroll: 1.5,
  connScroll: 0.82,
  crossfade: 0.1,
  mobilePreloadAll: true,
  sections: [
    {
      id: "home",
      label: "הבית",
      still: "assets/stills/scene-01-home.webp",
      stillMobile: "assets/stills/mobile/scene-01-home-m.webp",
      clip: "assets/video/dive-01-home.mp4",
      clipMobile: "assets/video/mobile/fast/dive-01-home-m.mp4",
      accent: "#C85F3A",
      scroll: 1.8,
      linger: 0.4,
      eyebrow: "מיזם העשרה למשפחות חינוך ביתי",
      title: "הסקרנות נכנסת הביתה.",
      body: "קורסים חיים שמרחיבים אופקים, מחברים בין ילדים וילדות, ומשאירים את הבוקר קצת יותר נינוח.",
      tags: ["גילאי 6–14", "קבוצות עד 15"],
    },
    {
      id: "math",
      label: "משחקמתיקה",
      still: "assets/stills/scene-02-math.webp",
      stillMobile: "assets/stills/mobile/scene-02-math-m.webp",
      clip: "assets/video/dive-02-math.mp4",
      clipMobile: "assets/video/mobile/fast/dive-02-math-m.mp4",
      accent: "#D99A2B",
      scroll: 1.45,
      linger: 0.24,
      eyebrow: "חושבים דרך הידיים",
      title: "מתמטיקה שאפשר לשחק איתה.",
      body: "לא עוד דף תרגילים: חוקרים צורות, דפוסים ופתרונות דרך משחק, שיחה והתנסות פעילה.",
      tags: ["חשיבה", "משחק", "פתרון בעיות"],
    },
    {
      id: "wonder",
      label: "לשאול",
      still: "assets/stills/scene-03-wonder.webp",
      stillMobile: "assets/stills/mobile/scene-03-wonder-m.webp",
      clip: "assets/video/dive-03-wonder.mp4",
      clipMobile: "assets/video/mobile/fast/dive-03-wonder-m.mp4",
      accent: "#35536F",
      scroll: 1.5,
      linger: 0.28,
      eyebrow: "פילוסופיה והעולם הבלתי נראה",
      title: "רואים אחרת כששואלים.",
      body: "מתקרבים למה שקשה לראות, מתרגלים הקשבה, ומגלים שלשאלה טובה יש לפעמים יותר מתשובה אחת.",
      tags: ["חקירה", "שיחה", "ידע כללי"],
    },
    {
      id: "horizon",
      label: "מעבר לאופק",
      still: "assets/stills/scene-04-horizon.webp",
      stillMobile: "assets/stills/mobile/scene-04-horizon-m.webp",
      clip: "assets/video/dive-04-horizon.mp4",
      clipMobile: "assets/video/mobile/fast/dive-04-horizon-m.mp4",
      accent: "#7F8F70",
      scroll: 1.55,
      linger: 0.3,
      eyebrow: "ים, אדמה וחלל",
      title: "מהשונית ועד לכוכבים.",
      body: "ביולוגיה ימית, מדעי כדור הארץ והחלל ומסעות מעבר לאופק — כל טרימסטר פותח עולמות חדשים.",
      tags: ["ביולוגיה ימית", "כדור הארץ", "חלל"],
    },
    {
      id: "circle",
      label: "הקהילה",
      still: "assets/stills/scene-05-circle.webp",
      stillMobile: "assets/stills/mobile/scene-05-circle-m.webp",
      clip: "assets/video/dive-05-circle.mp4",
      clipMobile: "assets/video/mobile/fast/dive-05-circle-m.mp4",
      accent: "#9187A3",
      scroll: 1.62,
      linger: 0.36,
      eyebrow: "מפגש חי, מהבית",
      title: "לומדים יחד. נשארים בבית.",
      body: "עוצרים את המרוץ, פוגשים חברים וחברות מקהילת החינוך הביתי, ומשתמשים במסך כדי להשתתף — לא רק לצפות.",
      tags: ["שיעור פעיל", "עד 15 משתתפים", "לא מוקלט"],
    },
    {
      id: "choice",
      label: "הבחירה שלכם",
      still: "assets/stills/scene-06-choice.webp",
      stillMobile: "assets/stills/mobile/scene-06-choice-m.webp",
      clip: "assets/video/dive-06-choice.mp4",
      clipMobile: "assets/video/mobile/fast/dive-06-choice-m.mp4",
      accent: "#C85F3A",
      scroll: 1.9,
      linger: 0.44,
      eyebrow: "פיילוט צנוע. בחירה גמישה.",
      title: "בוחרים קורס אחד. ומתחילים.",
      body: "12 מפגשים בטרימסטר, 45 ש״ח לשיעור. בלי יום מלא ובלי התחייבות לשנה — טועמים, בודקים וממשיכים אם זה עובד.",
      tags: ["540 ש״ח לטרימסטר", "עד 3 תשלומים"],
      cta: {
        primary: {
          label: "לשיעור התנסות ב־45 ש״ח",
          href: "#registration-dialog",
          action: "register",
        },
        secondary: {
          label: "לטוס שוב מההתחלה",
          href: "#top",
        },
      },
    },
  ],
  connectors: [
    "assets/video/connector-01.mp4",
    "assets/video/connector-02.mp4",
    "assets/video/connector-03.mp4",
    "assets/video/connector-04.mp4",
    "assets/video/connector-05.mp4",
  ],
  connectorsMobile: [
    "assets/video/mobile/fast/connector-01-m.mp4",
    "assets/video/mobile/fast/connector-02-m.mp4",
    "assets/video/mobile/fast/connector-03-m.mp4",
    "assets/video/mobile/fast/connector-04-m.mp4",
    "assets/video/mobile/fast/connector-05-m.mp4",
  ],
});

const registrationDialog = document.getElementById("registration-dialog");

document.addEventListener("click", (event) => {
  const registrationLink = event.target.closest('[data-action="register"]');
  if (!registrationLink) return;

  if (registrationUrl) {
    registrationLink.href = registrationUrl;
    return;
  }

  event.preventDefault();
  registrationDialog.showModal();
});

registrationDialog.addEventListener("click", (event) => {
  if (event.target === registrationDialog) registrationDialog.close();
});

document.getElementById("world").addEventListener("scrollworld:cliperror", () => {
  document.getElementById("media-error").hidden = false;
}, { once: true });
