<template>

  <!-- hero -->
  <section class="hero-section d-flex align-items-center py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <h1 class="fw-bold h1">Insurans Kenderaan Senang & Mesra!</h1>
          <p class="mt-3" style="color:#15317e;">
            Dah bosan berurusan dengan robot? Urus insurans kenderaan anda dengan agen sebenar, yang lebih memahami keperluan anda!
          </p>
          <MDBBtn class="cta-button">
            <router-link to="#cta" class="no-link-style" >Dapatkan Sebut Harga</router-link>
          </MDBBtn>
          <div class="payment-methods mt-4 d-flex gap-3" style="justify-content: center;">
            <img class="logo" src="/boost-logo.png" alt="Boost"  />
            <img class="logo" src="/grab-pay-logo-A0CA65B6C4-seeklogo.com.png" alt="GrabPay"  />
            <img class="logo" src="/spaylater-logo_x602.webp" alt="SPayLater"  />
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img src="/group1.png" alt="Agent" class="agent-img img-fluid" />
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section py-5">
    <div class="container">
      <h2 class="text-center text-primary fw-bold  mb-4" style="color: #e8efff !important;">Kenapa Kawkaw.my jadi pilihan ramai?</h2>
      <div class="row g-4">
        <div v-for="feature in features" :key="feature.title" class="col-6 col-md-3 d-flex">
          <div class="card text-center feature-card flex-fill">
            <img :src="feature.icon" class="card-img-top mx-auto" :alt="feature.title" />
            <div class="card-body">
              <h5 class="fw-bold">{{ feature.title }}</h5>
              <p class="text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Steps Section -->
  <section class="steps-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 gap-2">
          <div v-for="(step, index) in steps" :key="index" class="step" >
            <div class="icon"><i :class="step.icon"></i></div>
              <div class="content">
                <h5 class="fw-bold">{{ step.title }}</h5>
                <p>{{ step.description }}</p>
              </div>
            </div>
        </div>
        <div class="col-md-6" >
          <div class="steps">
            <h2 class="fw-bold text-primary h2" style="color: #15317e !important;">Mudah je! 3 Langkah Cepat Untuk Dapatkan Insurans</h2>
          <div class=" mt-4">
            <button class="cta-button whatsapp" @click="getNextWhatsAppNumber" ><i class="fab fa-whatsapp-square"></i> WhatsApp Kawkaw Sekarang</button>
            <button class="cta-button" @click="advancedform"><i class="far fa-file-alt"></i> Hantar Borang Pertanyaan</button>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimony Section -->
  <section class="testimony-section py-5">
    <div class="container text-center">
      <h2 class="fw-bold text-white">Ramai Dah Puas Hati Dengan Kawkaw.my!</h2>
      <div class="testimonial-card mt-4">
        <button class="nav-btn left" @click="prevTestimony">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="testimonial-content">
          <img :src="testimonies[currentIndex].image" class="profile-img" alt="User Image" />
          <h6 class="text-white">{{ testimonies[currentIndex].name }}, {{ testimonies[currentIndex].location }}</h6>
          <p class="text-white">"{{ testimonies[currentIndex].message }}"</p>
        </div>

        <button class="nav-btn right" @click="nextTestimony">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- cta -->
  <section id="cta" class="cta-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Side: Text -->
        <div class="col-md-6 text-md-start text-center">
          <h2 class="fw-bold text-primary" style="color: #15317e !important;">
            Soalan? Nak Sebutharga Insurans Kenderaan? <br />
            Jom Borak Kawkaw dengan kami!
          </h2>
        </div>

        <!-- Right Side: Buttons -->
        <div class="col-md-6 d-flex flex-column align-items-md-end align-items-center">
          <button class="cta-button whatsapp" @click="getNextWhatsAppNumber">
            <i class="fab fa-whatsapp-square"></i> WhatsApp Kawkaw Sekarang
          </button>
          <button class="cta-button" @click="advancedform">
            <i class="far fa-file-alt"></i> Hantar Borang Pertanyaan
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- faq -->
    <section class="faq-section">
      <div class="container">
        <h2 class="text-center fw-bold text-white">FAQ – Tentang Kawkaw.my</h2>
        <p class="text-center text-white">
          Kami di Kawkaw.my memahami bahawa menguruskan insurans kenderaan boleh menjadi rumit dan memakan masa.
          Oleh itu, kami hadir untuk memberikan pengalaman yang lebih mudah, pantas, dan telus.
          Di sini, anda akan berkomunikasi terus dengan agen sebenar dan menikmati pilihan pembayaran yang fleksibel.
        </p>

        <div class="accordion mt-4">
          <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
            <button @click="toggleFAQ(index)" class="accordion-header">
              {{ faq.question }}
              <i :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
            </button>
            <div v-if="faq.open" class="accordion-content">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
