function Recommended() {
  return (
    <div className="p-20" id="recommended">
      <div className="h-64 w-48 rounded-lg shadow-md">
        <div className="h-3/5 w-full rounded-t-lg bg-(image:--bg-image-yokai-matsuri) bg-cover"></div>
        <div className="w-full h-2/5 bg-secondary rounded-bottom-lg"> 
        <p className="text-tertiary font-nunito font-bold text-xl px-4">Yokai Matsuri</p>
        <p className="text-primary font-potta-one text-xl px-4">妖怪祭り</p>
        <p className="text-tertiary text-md font-nunito px-4">Festival de monstruos en Shikoku</p>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
