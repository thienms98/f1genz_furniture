import { useState } from 'react';
import Image from 'next/image';

const Slider = ({ items, amount }) => {
  const [sliderIdx, setSliderIdx] = useState(0);

  return (
    <div className="slider">
      <div className="slider-items">{items.map((item) => item)}</div>
      <div className="slider-dots">
        {items.map((item, index) => {
          return (
            <div
              className={`slider-dot ${sliderIdx === index ? 'active' : ''}`}
              key={index}
              onClick={() => setSliderIdx(index)}
            ></div>
          );
        })}
      </div>
      <div className="slider-buttons">
        <div className="btn next" onClick={() => setSliderIdx(sliderIdx + 1 > 2 ? 0 : sliderIdx + 1)}>
          &gt;
        </div>
        <div className="btn prev" onclick={() => setSliderIdx(sliderIdx - 1 < 0 ? 2 : sliderIdx - 1)}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export function SliderItem({ children }) {
  return <div className="slider-item">{children}</div>;
}

export default Slider;
