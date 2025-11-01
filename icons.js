// icons.js — أيقونات جوائز وروابط
export function iconSVG(kind='trophy'){
  const c='class="h-icon"';
  const g=(id,a,b)=>`<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>`;
  if(kind==='crown') return `<svg ${c} viewBox="0 0 24 24">${g('g','#FFD700','#FFA500')}<path fill="url(#g)" d="M3 7l4 3 5-6 5 6 4-3-2 10H5L3 7z"/><circle cx="7" cy="7" r="1.2" fill="#fff"/><circle cx="12" cy="4" r="1.2" fill="#fff"/><circle cx="17" cy="7" r="1.2" fill="#fff"/></svg>`;
  if(kind==='shield')return `<svg ${c} viewBox="0 0 24 24">${g('s','#B0C4DE','#8AA2C8')}<path fill="url(#s)" d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M7 10h10v2H7z" fill="#dfe7ff"/></svg>`;
  if(kind==='medal') return `<svg ${c} viewBox="0 0 24 24">${g('m','#FFD166','#FFB300')}<circle cx="12" cy="14" r="5" fill="url(#m)"/><path fill="#4169E1" d="M7 2h4l1 4 1-4h4l-5 7z"/><circle cx="12" cy="14" r="2.2" fill="#fff"/></svg>`;
  if(kind==='star')  return `<svg ${c} viewBox="0 0 24 24">${g('t','#FFD166','#FFB300')}<path fill="url(#t)" d="M12 2l2.5 5 5.5.8-4 3.9.9 5.6L12 15l-4.9 2.3.9-5.6-4-3.9 5.5-.8z"/><circle cx="12" cy="12" r="1.2" fill="#fff"/></svg>`;
  if(kind==='diamond')return `<svg ${c} viewBox="0 0 24 24">${g('d','#b8e1ff','#7aa9ff')}<path fill="url(#d)" d="M3 9l5-6h8l5 6-9 13z"/></svg>`;
  if(kind==='cup') return `<svg ${c} viewBox="0 0 24 24">${g('c','#FFE29F','#FFA751')}<path fill="url(#c)" d="M7 4h10v2c0 3-2 6-5 6s-5-3-5-6V4z"/><path d="M5 4h2v3H6c-1.7 0-3-1.3-3-3h2zm12 0h2c0 1.7-3 3-3 3h-1V4h2z" fill="#fff3"/></svg>`;
  if(kind==='shieldStar') return `<svg ${c} viewBox="0 0 24 24">${g('ss','#9EC9FF','#5B8CFF')}<path fill="url(#ss)" d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M12 6l1.8 3.6 4 .6-2.9 2.8.7 4.1L12 14.8 7.4 17l.7-4.1L5.2 10l4-.6z" fill="#fff"/></svg>`;
  return `<svg ${c} viewBox="0 0 24 24">${g('tr','#ffe29f','#ffa751')}<path fill="url(#tr)" d="M5 4h14l-2 8 3 2-8 1-8-1 3-2z"/><rect x="9" y="16" width="6" height="2" rx="1" fill="#ffe29f"/></svg>`;
}
export function linkIcon(name="link"){
  const map={"sheet":"📊","calendar":"📅","swap":"🔁","check":"✅","ideas":"💡","ads":"📢","form":"📝","people":"👥","gear":"⚙️","time":"⏱️","doc":"📄","star":"⭐","shield":"🛡️","crown":"👑","mail":"✉️","chart":"📈","bell":"🔔","target":"🎯","folder":"🗂️","clip":"🔗","home":"🏠","plane":"✈️","hospital":"🏥","car":"🚓"};
  return map[name]||"🔗";
}
