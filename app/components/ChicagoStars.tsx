interface ChicagoStarsProps {
  color: string
  className?: string
}

export default function ChicagoStars({ color, className }: ChicagoStarsProps) {
  return (
    <div>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 537.35 132.85" className={className}>
        <path fill={color} d="M58.48,7.38l11,41l41-11l-30,30l30,30l-41-11l-11,41l-11-41l-41,11l30-30l-30-30l41,11L58.48,7.38z
	 M198.48,7.38l11,41l41-11l-30,30l30,30l-41-11l-11,41l-11-41l-41,11l30-30l-30-30l41,11L198.48,7.38z M338.48,7.38l11,41l41-11
	l-30,30l30,30l-41-11l-11,41l-11-41l-41,11l30-30l-30-30l41,11L338.48,7.38z M478.48,7.38l11,41l41-11l-30,30l30,30l-41-11l-11,41
	l-11-41l-41,11l30-30l-30-30l41,11L478.48,7.38z"/>
      </svg>
    </div>
  );
}