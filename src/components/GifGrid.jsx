import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// NUNCA SE DEBE DE LLAMAR A UNA FUNCION DENTRO DE UN FUNCIONAL COMPONENT!!!
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }

            />
          ))
        }

      </div>

    </>
  );
};
