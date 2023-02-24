import React from "react";

import "./index.css";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const Pagination = props => {

    const { setPageNumber, pageNumber, dotPiece } = props;

    const dotPieceFunction = () => {
        const dotPieceArray = [];
        for (let i = 1; i <= dotPiece; i++) {
            dotPieceArray.push(i);
        }
        return dotPieceArray;
    };

    const pages = dotPieceFunction();

    const nextPage = () => {
        setPageNumber(pageNumber !== pages.length ? pageNumber + 1 : pageNumber);
    };

    const openPage = (item) => {
        setPageNumber(item);
    };

    return (
            <div className="pagination">
                {
                    pages.map((item, index) => {
                        return (
                            <div onClick={() => openPage(item)} key={index}
                                className={`pagination-button ${pageNumber === item ? "active" : ""}`}>
                                {item}
                            </div>
                        )
                    })
                }
                <img onClick={() => nextPage(pageNumber + 1)} className="arrow-right" src={ArrowRight} alt="" />
            </div>
    );
};

export { Pagination };