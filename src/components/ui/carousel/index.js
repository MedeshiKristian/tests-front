import { useEffect, useRef, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Page from './page'
import { CarouselContext } from './context'
import { Container, PagesContainer, Window } from './style'

const TRANSITION_DURATION = 300

export const Carousel = ({ children, infinite, slide, setSlide }) => {
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(450)
  const [pages, setPages] = useState([])
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
  const [transitionDuration, setTransitionDuration] = useState(300)
  const windowElRef = useRef()
  const slideCount = Children.count(children)

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ])
      setClonesCount({ head: 1, tail: 1 })
      return
    }
    setPages(children)
  }, [children, infinite])

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth
      if (width !== windowElWidth) {
        setWidth(windowElWidth)
      }
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [clonesCount, width])

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [transitionDuration])

  useEffect(() => {
    if (!infinite) return

    if (offset === 0) {
      // console.log('from last to first')
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
      }, TRANSITION_DURATION)
      return
    }

    if (offset === -(width * (pages.length - 1))) {
      // console.log('from first to last')
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(clonesCount.head * width))
      }, TRANSITION_DURATION)
    }
  }, [offset, infinite, pages, clonesCount, width])

  useEffect(() => {
    setTimeout(() => {
      setOffset(-(slide * width))
    }, TRANSITION_DURATION)
  }, [slide])

  const handleLeftArrowClick = (event) => {
    event.preventDefault()
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width
      setSlide(slide === 1 ? slideCount : slide - 1)
      return Math.min(newOffset, 0)
    })
  }

  const handleRightArrowClick = (event) => {
    event.preventDefault()
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width
      const maxOffset = -(width * (pages.length - 1))
      setSlide(slide === slideCount ? 1 : slide + 1)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    if (infinite) {
      setOffset(-(width * (pages.length - 1)))
      setSlide(1)
    }
  }, [width])

  const style = {
    cursor: 'pointer',
    margin: '30px'
  }

  return (
    <CarouselContext.Provider value={{ width }}>
      <Container>
        <FaChevronLeft style={style} onClick={handleLeftArrowClick}/>
        <Window ref={windowElRef}>
          <PagesContainer
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }}>
            {pages}
          </PagesContainer>
        </Window>
        <FaChevronRight style={style} onClick={handleRightArrowClick}/>
      </Container>
    </CarouselContext.Provider>
  )
}

Carousel.Page = Page

export default Carousel