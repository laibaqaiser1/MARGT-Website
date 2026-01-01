import Head from "next/head";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import EquipmentSection from "@/components/EquipmentSection";
import InstantQuoteSection from "@/components/InstantQuoteSection";
import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import FooterSection from "@/components/FooterSection";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState<{ [key: string]: number }>({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    equipment: "",
    rentalDuration: "",
    startDate: "",
    location: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalImage]);

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showContactForm]);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setModalImage(null);
    setZoomLevel(1);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const getGalleryIndex = (equipmentName: string) => {
    return galleryIndex[equipmentName] || 0;
  };

  const nextGalleryImage = (equipmentName: string, totalImages: number) => {
    setGalleryIndex((prev) => ({
      ...prev,
      [equipmentName]: ((prev[equipmentName] || 0) + 1) % totalImages,
    }));
  };

  const prevGalleryImage = (equipmentName: string, totalImages: number) => {
    setGalleryIndex((prev) => ({
      ...prev,
      [equipmentName]: ((prev[equipmentName] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const goToGalleryImage = (equipmentName: string, index: number) => {
    setGalleryIndex((prev) => ({
      ...prev,
      [equipmentName]: index,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "inquiry",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", equipment: "", rentalDuration: "", startDate: "", location: "" });
        setTimeout(() => {
          setFormStatus("idle");
          setShowContactForm(false);
        }, 3000);
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }
  };

  const handleResetForm = () => {
    setFormStatus("idle");
    setFormData({ name: "", email: "", phone: "", message: "", equipment: "", rentalDuration: "", startDate: "", location: "" });
  };

  return (
    <>
      <Head>
        <title>MARGT | Heavy Equipment Rental & Transport</title>
        <meta
          name="description"
          content="MARGT provides heavy equipment rental, transport logistics, and skilled manpower services across the UAE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />

        <main>
          <CompanySection />

          <EquipmentSection
            onOpenModal={openModal}
            onNextImage={nextGalleryImage}
            onPrevImage={prevGalleryImage}
            onGoToImage={goToGalleryImage}
            getGalleryIndex={getGalleryIndex}
            onInquire={(equipmentName) => {
              setFormData((prev) => ({
                ...prev,
                equipment: equipmentName || "",
              }));
              setShowContactForm(true);
            }}
          />

          <AboutSection />

          <CompanyOverviewSection />

          <InstantQuoteSection
            showContactForm={showContactForm}
            formData={formData}
            formStatus={formStatus}
            onShowForm={() => setShowContactForm(true)}
            onHideForm={() => setShowContactForm(false)}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onResetForm={handleResetForm}
          />
        </main>

        <FooterSection currentYear={currentYear} />

        <ImageModal
          imageSrc={modalImage}
          zoomLevel={zoomLevel}
          onClose={closeModal}
          onZoom={handleZoom}
          onResetZoom={() => setZoomLevel(1)}
        />
      </div>
    </>
  );
}
