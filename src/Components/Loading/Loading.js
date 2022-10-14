import { Bars } from "react-loader-spinner";


const Loading = () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <Bars
        height="100"
        width="100"
        color="#1976d2"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loading;