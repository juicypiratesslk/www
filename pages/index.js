import Head from 'next/head'
import Header from "../components/header";
import Image from "../components/image";
import Link from "next/link";

export default () => (
  <main>
    <Head>
      <title>Evil Rabbit</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="theme-color" content="white" />
  	<meta name="twitter:card" content="summary_large_image" />
  	<meta name="twitter:site" content="@evilrabbit_" />
  	<meta name="twitter:creator" content="@evilrabbit_" />
  	<meta name="twitter:title" content="Evil Rabbit" />
  	<meta name="twitter:description" content="Head of Design at ZEIT" />
  	<meta name="twitter:image" content="https://dev.evilrabb.it/static/og-image.png" />
  	<meta property="og:title" content="Evil Rabbit" />
  	<meta property="og:type" content="website" />
  	<meta property="og:description" content="Head of Design at ZEIT" />
  	<meta property="og:url" content="https://dev.evilrabb.it" />
  	<meta property="og:image" content="https://dev.evilrabb.it/static/og-image.png" />
  	<meta name="apple-mobile-web-app-capable" content="yes" />
  	<meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Head>
    <Header />
    <section className="intro">
      <h1>Hi, I'm <span className="line-through"><b>Nicolás Garro</b>, a.k.a</span> <b>Evil Rabbit.</b></h1>
      <h3>Head of Design at <b>ZEIT</b></h3>
      <div className="line"></div>
    </section>
    <section className="project">
      <div className="zeit">
        <div className="wrapper">
          <h4>ZEIT</h4>
          <h2><b>Website</b></h2>
          <Link href="https://zeit.co"><a target="_blank">View Site</a></Link>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1550905163/www/works/zeit/site.png`}
            width={2800/2.25}
            height={2102/2.25}
            margin={0}
          />
          <div className="cssda">
            <div className="image">
              <Image
                src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551067289/www/works/zeit/awards.png`}
                width={680/2}
                height={200/2}
                margin={0}
              />
            </div>
            <div className="award">
              <h3><b>Awarded</b></h3>
              <p><Link href="https://cssdesignawards.com/"><a target="_blank">CSSDA</a></Link>: Official Public Vote Award Certificate of Excellence:
    Innovation, UX Design and UI Design</p>
            </div>
            <div className="date">
            <p>FEB 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="now-desktop">
        <div className="wrapper">
          <div className="meta">
            <h4>NOW</h4>
            <h2><b>Desktop</b></h2>
            <Link href="https://zeit.co/download"><a target="_blank">Get App</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551068030/www/works/zeit/now-desktop.png`}
            width={1376/2}
            height={1196/2}
            margin={0}
          />
          <div className="electron">
            <div className="image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#2B2E3B"/>
              <path d="M43.2732 35.7469C36.7392 34.5568 31.5731 35.8024 29.5141 39.3686C27.9776 42.0299 28.4168 45.5582 30.5792 49.3298C30.7632 49.6508 31.1727 49.7619 31.4937 49.5778C31.8147 49.3938 31.9258 48.9843 31.7417 48.6633C29.7938 45.2658 29.4148 42.2207 30.6746 40.0387C32.385 37.0761 36.9931 35.9651 43.0331 37.0652C43.3971 37.1315 43.746 36.8901 43.8123 36.5261C43.8786 36.162 43.6373 35.8132 43.2732 35.7469ZM33.9771 53.9141C36.6191 56.8175 40.0514 59.5407 43.9659 61.8007C53.444 67.2729 63.5342 68.7355 68.507 65.3448C68.8128 65.1363 68.8916 64.7195 68.6832 64.4137C68.4747 64.108 68.0579 64.0292 67.7521 64.2376C63.3015 67.2723 53.7166 65.8829 44.6359 60.6402C40.8384 58.4477 37.5148 55.8108 34.9682 53.0123C34.7191 52.7386 34.2954 52.7186 34.0217 52.9677C33.748 53.2167 33.728 53.6405 33.9771 53.9141Z" fill="#9FEAF9"/>
              <path d="M66.9207 53.0987C71.199 48.0446 72.6928 42.9612 70.638 39.4023C69.1261 36.7836 65.9299 35.401 61.6821 35.3458C61.3121 35.3409 61.0083 35.637 61.0035 36.007C60.9986 36.377 61.2947 36.6809 61.6647 36.6857C65.485 36.7354 68.2387 37.9265 69.4776 40.0723C71.1843 43.0284 69.8521 47.5616 65.8979 52.2329C65.6588 52.5153 65.694 52.9381 65.9764 53.1772C66.2588 53.4163 66.6816 53.3811 66.9207 53.0987ZM55.9255 35.9696C52.0572 36.7984 47.9398 38.4189 43.9855 40.7019C34.2011 46.3509 27.8185 54.6806 28.7049 60.7204C28.7586 61.0865 29.099 61.3398 29.4651 61.286C29.8312 61.2323 30.0844 60.892 30.0307 60.5258C29.2437 55.1631 35.2937 47.2674 44.6555 41.8624C48.4915 39.6477 52.4783 38.0786 56.2062 37.2799C56.5681 37.2024 56.7985 36.8462 56.721 36.4844C56.6435 36.1226 56.2873 35.8921 55.9255 35.9696Z" fill="#9FEAF9"/>
              <path d="M40.0744 64.9078C42.3113 71.1541 45.9708 74.9998 50.0859 74.9998C53.087 74.9998 55.8637 72.954 58.029 69.3522C58.2196 69.0351 58.1171 68.6234 57.7999 68.4328C57.4828 68.2421 57.0711 68.3446 56.8805 68.6618C54.9346 71.8987 52.5444 73.6598 50.0859 73.6598C46.6676 73.6598 43.4036 70.2297 41.3359 64.4561C41.2112 64.1077 40.8276 63.9264 40.4793 64.0512C40.1309 64.1759 39.9496 64.5595 40.0744 64.9078ZM60.5067 63.686C61.6647 59.9855 62.2867 55.7166 62.2867 51.2682C62.2867 40.1681 58.4017 30.5994 52.8681 28.1423C52.5299 27.9921 52.134 28.1445 51.9838 28.4827C51.8336 28.8209 51.986 29.2168 52.3242 29.367C57.2596 31.5584 60.9467 40.6397 60.9467 51.2682C60.9467 55.5839 60.3444 59.718 59.2279 63.2858C59.1174 63.639 59.3141 64.0148 59.6672 64.1254C60.0204 64.2359 60.3962 64.0392 60.5067 63.686Z" fill="#9FEAF9"/>
              <path d="M73.1256 63.0295C73.1256 61.2585 71.6899 59.8228 69.9189 59.8228C68.1478 59.8228 66.7121 61.2585 66.7121 63.0295C66.7121 64.8006 68.1478 66.2363 69.9189 66.2363C71.6899 66.2363 73.1256 64.8006 73.1256 63.0295ZM71.7856 63.0295C71.7856 64.0605 70.9498 64.8963 69.9189 64.8963C68.8879 64.8963 68.0521 64.0605 68.0521 63.0295C68.0521 61.9986 68.8879 61.1628 69.9189 61.1628C70.9498 61.1628 71.7856 61.9986 71.7856 63.0295Z" fill="#9FEAF9"/>
              <path d="M30.2068 66.2363C31.9778 66.2363 33.4136 64.8006 33.4136 63.0295C33.4136 61.2585 31.9778 59.8228 30.2068 59.8228C28.4357 59.8228 27 61.2585 27 63.0295C27 64.8006 28.4357 66.2363 30.2068 66.2363ZM30.2068 64.8963C29.1758 64.8963 28.34 64.0605 28.34 63.0295C28.34 61.9986 29.1758 61.1628 30.2068 61.1628C31.2378 61.1628 32.0736 61.9986 32.0736 63.0295C32.0736 64.0605 31.2378 64.8963 30.2068 64.8963Z" fill="#9FEAF9"/>
              <path d="M50.0858 31.4136C51.8569 31.4136 53.2926 29.9778 53.2926 28.2068C53.2926 26.4357 51.8569 25 50.0858 25C48.3148 25 46.8791 26.4357 46.8791 28.2068C46.8791 29.9778 48.3148 31.4136 50.0858 31.4136ZM50.0858 30.0736C49.0549 30.0736 48.2191 29.2378 48.2191 28.2068C48.2191 27.1758 49.0549 26.34 50.0858 26.34C51.1168 26.34 51.9526 27.1758 51.9526 28.2068C51.9526 29.2378 51.1168 30.0736 50.0858 30.0736Z" fill="#9FEAF9"/>
              <path d="M50.5756 53.5362C49.3231 53.8068 48.0891 53.0108 47.8179 51.7583C47.5478 50.5057 48.3433 49.2717 49.5959 49.0006C50.8484 48.7299 52.0824 49.5259 52.3536 50.7785C52.6242 52.031 51.8282 53.265 50.5756 53.5362Z" fill="#9FEAF9"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>Featured</b></h3>
              <p>The application was highlighted on <Link href="https://electronjs.org/"><a target="_blank">Electron</a></Link> front page along with other
well-known apps such as: <Link href="https://code.visualstudio.com/"><a target="_blank">Visual Studio Code</a></Link>, <Link href="https://www.figma.com"><a target="_blank">Figma</a></Link>,{` `}
<Link href="https://www.skype.com"><a target="_blank">Skype</a></Link>, <Link href="https://www.slack.com"><a target="_blank">Slack</a></Link>, <Link href="https://discordapp.com/"><a target="_blank">Discord</a></Link>, and many more.</p>
            </div>
            <div className="date">
            <p>Since 2017</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hyper">
        <div className="wrapper">
          <div className="meta">
            <h4>HYPER</h4>
            <h2><b>Terminal</b></h2>
            <Link href="https://hyper.is"><a target="_blank">Get App</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551419978/www/works/zeit/hyper-app.png`}
            width={2192/2}
            height={1774/2}
            margin={0}
          />
          <div className="hyper-icon">
            <svg width="63" height="75" viewBox="0 0 63 75" fill="none">
              <mask id="path-1-inside-1" fill="white">
              <path d="M62.2222 40.97C62.2222 41.6965 62.2222 42.423 62.218 43.1505C62.2148 43.7623 62.2073 44.374 62.1903 44.9857C62.1541 46.3176 62.0742 47.6632 61.8345 48.9804C61.5917 50.3186 61.1955 51.5642 60.5682 52.7803C59.9536 53.9743 59.1506 55.0672 58.192 56.0148C57.2335 56.9624 56.1269 57.7573 54.9191 58.3649C53.69 58.984 52.4311 59.3767 51.0774 59.6167C49.744 59.8536 48.3839 59.9326 47.0355 59.9684C44.4432 60 43.7083 60 42.9734 60H27.6916H19.2499C16.4254 59.9916 15.8066 59.9853 15.1878 59.9684C13.8394 59.9326 12.4793 59.8536 11.1459 59.6167C9.79216 59.3767 8.53326 58.984 7.30418 58.3649C6.09534 57.7573 4.98981 56.9624 4.03125 56.0148C3.0727 55.0672 2.26964 53.9743 1.65404 52.7803C1.02778 51.5642 0.631581 50.3186 0.387682 48.9804C0.148043 47.6632 0.0692289 46.3176 0.0330169 44.9857C0.0159759 44.374 0.00852048 43.7623 0.0053253 43.1505C0 42.423 0 41.6965 0 40.97V33.7359V26.2641V19.03C0 18.3035 0 17.576 0.0053253 16.8505C0.00852048 16.2377 0.0159759 15.626 0.0330169 15.0143C0.0692289 13.6813 0.148043 12.3368 0.387682 11.0185C0.631581 9.68031 1.02778 8.43579 1.65404 7.21969C2.26964 6.02466 3.0727 4.93176 4.03125 3.9852C4.98981 3.03655 6.09534 2.24266 7.30418 1.63514C8.53326 1.01604 9.79216 0.623313 11.1459 0.383253C12.4793 0.146352 13.8394 0.0673852 15.1878 0.0315868C17.7801 0 18.515 0 19.2499 0H27.6916H42.3706L33.4196 0.00315868L42.9734 0C45.7969 0.00842315 46.4157 0.0147405 47.0355 0.0315868C48.3839 0.0673852 49.744 0.146352 51.0774 0.383253C52.4311 0.623313 53.69 1.01604 54.9191 1.63514C56.1269 2.24266 57.2335 3.03655 58.192 3.9852C59.1506 4.93176 59.9536 6.02466 60.5682 7.21969C61.1955 8.43579 61.5917 9.68031 61.8345 11.0185C62.0742 12.3368 62.1541 13.6813 62.1903 15.0143C62.2073 15.626 62.2148 16.2377 62.218 16.8505C62.2222 17.576 62.2222 18.3035 62.2222 19.03V26.2641V33.7359V40.97Z"/>
              </mask>
              <path d="M62.2222 40.97C62.2222 41.6965 62.2222 42.423 62.218 43.1505C62.2148 43.7623 62.2073 44.374 62.1903 44.9857C62.1541 46.3176 62.0742 47.6632 61.8345 48.9804C61.5917 50.3186 61.1955 51.5642 60.5682 52.7803C59.9536 53.9743 59.1506 55.0672 58.192 56.0148C57.2335 56.9624 56.1269 57.7573 54.9191 58.3649C53.69 58.984 52.4311 59.3767 51.0774 59.6167C49.744 59.8536 48.3839 59.9326 47.0355 59.9684C44.4432 60 43.7083 60 42.9734 60H27.6916H19.2499C16.4254 59.9916 15.8066 59.9853 15.1878 59.9684C13.8394 59.9326 12.4793 59.8536 11.1459 59.6167C9.79216 59.3767 8.53326 58.984 7.30418 58.3649C6.09534 57.7573 4.98981 56.9624 4.03125 56.0148C3.0727 55.0672 2.26964 53.9743 1.65404 52.7803C1.02778 51.5642 0.631581 50.3186 0.387682 48.9804C0.148043 47.6632 0.0692289 46.3176 0.0330169 44.9857C0.0159759 44.374 0.00852048 43.7623 0.0053253 43.1505C0 42.423 0 41.6965 0 40.97V33.7359V26.2641V19.03C0 18.3035 0 17.576 0.0053253 16.8505C0.00852048 16.2377 0.0159759 15.626 0.0330169 15.0143C0.0692289 13.6813 0.148043 12.3368 0.387682 11.0185C0.631581 9.68031 1.02778 8.43579 1.65404 7.21969C2.26964 6.02466 3.0727 4.93176 4.03125 3.9852C4.98981 3.03655 6.09534 2.24266 7.30418 1.63514C8.53326 1.01604 9.79216 0.623313 11.1459 0.383253C12.4793 0.146352 13.8394 0.0673852 15.1878 0.0315868C17.7801 0 18.515 0 19.2499 0H27.6916H42.3706L33.4196 0.00315868L42.9734 0C45.7969 0.00842315 46.4157 0.0147405 47.0355 0.0315868C48.3839 0.0673852 49.744 0.146352 51.0774 0.383253C52.4311 0.623313 53.69 1.01604 54.9191 1.63514C56.1269 2.24266 57.2335 3.03655 58.192 3.9852C59.1506 4.93176 59.9536 6.02466 60.5682 7.21969C61.1955 8.43579 61.5917 9.68031 61.8345 11.0185C62.0742 12.3368 62.1541 13.6813 62.1903 15.0143C62.2073 15.626 62.2148 16.2377 62.218 16.8505C62.2222 17.576 62.2222 18.3035 62.2222 19.03V26.2641V33.7359V40.97Z" fill="black"/>
              <path d="M62.218 43.1505L58.718 43.13L58.718 43.1323L62.218 43.1505ZM62.1903 44.9857L58.6916 44.8883L58.6916 44.8906L62.1903 44.9857ZM61.8345 48.9804L58.3911 48.3539L58.3908 48.3555L61.8345 48.9804ZM60.5682 52.7803L57.4577 51.1757L57.4562 51.1786L60.5682 52.7803ZM58.192 56.0148L60.6527 58.5038L60.6527 58.5038L58.192 56.0148ZM54.9191 58.3649L53.3463 55.2381L53.3446 55.239L54.9191 58.3649ZM51.0774 59.6167L50.4663 56.1705L50.4652 56.1707L51.0774 59.6167ZM47.0355 59.9684L47.0782 63.4682L47.1033 63.4678L47.1284 63.4672L47.0355 59.9684ZM19.2499 60L19.2395 63.5H19.2499V60ZM15.1878 59.9684L15.283 56.4697L15.2806 56.4696L15.1878 59.9684ZM11.1459 59.6167L11.7581 56.1707L11.757 56.1705L11.1459 59.6167ZM7.30418 58.3649L8.8787 55.239L8.87584 55.2376L7.30418 58.3649ZM4.03125 56.0148L1.57063 58.5038L1.57064 58.5038L4.03125 56.0148ZM1.65404 52.7803L-1.4576 54.3827L-1.45682 54.3842L1.65404 52.7803ZM0.387682 48.9804L-3.05579 49.6069L-3.0556 49.608L0.387682 48.9804ZM0.0330169 44.9857L3.53172 44.8906L3.53166 44.8883L0.0330169 44.9857ZM0.0053253 43.1505L3.50529 43.1323L3.50523 43.1249L0.0053253 43.1505ZM0.0053253 16.8505L3.50524 16.8762L3.50528 16.8688L0.0053253 16.8505ZM0.0330169 15.0143L3.53166 15.1117L3.53173 15.1093L0.0330169 15.0143ZM0.387682 11.0185L-3.0556 10.391L-3.05588 10.3925L0.387682 11.0185ZM1.65404 7.21969L-1.45739 5.61689L-1.4576 5.61728L1.65404 7.21969ZM4.03125 3.9852L6.49049 6.47562L6.49325 6.47289L4.03125 3.9852ZM7.30418 1.63514L8.87584 4.76243L8.8787 4.76098L7.30418 1.63514ZM11.1459 0.383253L11.757 3.82948L11.7581 3.82929L11.1459 0.383253ZM15.1878 0.0315868L15.1451 -3.46815L15.12 -3.46785L15.0949 -3.46718L15.1878 0.0315868ZM42.3706 0L42.3718 3.5L42.3706 -3.5V0ZM33.4196 0.00315868L33.4183 -3.49684L33.4207 3.50316L33.4196 0.00315868ZM42.9734 0L42.9838 -3.5L42.9722 -3.5L42.9734 0ZM47.0355 0.0315868L46.9404 3.5303L46.9426 3.53035L47.0355 0.0315868ZM51.0774 0.383253L50.4652 3.82929L50.4663 3.82948L51.0774 0.383253ZM54.9191 1.63514L53.3446 4.76099L53.3463 4.76187L54.9191 1.63514ZM58.192 3.9852L55.73 6.47289L55.7328 6.47562L58.192 3.9852ZM60.5682 7.21969L57.4556 8.82031L57.4577 8.82426L60.5682 7.21969ZM61.8345 11.0185L58.3908 11.6434L58.391 11.6445L61.8345 11.0185ZM62.1903 15.0143L58.6916 15.1093L58.6916 15.1117L62.1903 15.0143ZM62.218 16.8505L58.718 16.8688L58.718 16.8711L62.218 16.8505ZM58.7222 40.97C58.7222 41.6982 58.7222 42.4144 58.718 43.13L65.7179 43.171C65.7222 42.4315 65.7222 41.6948 65.7222 40.97H58.7222ZM58.718 43.1323C58.7149 43.7287 58.7077 44.3121 58.6916 44.8883L65.6889 45.0832C65.7069 44.4359 65.7146 43.7958 65.7179 43.1688L58.718 43.1323ZM58.6916 44.8906C58.657 46.1631 58.5829 47.2995 58.3911 48.3539L65.278 49.6069C65.5655 48.0269 65.6512 46.4722 65.689 45.0809L58.6916 44.8906ZM58.3908 48.3555C58.2016 49.3983 57.9059 50.3067 57.4577 51.1757L63.6787 54.3849C64.4851 52.8217 64.9819 51.239 65.2783 49.6053L58.3908 48.3555ZM57.4562 51.1786C57.0114 52.0427 56.4287 52.8365 55.7314 53.5257L60.6527 58.5038C61.8725 57.2979 62.8959 55.9059 63.6802 54.382L57.4562 51.1786ZM55.7314 53.5257C55.0338 54.2154 54.2269 54.7952 53.3463 55.2381L56.4919 61.4916C58.0269 60.7195 59.4331 59.7094 60.6527 58.5038L55.7314 53.5257ZM53.3446 55.239C52.4567 55.6863 51.5288 55.9821 50.4663 56.1705L51.6886 63.063C53.3335 62.7713 54.9234 62.2817 56.4936 61.4907L53.3446 55.239ZM50.4652 56.1707C49.3886 56.362 48.2327 56.4354 46.9426 56.4696L47.1284 63.4672C48.5351 63.4298 50.0994 63.3453 51.6897 63.0628L50.4652 56.1707ZM46.9929 56.4687C44.4123 56.5001 43.6919 56.5 42.9734 56.5V63.5C43.7247 63.5 44.474 63.4999 47.0782 63.4682L46.9929 56.4687ZM42.9734 56.5H27.6916V63.5H42.9734V56.5ZM27.6916 56.5H19.2499V63.5H27.6916V56.5ZM19.2603 56.5C16.422 56.4916 15.8503 56.4852 15.283 56.4697L15.0925 63.4671C15.7628 63.4854 16.4288 63.4916 19.2395 63.5L19.2603 56.5ZM15.2806 56.4696C13.9906 56.4354 12.8347 56.362 11.7581 56.1707L10.5336 63.0628C12.1239 63.3453 13.6882 63.4298 15.0949 63.4672L15.2806 56.4696ZM11.757 56.1705C10.6945 55.9821 9.7666 55.6863 8.8787 55.239L5.72966 61.4907C7.29992 62.2817 8.88984 62.7713 10.5347 63.063L11.757 56.1705ZM8.87584 55.2376C7.99587 54.7953 7.19014 54.216 6.49187 53.5257L1.57064 58.5038C2.78948 59.7088 4.19481 60.7193 5.73253 61.4921L8.87584 55.2376ZM6.49187 53.5257C5.79467 52.8365 5.21128 52.0422 4.76489 51.1764L-1.45682 54.3842C-0.671997 55.9064 0.350728 57.2979 1.57063 58.5038L6.49187 53.5257ZM4.76567 51.1779C4.3175 50.3076 4.02137 49.3976 3.83096 48.3529L-3.0556 49.608C-2.75821 51.2397 -2.26194 52.8208 -1.4576 54.3827L4.76567 51.1779ZM3.83116 48.3539C3.63956 47.3008 3.56638 46.1655 3.53172 44.8906L-3.46569 45.0809C-3.42793 46.4698 -3.34348 48.0256 -3.05579 49.6069L3.83116 48.3539ZM3.53166 44.8883C3.51561 44.3121 3.50839 43.7287 3.50528 43.1323L-3.49463 43.1688C-3.49135 43.7958 -3.48366 44.4359 -3.46563 45.0832L3.53166 44.8883ZM3.50523 43.1249C3.50002 42.4123 3.5 41.6986 3.5 40.97H-3.5C-3.5 41.6944 -3.50002 42.4337 -3.49458 43.1762L3.50523 43.1249ZM3.5 40.97V33.7359H-3.5V40.97H3.5ZM3.5 33.7359V26.2641H-3.5V33.7359H3.5ZM3.5 26.2641V19.03H-3.5V26.2641H3.5ZM3.5 19.03C3.5 18.3013 3.50002 17.5867 3.50523 16.8762L-3.49458 16.8248C-3.50002 17.5653 -3.5 18.3057 -3.5 19.03H3.5ZM3.50528 16.8688C3.50839 16.2713 3.51561 15.6879 3.53166 15.1117L-3.46563 14.9168C-3.48366 15.5641 -3.49135 16.2042 -3.49463 16.8323L3.50528 16.8688ZM3.53173 15.1093C3.56638 13.8337 3.63954 12.6991 3.83124 11.6445L-3.05588 10.3925C-3.34345 11.9744 -3.42792 13.5289 -3.46569 14.9192L3.53173 15.1093ZM3.83096 11.6461C4.02126 10.602 4.31725 9.69287 4.76567 8.8221L-1.4576 5.61728C-2.26169 7.1787 -2.75809 8.75863 -3.0556 10.391L3.83096 11.6461ZM4.76547 8.8225C5.2117 7.95627 5.79452 7.16287 6.49049 6.47562L1.57202 1.49479C0.350873 2.70064 -0.672411 4.09305 -1.45739 5.61689L4.76547 8.8225ZM6.49325 6.47289C7.18973 5.78359 7.99461 5.2053 8.87584 4.76243L5.73253 -1.49214C4.19606 -0.71997 2.78988 0.2895 1.56925 1.49752L6.49325 6.47289ZM8.8787 4.76098C9.7666 4.31374 10.6945 4.01791 11.757 3.82948L10.5347 -3.06298C8.88984 -2.77128 7.29992 -2.28166 5.72966 -1.4907L8.8787 4.76098ZM11.7581 3.82929C12.8347 3.63802 13.9906 3.5646 15.2806 3.53035L15.0949 -3.46718C13.6882 -3.42983 12.1239 -3.34531 10.5336 -3.06279L11.7581 3.82929ZM15.2304 3.53133C17.8109 3.49988 18.5314 3.5 19.2499 3.5V-3.5C18.4986 -3.5 17.7493 -3.49988 15.1451 -3.46815L15.2304 3.53133ZM19.2499 3.5H27.6916V-3.5H19.2499V3.5ZM27.6916 3.5H42.3706V-3.5H27.6916V3.5ZM42.3693 -3.5L33.4183 -3.49684L33.4208 3.50316L42.3718 3.5L42.3693 -3.5ZM33.4207 3.50316L42.9746 3.5L42.9722 -3.5L33.4184 -3.49684L33.4207 3.50316ZM42.963 3.49998C45.8002 3.50845 46.372 3.51484 46.9404 3.53029L47.1306 -3.46712C46.4594 -3.48536 45.7936 -3.4916 42.9838 -3.49998L42.963 3.49998ZM46.9426 3.53035C48.2327 3.5646 49.3886 3.63802 50.4652 3.82929L51.6897 -3.06279C50.0994 -3.34531 48.5351 -3.42983 47.1284 -3.46718L46.9426 3.53035ZM50.4663 3.82948C51.5288 4.01791 52.4567 4.31374 53.3446 4.76098L56.4936 -1.4907C54.9234 -2.28166 53.3334 -2.77128 51.6886 -3.06298L50.4663 3.82948ZM53.3463 4.76187C54.2282 5.20543 55.0342 5.78427 55.73 6.47289L60.654 1.49752C59.4327 0.288824 58.0256 -0.720105 56.4919 -1.49158L53.3463 4.76187ZM55.7328 6.47562C56.4288 7.16292 57.011 7.95574 57.4556 8.82031L63.6807 5.61908C62.8963 4.09358 61.8724 2.70059 60.6513 1.49479L55.7328 6.47562ZM57.4577 8.82426C57.9062 9.69377 58.2017 10.6013 58.3908 11.6434L65.2783 10.3936C64.9817 8.75936 64.4848 7.1778 63.6787 5.61513L57.4577 8.82426ZM58.391 11.6445C58.5829 12.7004 58.657 13.8361 58.6916 15.1093L65.689 14.9192C65.6511 13.5265 65.5654 11.9731 65.2781 10.3925L58.391 11.6445ZM58.6916 15.1117C58.7077 15.6879 58.7149 16.2712 58.718 16.8688L65.7179 16.8323C65.7146 16.2042 65.7069 15.5641 65.6889 14.9168L58.6916 15.1117ZM58.718 16.8711C58.7222 17.5845 58.7222 18.3018 58.7222 19.03H65.7222C65.7222 18.3052 65.7222 17.5674 65.7179 16.83L58.718 16.8711ZM58.7222 19.03V26.2641H65.7222V19.03H58.7222ZM58.7222 26.2641V33.7359H65.7222V26.2641H58.7222ZM58.7222 33.7359V40.97H65.7222V33.7359H58.7222Z" fill="url(#paint0_linear)" mask="url(#path-1-inside-1)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M24.4764 25.8335C24.4764 25.5574 24.7003 25.3335 24.9764 25.3335H34.1887C34.4649 25.3335 34.6887 25.5574 34.6887 25.8335V26.8306C34.6887 27.1068 34.4649 27.3306 34.1887 27.3306H24.9764C24.7003 27.3306 24.4764 27.1068 24.4764 26.8306V25.8335Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M21.0455 20.1891C21.1997 20.0495 21.1686 19.7993 20.9849 19.7017L17.4051 17.8003C17.2696 17.7284 17.2103 17.5659 17.2674 17.4236L19.725 11.3048C19.8436 11.0095 19.4812 10.757 19.2453 10.9706L11.5021 17.9783C11.358 18.1087 11.3741 18.3396 11.5348 18.4489L14.9711 20.7831C15.0871 20.8619 15.133 21.0105 15.0818 21.141L12.8385 26.8496C12.7225 27.1447 13.0839 27.3945 13.319 27.1818L21.0455 20.1891Z" fill="white"/>
              <circle cx="31.5" cy="72.5" r="2.5" fill="black"/>
              <defs>
              <linearGradient id="paint0_linear" x1="32.2222" y1="0" x2="32.2222" y2="63.3333" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F743B6"/>
              <stop offset="1" stopColor="#FCC043"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="electron">
            <div className="image">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#2B2E3B"/>
                <path d="M43.2732 35.7469C36.7392 34.5568 31.5731 35.8024 29.5141 39.3686C27.9776 42.0299 28.4168 45.5582 30.5792 49.3298C30.7632 49.6508 31.1727 49.7619 31.4937 49.5778C31.8147 49.3938 31.9258 48.9843 31.7417 48.6633C29.7938 45.2658 29.4148 42.2207 30.6746 40.0387C32.385 37.0761 36.9931 35.9651 43.0331 37.0652C43.3971 37.1315 43.746 36.8901 43.8123 36.5261C43.8786 36.162 43.6373 35.8132 43.2732 35.7469ZM33.9771 53.9141C36.6191 56.8175 40.0514 59.5407 43.9659 61.8007C53.444 67.2729 63.5342 68.7355 68.507 65.3448C68.8128 65.1363 68.8916 64.7195 68.6832 64.4137C68.4747 64.108 68.0579 64.0292 67.7521 64.2376C63.3015 67.2723 53.7166 65.8829 44.6359 60.6402C40.8384 58.4477 37.5148 55.8108 34.9682 53.0123C34.7191 52.7386 34.2954 52.7186 34.0217 52.9677C33.748 53.2167 33.728 53.6405 33.9771 53.9141Z" fill="#9FEAF9"/>
                <path d="M66.9207 53.0987C71.199 48.0446 72.6928 42.9612 70.638 39.4023C69.1261 36.7836 65.9299 35.401 61.6821 35.3458C61.3121 35.3409 61.0083 35.637 61.0035 36.007C60.9986 36.377 61.2947 36.6809 61.6647 36.6857C65.485 36.7354 68.2387 37.9265 69.4776 40.0723C71.1843 43.0284 69.8521 47.5616 65.8979 52.2329C65.6588 52.5153 65.694 52.9381 65.9764 53.1772C66.2588 53.4163 66.6816 53.3811 66.9207 53.0987ZM55.9255 35.9696C52.0572 36.7984 47.9398 38.4189 43.9855 40.7019C34.2011 46.3509 27.8185 54.6806 28.7049 60.7204C28.7586 61.0865 29.099 61.3398 29.4651 61.286C29.8312 61.2323 30.0844 60.892 30.0307 60.5258C29.2437 55.1631 35.2937 47.2674 44.6555 41.8624C48.4915 39.6477 52.4783 38.0786 56.2062 37.2799C56.5681 37.2024 56.7985 36.8462 56.721 36.4844C56.6435 36.1226 56.2873 35.8921 55.9255 35.9696Z" fill="#9FEAF9"/>
                <path d="M40.0744 64.9078C42.3113 71.1541 45.9708 74.9998 50.0859 74.9998C53.087 74.9998 55.8637 72.954 58.029 69.3522C58.2196 69.0351 58.1171 68.6234 57.7999 68.4328C57.4828 68.2421 57.0711 68.3446 56.8805 68.6618C54.9346 71.8987 52.5444 73.6598 50.0859 73.6598C46.6676 73.6598 43.4036 70.2297 41.3359 64.4561C41.2112 64.1077 40.8276 63.9264 40.4793 64.0512C40.1309 64.1759 39.9496 64.5595 40.0744 64.9078ZM60.5067 63.686C61.6647 59.9855 62.2867 55.7166 62.2867 51.2682C62.2867 40.1681 58.4017 30.5994 52.8681 28.1423C52.5299 27.9921 52.134 28.1445 51.9838 28.4827C51.8336 28.8209 51.986 29.2168 52.3242 29.367C57.2596 31.5584 60.9467 40.6397 60.9467 51.2682C60.9467 55.5839 60.3444 59.718 59.2279 63.2858C59.1174 63.639 59.3141 64.0148 59.6672 64.1254C60.0204 64.2359 60.3962 64.0392 60.5067 63.686Z" fill="#9FEAF9"/>
                <path d="M73.1256 63.0295C73.1256 61.2585 71.6899 59.8228 69.9189 59.8228C68.1478 59.8228 66.7121 61.2585 66.7121 63.0295C66.7121 64.8006 68.1478 66.2363 69.9189 66.2363C71.6899 66.2363 73.1256 64.8006 73.1256 63.0295ZM71.7856 63.0295C71.7856 64.0605 70.9498 64.8963 69.9189 64.8963C68.8879 64.8963 68.0521 64.0605 68.0521 63.0295C68.0521 61.9986 68.8879 61.1628 69.9189 61.1628C70.9498 61.1628 71.7856 61.9986 71.7856 63.0295Z" fill="#9FEAF9"/>
                <path d="M30.2068 66.2363C31.9778 66.2363 33.4136 64.8006 33.4136 63.0295C33.4136 61.2585 31.9778 59.8228 30.2068 59.8228C28.4357 59.8228 27 61.2585 27 63.0295C27 64.8006 28.4357 66.2363 30.2068 66.2363ZM30.2068 64.8963C29.1758 64.8963 28.34 64.0605 28.34 63.0295C28.34 61.9986 29.1758 61.1628 30.2068 61.1628C31.2378 61.1628 32.0736 61.9986 32.0736 63.0295C32.0736 64.0605 31.2378 64.8963 30.2068 64.8963Z" fill="#9FEAF9"/>
                <path d="M50.0858 31.4136C51.8569 31.4136 53.2926 29.9778 53.2926 28.2068C53.2926 26.4357 51.8569 25 50.0858 25C48.3148 25 46.8791 26.4357 46.8791 28.2068C46.8791 29.9778 48.3148 31.4136 50.0858 31.4136ZM50.0858 30.0736C49.0549 30.0736 48.2191 29.2378 48.2191 28.2068C48.2191 27.1758 49.0549 26.34 50.0858 26.34C51.1168 26.34 51.9526 27.1758 51.9526 28.2068C51.9526 29.2378 51.1168 30.0736 50.0858 30.0736Z" fill="#9FEAF9"/>
                <path d="M50.5756 53.5362C49.3231 53.8068 48.0891 53.0108 47.8179 51.7583C47.5478 50.5057 48.3433 49.2717 49.5959 49.0006C50.8484 48.7299 52.0824 49.5259 52.3536 50.7785C52.6242 52.031 51.8282 53.265 50.5756 53.5362Z" fill="#9FEAF9"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>Featured</b></h3>
              <p>The application was highlighted on <Link href="https://electronjs.org/"><a target="_blank">Electron</a></Link> front page along with other
