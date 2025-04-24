import { Header } from "components/_ui/Nav";
import { Footer } from "components/_ui/Footer";
import { WatchPoster } from "components/watch/WatchPoster";
import "../../app/globals.css";

export default function WatchPage({ data, isLoading, error }: any) {
  if (isLoading) {
    return (
      <>
        <Header />
        <h1>Carregando episódio...</h1>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <h1>Erro ao carregar episódio!</h1>
        <Footer />
      </>
    );
  }
  if (data) {
    const ep: any = data[0];
    const anime: any = data[1];
    return (
      <>
        <Header />
        <WatchPoster ep={ep} data={anime} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <h1>Atualmente não temos esse episódio!</h1>
      <Footer />
    </>
  );
}
