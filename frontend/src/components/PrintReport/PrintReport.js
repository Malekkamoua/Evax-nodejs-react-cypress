import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReportVaccin from "../ReportVaccin/ReportVaccin";

export default function PrintReport() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <button
        type="button"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
        onClick={handlePrint}
      >
        {" "}
        Imprimer mon pass sanitaire{" "}
      </button>
      <div style={{ display: "none" }}>
        <ReportVaccin ref={componentRef} />
      </div>
    </>
  );
}
