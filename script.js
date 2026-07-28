// ==========================================
// DATA: Astronomers & Instruments
// ==========================================
const astronomers = [
    { name: "Harezmi (780–850)", role: "Matematikçi ve Astronom", desc: "Cebir biliminin kurucularından; astrolojik ve astronomik tablolar hazırlamış, takvim hesaplamaları üzerine çalışmıştır.", img: "assets/images/harezmi.jfif" },
    { name: "Battani (858–929)", role: "Astronom ve Matematikçi", desc: "Güneş yılı uzunluğunu hassas bir şekilde ölçmüş, trigonometriyi astronomiye uygulamıştır.", img: "assets/images/battani.jpeg" },
    { name: "Birûnî (973–1048)", role: "Matematikçi ve Astronom", desc: "Dünyanın çapını çok küçük bir hata payıyla ölçmüş, Güneş ve Ay hareketlerini incelemiştir.", img: "assets/images/biruni.jpg" },
    { name: "İbni Sina (980–1037)", role: "Filozof ve Bilim İnsanı", desc: "Astronomi ve doğal bilimler üzerine teorik çalışmalar yapmış, gözlem aletleri üzerine yazılar yazmıştır.", img: "assets/images/ibni_sina.jpg" },
    { name: "Ömer Hayyam (1048–1131)", role: "Matematikçi, Astronom ve Şair", desc: "Celâlî Takvimi’nin hazırlanmasında önemli rol oynamış; Güneş yılı hesaplamalarında büyük katkı sağlamıştır.", img: "assets/images/omer_hayyam.jpg" },
    { name: "Nasîrüddin Tûsî (1201–1274)", role: "Matematikçi ve Astronom", desc: "Meraga Rasathanesi'ni kurmuş; gezegen hareketlerini açıklayan 'Tûsî Çifti' modelini geliştirmiştir.", img: "assets/images/tusi.jpg" },
    { name: "Gıyaseddin Cemşid (1380–1429)", role: "Matematikçi ve Astronom", desc: "Ondalık kesirleri astronomi hesaplamalarında ilk kullananlardandır, gözlem aletleri tasarlamıştır.", img: "assets/images/giyaseddin_cemsid.webp" },
    { name: "Uluğ Bey (1394–1449)", role: "Timurlu Hükümdar ve Astronom", desc: "Semerkand Rasathanesi’nde gözlemler yapmış; döneminin en hassas yıldız kataloglarını hazırlamıştır.", img: "assets/images/ulug_bey.jfif" },
    { name: "Ali Kuşçu (1403–1474)", role: "Astronom ve Matematikçi", desc: "Semerkand'dan İstanbul'a astronomi geleneğini taşımış, Osmanlı'da astronomi eğitimini kurumsallaştırmıştır.", img: "assets/images/ali_kuscu.jpg" },
    { name: "Takiyyüddin eş-Şami (1521–1585)", role: "Osmanlı Astronom", desc: "İstanbul Rasathanesi'ni kurmuş; saat mekanizmaları ve çok hassas astronomik aletler geliştirmiştir.", img: "assets/images/takiyyuddin.jpg" },
    { name: "Fatin Gökmen (1877–1955)", role: "Cumhuriyet Dönemi Astronomu", desc: "Kandilli Rasathanesi’nin kurucu yöneticisi olarak modern astronomiyi kurmuş ve halk için yayınlar yapmıştır.", img: "assets/images/fatin_gokmen.jpg" }
];

