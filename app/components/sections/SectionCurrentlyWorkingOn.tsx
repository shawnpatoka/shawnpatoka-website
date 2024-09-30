import { FaLink } from "react-icons/fa";
import ImageSlider from "../ImageSlider";



export default function SectionCurrentlyWorkingOn() {

  const passLinkProThumbnails = ['/img/thumbnails/plp_001.jpg', '/img/thumbnails/plp_002.jpg']
  const workFlowImageThumbnails = ['/img/thumbnails/wf_001.jpg', '/img/thumbnails/wf_002.jpg', '/img/thumbnails/wf_003.jpg']
  const treblemonstersImageThumbnails = ['/img/thumbnails/tm_001.jpg', '/img/thumbnails/tm_002.jpg', '/img/thumbnails/tm_003.jpg']

  return (
    <div className="w-full sm:w-[850px] mx-auto mb-10 px-5">

      <div className="w-full text-white mt-10 px-4">
        <h3 className="text-2xl">Currently Working On</h3>
        <p className="text-white/80 mt-3">
          Besides my day-to-day work, I love building and maintaining side projects to keep myself engaged and experiment with the latest libraries and frameworks.
        </p>
      </div>

      <div className="hover:bg-white/5 hover:rounded-lg hover:ring-1 hover:ring-white/10 p-4 transition-all mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-full sm:w-5/12 flex rounded-md">
            <ImageSlider images={passLinkProThumbnails} />
          </div>
          <div className="w-full sm:w-7/12 align-center">
            <h3 className="text-white text-xl">PassLink Pro</h3>
            <p className="text-white/80 text-sm">
              A visitor management system designed for condo communities, currently serving over 500 active users at one location. Residents can manage visitors, gate attendants handle check-ins, and admins oversee all operations. Recurring visitors can check in easily by scanning a QR code.            </p>
            <p className="text-white/90 text-sm mt-3 font-bold">Languages Used:</p>
            <p className="text-white/80 text-sm">Python, JavaScript, HTML, CSS</p>
            <p className="text-white/90 text-sm mt-3 font-bold">Tech Used:</p>
            <p className="text-white/80 text-sm mb-3">Django / Django Rest Framework, Bootstrap, HTMX, AWS S3, AWS RDS PostgreSQL, SendGrid Email API, Heroku</p>

            <div className="text-white text-sm mb-3 font-medium">
              <a href="https://passlinkpro.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <span className="inline-block mr-1"><FaLink className="inline-block mr-1" /> passlinkpro.com</span>
              </a>
            </div>

            <span className="text-xs px-3 py-1 bg-green-200/25 border border-green-200/50 rounded-full text-green-200 font-medium">Live - In Use</span> <span className="text-xs px-3 py-1 bg-cyan-200/25 border border-cyan-200/50 rounded-full text-cyan-200 font-medium">Native App In Development</span>
          </div>
        </div>
      </div>


      <div className="hover:bg-white/5 hover:rounded-lg hover:ring-1 hover:ring-white/10 p-4 transition-all mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-full sm:w-5/12 flex rounded-md">
            <ImageSlider images={workFlowImageThumbnails} />
          </div>
          <div className="w-full sm:w-7/12 align-center">
            <h3 className="text-white text-xl">WorkFlow</h3>
            <p className="text-white/80 text-sm">
              Developing a web application that helps service workers manage work orders. Users can create work orders, assign them, and track progress. Integrates with Google Calendar and Slack.
            </p>
            <p className="text-white/90 text-sm mt-3 font-bold">Languages Used:</p>
            <p className="text-white/80 text-sm">Python, TypeScript, HTML, CSS</p>
            <p className="text-white/90 text-sm mt-3 font-bold">Tech Used:</p>
            <p className="text-white/80 text-sm mb-3">NextJS, Django / Django Rest Framework, NextAuth, JSON Web Tokens (JWT), TailwindCSS, AWS S3, PostgreSQL, Google Calendar API, Heroku</p>

            <div className="text-white text-sm mb-3 font-medium">
              <a href="https://dev.workflowapp.co" target="_blank" className="hover:text-blue-400 transition-colors">
                <span className="inline-block mr-1"><FaLink className="inline-block mr-1" /> dev.workflowapp.co</span>
              </a>
              <a href="https://workflowapp.co" target="_blank" className="hover:text-blue-400 transition-colors">
                <FaLink className="inline-block ml-4 mr-1" /> workflowapp.co
              </a>
            </div>

            <span className="text-xs px-3 py-1 bg-green-200/25 border border-green-200/50 rounded-full text-green-200 font-medium">MVP - In Use</span> <span className="text-xs px-3 py-1 bg-cyan-200/25 border border-cyan-200/50 rounded-full text-cyan-200 font-medium">In Development</span>
          </div>
        </div>
      </div>


      <div className="hover:bg-white/5 hover:rounded-lg hover:ring-1 hover:ring-white/10 p-4 transition-all mt-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-full sm:w-5/12 flex rounded-md">
            <ImageSlider images={treblemonstersImageThumbnails} />
          </div>
          <div className="w-full sm:w-7/12 align-center">
            <h3 className="text-white text-xl">Treblemonsters</h3>
            <p className="text-white/80 text-sm">
              Improved functionality, user experience, visual aesthetics, and mobile responsiveness by leading a redesign of the user interface for a talent booking web application that connects musical artists with different venues.
            </p>
            <p className="text-white/90 text-sm mt-3 font-bold">Languages Used:</p>
            <p className="text-white/80 text-sm">Python, JavaScript, HTML, CSS</p>
            <p className="text-white/90 text-sm mt-3 font-bold">Tech Used:</p>
            <p className="text-white/80 text-sm mb-3">Flask, Vue Components, Bootstrap, PostgreSQL, SendGrid (Email API), Heroku</p>
            <span className="text-xs px-3 py-1 bg-green-200/25 border border-green-200/50 rounded-full text-green-200 font-medium">Live - In Use</span>
          </div>
        </div>
      </div>

    </div>
  );
}