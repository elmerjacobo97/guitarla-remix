import {Guitarra} from "~/components";

export const ListadoGuitarras = ({guitarras}) => {
    return (
        <>
            <h2 className="heading">Nuestra Colección</h2>
            {
                guitarras?.data.length && (
                    <div className="guitarras-grid">
                        {
                            guitarras?.data.map((guitarra) => (
                                <Guitarra
                                    key={guitarra?.attributes.url}
                                    guitarra={guitarra?.attributes}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};
