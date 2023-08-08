import { PHB_Main_Keys } from "./PHB_Main_Keys";

const PracticoHomeBanking_Main = ({ init }) => {
  return (
    <main className="main-homebanking">
      <h1>Home Banking</h1>
      <button onClick={init}>Iniciar</button>
      {/* <PHB_Main_Keys /> */}
    </main>
  );
};

export default PracticoHomeBanking_Main;
