export const badWords = ['качество', 'размер', 'стиль', 'тон','детализаци', 'ии', 'фон', 'размыт', 'соотношение', 'рамка', 'ракурс', 'количество фото', 'на фото не должно быть', 'трахает', 'порно', 'минет', 'голая', 'тварь', 'без одежды', 'аллах', 'аллаh', 'аllah', 'сосет', 'отсасывает', 'хуй', 'член', 'обнаженная', 'секс', 'ебать', 'ебал', 'пизда', 'пиздец', 'пизду', 'залупа', 'блядь', 'блядина', 'бляди', 'шлюха', 'шлюхи', 'шлюшки', 'сука', 'суки', 'сучка', 'сучки', 'мудак', 'мудаки', 'мудачье', 'гандон', 'гандоны', 'гондон', 'гондоны', 'еблан', 'ебланы', 'пидор', 'пидоры', 'пидорас', 'пидорасы', 'гей', 'геи', 'гей', 'геий', 'лесбиянка', 'лесбиянки', 'лесби', 'трансвестит', 'трансвеститы', 'транссексуал', 'транссексуалы', 'шизофреник', 'шизофреники', 'целует', 'целуются', 'целоваться', 'дрочит', 'дрочить', 'кончает', 'кончить', 'сперма', 'эякуляция', 'вагина', 'влагалище', 'анус', 'анальный', 'анальная', 'анусе', 'жопа', 'жопу', 'жопе', 'попка', 'попку', 'попке', 'манда', 'мандах', 'мандахе', 'клитор', 'клиторальный', 'клиторальная', 'сиська', 'сиськи', 'сисек', 'грудь', 'груди', 'грудей', 'титька', 'титьки', 'титьек', 'лобок', 'лобке', 'лобка', 'эротическ', 'эротичн', 'обнаженн', 'ню', 'нюшка', 'нюшки', 'нюшек'];
export const blockedUsers = [
  'a03WfYJErB2q0AqDImFEouIySY-HYe',
  'eaInYYq3ed0JZ4V9CbFjlZLRA91DA0',
  'iwr6ivyBomBChh51sbxyPTtnB5CZdL',
  'iSQgQFV81vACtznUBTjeqmEJdRbx3q',
  'a90AJuwOOdDhq-Ja-HR5ph0fVHWl9w',
  'ZEeqOdK3JLtnDIQJbTilX5R99xjw3O',
  '35j6gzEK7i7FlfgkOZLgLDCwcGUuUA',
  'hwlWWZE4wqHKNzbwTO55rCGeVNeYUu',
  '0Pmxo9WKsQT-k7T1dpdWxPGsezduiN',
  'tjqt7fLajDegTDj1fFMh-K0zgbx8np',
  'A7JLrJ3N59hDvkPFtdYMBzwHFUsiEd',
  'wGbCcN-m2v3LFaKet21obTpibwvobI',
  'krbgEGJK2Ze-5E8rLUDzEbGVCGPEh7',
  'xh52RtWzZZp9VkADB-jXO1tcLXCKDA',
  'mWRgIOfau0qRQaQDOALW1qr0RVbDxd',
  '1CfZIm5Q9K-CNThypvDp1vPhcZX5n2',
  'PQNkLBIVKwZ0yELipvekzoccqg0zpN',
  'xFW1wvGPvbYBaORFckq0C5tbtGmu9W',
  'gkwK0uycDdkXsrY3r5SAu5zLOf6eBX',
  'sXD88yyZxdpTW84BS4k-1FS5eoEqAe',
  'PkPC98NaZ58GLYAHDcBcbfe34FcK7Y',
  'HXcu5GCmEso9w2FHZ5ixrS2rTbjUex',
  'FaIvATiXDAdPCghr-uDrUTTmmFZeYN',
  "5732fdOZg8DlO0XCv8F0vdM142Yatr",
  "LSApOyY1OkoWuEo0s9iG40Uh-fH0Hd",
  "KJFuVDb9OvCmno0j4tLUMIsysII2bK",
  "5LioEfZBHhlm-GLRNZkeg4ivjr8UT1",
  "UChpIovcDqcQG-iZj3gxz3SN0Gdhc-",
  "leTO44dN3Qjxxi2ImcwtACrcMx1WQX"
];
// if (localStorage.getItem('user_Token') === '282e6391-ecd5-4691-bd8f-67842d47f950'){
//   localStorage.setItem('user_Token', 'DTtJAc6FvnAVa10YPYh7g-G1MGLY87' );
// }
function getRandomNumber() {
  const number = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // 5–15

  if (number === 6 && localStorage.getItem('subscribed')) {
    localStorage.removeItem('subscribed');
  }

  return number;
}


// Вызов функции
console.log(getRandomNumber());

function resetSecurityToMax() {
    if (Number(localStorage.getItem("security")) >= 10) {
        localStorage.setItem("security", 10);
    }
}
let lastTime = 0;
let lastX = 0;
let lastY = 0;
let lastTrigger = 0;

const SPEED_THRESHOLD = 3;
const SHAKE_THRESHOLD = 40;
const COOLDOWN = 700; // защита от спама

function incrementSecurity() {
    const now = Date.now();
    if (now - lastTrigger < COOLDOWN) return;

    let current = Number(localStorage.getItem("security")) || 0;

    if (current < 10) {
        localStorage.setItem("security", current + 1);
        console.log("Security incremented! Level:", current + 1);
        resetSecurityToMax();
        lastTrigger = now;
    }
}

function handleMove(x, y) {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    if (deltaTime <= 0) return;

    const deltaX = x - lastX;
    const deltaY = y - lastY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / deltaTime;

    if (speed > SPEED_THRESHOLD) {
        incrementSecurity();
    }

    lastTime = currentTime;
    lastX = x;
    lastY = y;
}

/* 🖱 ПК */
document.addEventListener("mousemove", (e) => {
    handleMove(e.clientX, e.clientY);
});

/* 📱 Палец */
document.addEventListener("touchmove", (e) => {
    if (!e.touches.length) return;
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
});

/* 📱 Резкая встряска телефона */
window.addEventListener("devicemotion", (event) => {
    const acc = event.accelerationIncludingGravity;
    if (!acc) return;

    const total =
        Math.abs(acc.x || 0) +
        Math.abs(acc.y || 0) +
        Math.abs(acc.z || 0);

    if (total > SHAKE_THRESHOLD) {
        incrementSecurity();
    }
});