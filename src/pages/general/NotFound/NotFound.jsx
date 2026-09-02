//! ---------------------------------------- Import
import { Error401, Error403, Error404, Error500 } from "@/pages";
//! ---------------------------------------- Component (NotFound)
function NotFound({ type, ...rest }) {
  switch (type) {
    //! -------------------- 401
    case "401":
      return <Error401 {...rest} />;

    //! -------------------- 403
    case "403":
      return <Error403 {...rest} />;

    //! -------------------- 404
    case "404":
      return <Error404 {...rest} />;

    //! -------------------- 500
    case "500":
      return <Error500 {...rest} />;

    //! -------------------- Default
    default:
      return <Error404 {...rest} />;
  }
}
//! ---------------------------------------- Export
export default NotFound;
