import Image from 'next/image';
import styles from './SectionTop.module.css'
import { FaLinkedin } from "react-icons/fa";



export default function SectionTop() {
  return (
    <div className={`flex h-[70vh] w-full items-center justify-center`} style={{ backgroundColor: 'rgba(0,0,0,.4)' }}>

      <div className="z-30 flex flex-col sm:flex-row items-center gap-10">
        <div>
          <Image src="/img/sp_logo.jpg" width={500} height={500} alt="Shawn Patoka" className='w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full' />
        </div>
        <div>
          <h1 className='text-white text-3xl sm:text-6xl font-medium text-center sm:text-left'>Hey, I&apos;m&nbsp;Shawn.</h1>
          <h2 className='text-white/80 text-sm sm:text-base mt-1.5 text-center sm:text-left'>Front End <span className='text-white/40'>/</span> Back End <span className='text-white/40'>/</span> Full Stack Developer</h2>
          <div className="flex mt-4">
            <a href="https://www.linkedin.com/in/shawn-patoka" target="_blank" className="h-12 w-full sm:w-48 overflow-hidden rounded-md text-sm font-medium text-white bg-primary">
              <div className="h-24 -translate-y-0 hover:-translate-y-12 transition-transform">
                <div className="h-12 flex items-center justify-center"><FaLinkedin className='mr-1' /> LinkedIn</div>
                <div className="h-12 flex items-center justify-center">Let&apos;s Connect!</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <ul className={`h-[70vh] w-full overflow-hidden top-0 left-0 absolute ${styles.shapes}`}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

    </div>
  );
}