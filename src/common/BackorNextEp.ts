import { NextRouter } from "next/router";

export default function BackorNextEp(
  type: string,
  data: any,
  id: string | string[] | undefined,
  router: NextRouter
) {
  const boolean = data.eps.map((ep: any) => ep.id === id);
  let indexArray = boolean.indexOf(true);
  let ep;

  switch (type) {
    case "next":
      indexArray += 1;
      ep = data.eps[indexArray];
      if (ep === undefined) {
        window.alert("Último Episódio Alcançado!");
      } else {
        router.push(`/watch/${ep.id}`);
        //window.location.pathname = `/watch/${ep.id}`;
      }
      break;
    case "back":
      indexArray -= 1;
      ep = data.eps[indexArray];
      if (indexArray === -1) {
        router.push(`info/${data.id}`);
        // window.location.pathname = `/info/${data.id}`;
      } else {
        router.push(`watch/${ep.id}`);
        // window.location.pathname = `/watch/${ep.id}`;
      }

      break;
    default:
      break;
  }
}
