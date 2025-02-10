"use client";
import Link from "next/link";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

export default function QrGenerator() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(300);
  const qrRef = useRef(null);
  const qrCode = useRef<QRCodeStyling | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<{ name: string; src: string | null } | null>(null);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const basePath = process.env.NODE_ENV === 'production' ? '/qrcodestudio' : '';

  const logos = [
    { name: "No Logo", src: null },
    { name: "Ludothèque", src: `${basePath}/logos/ludotheque.png` },
    { name: "Facebook", src: `${basePath}/logos/icons8-facebook-48.png` },
    { name: "Instagram", src: `${basePath}/logos/icons8-instagram-48.png` },
    { name: "LinkedIn", src: `${basePath}/logos/icons8-linkedin-48.png` },
    { name: "TikTok", src: `${basePath}/logos/icons8-tiktok-48.png` },
    { name: "Twitter", src: `${basePath}/logos/icons8-twitter-48.png` },
    { name: "YouTube", src: `${basePath}/logos/icons8-youtube-48.png` }
  ];

  interface Logo {
    name: string;
    src: string | null;
  }

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: 220, // Taille d'affichage
        height: 220,
        data: url,
        image: uploadedLogo ?? (selectedLogo?.src || undefined),
        imageOptions: { crossOrigin: "anonymous", margin: 0, imageSize: 0.3 },
        dotsOptions: { color: "#000", type: "rounded" }
      });
    }
    if (qrRef.current) {
      qrCode.current.append(qrRef.current);
    }
    
  }, []);

  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update({ 
        data: url, 
        image: uploadedLogo ?? (selectedLogo?.src || undefined), 
        imageOptions: { crossOrigin: "anonymous", margin: 0, imageSize: 0.3 }
    });
    }
  }, [url, selectedLogo, uploadedLogo]);
  

  const handleLogoSelect = (logo: Logo) => {
    setSelectedLogo(logo);
    setUploadedLogo(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedLogo(e.target?.result as string);
        setSelectedLogo(null);
      };
      reader.readAsDataURL(file);
    }
  };

 const handleDownload = () => {
    if (!url.trim()) {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // Disparition après 3 secondes
      return;
    }

    const qrCodeDownload = new QRCodeStyling({
      width: size,
      height: size,
      data: url,
      image: uploadedLogo ?? (selectedLogo?.src || undefined),
      imageOptions: { crossOrigin: "anonymous", margin: 0, imageSize: 0.3 },
      dotsOptions: { color: "#000", type: "rounded" }
    });

    qrCodeDownload.download({
      extension: "png",
      name: `qr_code`
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-100 p-4 relative">
      <h1 className="text-7xl font-extrabold text-violet-700 relative mb-[60px]">
        <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
          QR Code Studio
        </span>
        <div className="flip">
          <div><div>Easy</div></div>
          <div><div>Free</div></div>
          <div><div>Unlimited</div></div>
        </div>
      </h1>

      <div className="flex gap-6 w-full max-w-4xl">
        {/* Première carte : Entrée URL & Options */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-1/2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-violet-500"
          />
          <label className="block mb-2 text-gray-700 font-medium">
            Qr Code Size : {size}px
          </label>
          <input
            type="range"
            min="200"
            max="1000"
            step="25"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="w-full mb-4 accent-violet-600"
          />
          <button
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
            className="w-full bg-indigo-500 text-white rounded-lg mb-4 hover:bg-indigo-600 transition font-bold py-2 px-4 inline-flex items-center justify-center"
          >
            {isOptionsVisible ? "Hide Logo Options " : "Show Logo Options"}
          </button>

          {isOptionsVisible && (
            <div className="flex items-center mb-4">
              {/* Logos à gauche */}
              <div className="flex flex-wrap gap-2 w-3/4 border-r-4 border-gray-200">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    onClick={() => handleLogoSelect(logo)}
                    className={`w-16 h-16 flex items-center justify-center cursor-pointer rounded-lg border-4 bg-[#f1f0f0] transition ${
                      selectedLogo?.name === logo.name ? "border-violet-500" : "border-transparent"
                    }`}
                  >
                    {logo.src ? (
                      <img src={logo.src} alt={logo.name} className="object-contain max-w-full max-h-full" />
                    ) : (
                      <span className="text-sm text-gray-500">No Logo</span>
                    )}
                  </div>
                ))}
              </div>
              {/* Upload image à droite */}
              <div className="w-1/4 flex justify-center items-center h-full pl-4">
                <label className="cursor-pointer bg-violet-500 text-white px-4 py-2 rounded-lg text-center">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Deuxième carte : QR Code & Téléchargement */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-1/2 flex flex-col items-center justify-center">
          <div ref={qrRef} className="relative w-[220px] h-[220px] bg-gray-200 rounded-lg mb-4"></div>
          <button
            onClick={handleDownload}
            className="w-full bg-violet-600 text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-violet-700 transition justify-center"
          >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            <span>Download QR Code</span>
          </button>
        </div>
      </div>
      {/* 🔹 Alerte avec animation Tailwind */}
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg bg-red-500 text-white text-sm font-bold flex items-center transition-all duration-500 ${
          alertVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        role="alert"
      >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        <p>Veuillez entrer une URL avant de télécharger le QR Code.</p>
      </div>
      {/* Footer */}
      <p className="absolute bottom-4 right-4 text-gray-600 text-sm">
        Made with ❤️ by <Link  target="_blank" href="https://www.pjaszczynski.fr/" className="gradient-text">PJ</Link>
      </p>
    </div>
  );
}