import { MDBBtn } from 'mdb-vue-ui-kit';
const scrollToSection = () => {
  window.location.hash = "cta";
};

export default {
  components: {
    MDBBtn
  },
  data() {
    return {
      currentIndex: 0,
      testimonies: [
        { name: "Shamsuri Ramlan", location: "KL", image: "src/assets/testi1.jpg", message: "Terbaik. Cepat. Harga murah. Respon cepat. Proses dapat insurans dan road tax laju. Boleh dipercayai. Boleh support." },
        { name: "Dien Baling", location: "Selangor", image: "src/assets/testi2.jpg", message: "Trusted syarikat insuran kaw2 ni.saya dah setel renew motor dan kereta dkt kaw2.servis 24 jam.bila2 masa boleh renew kecuali tido.proses renew dlm 10minit siap.terima kasih atas layanan terbaik dri konsultan kaw2.insyaallah tahun depan kaw2 la pilihan saya.murah dan cepat.salam dari baling kedah😉" },
        { name: "Aman ZK", location: "Selangor", image: "src/assets/testi3.jpg", message: "Trusted. 1st time guna tahun ni mula2 waswas jugakla.. lepas kaji selidik servis bapak laju. Kreta motor dua2 settle dgn dorg ni dkt whatsap je. Check apps myjpj tk smpai stgh jam kot settle semua, roadtax fizikal pun cpt sampai. Terbaik 👍👍Review ikhlas" }
      ],
      features: [
        { title: "Agen Sebenar, Bukan Bot", description: "Anda berurusan dengan manusia, bukan mesin!", icon: "src/assets/icon/icons8-science-fiction-100.png" },
        { title: "Ansuran Mudah", description: "Bayar insurans dengan SPayLater & GrabPayLater.", icon: "src/assets/icon/icons8-fast-delivery-64.png" },
        { title: "Cepat & Senang", description: "Kami uruskan semuanya untuk anda.", icon: "src/assets/icon/icons8-easy-100.png" },
        { title: "Pelbagai Pilihan Insurans", description: "Pilih jenama yang dipercayai.", icon: "src/assets/icon/icons8-umbrella-100.png" }
      ],
      steps: [
        { title: "Langkah 1", description: "Pilih cara hubungi – WhatsApp atau Borang Online.", icon: "fas fa-phone-alt" },
        { title: "Langkah 2", description: "Berikan maklumat kenderaan & keperluan insurans.", icon: "fas fa-car" },
        { title: "Langkah 3", description: "Dapatkan sebut harga & terus bayar.", icon: "fas fa-money-bill-wave" }
      ],
      faqs: [
        {
          question: "Apa itu Kawkaw.my?",
          answer: "Kawkaw.my adalah platform yang memudahkan urusan insurans kenderaan anda dengan cara yang lebih cepat, mesra, dan telus.",
          open: false
        },
        {
          question: "Apa yang membezakan Kawkaw.my daripada platform lain?",
          answer: "Kami menyediakan komunikasi terus dengan agen sebenar yang berpengalaman untuk memastikan anda mendapat perlindungan yang sesuai.",
          open: false
        },
        {
          question: "Apa jenis pilihan pembayaran yang ditawarkan?",
          answer: "Kami menawarkan pelbagai pilihan pembayaran termasuk:<br>✅ SPayLater<br>✅ GrabPayLater<br>✅ Pilihan pembayaran lain yang fleksibel",
          open: false
        },
        {
          question: "Apakah matlamat utama Kawkaw.my?",
          answer: "Matlamat kami adalah untuk memberikan pengalaman yang lebih selesa, cepat, dan bebas tekanan kepada pelanggan kami.",
          open: false
        }
      ],
      whatsappNumbers: [
      "60135133290", // Number 1
      "601119133290"  // Number 3
      ],
      currentNumberIndex: 0
    };
  },
  methods: {
    advancedform() {
      window.open("https://forms.gle/tNse8TY5sBiSNeBN9", "_blank");
    },
    getNextWhatsAppNumber() {
      this.currentNumberIndex = (this.currentNumberIndex + 1) % this.whatsappNumbers.length;
      const selectedNumber = this.whatsappNumbers[this.currentNumberIndex];
      window.open(`https://wa.me/${selectedNumber}`, "_blank");
    },
    prevTestimony() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonies.length) % this.testimonies.length;
    },
    nextTestimony() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonies.length;
    },
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
@import '@fortawesome/fontawesome-free/css/all.css';
html {
  scroll-behavior: smooth;
}
.no-link-style {
  color: inherit;
  text-decoration: none;
}
.logo{
  height: 50px;
}
*{
  font-family: 'Montserrat', sans-serif;
}
*.h1{
  font-size: 3em !important;
  font-weight: 900 !important;
  color: #15317e;
}
*.h2{
  font-size: 2em !important;
  font-weight: 700 !important;
}
p{
  font-size: 1em;
  line-height: 1.2em;
}

