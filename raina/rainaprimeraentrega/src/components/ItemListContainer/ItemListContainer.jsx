export const ItemListContainer = ({ productos }) => {
    return (
      <>
        <div className="container mt-3"> {productos} </div>
        <div className="container d-flex justify-content-center">
          <img src="/img/jesus-bailando.gif" alt="" />
        </div>
      </>
    );
  };