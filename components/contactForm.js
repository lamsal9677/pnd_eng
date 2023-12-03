import { useEffect } from 'react';

const CForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/114781673189337243933/form/1FAIpQLScmhXpVApsO-KUyjEuQahrnyjs5DLPykF3pmqkhveSamBcfGg/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ff-compose"></div>;
};

export default CForm;
