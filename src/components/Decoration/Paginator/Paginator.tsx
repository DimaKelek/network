import React from "react";
import S from "./Paginator.module.css";

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    checkedPage: number
    maxRenderPages: number
    minRenderPages: number
    pageButtonClick: (p: number) => void
    previousButtonClick: () => void
    nextButtonClick: (pageQuantity: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = props => {
    const {
        totalCount, pageSize, checkedPage, maxRenderPages, minRenderPages,
        pageButtonClick, previousButtonClick, nextButtonClick, ...restProps
    } = props

    const pageQuantity = Math.ceil(totalCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pageQuantity; i++) {
        pages.push(i);
    }
    const pageButtons = pages.map((p, i) => {
        const pageCheckedStyle = `${S.pageButton} ${checkedPage === p && S.pageCheckedStyle}`
        if (p <= maxRenderPages && p > minRenderPages) {
            return (
                <div key={i} className={pageCheckedStyle} onClick={() => pageButtonClick(p)}>
                    <div className={S.number}>{p}</div>
                </div>
            );
        } else {
            return null
        }

    })
    return (
        <div className={S.pageButtons_container}>
            <div className={`${S.pageButton} ${props.checkedPage === 1 ? S.invisibleButton : null}`}
                 onClick={previousButtonClick}
            >
                <div className={S.number}>Back</div>
            </div>
            {pageButtons}
            <div
                className={`${S.pageButton} ${props.checkedPage >= props.totalCount - 5 ? S.invisibleButton : null}`}
                onClick={() => nextButtonClick(pageQuantity)}
            >
                <div className={S.number}>Next</div>
            </div>
        </div>
    )
}