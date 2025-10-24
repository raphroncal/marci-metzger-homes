type TSocial = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
};

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFFFFF"
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFFFFF"
      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFFFFF"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
    />
  </svg>
);

const YelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="m4.98 11.264l4.701 2.278a1.075 1.075 0 0 1 .6 1.074a1.07 1.07 0 0 1-.81.927L4.393 16.8a1.09 1.09 0 0 1-1.187-.492a1.1 1.1 0 0 1-.146-.429a9.2 9.2 0 0 1 .424-3.996a1.07 1.07 0 0 1 .606-.645a1.1 1.1 0 0 1 .888.026m1.884 9.615l3.5-3.861a1.08 1.08 0 0 1 1.205-.277a1.08 1.08 0 0 1 .673 1.03l-.183 5.195a1.07 1.07 0 0 1-.396.793a1.08 1.08 0 0 1-.861.226a9.4 9.4 0 0 1-3.748-1.506a1.07 1.07 0 0 1-.46-.758a1.07 1.07 0 0 1 .27-.842m8.298-5.139l4.975 1.606a1.08 1.08 0 0 1 .657.596a1.06 1.06 0 0 1-.017.884a9.3 9.3 0 0 1-2.487 3.166a1.082 1.082 0 0 1-1.602-.258l-2.773-4.408a1.065 1.065 0 0 1 .065-1.226a1.08 1.08 0 0 1 1.182-.36m5.059-3.152l-5.029 1.433a1.085 1.085 0 0 1-1.169-.4A1.065 1.065 0 0 1 14 12.393l2.926-4.308a1.08 1.08 0 0 1 .755-.464a1.1 1.1 0 0 1 .85.257a9.2 9.2 0 0 1 2.379 3.25a1.07 1.07 0 0 1-.691 1.46M8.469.468a15 15 0 0 0-2.585.946a1.08 1.08 0 0 0-.564.65a1.06 1.06 0 0 0 .097.851l4.915 8.456a1.076 1.076 0 0 0 1.212.499a1.066 1.066 0 0 0 .799-1.034V1.072A1.065 1.065 0 0 0 11.622.06a1.1 1.1 0 0 0-.437-.057c-.918.072-1.826.228-2.715.465"
      clipRule="evenodd"
    />
  </svg>
);

export const Social = ({ icon: Icon, url, ...props }: TSocial) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...props}>
      <Icon />
    </a>
  );
};

export const Socials = () => {
  const socials: TSocial[] = [
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/MarciHomes/",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/marciandlauren_nvrealtors/",
    },
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/marci-metzger-30642496/",
    },
    {
      icon: YelpIcon,
      url: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
    },
  ];

  return (
    <div className="flex gap-6">
      {socials.map(({ icon: Icon, url }, index) => (
        <Social icon={Icon} url={url} key={index} />
      ))}
    </div>
  );
};
