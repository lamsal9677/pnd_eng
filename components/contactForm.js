import { useEffect } from 'react';

const CForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ff-script";    
    script.src = "https://formfacade.com/include/116623072306956651104/form/1FAIpQLScsShGDMy-zIArPqYppXgDHB2IcZ5m--W993FvoQbj72Jz4fA/classic.js?div=ff-compose";
    
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
