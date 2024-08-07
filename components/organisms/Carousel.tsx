'use client'

import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from '../molecules/CarouselArrowButtons'
import PerkTreeList from '../molecules/PerkTreeList'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: Array<any>
  options?: EmblaOptionsType
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, setTotalCount } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi)

  return (
    <>
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((tree, index) => (
            <div className={`embla__slide embla__slide__${tree.domain}`} key={index}>
              <div className="embla__slide__content">
                <PerkTreeList perks={tree.perks} canvasSize={tree.canvasSize} setTotalCount={setTotalCount} />
                <div className="embla__slide__title">{tree.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Carousel