.hero-section {
  background-color: #e8efff;
  padding-top: 0%;
}
.agent-img {
  max-width: 600px;
  border-radius: 10px;
}
.features-section {
  background-color: #15317e;
}
.feature-card {
  background-color: #e8efff;
  border-radius: 10px;
  padding: 10px;
  height: auto;
}
.steps-section {
  background-color: #e8efff;
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 1em;
}
.step {
  display: flex;
  align-items: center;
  gap: 30px;
  row-gap: 20px;
}
.icon {
  width: 50px;
  height: 50px;
  background-color: #15317e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  min-width: 50px;
  min-height: 50px;
  aspect-ratio: 1 / 1; /* Ensures a perfect circle */
}

.testimony-section {
  background-color: #15317e;
}
.testimonial-card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
}
.cta-section {
  background-color: #e8efff;
  padding: 40px 0;
}

.cta-button {
  color: #003f88;
  background-color: #e8efff;
  border: solid;
  border-color: #003f88;
  border-width: 4px;
  padding: 12px 20px; 
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 350px;
  justify-content: center;
}
.whatsapp i{
  color: #0b897a !important;
}
.cta-button i {
  font-size: 20px;
}
.card-img-top {
  display: inline;
  align-items: center;
  width: 100px;
  height: auto;
}

.cta-button:hover {
  background-color: #97b8e3;
}
.nav-btn {
  background: none;
  border: none;
  color:#e8efff;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}
.left { left: 10px; }
.right { right: 10px; }

.faq-section {
  background-color: #003f88;
  padding: 50px 20px;
}

.accordion {
  max-width: 1200px;
  margin: auto;
}

.accordion-item {
  background:#e8efff;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  text-align: left;
  padding: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
}

.accordion-content {
  padding: 15px;
  background: #e8efff;
}

.accordion-header i {
  transition: transform 0.3s ease;
}

/* Mobile-first design adjustments */
@media (max-width: 768px) {
  .hero-section .row, .steps-section .row {
    flex-direction: column-reverse;
    padding: 0 10px;
  }
  .agent-img {
  max-width: 300px;
  border-radius: 10px;
  }
  .logo{
  height: 30px;
  justify-content: center;
  align-items: center;
  }
  .feature-card {
    margin-bottom: 20px;
  }
  .cta-button {
    width: 100%;
    align-items: center;
  }
}
</style>
