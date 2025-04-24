import { IAnimeSearchAPI } from "interfaces";
import { Header } from "components/_ui/Nav";
import { InfoAnime } from "components/info/InfoMain";
import { Footer } from "components/_ui/Footer";
import "../../app/globals.css";

type ApiProps = {
  data: IAnimeSearchAPI;
};

export default function AnimePage({ data }: ApiProps) {
  return (
    <>
      <Header />
      {data ? (
        <InfoAnime data={data} />
      ) : (
        <h1>Por enquanto não temos informações desse Anime!</h1>
      )}

      <Footer />
    </>
  );
}
