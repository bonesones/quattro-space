const row1Images = [
  "/images/partners/1.png",
  "/images/partners/2.jpg",
  "/images/partners/3.jpg",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
  "/images/partners/10.png",
  "/images/partners/11.png",
  "/images/partners/12.png",
  "/images/partners/13.png",
];

const row2Images = [
  "/images/partners/14.png",
  "/images/partners/15.png",
  "/images/partners/16.png",
  "/images/partners/17.png",
  "/images/partners/18.jpg",
  "/images/partners/19.jpg",
  "/images/partners/20.jpg",
  "/images/partners/21.png",
  "/images/partners/22.png",
  "/images/partners/23.png",
  "/images/partners/24.svg",
  "/images/partners/25.jpg",
  "/images/partners/26.png",
];

function renderRow(images, rowClass) {
  return `
    <div class="partners-swiper ${rowClass}">
      ${images.map((src) => `<img src="${src}" alt="Партнер" />`).join("")}
    </div>
  `;
}

export function renderPartnersMarquee() {
  return `
    <div class="flex flex-col gap-4 overflow-hidden">
      ${renderRow(row1Images, "row-1")}
      ${renderRow(row2Images, "row-2")}
    </div>
  `;
}

