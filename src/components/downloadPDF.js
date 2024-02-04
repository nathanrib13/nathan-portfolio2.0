import React from "react";
import resume from '../assets/cv/cv-nathan.pdf'

export const DownloadPDF = () => {
    return(
        <div>
            <h2>Baixe Meu curriculo</h2>
            <a href={resume} download>Doaaaaawnload CV</a>       
        </div>
    )
}