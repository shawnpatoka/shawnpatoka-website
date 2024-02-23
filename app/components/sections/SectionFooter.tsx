import ChicagoStars from "../ChicagoStars";



export default function Footer() {
  return (
    <div className="w-full bg-black/25 py-5 text-white px-4 flex items-center justify-between flex-col sm:flex-row gap-4">
      <div>
        <a href="https://www.linkedin.com/in/shawn-patoka" target="_blank" className="text-xs font-medium text-white/75 bg-primary/50 hover:bg-primary/70 rounded-md px-3 py-1 transition-all">Connect With Me on LinkedIn</a>
      </div>
      <div className="flex items-center justify-end text-xs text-white/40">
        Lovingly Made in Chicago <ChicagoStars color="#ffffff" className="w-14 ml-1 opacity-30" />
      </div>
    </div>
  );
}