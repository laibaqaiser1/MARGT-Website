import Image from "next/image";
import { equipmentList } from "@/data/constants";

interface EquipmentSectionProps {
  onOpenModal: (imageSrc: string) => void;
  onNextImage: (equipmentName: string, totalImages: number) => void;
  onPrevImage: (equipmentName: string, totalImages: number) => void;
  onGoToImage: (equipmentName: string, index: number) => void;
  getGalleryIndex: (equipmentName: string) => number;
  onInquire?: (equipmentName?: string) => void;
}

export default function EquipmentSection({
  onOpenModal,
  onNextImage,
  onPrevImage,
  onGoToImage,
  getGalleryIndex,
  onInquire,
}: EquipmentSectionProps) {
  return (
    <section className="section container" id="equipment">
      <div className="equipment-section__header">
        <h2>Our Equipment</h2>
        <p className="equipment-section__subtitle">We Offer a Wide Variety of Equipment Across the UAE</p>
      </div>

      <div className="equipment-grid">
        {equipmentList.map((equipment, index) => (
          <article key={equipment.name} className="equipment-card">
            <div className="equipment-card__image">
              {equipment.gallery && equipment.gallery.length > 0 ? (
                <div className="equipment-gallery-carousel">
                  <Image
                    src={equipment.gallery[getGalleryIndex(equipment.name)]}
                    alt={equipment.name}
                    width={800}
                    height={600}
                    priority={index === 0}
                    className="equipment-image"
                    onClick={() =>
                      onOpenModal(
                        equipment.gallery[
                          getGalleryIndex(equipment.name)
                        ]
                      )
                    }
                  />
                  {equipment.gallery.length > 1 && (
                    <>
                      <button
                        className="gallery-arrow gallery-arrow--prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPrevImage(equipment.name, equipment.gallery.length);
                        }}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        className="gallery-arrow gallery-arrow--next"
                        onClick={(e) => {
                          e.stopPropagation();
                          onNextImage(equipment.name, equipment.gallery.length);
                        }}
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      <div className="gallery-dots">
                        {equipment.gallery.map((_, idx) => (
                          <button
                            key={idx}
                            className={`gallery-dot ${
                              idx === getGalleryIndex(equipment.name)
                                ? "gallery-dot--active"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onGoToImage(equipment.name, idx);
                            }}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  width={800}
                  height={600}
                  priority={index === 0}
                  className="equipment-image"
                  onClick={() => onOpenModal(equipment.image)}
                />
              )}
            </div>
            <div className="equipment-card__content">
              <h3>{equipment.name}</h3>
              <p className="equipment-description">{equipment.description}</p>
              <div className="equipment-features">
                {equipment.features.map((feature) => (
                  <div key={feature} className="feature-tag">
                    <span>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="equipment-card__actions">
                <a className="btn" href="tel:+971501324882">
                  Get Quote
                </a>
                <button
                  className="btn btn--outline"
                  onClick={() => onInquire?.(equipment.name)}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

