import Image from "next/image";

interface ImageModalProps {
  imageSrc: string | null;
  zoomLevel: number;
  onClose: () => void;
  onZoom: (delta: number) => void;
  onResetZoom: () => void;
}

export default function ImageModal({
  imageSrc,
  zoomLevel,
  onClose,
  onZoom,
  onResetZoom,
}: ImageModalProps) {
  if (!imageSrc) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal__close" onClick={onClose}>
          ×
        </button>
        <div className="image-modal__controls">
          <button
            className="image-modal__btn"
            onClick={() => onZoom(0.1)}
            title="Zoom In"
          >
            +
          </button>
          <button
            className="image-modal__btn"
            onClick={() => onZoom(-0.1)}
            title="Zoom Out"
          >
            −
          </button>
          <button
            className="image-modal__btn"
            onClick={onResetZoom}
            title="Reset Zoom"
          >
            ⟲
          </button>
        </div>
        <div className="image-modal__image-wrapper">
          <Image
            src={imageSrc}
            alt="Full screen view"
            fill
            style={{
              objectFit: "contain",
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.2s ease",
            }}
            className="image-modal__image"
          />
        </div>
      </div>
    </div>
  );
}

