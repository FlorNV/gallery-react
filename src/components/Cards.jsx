import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <>
      <FormImg handleSubmit={handleSubmit} />

      <div className="text-center">{loading && <Loading />}</div>

      <div className="row row-cols-2 row-cols-md-3 g-4 mt-5">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