const historyData = [
    {
        title: "Selçuklu'dan Cumhuriyet'e Rasathane Geleneği",
        img: "assets/images/kandilli.jpg",
        desc: "Cebir biliminin kurucularından Harezmi'nin astronomik tabloları ve takvim hesaplamalarıyla temelleri atılan bu süreç; Selçuklu döneminde Ömer Hayyam'ın Güneş yılı hesaplamalarındaki ustalığıyla hazırlanan hassas Celâlî Takvimi ile büyük bir ivme kazanmıştır. Bu bilimsel miras, Timurlu döneminde Uluğ Bey'in Semerkand Rasathanesi'nde hazırladığı kapsamlı yıldız kataloglarıyla zenginleşmiş, Osmanlı'da ise Takiyyüddin eş-Şami'nin kurduğu İstanbul Rasathanesi'nde geliştirdiği hassas gözlem aletleri ve yaptığı takvim çalışmalarıyla daha da ileri taşınmıştır. Cumhuriyet dönemine gelindiğinde ise Fatin Gökmen, Kandilli Rasathanesi yöneticisi sıfatıyla modern astronomi eğitimini halka yaymış ve Selçuklu'dan Cumhuriyet'e uzanan bu köklü gözlem geleneğini günümüze bağlayan kilit isim olmuştur."
    },
    {
        title: "Kusursuz Zaman Hesaplamaları ve Takvimler",
        img: "assets/images/telescope.jpg",
        desc: "Zamanı planlamak için gök cisimlerinin hareketleri esas alınarak oluşturulan takvimler, bu bilimsel gözlemlerin en önemli yansımalarıdır. Tarihsel süreçte Osmanlılar, Ay'ın döngüsüne bağlı 354 günlük Hicrî takvimin yanı sıra mevsim kaymalarını dengelemek için Güneş yılını esas alan Rûmî takvimi de kullanmışlardır. Ancak takvim sistemlerindeki asıl büyük astronomik başarı, Selçuklu Sultanı Melikşah döneminde Ömer Hayyâm'ın liderliğinde hazırlanan Celâlî Takvimi ile günümüzde kullandığımız Milâdî (Gregoryen) Takvim karşılaştırıldığında ortaya çıkar. M.Ö. 45'teki Jülyen sisteminin 1582'de güncellenmesiyle son halini alan Milâdî takvim, yaklaşık 3.300 yılda 1 günlük hata payına sahiptir ve 1925'de ülkemizde de kabul edilmiştir. Oysa Celâlî Takvimi, Güneş'in gerçek hareketini merkeze alarak geliştirdiği kusursuz artıklama sistemiyle (33 yıllık döngüde 8 artık yıl) yıl süresini çok hassas bir şekilde hesaplamıştır. Bu mükemmel matematiksel dizilim sayesinde Celâlî Takvimi'nde yaklaşık 5.000 yılda sadece 1 günlük sapma oluşur."
    }
];

const instruments = [
    { name: "Usturlab", desc: "Gökyüzündeki Güneş, Ay, yıldızlar gibi cisimlerin konumlarını ölçmek için kullanılan eski bir astronomi alettir. Denizciler ve astronomlar, zamanı belirlemek, yönde bulmak ve gök cisimlerinin yüksekliğini ölçmek için usturlabı kullanırlardı.", img: "assets/images/astrolabe.jpg" },
    { name: "Güneş Saati", desc: "Güneş'in gölgesini kullanarak zamanı gösteren en eski saat türüdür. Bir çubuğun gölgesinin yere düşen yönü ve uzunluğu, günün saatini belirlemek için kullanılır.", img: "assets/images/gunes_saati.jfif" },
    { name: "Gnomon", desc: "Yere dik olarak yerleştirilen bir çubuktur. Güneşin gölgesine bakılarak zamanın ve Güneş'in yüksekliğinin ölçülmesini sağlar.", img: "assets/images/gnomon.jpg" },
    { name: "Kadran", desc: "Gökyüzündeki Güneş veya yıldızların ufuktan yüksekliğini ölçmek için kullanılan dereceli bir astronomi aletidir.", img: "assets/images/kadran.jpeg" },
    { name: "Rubu Tahtası", desc: "Rubu tahtası; gök cisimlerinin ufuk yüksekliğini ölçerek zamanı, yönü ve namaz vakitlerini belirlemeye yarayan çeyrek daire biçimli tarihi bir astronomi ve hesaplama aletidir.", img: "assets/images/rubu_tahtasi.jpg" },
    { name: "Altılık", desc: "Güneş veya yıldızların ufka göre açısını ölçmek için kullanılan özellikle denizcilikte yön bulmada işe yarayan bir alettir.", img: "assets/images/altilik.jpg" },
    { name: "Teleskop", desc: "Uzaktaki gök cisimlerini daha yakından ve net görmek için kullanılan optik bir alettir.", img: "assets/images/telescope.jpg" },
    { name: "Armillary Küre", desc: "Gökyüzünü ve gezegenlerin hareketlerini temsil eden, iç içe geçmiş metal halkalardan oluşan bir astronomi modelidir. Eskiden gök cisimlerinin konumlarını ve Dünyanın evrendeki yerini anlamak için kullanılırdı.", img: "assets/images/armillary.jpg" }
];

// ==========================================
// RENDER ASTRONOMERS & INSTRUMENTS (DRY)
// ==========================================
const astWrapper = document.getElementById('astronomers-wrapper');
astronomers.forEach(a => {
    astWrapper.innerHTML += `
        <div class="swiper-slide soft-card flex flex-col items-center text-center group">
            <div class="relative w-24 h-24 mb-4">
                <img src="${a.img}" class="w-full h-full rounded-full object-cover border-2 border-[var(--color-outline)] group-hover:border-[var(--color-purple)] transition-colors">
            </div>
            <h3 class="text-xl font-bold text-white mb-1">${a.name}</h3>
            <p class="text-sm text-[var(--color-purple)] font-semibold mb-4">${a.role}</p>
            <p class="text-sm text-gray-400 line-clamp-3">${a.desc}</p>
        </div>
    `;
});

