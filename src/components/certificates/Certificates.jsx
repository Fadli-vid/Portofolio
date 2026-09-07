import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./certificates.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faEye,
  faXmark,
  faCalendarDays,
  faBuilding,
  faChevronLeft,
  faChevronRight,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

// ============================================================================
// TEMPLATE & GUIDELINES:
// ============================================================================
// 1. Save certificate scans/images in:
//    "src/assets/images/certificate/" (.png, .jpg, .webp, or .svg)
//
// 2. Import the image at the top of this file:
//    import pcapCert from "../../assets/images/certificate/PCAP.jpg";
//
// 3. Add or update objects in the `certificatesData` array below:
//    - id          : Unique number (1, 2, 3, etc.)
//    - title       : Certificate / Credential name
//    - issuer      : Issuing organization / authority
//    - date        : Date of issuance (e.g. "19 Jul 2024")
//    - category    : Filter category ("Python & Programming", "Web Development", "Cloud & Security")
//    - image       : Imported image variable or image URL
//    - skills      : Array of key verified skills
//    - description : Comprehensive summary of certified competencies
// ============================================================================

// Certificate Assets:
import pcapCert from "../../assets/images/certificate/PCAP.jpg";
import pklCert from "../../assets/images/certificate/PKL.png";
import sampleCertWeb from "../../assets/images/certificate/sample-cert-web.svg";
import sampleCertCloud from "../../assets/images/certificate/sample-cert-cloud.svg";
import sampleCertUiux from "../../assets/images/certificate/sample-cert-uiux.svg";
import sampleCertSecurity from "../../assets/images/certificate/sample-cert-security.svg";

