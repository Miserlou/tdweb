import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white text-black shadow z-20 h-20">
      <div className="container mx-auto relative py-4 flex items-center justify-center h-20">
        {/* Hamburger */}
        <button
          className="absolute left-4 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            id="Diamond_24"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="fill-current text-black"
          >
            <rect width="36" height="36" stroke="none" fill="#000000" opacity="0" />
            <g transform="matrix(0.71 0 0 0.71 12 12)">
              <path
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeDashoffset: 0,
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  fill: 'rgb(0,0,0)',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform="translate(-15, -15.99)"
                d="M 21.990234 4.9707031 C 21.915805238996235 4.972224077757549 21.84177899186104 4.982050584690826 21.769531 5 L 15.050781 5 L 14.951172 5 L 8.1523438 5 C 8.102629763905172 4.991659077397654 8.052356252511284 4.9870887521021 8.0019531 4.9863281 C 7.656532788550625 4.984424826707345 7.3345834559645 5.160906236361096 7.1503906 5.453125000000001 L 1.3242188 12.251953 C 1.1001661834484517 12.450550878154171 0.9768748820609061 12.739082907937554 0.988221980944881 13.038268361357089 C 0.9995690798288559 13.337453814776621 1.1443608631150894 13.615818354008086 1.3828125 13.796875 L 14.269531 26.683594 C 14.272756497370224 26.68752476960499 14.276011925371302 26.691430883194656 14.279297 26.695312 L 14.292969 26.707031 C 14.340034421767363 26.754393316746395 14.391724669369944 26.796923190975257 14.447266 26.833984 C 14.449864300493447 26.835297698398225 14.452468325321762 26.836600044148895 14.455078 26.837891 C 14.47915626274312 26.85393115532204 14.503919221612403 26.868918919578732 14.529297 26.882812 C 14.53448894569678 26.884808753373825 14.539697460302396 26.886762154691514 14.544922 26.888672 C 14.659863540354289 26.948015372773924 14.785226077979452 26.984496638734726 14.914062 26.996094 C 14.947828249068824 26.999116543084423 14.981726345855119 27.000420226178143 15.015625 27 C 15.02865748592775 26.9996036984359 15.041680975736215 26.998952573955037 15.054688 26.998047 C 15.071645413545648 26.997176292416146 15.088577902737242 26.995873870195584 15.105469 26.994141 C 15.108723980604818 26.99415689104309 15.11197901939518 26.99415689104309 15.115234 26.994141 C 15.121104939208447 26.992891443249643 15.126964509990552 26.99158905713941 15.132812 26.990234 C 15.159679154575526 26.986763126111097 15.186394188638829 26.982202030871225 15.212891 26.976562 C 15.239184321775939 26.971103186547413 15.265247111290511 26.964587572569698 15.291016 26.957031 C 15.297546074393221 26.955144421533436 15.304056746041152 26.953191320044255 15.310547 26.951172 C 15.317737865710829 26.94864960225519 15.32489966679994 26.94604509881499 15.332031 26.943359 C 15.387433393810952 26.92401601288703 15.441025836444343 26.899834379446705 15.492188 26.871094 C 15.4928398986179 26.870443899238538 15.49349089923854 26.8697928986179 15.494141 26.869141 C 15.516801611846768 26.85633830157348 15.538953810900132 26.84265588437665 15.560547 26.828125 C 15.56579335434831 26.82426961893558 15.57100193600032 26.820363099359266 15.576172 26.816406 C 15.622826421763168 26.78374023282376 15.666605231233985 26.747148884228167 15.707031 26.707031 L 15.714844 26.701172 C 15.71945527455179 26.696011113383282 15.724012853412155 26.69080249945019 15.728516 26.685547 L 28.619141 13.794922 C 28.856639420449042 13.613534673643368 29.00057827401005 13.335443703550279 29.01154093659592 13.03680231005697 C 29.022503599181793 12.738160916563661 28.899341244048436 12.450265075173451 28.675781 12.251953 L 22.892578 5.5058594 C 22.71700859580899 5.1713698306727895 22.367947566573484 4.96435098987608 21.990234 4.9707031 z M 9.3242188 7 L 13.054688 7 L 10.390625 10.730469 L 9.3242188 7 z M 16.945312 7 L 20.675781 7 L 19.609375 10.730469 L 16.945312 7 z M 15 7.7226562 L 18.054688 12 L 11.945312 12 L 15 7.7226562 z M 7.5488281 8.0605469 L 8.6738281 12 L 4.1738281 12 L 7.5488281 8.0605469 z M 22.451172 8.0605469 L 25.826172 12 L 21.326172 12 L 22.451172 8.0605469 z M 4.4140625 14 L 9.3125 14 L 12.375 21.960938 L 4.4140625 14 z M 11.457031 14 L 18.542969 14 L 15 23.212891 L 11.457031 14 z M 20.6875 14 L 25.585938 14 L 17.625 21.960938 L 20.6875 14 z"
              />
            </g>
          </svg>
        </button>


        {/* Centered Logo */}
        <div className="w-1/3 md:w-1/4 top-4 justify-center flex-shrink-0">
          <Link to={`${import.meta.env.BASE_URL}`} onClick={() => setOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} className="w-full hidden sm:block" alt="Tiny Diamond Logo" />
            <img src={`${import.meta.env.BASE_URL}logo_sm.png`}className="w-full block sm:hidden" alt="Tiny Diamond Logo" />
          </Link>
        </div>

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
            open ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
        >
        <nav className="mt-16">
          <ul className="flex flex-col">
            <Link to={`${import.meta.env.BASE_URL}`} onClick={() => setOpen(false)}>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer text-gray-950 font-semibold no-underline">
                Home
              </li>
            </Link>
            <Link to={`${import.meta.env.BASE_URL}submissions`} onClick={() => setOpen(false)}>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer text-black font-semibold no-underline">
                Submissions
              </li>
            </Link>
            <Link to={`${import.meta.env.BASE_URL}about`} onClick={() => setOpen(false)}>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer text-black font-semibold no-underline">
                About
              </li>
            </Link>
            <Link to={`${import.meta.env.BASE_URL}contact`} onClick={() => setOpen(false)}>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer text-black font-semibold no-underline">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        </div>

        {/* Optional dark overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}