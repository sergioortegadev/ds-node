import PracticoHomeBanking_Header from "./PracticoHomeBanking/PracticoHomeBanking_Header";
import PracticoHomeBanking_Main from "./PracticoHomeBanking/PracticoHomeBanking_Main";
import PracticoHomeBanking_Footer from "./PracticoHomeBanking/PracticoHomeBanking_Footer";
import { init } from "../12-Practico/core";

const PracticoHomeBanking = () => {
  //  init();

  return (
    <>
      <div className="homebanking">
        <PracticoHomeBanking_Header />
        <PracticoHomeBanking_Main init={init} />
        <PracticoHomeBanking_Footer />
      </div>
    </>
  );
};

export default PracticoHomeBanking;
