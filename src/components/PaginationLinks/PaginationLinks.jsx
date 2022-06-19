import React from "react";

const PaginationLinks = ({repoQuantityPerPage, totalRepos, pageLinkSet}) => {


    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalRepos / repoQuantityPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {
                    pageNumbers.map(number => {
                            return (
                                <li key={number}>
                                    <a href="#" onClick={() => pageLinkSet(number)}>
                                        {number}
                                    </a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}
export default PaginationLinks;