new Swiper('.astronomersSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// ==========================================
// RENDER HISTORY CARDS
// ==========================================
const histGrid = document.getElementById('history-grid');
historyData.forEach((h, idx) => {
    histGrid.innerHTML += `
        <div class="soft-card flex flex-col group cursor-pointer p-6 relative overflow-hidden" onclick="openHistoryModal(${idx})">
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] to-transparent opacity-80 z-10 pointer-events-none transition-opacity group-hover:opacity-60 duration-500"></div>
            <img src="${h.img}" class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 z-0">
            <div class="relative z-20 flex flex-col h-full justify-end min-h-[16rem]">
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-purple)] transition-colors">${h.title}</h3>
                <p class="text-gray-300 line-clamp-3 mb-6">${h.desc}</p>
                <div class="flex items-center text-[var(--color-purple)] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Detayları Oku 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
        </div>
    `;
});

// ==========================================
// RENDER INSTRUMENTS
// ==========================================
const instGrid = document.getElementById('instruments-grid');
instruments.forEach((i, idx) => {
    instGrid.innerHTML += `
        <div class="soft-card flex flex-col group cursor-pointer p-4 md:p-6" onclick="openModal(${idx})">
            <div class="overflow-hidden rounded-xl mb-4 h-24 md:h-48 relative border border-[var(--card-border)] group-hover:border-[var(--color-purple)] transition-colors flex items-center justify-center bg-black/30">
                <img src="${i.img}" class="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
            </div>
            <h3 class="text-sm md:text-lg font-bold text-white mb-2 group-hover:text-[var(--color-purple)] transition-colors">${i.name}</h3>
            <p class="text-xs md:text-sm text-gray-400 line-clamp-2 md:line-clamp-none">${i.desc}</p>
        </div>
    `;
});

// ==========================================
// MODAL LOGIC
// ==========================================
const modal = document.getElementById('instrument-modal');
const modalContent = document.getElementById('instrument-modal-content');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

window.openModal = function(idx) {
    const i = instruments[idx];
    modalImg.src = i.img;
    modalTitle.textContent = i.name;
    modalDesc.textContent = i.desc;
    
    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    document.body.style.overflow = ''; 
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

document.getElementById('close-modal').addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ==========================================
// HISTORY MODAL LOGIC
// ==========================================
const hModal = document.getElementById('history-modal');
const hModalContent = document.getElementById('history-modal-content');
const hModalImg = document.getElementById('h-modal-img');
const hModalTitle = document.getElementById('h-modal-title');
const hModalDesc = document.getElementById('h-modal-desc');

window.openHistoryModal = function(idx) {
    const h = historyData[idx];
    hModalImg.src = h.img;
    hModalTitle.textContent = h.title;
    hModalDesc.textContent = h.desc;
    
    hModal.classList.remove('hidden');
    void hModal.offsetWidth;
    hModal.classList.remove('opacity-0');
    hModalContent.classList.remove('scale-95');
    hModalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeHistoryModal() {
    hModal.classList.add('opacity-0');
    hModalContent.classList.remove('scale-100');
    hModalContent.classList.add('scale-95');
    document.body.style.overflow = ''; 
    
    setTimeout(() => {
        hModal.classList.add('hidden');
    }, 300);
}

document.getElementById('close-history-modal').addEventListener('click', closeHistoryModal);
document.querySelector('.history-modal-overlay').addEventListener('click', closeHistoryModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !hModal.classList.contains('hidden')) {
        closeHistoryModal();
    }
});

// ==========================================
// DATA: Comprehensive Calendars (from Excel)
// ==========================================
const calendarFeatures = [
    "Ay Yılı",
    "Güneş Yılı",
    "Yıl Uzunluğu",
    "Kullanım Nedeni",
    "Hata Payı",
    "Kullanıldığı Yıllar",
    "Kullanan Topluluklar",
    "Takvim Başlangıcı",
    "Avantajı",
    "Dezavantajı",
    "Hazırlayan",
    "Neden Bırakıldı"
];

const calendarData = [
    {
        name: "12 Hayvanlı Türk Takvimi",
        data: ["-", "+", "365g 6s", "Tarım,mevsim,hayvancılık", "1/128 gün", "(M.S. 6-9. yy)", "Hunlar, Göktürkler", "Belli bir olay yok", "Kullanımı kolay", "Sınırlı bölge ve kültür", "Bilinmiyor", "İslamiyet sonrası Hicri kullanıldı"]
    },
    {
        name: "Hicri (Kameri) Takvim",
        data: ["+", "-", "354g", "İslam", "Her yıl 10-11 gün geri", "(M.S. 622'den itibaren)", "İslam dünyası", "Hicret (622)", "Din esaslı", "Mevsimlerle uyuşmaz", "İslam alimleri", "Mevsimlerle uyuşmaz"]
    },
    {
        name: "Celali Takvim",
        data: ["-", "+", "365g 5s 49d", "Tarım,vergi", "1/5000 gün", "1079", "Büyük Selçuklular", "Melikşah Dönemi", "Mevsimlerle tamamen uyumlu", "Yaygınlaşmaması", "Ömer Hayyam ve Selçuklu Astronomları", "Sınırlı bölgede kullanıldı, yaygınlaşmadı"]
    },
    {
        name: "Rumi (Mali) Takvim",
        data: ["-", "+", "365g 6s", "Mali ve resmi", "1/3300 gün", "(1839-1926)", "Osmanlı Devleti", "Hicret (622)", "Mali kolaylık", "Sadece mali işlere uygundu", "Osmanlı devlet yetkilileri", "Cumhuriyetle Miladiye geçildi"]
    },
    {
        name: "Julian Takvimi",
        data: ["-", "+", "365g 6s", "Roma Reformu", "1/128 gün", "(M.Ö. 46 - M.S. 1582)", "Roma İmparatorluğu", "Roma reformu", "Basit, sabit artık yıl kuralı", "Mevsimler zamanla kayar", "Julius Caesar", "Mevsim kayması"]
    },
    {
        name: "Gregoryen (Miladi) Takvim",
        data: ["-", "+", "365g 5s 49d", "Uluslar arası birlik", "1/3300 gün", "1582'den günümüze", "Tüm Dünya", "Hz. İsa'nın doğumu kabulü", "Küresel uyum", "Astronomik olarak Celali kadar uygun değil", "Papa XIII. Gregorius", "Günümüzde kullanılmaya devam ediyor"]
    }
];

// ==========================================
// RENDER CALENDAR TABLE (DRY)
// ==========================================
const thead = document.getElementById('calendar-table-head');
const tbody = document.getElementById('calendar-table-body');
const filterSelect = document.getElementById('calendarFilter');

// Populate Filter Options
if (filterSelect) {
    calendarData.forEach((c, i) => {
        filterSelect.innerHTML += `<option value="${i}">${c.name}</option>`;
    });
}

function renderTable(filterIndex) {
    // 1. Render Headers
    let headerHTML = `<th>Özellikler</th>`;
    let activeCalendars = [];
    calendarData.forEach((c, i) => {
        if (filterIndex === 'all' || filterIndex == i) {
            headerHTML += `<th>${c.name}</th>`;
            activeCalendars.push(c.name);
        }
    });
    thead.innerHTML = headerHTML;

    // 2. Render Rows
    tbody.innerHTML = '';
    calendarFeatures.forEach((feature, fIndex) => {
        let rowHTML = `<tr><td data-label="Özellik" class="md:font-normal font-bold text-white md:text-[var(--text-muted)] bg-[rgba(139,123,174,0.1)] md:bg-transparent">${feature}</td>`;
        let colIndex = 0;
        calendarData.forEach((cal, cIndex) => {
            if (filterIndex === 'all' || filterIndex == cIndex) {
                const val = cal.data[fIndex] || "-";
                rowHTML += `<td data-label="${activeCalendars[colIndex]}">${val}</td>`;
                colIndex++;
            }
        });
        rowHTML += `</tr>`;
        tbody.innerHTML += rowHTML;
    });
}

// Initial render
renderTable('all');

// Filter change event
if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
        renderTable(e.target.value);
    });
}

// ==========================================
// TSPARTICLES (Pure Stars Background)
// ==========================================
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 80,
            density: { enable: true, value_area: 800 }
        },
        color: { value: ["#ffffff", "#8b7bae", "#e2e8f0"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.7,
            random: true,
            anim: { enable: true, speed: 0.4, opacity_min: 0.2, sync: false }
        },
        size: {
            value: 2.5,
            random: true,
            anim: { enable: true, speed: 0.5, size_min: 1, sync: false }
        },
        links: {
            enable: false
        },
        move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" }
        }
    },
    interactivity: {
        events: { 
            onHover: { enable: false }, 
            onClick: { enable: false } 
        }
    },
    detectRetina: true
});