well-known apps such as: <Link href="https://code.visualstudio.com/"><a target="_blank">Visual Studio Code</a></Link>, <Link href="https://www.figma.com"><a target="_blank">Figma</a></Link>,{` `}
<Link href="https://www.skype.com"><a target="_blank">Skype</a></Link>, <Link href="https://www.slack.com"><a target="_blank">Slack</a></Link>, <Link href="https://discordapp.com/"><a target="_blank">Discord</a></Link>, and many more.</p>
            </div>
            <div className="date">
            <p>Since 2017</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sharelock">
        <div className="wrapper">
          <div className="meta">
            <h4>SHARELOCK</h4>
            <h2><b>Product</b></h2>
            <Link href="https://sharelock.io/"><a target="_blank">Try It Now</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551419158/www/works/auth0/sharelock-io.png`}
            width={1240/2}
            height={876/2}
            margin={0}
          />
          <div className="hackernews">
            <div className="image">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#FF6600"/>
                <path d="M52.9863 71V55.417L66.4072 32.9521H59.8682L50.165 49.748H49.9805L40.2773 32.9521H33.6855L47.0801 55.417V71H52.9863Z" fill="white"/>
              </svg>
            </div>
            <div className="award">
              <h3><b>Featured</b></h3>
              <p>The app was featured on <Link href="https://news.ycombinator.com/"><a target="_blank">Hacker News</a></Link> front page.</p>
            </div>
            <div className="date">
            <p>FEB 2015</p>
            </div>
          </div>
        </div>
      </div>
      <div className="guardian">
        <div className="wrapper">
          <div className="meta">
            <h4>GUARDIAN</h4>
            <h2><b>Product</b></h2>
            <Link href="https://auth0.com/multifactor-authentication"><a target="_blank">Try It Now</a></Link>
          </div>
          <Image
            src={`https://res.cloudinary.com/evilrabbit/image/upload/v1551337683/www/works/auth0/auth0-guardian.png`}
            width={1536/2}
            height={1668/2}
            margin={0}
          />
        </div>
      </div>
    </section>
    <style jsx>{`
      @keyframes fadein {
  			from { opacity: 0; }
  			to   { opacity: 1; }
  		}
      a {
        color: #0076FF;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border .2s ease;
      }
      a :hover {
        border-bottom: 1px solid #0076FF;
      }
      .award  {
        text-align: left;
        max-width: 400px;
        border-right: 1px solid #eaeaea;
        padding-left: 50px;
        padding-right: 50px;
      }
      b {
        font-weight: 600;
      }
      .cssda {
        display: flex;
        justify-content: center;
        margin-top: -50px;
      }
      .date {
        text-align: left;
        padding-left: 50px;
      }
      .electron {
        display: flex;
        justify-content: center;
      }
      .guardian {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 50px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .hackernews {
        display: flex;
        justify-content: center;
      }
      h1 {
        font-size: 6.250em;
        font-weight: 300;
        margin: 0;
      }
      h2 {
        font-size: 3.375em;
        margin: 0 0 10px 0;
      }
      h3 {
        font-size: 1.625em;
        font-weight: 300;
        margin: 0;
      }
      h4 {
        margin: 0;
      }
      .hyper {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .hyper-icon {
        margin-top: -75px;
        margin-bottom: 50px;
      }
      .sharelock {
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      .intro {
        max-width: 980px;
        padding: 0 30px;
      }
      .line {
        border-left: 1px solid transparent;
        height: 100px;
        margin: 0 auto;
        margin-top: 100px;
      }
      .line-through {
        text-decoration:line-through;
      }
      main {
        animation: fadein 2s;
      }
      .meta {
        margin-bottom: 50px;
      }
      .now-desktop {
        background: #FAFBFC;
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        padding-top: 150px;
        text-align: center;
        border-bottom: 1px solid #eaeaea;
      }
      p {
        font-size: 0.875em;
        line-height: 1.500em;
      }
      .project {
        height: auto;
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: auto;
      }
      .wrapper {
        max-width: 980px;
      }
      .zeit {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding-bottom: 150px;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
      }
      @media screen and (max-width: 1200px) {
        .award  {
          border-right: none;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          margin: auto;
        }
        .date {
          text-align: center;
          padding-left: 0;
        }
        .cssda {
          flex-direction: column;
        }
        .electron {
          flex-direction: column;
        }
        .electron .image {
          transform: scale(0.75);
          margin-bottom: 10px;
        }
        .electron .date {
          margin-bottom: 75px;
        }
        .guardian {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .hackernews {
          flex-direction: column;
        }
        .hackernews .date {
          margin-bottom: 75px;
        }
        .hackernews .image {
          transform: scale(0.75);
          margin-bottom: 10px;
        }
        .hyper-icon {
          margin-top: 0;
        }
        .image {
          width: 250px;
          margin: 0 auto;
        }
        .hyper {
          padding-bottom: 0;
          padding-top: 75px;
        }

        .intro {
          margin-top: 100px;
        }
        .now-desktop {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .sharelock {
          padding-bottom: 0;
          padding-top: 75px;
        }
        .line {
          margin-bottom: 100px;
        }
        .wrapper {
          width: 100vw;
        }
        .zeit {
          padding-bottom: 50px;
        }
      }
      @media screen and (max-width: 992px) {
        .line {
          display: none;
        }
        .intro {
          border-bottom: 1px solid #EAEAEA;
          margin-bottom: 150px;
          padding-bottom: 150px;
        }
        section  {
          height: auto;
        }
      }
      @media screen and (max-width: 576px) {
        h1 {
          font-size: 22vw;
        }
        .intro {
          margin-bottom: 100px;
          margin-top: 50px;
          margin-bottom: 100px;
          padding-bottom: 100px;
        }
      }
    `}</style>
    <style global jsx>{`
      ::selection {
        background: #000;
        color: #FFF;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        margin: 0;
      }
    `}</style>
  </main>
);
