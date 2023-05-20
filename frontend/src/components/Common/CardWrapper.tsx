import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import classNames from 'classnames'
import 'tailwindcss/tailwind.css'
import { IconButton } from '@material-tailwind/react'

type Props = {
  children: React.ReactNode
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)

  const onResize = (width: number | undefined) => {
    if (typeof width !== 'undefined') {
      setWidth(width)
    }
  }
  const { ref: resizeRef } = useResizeDetector({ onResize })

  const combinedRef = (node: HTMLDivElement | null) => {
    resizeRef(node)
    scrollRef.current = node
  }

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if (scrollRef.current) {
        setScrollPos(scrollRef.current.scrollLeft)
      }
    }
    scrollRef.current?.addEventListener('scroll', onScroll)
    return () => {
      scrollRef.current?.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setCardWidth(entry.contentRect.width)
      }
    })

    const firstChild = scrollRef.current?.firstChild as HTMLElement
    if (firstChild) {
      resizeObserver.observe(firstChild)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const isScrollable = scrollRef.current
    ? scrollRef.current.scrollWidth > width
    : false

  return (
    <div className="relative">
      {isScrollable && (
        <IconButton
          className={classNames(
            'absolute top-[45%] left-[-1.5rem] bg-primary text-on-primary z-50 focus:opacity-60 hover:opacity-60 rounded-full',
            scrollPos > 0 ? 'opacity-40' : 'hidden'
          )}
          onClick={() => scroll(-cardWidth)}
        >
          <i className="material-icons-round">chevron_left</i>
        </IconButton>
      )}
      <div ref={combinedRef} className="overflow-x-scroll scrollbar-hide">
        <div className="flex gap-6 py-1">{children}</div>
      </div>
      {isScrollable && (
        <IconButton
          className={classNames(
            'absolute top-[45%] right-[-1.5rem] bg-primary text-on-primary focus:opacity-60 hover:opacity-60 rounded-full',
            Math.abs(
              scrollPos + width - (scrollRef.current?.scrollWidth ?? 0)
            ) <= 1
              ? 'hidden'
              : 'opacity-40'
          )}
          onClick={() => scroll(cardWidth)}
        >
          <i className="material-icons-round">chevron_right</i>
        </IconButton>
      )}
    </div>
  )
}

export default CardWrapper
