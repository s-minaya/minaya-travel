function Recommended() {
  return (
    <div className="p-6" id="recommended">
      <p className="text-3xl font-semibold text-primary font-nunito">Recomendados</p>
      <div className="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overscroll-x-contain">
        <div className="Card">
          <div className="h-3/5 w-full rounded-t-lg bg-(image:--bg-image-yokai-matsuri) bg-cover"></div>
          <div className="rounded-bottom-lg h-2/5 w-full bg-secondary py-2 ">
            <p className="px-4 font-nunito text-xl font-bold text-tertiary whitespace-nowrap overflow-hidden">
              Yokai Matsuri
            </p>
            <p className="px-4 font-potta-one text-primary">妖怪祭り</p>
            <p className="text-md px-4 font-nunito text-tertiary leading-tight">
              Festival de monstruos en Shikoku
            </p>
          </div>
        </div>
        <div className="Card">
          <div className="h-3/5 w-full rounded-t-lg bg-(image:--bg-image-nakano-broadway) bg-cover"></div>
          <div className="rounded-bottom-lg h-2/5 w-full bg-tertiary py-2">
            <p className="px-4 font-nunito text-xl font-bold text-secondary whitespace-nowrap overflow-hidden">
              Nakano Broadway
            </p>
            <p className="px-4 font-potta-one text-primary">中野ブロードウェイ</p>
            <p className="text-md px-4 font-nunito text-secondary leading-tight">
              Un destino otaku al oeste de Tokio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
