import { useLocation } from "react-router-dom";

const ImageViewer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imgUrl = searchParams.get("src");

  return (
    <div className="w-screen min-h-screen bg-black flex justify-center overflow-auto p-4">
      <img
       
        alt="Full view"
        className="max-w-full h-auto object-contain"
      />
    </div>
  );
};

export default ImageViewer;