const certificatesData = [
  {
    id: 1,
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    date: "19 Jul 2024",
    category: "Python & Programming",
    image: pcapCert,
    skills: [
      "Python 3",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Modules & Packages",
      "Exception Handling",
    ],
    description:
      "Statement of Achievement issued by Cisco Networking Academy in collaboration with OpenEDG Python Institute (via Universitas Bina Sarana Informatika). Validates proficiency in universal programming concepts, Python 3 syntax, control flow, data structures, algorithm design, standard library tools, file processing, and fundamental Object-Oriented Programming (OOP).",
  },
  {
    id: 2,
    title: "Vocational Internship (PKL) - Printing Operations & Graphic Design",
    issuer: "SMK Taruna Terpadu 1 (Borcess) & Cahaya Makmur Printing",
    date: "18 Dec 2020",
    category: "Multimedia & Design",
    image: pklCert,
    skills: [
      "Printing Press Operations",
      "Digital & Offset Print Design",
      "Pre-Press & Layouting",
      "Multimedia Production",
      "Quality Control & Finishing",
    ],
    description:
      "Vocational Internship Certificate (Praktek Kerja Lapangan - PKL) awarded with Grade 'A (Sangat Baik / Excellent)' distinction by SMK Taruna Terpadu 1 (Borcess) in collaboration with Cahaya Makmur Printing. Demonstrated high competency in operating commercial printing machinery, preparing pre-press production layouts, executing digital and offset printing tasks, and managing post-print finishing and quality control in the Multimedia competency division.",
  },
  {
    id: 3,
    title: "Full Stack React & Next.js Specialist",
    issuer: "Modern Web Academy",
    date: "2024",
    category: "Web Development",
    image: sampleCertWeb,
    skills: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "State Management"],
    description:
      "Certification mastering the modern React ecosystem and Next.js App Router, covering Server-Side Rendering (SSR), Static Site Generation (SSG), RESTful API integration, and interactive component architecture.",
  },
  {
    id: 4,
    title: "Cloud & DevOps Fundamentals",
    issuer: "Cloud Academy International",
    date: "2024",
    category: "Cloud & Security",
    image: sampleCertCloud,
    skills: ["Docker", "CI/CD", "Cloud Architecture", "Vercel / Cloudflare", "Linux"],
    description:
      "Comprehensive training and credential in containerization with Docker, automated Continuous Integration and Continuous Deployment (CI/CD) pipelines, Linux server administration, and scalable cloud deployments.",
  },
  {
    id: 5,
    title: "Professional UI/UX & Frontend Architecture",
    issuer: "Creative Design Institute",
    date: "2024",
    category: "Web Development",
    image: sampleCertUiux,
    skills: ["Figma", "Design Systems", "Wireframing", "Interactive Prototyping"],
    description:
      "Professional accreditation in user research, intuitive user experience design, interactive wireframing, high-fidelity prototyping, and scalable, accessible design systems in Figma.",
  },
  {
    id: 6,
    title: "Web Security & OWASP Standards",
    issuer: "Cyber Defense Authority",
    date: "2024",
    category: "Cloud & Security",
    image: sampleCertSecurity,
    skills: ["OWASP Top 10", "Penetration Testing", "API Security", "Data Protection"],
    description:
      "Professional certification in web application security, mitigating critical vulnerabilities such as SQL Injection and XSS, implementing robust authentication, and adhering to modern OWASP security guidelines.",
  },
];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  // Ambil daftar kategori unik
  const categories = ["All", ...new Set(certificatesData.map((item) => item.category))];

  // Filter sertifikat berdasarkan kategori aktif
  const filteredCertificates =
    selectedCategory === "All"
      ? certificatesData
      : certificatesData.filter((item) => item.category === selectedCategory);

  // Reset slide posisi ketika kategori berubah
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setCurrentIndex(0);
    }
  }, [selectedCategory]);

  // Tutup modal ketika tombol ESC ditekan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <div
      className="content py-12 md:py-20 lg:py-24 max-xxl:px-4 transition-colors duration-300"
      id="certificates"
    >
      {/* Header Section */}
      <div className="max-w-144.25 text-center mx-auto mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-picto-primary/10 border border-picto-primary/20 text-picto-primary text-xs font-semibold mb-4">
          <FontAwesomeIcon icon={faAward} />
          <span>Licenses &amp; Certifications</span>
        </div>
        <p className="section-title mb-4">Certificates &amp; Credentials</p>
        <p className="font-normal text-base md:text-lg opacity-70 text-base-content">
          A curated collection of official certifications and verified technical credentials.
          Slide or use the navigation arrows to explore each achievement.
        </p>
      </div>

      {/* Control Bar: Categories & Counter */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? certificatesData.length
                : certificatesData.filter((c) => c.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? "bg-picto-primary text-white border-picto-primary shadow-sm shadow-picto-primary/30 scale-102"
                    : "bg-base-100 text-base-content/80 border-base-content/10 hover:border-picto-primary/50 hover:text-picto-primary"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-base-200 text-base-content/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Counter Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-100 border border-base-content/15 text-xs font-semibold text-base-content shadow-sm">
          <FontAwesomeIcon icon={faCertificate} className="text-picto-primary" />
          <span>
            Certificate {currentIndex + 1} of {filteredCertificates.length}
          </span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* Spotlight Single-Slide Showcase Container */}
      {/* ==================================================================== */}
      <div className="relative max-w-5xl mx-auto">
        {/* Previous Navigation Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={filteredCertificates.length <= 1}
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base-100 border border-base-content/15 shadow-xl hover:border-picto-primary hover:bg-picto-primary hover:text-white text-base-content flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous Certificate"
          title="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={filteredCertificates.length <= 1}
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base-100 border border-base-content/15 shadow-xl hover:border-picto-primary hover:bg-picto-primary hover:text-white text-base-content flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next Certificate"
          title="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </button>

        {/* Swiper: Displaying EXACTLY 1 CERTIFICATE per view with infinite loop */}
        <div className="w-full cert-swiper">
          <Swiper
            key={`${selectedCategory}-${filteredCertificates.length}`}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={filteredCertificates.length > 1}
            speed={750}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!pb-2"
          >
            {filteredCertificates.map((cert) => (
              <SwiperSlide key={cert.id} className="w-full">
                <div className="w-full rounded-2xl bg-base-100 border border-base-content/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
                  {/* Left Column: Certificate Photo / Preview (7 Cols) */}
                  <div
                    className="lg:col-span-7 relative bg-base-300/60 p-4 sm:p-6 flex items-center justify-center cursor-pointer group overflow-hidden border-b lg:border-b-0 lg:border-r border-base-content/10"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="w-full aspect-[16/11] rounded-xl overflow-hidden shadow-lg border border-base-content/10 relative bg-base-200">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-base-100 text-base-content text-xs font-semibold shadow-xl border border-base-content/20 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <FontAwesomeIcon icon={faEye} className="text-picto-primary" />
                          <span>Click to Expand</span>
                        </span>
                      </div>
                    </div>

                    {/* Issuer & Date Badges on top of image */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-md bg-black/70 text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                        <FontAwesomeIcon icon={faBuilding} className="text-picto-primary text-[10px]" />
                        <span className="truncate max-w-[160px]">{cert.issuer.split("(")[0]}</span>
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-md bg-picto-primary text-white shadow-sm flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-[10px]" />
                        <span>{cert.date}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Information & Details (5 Cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="mb-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-picto-primary/10 text-picto-primary border border-picto-primary/20">
                          {cert.category}
                        </span>
                      </div>

                      {/* Certificate Title */}
                      <h3
                        onClick={() => setSelectedCert(cert)}
                        className="text-xl sm:text-2xl font-bold text-base-content hover:text-picto-primary transition-colors duration-300 cursor-pointer mb-2.5 leading-snug"
                      >
                        {cert.title}
                      </h3>

                      {/* Issuing Authority */}
                      <p className="text-xs sm:text-sm font-medium opacity-70 text-base-content mb-4 flex items-center gap-2">
                        <FontAwesomeIcon icon={faAward} className="text-picto-primary" />
                        <span>{cert.issuer}</span>
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm opacity-80 text-base-content leading-relaxed mb-5">
                        {cert.description}
                      </p>

                      {/* Verified Skills */}
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-semibold opacity-60 text-base-content mb-2">
                          Competencies &amp; Skills:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-base-200 text-base-content/90 border border-base-content/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button Footer */}
                    <div className="pt-6 mt-6 border-t border-base-content/10 flex items-center justify-end">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="btn btn-sm btn-primary text-white text-xs font-semibold px-5 flex items-center gap-2 shadow-md shadow-picto-primary/25 hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
                      >
                        <FontAwesomeIcon icon={faEye} className="text-xs" />
                        <span>Full Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* Lightbox / Detail Modal */}
      {/* ==================================================================== */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-base-100 rounded-2xl shadow-2xl border border-base-content/15 overflow-hidden max-h-[90vh] flex flex-col transition-all duration-300 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/10 bg-base-200/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-picto-primary/15 text-picto-primary flex items-center justify-center">
                  <FontAwesomeIcon icon={faAward} className="text-sm" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-base-content line-clamp-1">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs opacity-60 text-base-content">{selectedCert.issuer}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="btn btn-sm btn-circle btn-ghost text-base-content/70 hover:text-base-content"
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faXmark} className="text-base" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-5 md:p-6 space-y-6">
              {/* Full Preview Image */}
              <div className="rounded-xl overflow-hidden border border-base-content/10 bg-base-300 shadow-inner group relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[420px] mx-auto"
                />
              </div>

              {/* Details & Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-picto-primary/15 text-picto-primary border border-picto-primary/20">
                    {selectedCert.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-base-200 text-base-content/70 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-xs" />
                    Issued: {selectedCert.date}
                  </span>
                </div>

                <div>
                  <h5 className="text-xs uppercase tracking-wider font-semibold opacity-60 text-base-content mb-1">
                    Competency Summary
                  </h5>
                  <p className="text-sm text-base-content/90 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Skills Verified */}
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-semibold opacity-60 text-base-content mb-2">
                    Verified Skills
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-base-200 text-base-content border border-base-content/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-4 border-t border-base-content/10 bg-base-200/50 flex items-center justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="btn btn-sm btn-ghost hover:bg-base-300 text-xs px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
