import React, {useState} from "react";
import TypographicSummerProgramStaticInteractive
    from "./staticInteractive/TypographicSummerProgramStaticInteractive/TypographicSummerProgramStaticInteractive";
import TypographicSummerProgramBack
    from "./staticInteractive/TypographicSummerProgramBack/TypographicSummerProgramBack";

function PageTurnOver() {
   const [page, setPage] = useState(true);

   const changePage = () =>{ setPage(prevPage => !prevPage)};
   return (
       <div onClick={changePage}>
           <div> {page ? <TypographicSummerProgramStaticInteractive/>: <TypographicSummerProgramBack/>}</div>
       </div>

   );
}

export default PageTurnOver;
